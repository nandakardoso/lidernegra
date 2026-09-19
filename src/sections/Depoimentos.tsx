import { depoimentos } from "../data/mentoras";

export function Depoimentos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <h2 className="font-display text-3xl italic text-wine-900 md:text-4xl">Histórias da rede</h2>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        {depoimentos.map((dep) => (
          <figure key={dep.nome + dep.texto} className="border-t-2 border-gold-500 pt-6">
            <blockquote className="font-display text-2xl italic leading-snug text-wine-900">
              “{dep.texto}”
            </blockquote>
            <figcaption className="mt-4 font-sans text-sm text-ink-500">
              <span className="font-semibold text-ink-700">{dep.nome}</span> — {dep.papel}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
