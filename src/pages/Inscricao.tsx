import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";

export function Inscricao() {
  return (
    <>
      <PageHero kicker="Quero participar" titulo="Faça parte da rede LÍDERNEGRA">
        O programa é voltado a mulheres negras que desejam crescer profissionalmente e ocupar posições de
        liderança.
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como acompanhar as inscrições</h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">
          As inscrições abrem a cada edição. Na 6ª edição, em 2026, mais de 750 mulheres se inscreveram. Os
          anúncios de abertura saem nas redes do programa, e a equipe responde dúvidas pelo WhatsApp.
        </p>

        <ul className="mt-10 space-y-6">
          <li className="border-t border-wine-900/15 pt-6">
            <h3 className="font-display text-xl text-wine-900">WhatsApp</h3>
            <p className="mt-1 font-sans text-base text-ink-700">{contato.whatsappTexto}</p>
            <div className="mt-3">
              <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar com a equipe
              </TextLink>
            </div>
          </li>
          <li className="border-t border-wine-900/15 pt-6">
            <h3 className="font-display text-xl text-wine-900">Instagram</h3>
            <p className="mt-1 font-sans text-base text-ink-700">@lidernegraoficial</p>
            <div className="mt-3">
              <TextLink href={contato.instagram} target="_blank" rel="noopener noreferrer">
                Seguir no Instagram
              </TextLink>
            </div>
          </li>
          <li className="border-t border-wine-900/15 pt-6">
            <h3 className="font-display text-xl text-wine-900">LinkedIn</h3>
            <div className="mt-3">
              <TextLink href={contato.linkedin} target="_blank" rel="noopener noreferrer">
                Acompanhar no LinkedIn
              </TextLink>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
