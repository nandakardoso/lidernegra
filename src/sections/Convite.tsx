import { Botao } from "../components/Botao";
import { TextLink } from "../components/TextLink";
import { Titulo } from "../components/Titulo";
import { contato } from "../data/contato";

export function Convite() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Titulo tamanho="destaque">Faça parte da rede.</Titulo>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
          As inscrições estão fechadas no momento. Veja como participar e siga o LÍDERNEGRA nas redes para saber
          quando a próxima edição abre.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-2">
          <Botao to="/participar">Como participar</Botao>
          <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
            Falar pelo WhatsApp
          </TextLink>
        </div>
      </div>
    </section>
  );
}
