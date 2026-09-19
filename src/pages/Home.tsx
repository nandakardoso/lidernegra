import { Hero } from "../sections/Hero";
import { Origem } from "../sections/Origem";
import { Jornada } from "../sections/Jornada";
import { Impacto } from "../sections/Impacto";
import { Apoiadores } from "../sections/Apoiadores";
import { Comunidade } from "../sections/Comunidade";
import { Convite } from "../sections/Convite";

export function Home() {
  return (
    <>
      <Hero />
      <Origem />
      <Jornada resumo />
      <Impacto comLink />
      <Apoiadores />
      <Comunidade comLink />
      <Convite />
    </>
  );
}
