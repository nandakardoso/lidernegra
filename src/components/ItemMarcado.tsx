import type { ReactNode } from "react";

/** Item de lista com marcador dourado circular. Use dentro de <ul> ou <ol>. */
export function ItemMarcado({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <li className={`flex gap-4 ${className}`.trim()}>
      <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
