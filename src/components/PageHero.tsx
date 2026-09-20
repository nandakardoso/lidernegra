import type { ReactNode } from "react";
import { GoldArcMotif } from "./GoldArcMotif";
import { Kicker } from "./Kicker";

interface PageHeroProps {
  kicker: string;
  titulo: string;
  children?: ReactNode;
}

export function PageHero({ kicker, titulo, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-wine-950 text-cream-50">
      <GoldArcMotif className="pointer-events-none absolute -top-16 right-0 h-80 w-80 md:h-96 md:w-96" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <Kicker tom="sobreEscuro">{kicker}</Kicker>
        <h1 className="mt-5 max-w-2xl font-display text-4xl italic leading-tight md:text-5xl">{titulo}</h1>
        {children && <div className="mt-6 max-w-xl font-sans text-lg text-cream-100/80">{children}</div>}
      </div>
      <div className="h-px w-full bg-gold-500/40" />
    </section>
  );
}
