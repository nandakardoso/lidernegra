import { Hero } from "../sections/Hero";
import { Origem } from "../sections/Origem";
import { Jornada } from "../sections/Jornada";
import { Impacto } from "../sections/Impacto";
import { Apoiadores } from "../sections/Apoiadores";
import { Convite } from "../sections/Convite";

export function Home() {
  return (
    <>
      <Hero />
      <Origem />
      <Jornada resumo />
      <Impacto comLink resumo />
      <Apoiadores />
      <Convite />
    </>
  );
}
