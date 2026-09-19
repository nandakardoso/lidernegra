import { Hero } from "../sections/Hero";
import { OQueE } from "../sections/OQueE";
import { Jornada } from "../sections/Jornada";
import { Pilares } from "../sections/Pilares";
import { Impacto } from "../sections/Impacto";
import { Comunidade } from "../sections/Comunidade";
import { Depoimentos } from "../sections/Depoimentos";
import { ParaEmpresas } from "../sections/ParaEmpresas";
import { Faq } from "../sections/Faq";

export function Home() {
  return (
    <>
      <Hero />
      <OQueE />
      <Jornada />
      <Pilares />
      <Impacto />
      <Comunidade />
      <Depoimentos />
      <ParaEmpresas />
      <Faq />
    </>
  );
}
