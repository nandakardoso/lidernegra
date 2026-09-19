import { GoldArcMotif } from "../components/GoldArcMotif";
import { Botao } from "../components/Botao";
import { TextLink } from "../components/TextLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-wine-950 text-cream-50">
      <GoldArcMotif className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[420px] md:h-[560px] md:w-[560px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-10 md:py-24">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 md:text-sm">
          Programa de Mentoria LÍDERNEGRA
        </p>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl italic leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Uma rede de mentoria para mulheres negras ocuparem posições de liderança.
        </h1>

        <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-cream-100/90 md:text-lg">
          Iniciativa sem fins lucrativos criada em 2021 por Vânia Neves e sustentada por profissionais
          voluntárias. Em 2026, mais de 750 mulheres se inscreveram na 6ª edição.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Botao to="/inscreva-se" tom="sobreEscuro">
            Acompanhar a próxima edição
          </Botao>
          <TextLink to="/sobre" tone="onDark">
            Nossa história
          </TextLink>
        </div>
      </div>

      <div className="h-px w-full bg-gold-500/40" />
    </section>
  );
}
