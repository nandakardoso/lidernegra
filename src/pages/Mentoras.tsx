import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { mentoras, type Mentora } from "../data/mentoras";
import { MentoraCard } from "../components/MentoraCard";
import { MentoraModal } from "../components/MentoraModal";

export function Mentoras() {
  const [selected, setSelected] = useState<Mentora | null>(null);

  return (
    <>
      <PageHero kicker="Mentoras" titulo="Mulheres que compartilham experiência">
        Profissionais que dedicam tempo e conhecimento ao desenvolvimento de outras mulheres.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <p className="max-w-xl font-sans text-sm text-ink-500">
          Os perfis abaixo são espaços reservados até que os dados reais das mentoras sejam cadastrados.
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {mentoras.map((mentora, i) => (
            <MentoraCard key={i} mentora={mentora} onOpen={() => setSelected(mentora)} />
          ))}
        </div>
      </section>

      <MentoraModal mentora={selected} onClose={() => setSelected(null)} />
    </>
  );
}
