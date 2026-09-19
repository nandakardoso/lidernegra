import { Hero } from "../sections/Hero";
import { Origem } from "../sections/Origem";
import { OQueE } from "../sections/OQueE";
import { Jornada } from "../sections/Jornada";
import { Impacto } from "../sections/Impacto";
import { Comunidade } from "../sections/Comunidade";
import { Convite } from "../sections/Convite";

export function Home() {
  return (
    <>
      <Hero />
      <Origem />
      <OQueE />
      <Jornada resumo />
      <Impacto comLink />
      <Comunidade comLink />
      <Convite />
    </>
  );
}
