import { PageHero } from "../components/PageHero";
import { Faq } from "../sections/Faq";

export function FaqPage() {
  return (
    <>
      <PageHero kicker="Perguntas frequentes" titulo="Dúvidas sobre o programa">
        Respostas para quem quer entender o LÍDERNEGRA antes de participar ou apoiar.
      </PageHero>
      <Faq />
    </>
  );
}
