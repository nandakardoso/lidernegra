import { PageHero } from "../components/PageHero";
import { Jornada } from "../sections/Jornada";
import { Pilares } from "../sections/Pilares";
import { TextLink } from "../components/TextLink";

export function MentoriaPage() {
  return (
    <>
      <PageHero kicker="Mentoria" titulo="Uma jornada estruturada em cinco etapas">
        Da identidade de liderança à ação — o caminho percorrido por cada mentorada do LÍDERNEGRA.
      </PageHero>

      <Jornada />
      <Pilares />

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center md:px-10">
        <TextLink to="/inscreva-se">Quero fazer parte da próxima edição</TextLink>
      </section>
    </>
  );
}
