import { indicadoresImpacto, palavrasSextaEdicao } from "../data/impacto";
import { Titulo } from "../components/Titulo";
import { TextLink } from "../components/TextLink";
import { Kicker } from "../components/Kicker";

type Tom = "escuro" | "claro";

const estilos = {
  escuro: {
    secao: "bg-wine-950 text-cream-50",
    tomMarca: "sobreEscuro",
    filete: "border-gold-500/40",
    numero: "text-gold-400",
    rotulo: "text-cream-100/85",
    nota: "text-cream-100/70",
    palavra: "text-gold-400",
  },
  claro: {
    secao: "bg-cream-100 text-ink-900",
    tomMarca: "sobreClaro",
    filete: "border-wine-900/20",
    numero: "text-wine-900",
    rotulo: "text-ink-700",
    nota: "text-ink-500",
    palavra: "text-gold-600",
  },
} as const;

interface ImpactoProps {
  comLink?: boolean;
  /** Fundo escuro (padrão, usado na Home) ou claro (usado em Nossa história). */
  tom?: Tom;
  /** Mostra as palavras que as participantes da 6ª edição escolheram, abaixo dos números. */
  palavras?: boolean;
}

export function Impacto({ comLink = false, tom = "escuro", palavras = false }: ImpactoProps) {
  const e = estilos[tom];

  return (
    <section id="impacto" className={`scroll-mt-20 py-20 md:py-24 ${e.secao}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Kicker tom={e.tomMarca}>Impacto</Kicker>
        <Titulo tom={e.tomMarca} className="mt-4">
          O que a rede já construiu
        </Titulo>

        <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {indicadoresImpacto.map((item) => (
            <div key={item.label} className={`flex flex-col border-t pt-5 ${e.filete}`}>
              <dt className={`order-2 mt-3 font-sans text-sm leading-snug ${e.rotulo}`}>{item.label}</dt>
              <dd className={`order-1 font-display text-4xl italic ${e.numero}`}>{item.valor}</dd>
            </div>
          ))}
        </dl>

        <p className={`mt-10 max-w-2xl font-sans text-sm ${e.nota}`}>
          Dados informados pelo LÍDERNEGRA. Os percentuais de 86% e 73% se referem às participantes da primeira
          turma.
        </p>

        {palavras && (
          <div className={`mt-16 border-t pt-10 ${e.filete}`}>
            <p className={`max-w-2xl font-sans text-base leading-relaxed md:text-lg ${e.rotulo}`}>
              No primeiro encontro da 6ª edição, em 2026, as próprias participantes escolheram palavras para falar
              do que estavam vivendo.
            </p>
            <ul
              className="mt-5 flex flex-wrap gap-x-8 gap-y-1"
              aria-label="Palavras escolhidas pelas participantes"
            >
              {palavrasSextaEdicao.map((palavra) => (
                <li key={palavra} className={`font-display text-xl italic ${e.palavra}`}>
                  {palavra}
                </li>
              ))}
            </ul>
          </div>
        )}

        {comLink && (
          <div className="mt-8">
            <TextLink to="/sobre#impacto" tone="onDark">
              Ver mais sobre o impacto
            </TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
