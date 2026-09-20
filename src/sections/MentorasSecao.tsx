import { useState } from "react";
import { mentoras, type Mentora } from "../data/mentoras";
import { MentoraCard } from "../components/MentoraCard";
import { MentoraModal } from "../components/MentoraModal";
import { Titulo } from "../components/Titulo";

export function MentorasSecao() {
  const [selected, setSelected] = useState<Mentora | null>(null);

  return (
    <section id="mentoras" className="scroll-mt-20 bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Titulo>
          Mulheres que compartilham experiência
        </Titulo>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
          Profissionais experientes que dedicam, de forma voluntária, tempo e conhecimento ao desenvolvimento de
          outras mulheres.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {mentoras.map((mentora) => (
            <MentoraCard key={mentora.nome} mentora={mentora} onOpen={() => setSelected(mentora)} />
          ))}
        </div>
      </div>

      <MentoraModal mentora={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
