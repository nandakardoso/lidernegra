import { PageHero } from "../components/PageHero";
import { Impacto } from "../sections/Impacto";
import { Depoimentos } from "../sections/Depoimentos";

export function ImpactoPage() {
  return (
    <>
      <PageHero kicker="Impacto" titulo="O que a rede já construiu">
        Os números e histórias que traduzem o alcance do LÍDERNEGRA a cada edição.
      </PageHero>
      <Impacto />
      <Depoimentos />
    </>
  );
}
