import { PageHero } from "../components/PageHero";
import { Impacto } from "../sections/Impacto";
import { PalavrasEdicao } from "../sections/PalavrasEdicao";

export function ImpactoPage() {
  return (
    <>
      <PageHero kicker="Impacto" titulo="O que a rede já construiu">
        Números informados pelo próprio programa e as palavras das mulheres que o vivem.
      </PageHero>
      <Impacto />
      <PalavrasEdicao />
    </>
  );
}
