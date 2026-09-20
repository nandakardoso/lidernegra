import { PageHero } from "../components/PageHero";
import { Faq } from "../sections/Faq";

export function FaqPage() {
  return (
    <>
      <PageHero titulo="Perguntas frequentes">
        Respostas curtas para quem quer entender o LÍDERNEGRA antes de participar ou apoiar.
      </PageHero>
      <Faq />
    </>
  );
}
