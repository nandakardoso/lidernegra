import { palavrasSextaEdicao } from "../data/impacto";
import { Titulo } from "../components/Titulo";
import { Kicker } from "../components/Kicker";

export function PalavrasEdicao() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <Kicker>6ª edição · 2026</Kicker>
      <Titulo className="mt-4">
        Como as participantes definiram a experiência
      </Titulo>
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
