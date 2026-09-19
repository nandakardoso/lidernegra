import { Botao } from "../components/Botao";
import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";

export function Convite() {
  return (
    <section className="bg-cream-200 py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="text-balance font-display text-4xl italic text-wine-900 md:text-5xl">Faça parte da rede.</h2>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
          As inscrições estão fechadas no momento. Siga o LÍDERNEGRA nas redes ou fale com a equipe pelo WhatsApp
          para saber quando a próxima edição abre.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Botao to="/inscreva-se">Acompanhar a próxima edição</Botao>
          <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
            Falar pelo WhatsApp
          </TextLink>
        </div>

        <div className="mt-10 border-t border-wine-900/15 pt-4">
          <p className="font-sans text-base text-ink-700">Sua organização quer apoiar o programa?</p>
          <TextLink to="/parcerias">Veja como</TextLink>
        </div>
      </div>
    </section>
  );
}
