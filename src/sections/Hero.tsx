import { GoldArcMotif } from "../components/GoldArcMotif";
import { Botao } from "../components/Botao";
import { TextLink } from "../components/TextLink";
import { fotoJornada } from "../data/historiaLiderNegra";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-wine-900 text-cream-50">
      <GoldArcMotif className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[420px] md:h-[560px] md:w-[560px]" />

      <div
        className={`relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24 ${
          fotoJornada
            ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16"
            : "flex min-h-[80vh] flex-col justify-center"
        }`}
      >
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-kicker text-gold-400 md:text-sm">
            Programa de Mentoria LÍDERNEGRA
          </p>

          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl italic leading-[1.1] text-cream-50 sm:text-5xl lg:text-6xl">
            Uma rede de mentoria para mulheres negras ocuparem posições de liderança.
          </h1>

          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-cream-100/90 md:text-lg">
            Programa sem fins lucrativos, criado em 2021 por Vânia Neves, para mulheres negras (pretas e pardas). Em
            2026, mais de 750 se inscreveram na 6ª edição.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-2">
            <Botao to="/participar" tom="sobreEscuro">
              Como participar
            </Botao>
            <TextLink to="/historia" tone="onDark">
              Nossa história
            </TextLink>
          </div>

          <p className="mt-6 flex max-w-xl gap-3 font-sans text-sm leading-relaxed text-cream-100/90 md:text-base">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
            <span>
              Inscrições fechadas no momento. Para participar, é preciso se autodeclarar preta ou parda, ter nível
              superior e no mínimo 4 anos de experiência corporativa.
            </span>
          </p>
        </div>

        {fotoJornada && (
          <img
            src={fotoJornada.src}
            alt={fotoJornada.alt}
            width={744}
            height={768}
            className="relative aspect-[4/3] w-full rounded-sm object-cover object-[50%_25%] lg:aspect-[4/5]"
          />
        )}
      </div>

      <div className="h-px w-full bg-gold-500/40" />
    </section>
  );
}
