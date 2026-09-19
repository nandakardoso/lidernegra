import { TextLink } from "../components/TextLink";

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-6 md:px-10">
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">404</p>
      <h1 className="mt-4 font-display text-3xl italic text-wine-900 md:text-4xl">Página não encontrada.</h1>
      <div className="mt-8">
        <TextLink to="/">Voltar para o início</TextLink>
      </div>
    </section>
  );
}
