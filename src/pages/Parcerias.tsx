import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";

const formas = [
  "Patrocínio",
  "Parceria institucional",
  "Apoio a eventos",
  "Voluntariado",
  "Produção de conteúdo",
  "Cursos pela Comunidade LÍDERNEGRA",
];

export function Parcerias() {
  return (
    <>
      <PageHero kicker="Parcerias" titulo="Sua organização também pode abrir caminho">
        O LÍDERNEGRA é uma iniciativa sem fins lucrativos, construída com o trabalho de voluntários e o apoio
        de organizações.
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como apoiar</h2>
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {formas.map((forma) => (
            <li key={forma} className="border-t border-wine-900/15 pt-4 font-sans text-base font-medium text-ink-700">
              {forma}
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-wine-900/10 pt-10">
          <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Quem já apoia</h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-700">
            Em breve, esta página vai reunir as organizações parceiras e apoiadoras do programa.
          </p>
        </div>

        <div className="mt-12">
          <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
            Conversar sobre uma parceria
          </TextLink>
        </div>
      </section>
    </>
  );
}
