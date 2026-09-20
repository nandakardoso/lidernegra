// Pré-renderização do <head>: depois do build, gera um HTML por rota com título, descrição,
// canonical e Open Graph corretos. Robôs de busca e prévias de compartilhamento (WhatsApp,
// LinkedIn) não executam JavaScript, então precisam disso já no HTML.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const dist = "dist";
const seo = JSON.parse(readFileSync("src/data/seo.json", "utf8"));
const base = readFileSync(join(dist, "index.html"), "utf8");

const esc = (t) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function pagina({ titulo, descricao, url, indexar = true }) {
  let h = base;
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(titulo)}</title>`);
  const meta = (re, novo) => { h = h.replace(re, novo); };
  meta(/(<meta name="description"\s+content=")[^"]*(")/, `$1${esc(descricao)}$2`);
  meta(/(<meta property="og:title"\s+content=")[^"]*(")/, `$1${esc(titulo)}$2`);
  meta(/(<meta property="og:description"\s+content=")[^"]*(")/, `$1${esc(descricao)}$2`);
  meta(/(<meta name="twitter:title"\s+content=")[^"]*(")/, `$1${esc(titulo)}$2`);
  meta(/(<meta name="twitter:description"\s+content=")[^"]*(")/, `$1${esc(descricao)}$2`);
  meta(/(<meta property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`);
  meta(/(<link rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
  meta(/(<meta name="robots"\s+content=")[^"]*(")/, `$1${indexar ? "index, follow" : "noindex, follow"}$2`);
  return h;
}

function gravar(arquivo, conteudo) {
  const destino = join(dist, arquivo);
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, conteudo);
}

let total = 0;
for (const [rota, meta] of Object.entries(seo.rotas)) {
  const url = seo.site + rota;
  const html = pagina({ ...meta, url });
  gravar(rota === "/" ? "index.html" : join(rota.slice(1), "index.html"), html);
  total++;
}
// Página 404 real: o servidor devolve status 404 e o app mostra "Página não encontrada".
gravar("404.html", pagina({ ...seo.naoEncontrada, url: seo.site + "/", indexar: false }));
console.log(`gerar-paginas: ${total} rotas + 404.html`);
