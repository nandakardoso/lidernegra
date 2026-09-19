import { GoldArcMotif } from "../components/GoldArcMotif";
import { TextLink } from "../components/TextLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-wine-950 text-cream-50">
      <GoldArcMotif className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[420px] md:h-[560px] md:w-[560px]" />

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 md:text-sm">
          Programa de Mentoria LÍDERNEGRA · 6ª edição
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl italic leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Onde mulheres negras fortalecem umas às outras para ocupar novos espaços.
        </h1>

        <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-cream-100/80 md:text-lg">
          O LÍDERNEGRA orienta, empodera e transforma: uma rede de desenvolvimento, mentoria e conexão que
          amplia trajetórias profissionais e abre novas possibilidades.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <TextLink to="/inscreva-se" tone="onDark">
            Quero participar
          </TextLink>
          <TextLink to="/sobre" tone="onDark">
            Conheça o programa
          </TextLink>
        </div>
      </div>

      <div className="h-px w-full bg-gold-500/40" />
    </section>
  );
}
