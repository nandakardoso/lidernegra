import { palavrasSextaEdicao } from "../data/impacto";

export function PalavrasEdicao() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">6ª edição · 2026</p>
      <h2 className="mt-4 font-display text-3xl italic text-wine-900 md:text-4xl">
        Como as participantes definiram a experiência
      </h2>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
        No primeiro encontro da sexta edição, as próprias participantes escolheram palavras para falar do que
        estavam vivendo.
      </p>

      <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4" aria-label="Palavras escolhidas pelas participantes">
        {palavrasSextaEdicao.map((palavra) => (
          <li key={palavra} className="font-display text-3xl italic text-wine-900 md:text-4xl">
            {palavra}
          </li>
        ))}
      </ul>

      <p className="mt-12 border-l-2 border-gold-500 pl-6 font-display text-xl italic text-wine-900 md:text-2xl">
        Ninguém precisa construir sua trajetória sozinha.
      </p>
    </section>
  );
}
