import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";
import {
  beneficios,
  notaLocalizacao,
  notaProcesso,
  prerequisitos,
  processoSelecao,
  publicoPrograma,
} from "../data/prerequisitos";

export function Inscricao() {
  return (
    <>
      <PageHero kicker="Próxima edição" titulo="As inscrições estão fechadas no momento">
        Veja quem pode participar e como saber quando a próxima edição abre.
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 pt-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Por que participar?</h2>
        <ul className="mt-8 space-y-4">
          {beneficios.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-lg leading-relaxed text-ink-700">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Pré-requisitos</h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">{publicoPrograma}</p>
        <ul className="mt-8 space-y-4">
          {prerequisitos.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-base leading-relaxed text-ink-700">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-sans text-base leading-relaxed text-ink-700">{notaLocalizacao}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como funciona a seleção</h2>
        <ol className="mt-8 space-y-4">
          {processoSelecao.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-base leading-relaxed text-ink-700">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-sans text-sm leading-relaxed text-ink-500">{notaProcesso}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como saber quando abrir</h2>
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
            <h3 className="font-display text-xl text-wine-900">E-mail</h3>
            <p className="mt-1 font-sans text-base text-ink-700">{contato.email}</p>
            <div className="mt-3">
              <TextLink href={`mailto:${contato.email}`}>Escrever para a equipe</TextLink>
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
