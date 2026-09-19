import { indicadoresImpacto } from "../data/impacto";

export function Impacto() {
  return (
    <section className="bg-wine-950 py-24 text-cream-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="font-display text-3xl italic md:text-4xl">Impacto</h2>

        <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {indicadoresImpacto.map((item) => (
            <div key={item.label} className="flex flex-col border-t border-gold-500/30 pt-5">
              <dt className="order-2 mt-2 font-sans text-sm text-cream-100/70">{item.label}</dt>
              <dd className="order-1 font-display text-3xl italic text-gold-400 md:text-4xl">{item.valor}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-2xl font-sans text-sm text-cream-100/60">
          Números de participação e alcance serão publicados conforme forem consolidados oficialmente pelo
          programa.
        </p>
      </div>
    </section>
  );
}
