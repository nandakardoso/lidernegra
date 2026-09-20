import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";
import { Jornada } from "../sections/Jornada";
import { Comunidade } from "../sections/Comunidade";
import { MentorasSecao } from "../sections/MentorasSecao";
import { mentoras } from "../data/mentoras";

export function Programa() {
  return (
    <>
      <PageHero titulo="Como funciona o programa">
        Cinco etapas de capacitação e mentoria, e uma comunidade que continua depois.
      </PageHero>

      <Jornada />
      <Comunidade />
      {mentoras.length > 0 && <MentorasSecao />}

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
        <TextLink to="/participar">Como participar</TextLink>
      </section>
    </>
  );
}
