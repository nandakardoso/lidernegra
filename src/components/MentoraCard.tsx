import type { Mentora } from "../data/mentoras";

interface MentoraCardProps {
  mentora: Mentora;
  onOpen: () => void;
}

export function MentoraCard({ mentora, onOpen }: MentoraCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col items-start border-t border-wine-900/15 pt-6 text-left"
    >
      <span
        aria-hidden="true"
        className="flex h-20 w-20 items-center justify-center rounded-full bg-wine-900/8 font-display text-2xl italic text-wine-800"
      >
        {mentora.nome === "[INSERIR NOME DA MENTORA]" ? "?" : mentora.nome.charAt(0)}
      </span>
      <h3 className="mt-5 font-display text-xl text-wine-900 group-hover:underline group-hover:decoration-gold-500">
        {mentora.nome}
      </h3>
      <p className="mt-1 font-sans text-sm text-ink-500">{mentora.cargo} · {mentora.empresa}</p>
      <p className="mt-3 font-sans text-sm text-ink-700">{mentora.area}</p>
    </button>
  );
}
