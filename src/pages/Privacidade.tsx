import { PageHero } from "../components/PageHero";

export function Privacidade() {
  return (
    <>
      <PageHero titulo="Política de Privacidade" />
      <section className="mx-auto max-w-6xl [&>*]:max-w-3xl px-6 py-16 md:py-24 font-sans text-base leading-relaxed text-ink-700 md:px-10">
        <p>
          Este site não coleta dados por formulário. Os contatos acontecem por canais externos, como WhatsApp,
          Instagram e LinkedIn, que seguem as políticas de cada plataforma. A política de privacidade completa
          do programa está em elaboração.
        </p>
      </section>
    </>
  );
}
