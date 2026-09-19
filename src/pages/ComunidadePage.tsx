import { PageHero } from "../components/PageHero";
import { Comunidade } from "../sections/Comunidade";

export function ComunidadePage() {
  return (
    <>
      <PageHero kicker="Comunidade" titulo="Uma mentoria termina. Uma rede permanece.">
        Networking, oportunidades e aprendizado contínuo entre mulheres da rede LÍDERNEGRA.
      </PageHero>
      <Comunidade />
    </>
  );
}
