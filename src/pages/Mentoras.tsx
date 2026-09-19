import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { mentoras, type Mentora } from "../data/mentoras";
import { MentoraCard } from "../components/MentoraCard";
import { MentoraModal } from "../components/MentoraModal";
import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";

export function Mentoras() {
  const [selected, setSelected] = useState<Mentora | null>(null);

  return (
    <>
      <PageHero kicker="Mentoras" titulo="Mulheres que compartilham experiência">
        Profissionais experientes que dedicam, de forma voluntária, tempo e conhecimento ao desenvolvimento de
        outras mulheres.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        {mentoras.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {mentoras.map((mentora) => (
              <MentoraCard key={mentora.nome} mentora={mentora} onOpen={() => setSelected(mentora)} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">
              Os perfis das mentoras estarão aqui em breve.
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">
              O LÍDERNEGRA se sustenta no trabalho voluntário de mentoras, palestrantes e aliados. Estamos
              reunindo os perfis para apresentá-los com o cuidado que merecem.
            </p>
            <div className="mt-8">
              <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar com a equipe
              </TextLink>
            </div>
          </div>
        )}
      </section>

      <MentoraModal mentora={selected} onClose={() => setSelected(null)} />
    </>
  );
}
