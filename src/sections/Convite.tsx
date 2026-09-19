import { TextLink } from "../components/TextLink";
import { contato } from "../data/contato";

export function Convite() {
  return (
    <section className="bg-wine-950 py-24 text-cream-50">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Como participar</p>
        <h2 className="mt-4 font-display text-3xl italic md:text-4xl">Acompanhe as próximas inscrições.</h2>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-cream-100/85">
          O programa abre inscrições a cada edição. Siga o LÍDERNEGRA nas redes ou fale direto com a equipe
          pelo WhatsApp.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <TextLink to="/inscreva-se" tone="onDark">
            Quero participar
          </TextLink>
          <TextLink href={contato.whatsapp} target="_blank" rel="noopener noreferrer" tone="onDark">
            Falar pelo WhatsApp
          </TextLink>
          <TextLink to="/parcerias" tone="onDark">
            Apoiar o programa
          </TextLink>
        </div>
      </div>
    </section>
  );
}
