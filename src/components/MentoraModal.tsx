import { useEffect, useRef } from "react";
import type { Mentora } from "../data/mentoras";

interface MentoraModalProps {
  mentora: Mentora | null;
  onClose: () => void;
}

export function MentoraModal({ mentora, onClose }: MentoraModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mentora) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mentora, onClose]);

  if (!mentora) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-wine-950/70 p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mentora-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream-50 p-8 shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="float-right text-2xl leading-none text-wine-800"
        >
          ×
        </button>
        <span
          aria-hidden="true"
          className="flex h-20 w-20 items-center justify-center rounded-full bg-wine-900/8 font-display text-2xl italic text-wine-800"
        >
          {mentora.nome === "[INSERIR NOME DA MENTORA]" ? "?" : mentora.nome.charAt(0)}
        </span>
        <h2 id="mentora-modal-title" className="mt-5 font-display text-2xl text-wine-900">
          {mentora.nome}
        </h2>
        <p className="mt-1 font-sans text-sm text-ink-500">{mentora.cargo} · {mentora.empresa}</p>
        <p className="mt-1 font-sans text-sm font-medium text-gold-600">{mentora.area}</p>
        <p className="mt-6 font-sans text-base leading-relaxed text-ink-700">{mentora.bio}</p>
      </div>
    </div>
  );
}
