import type { ReactNode } from "react";

type Tom = "sobreClaro" | "sobreEscuro";

const tons: Record<Tom, string> = {
  sobreClaro: "text-gold-600",
  sobreEscuro: "text-gold-400",
};

/** Rótulo curto em caixa alta acima de um título. Elemento de identidade do material oficial. */
export function Kicker({ tom = "sobreClaro", className = "", children }: { tom?: Tom; className?: string; children: ReactNode }) {
  return (
    <p className={`font-sans text-xs font-semibold uppercase tracking-kicker ${tons[tom]} ${className}`.trim()}>{children}</p>
  );
}
