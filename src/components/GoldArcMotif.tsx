interface GoldArcMotifProps {
  className?: string;
}

/** Motivo gráfico recorrente da marca: arcos concêntricos finos em dourado. */
export function GoldArcMotif({ className = "" }: GoldArcMotifProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="400" cy="0" r="120" stroke="var(--color-gold-500)" strokeWidth="1" opacity="0.55" />
      <circle cx="400" cy="0" r="200" stroke="var(--color-gold-500)" strokeWidth="1" opacity="0.35" />
      <circle cx="400" cy="0" r="280" stroke="var(--color-gold-500)" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
