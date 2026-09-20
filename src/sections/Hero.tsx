import { GoldArcMotif } from "../components/GoldArcMotif";
import { Botao } from "../components/Botao";
import { TextLink } from "../components/TextLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-wine-900 text-cream-50">
      <GoldArcMotif className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[420px] md:h-[560px] md:w-[560px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20 md:px-10 md:py-24">
        <p className="font-sans text-xs font-semibold uppercase tracking-kicker text-gold-400 md:text-sm">
          Programa de Mentoria LÍDERNEGRA
        </p>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl italic leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Uma rede de mentoria para mulheres negras ocuparem posições de liderança.
        </h1>

        <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-cream-100/90 md:text-lg">
          Programa sem fins lucrativos, criado em 2021 por Vânia Neves, para mulheres negras (pretas e pardas). Em 2026, mais de 750 se inscreveram na 6ª edição.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Botao to="/participar" tom="sobreEscuro">
            Como participar
          </Botao>
          <TextLink to="/historia" tone="onDark">
            Nossa história
          </TextLink>
        </div>
      </div>

      <div className="h-px w-full bg-gold-500/40" />
    </section>
  );
}
