import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";

export function AreaMentorada() {
  return (
    <>
      <PageHero kicker="Área da Mentorada" titulo="Em breve">
        Um espaço exclusivo para as mentoradas do LÍDERNEGRA está sendo preparado.
      </PageHero>
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <p className="font-sans text-lg leading-relaxed text-ink-700">
          Enquanto isso, o contato com a equipe continua pelo WhatsApp e pelas redes do programa.
        </p>
        <div className="mt-8">
          <TextLink to="/inscreva-se">Ver canais de contato</TextLink>
        </div>
      </section>
    </>
  );
}
