import { PageHero } from "../components/PageHero";
import { Jornada } from "../sections/Jornada";
import { Pilares } from "../sections/Pilares";
import { Comunidade } from "../sections/Comunidade";
import { MentorasSecao } from "../sections/MentorasSecao";
import { TextLink } from "../components/TextLink";

export function MentoriaPage() {
  return (
    <>
      <PageHero kicker="O programa" titulo="Jornada, mentoras e comunidade">
        Da identidade de liderança à ação: como funciona o LÍDERNEGRA e quem caminha com cada mentorada.
      </PageHero>

      <Jornada />
      <Pilares />
      <Comunidade />
      <MentorasSecao />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <TextLink to="/inscreva-se">Quero fazer parte da próxima edição</TextLink>
      </section>
    </>
  );
}
