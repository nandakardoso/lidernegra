interface NumberBadgeProps {
  numero: string;
}

/** Numeração circular preenchida — motivo recorrente do material oficial LÍDERNEGRA. */
export function NumberBadge({ numero }: NumberBadgeProps) {
  return (
    <span
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-wine-800 font-display text-xl text-gold-400"
      aria-hidden="true"
    >
      {numero}
    </span>
  );
}
