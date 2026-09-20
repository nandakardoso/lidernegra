import { pilaresMentoria } from "../data/pilares";
import { Titulo } from "../components/Titulo";

export function Pilares() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Titulo>Pilares da mentoria</Titulo>

      <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
        {pilaresMentoria.map((pilar, i) => (
          <div key={pilar.titulo} className="border-t border-wine-900/15 pt-6">
            <span className="font-display text-sm text-gold-600">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-display text-2xl text-wine-900">{pilar.titulo}</h3>
            <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-ink-700">{pilar.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
