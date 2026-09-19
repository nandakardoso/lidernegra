import { useState } from "react";
import { mentoras, type Mentora } from "../data/mentoras";
import { MentoraCard } from "../components/MentoraCard";
import { MentoraModal } from "../components/MentoraModal";
import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";

export function MentorasSecao() {
  const [selected, setSelected] = useState<Mentora | null>(null);

  return (
    <section id="mentoras" className="scroll-mt-20 bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Mentoras</p>
        <h2 className="mt-4 font-display text-3xl italic text-wine-900 md:text-4xl">
          Mulheres que compartilham experiência
        </h2>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
          Profissionais experientes que dedicam, de forma voluntária, tempo e conhecimento ao desenvolvimento de
          outras mulheres.
        </p>

        {mentoras.length > 0 ? (
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {mentoras.map((mentora) => (
              <MentoraCard key={mentora.nome} mentora={mentora} onOpen={() => setSelected(mentora)} />
            ))}
          </div>
        ) : (
          <div className="mt-12 max-w-2xl border-t border-wine-900/15 pt-8">
            <p className="font-sans text-base leading-relaxed text-ink-700">
              Os perfis das mentoras estarão aqui em breve. Estamos reunindo as informações para apresentá-las com
              o cuidado que merecem.
            </p>
            <div className="mt-6">
              <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar com a equipe
              </TextLink>
            </div>
          </div>
        )}
      </div>

      <MentoraModal mentora={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
