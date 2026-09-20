import { IconeCanal, type Canal } from "../components/IconeCanal";
import { PageHero } from "../components/PageHero";
import { contato } from "../data/contato";
import {
  beneficios,
  notaLocalizacao,
  notaProcesso,
  prerequisitos,
  processoSelecao,
  publicoPrograma,
} from "../data/prerequisitos";
import { Titulo } from "../components/Titulo";
import { ItemMarcado } from "../components/ItemMarcado";

const canais: { canal: Canal; nome: string; detalhe?: string; acao: string; href: string; externo: boolean }[] = [
  { canal: "whatsapp", nome: "WhatsApp", acao: "Falar com a equipe", href: contato.whatsapp, externo: true },
  { canal: "email", nome: "E-mail", detalhe: contato.email, acao: "Escrever para a equipe", href: `mailto:${contato.email}`, externo: false },
  { canal: "instagram", nome: "Instagram", detalhe: "@lidernegraoficial", acao: "Seguir no Instagram", href: contato.instagram, externo: true },
  { canal: "linkedin", nome: "LinkedIn", acao: "Acompanhar no LinkedIn", href: contato.linkedin, externo: true },
];

export function Participar() {
  return (
    <>
      <PageHero titulo="Como participar">
        As inscrições estão fechadas no momento. Veja quem pode participar e como saber quando a próxima edição abre.
      </PageHero>

      <section className="mx-auto max-w-6xl [&>*]:max-w-3xl px-6 pt-16 md:px-10 md:pt-24">
        <Titulo tamanho="secundario">Por que participar?</Titulo>
        <ul className="mt-8 space-y-4">
          {beneficios.map((item) => (
            <ItemMarcado key={item} className="font-sans text-lg leading-relaxed text-ink-700">{item}</ItemMarcado>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl [&>*]:max-w-3xl px-6 pt-16 md:px-10 md:pt-24">
        <Titulo tamanho="secundario">Pré-requisitos</Titulo>
        <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">{publicoPrograma}</p>
        <ul className="mt-8 space-y-4">
          {prerequisitos.map((item) => (
            <ItemMarcado key={item} className="font-sans text-base leading-relaxed text-ink-700">{item}</ItemMarcado>
          ))}
        </ul>
        <p className="mt-8 font-sans text-base leading-relaxed text-ink-700">{notaLocalizacao}</p>
      </section>

      <section className="mx-auto max-w-6xl [&>*]:max-w-3xl px-6 pt-16 md:px-10 md:pt-24">
        <Titulo tamanho="secundario">Como funciona a seleção</Titulo>
        <ol className="mt-8 space-y-4">
          {processoSelecao.map((item) => (
            <ItemMarcado key={item} className="font-sans text-base leading-relaxed text-ink-700">{item}</ItemMarcado>
          ))}
        </ol>
        <p className="mt-8 font-sans text-sm leading-relaxed text-ink-500">{notaProcesso}</p>
      </section>

      <section className="mx-auto max-w-6xl [&>*]:max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <Titulo tamanho="secundario">Como saber quando abrir</Titulo>
        <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">
          As inscrições abrem a cada edição. Na 6ª edição, em 2026, mais de 750 mulheres se inscreveram. Os
          anúncios de abertura saem nas redes do programa, e a equipe responde dúvidas pelo WhatsApp.
        </p>

        <ul className="mt-10">
          {canais.map((c) => (
            <li key={c.canal} className="border-t border-wine-900/15 last:border-b">
              <a
                href={c.href}
                {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-wine-900 text-gold-400 transition-colors group-hover:bg-wine-800">
                  <IconeCanal canal={c.canal} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl text-wine-900">{c.nome}</span>
                  {c.detalhe && <span className="block break-words font-sans text-base text-ink-700">{c.detalhe}</span>}
                  <span className="mt-1 block font-sans text-sm font-semibold uppercase tracking-rotulo text-wine-800 underline decoration-gold-500 decoration-2 underline-offset-8 group-hover:decoration-4">
                    {c.acao}
                    {c.externo && <span className="sr-only"> (abre em nova aba)</span>}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
