import { useState } from "react";
import { capitulosHistoria } from "../data/historiaLiderNegra";
import { ItemMarcado } from "../components/ItemMarcado";
import { Titulo } from "../components/Titulo";

/** Linha do tempo de 2021 a 2026. Cada ano abre por clique; a foto da turma só aparece quando houver arquivo. */
export function LinhaDoTempo() {
  const [aberto, setAberto] = useState<string | null>(null);

  return (
    <section className="bg-wine-900 py-16 text-cream-50 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Titulo tom="sobreEscuro">De 2021 a 2026</Titulo>

        <ol className="relative mt-14 space-y-14 border-l border-gold-500/40 pl-8 md:pl-14">
          {capitulosHistoria.map((cap) => {
            const expandido = aberto === cap.ano;
            return (
              <li key={cap.ano} className="relative">
                <span
                  className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-gold-500 ring-4 ring-wine-900 md:-left-[61px]"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  aria-expanded={expandido}
                  aria-controls={`cap-${cap.ano}`}
                  onClick={() => setAberto(expandido ? null : cap.ano)}
                  className="group block w-full text-left"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-2xl italic text-gold-400 md:text-3xl">{cap.ano}</span>
                    <span className="shrink-0 font-sans text-sm font-medium text-gold-400 group-hover:text-gold-500">
                      {expandido ? "Recolher −" : "Ler mais +"}
                    </span>
                  </span>
                  <span className="mt-2 block font-display text-lg text-cream-50 md:text-xl">{cap.titulo}</span>
                  <span className="mt-6 block md:grid md:grid-cols-[13rem_1fr] md:items-end md:gap-10">
                    <span className="flex flex-wrap items-end gap-x-6 gap-y-2">
                      <span className="font-display text-xl italic leading-none text-gold-400 md:text-2xl">
                        {cap.numero}
                      </span>
                      <span className="max-w-xs pb-1 font-sans text-sm text-cream-100/75">{cap.numeroLegenda}</span>
                    </span>
                    <span className="mt-6 block border-l-2 border-gold-500 pl-6 font-display text-lg italic text-cream-50 md:mt-0 md:text-xl">
                      {cap.frase}
                    </span>
                  </span>
                </button>

                <div
                  id={`cap-${cap.ano}`}
                  hidden={!expandido}
                  className="mt-8 space-y-4 font-sans text-base leading-relaxed text-cream-100/90"
                >
                  {cap.paragrafos.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {cap.lista && (
                    <ul className="space-y-3">
                      {cap.lista.map((item) => (
                        <ItemMarcado key={item.termo}>
                          <strong className="font-semibold text-cream-50">{item.termo}</strong>, {item.texto}
                        </ItemMarcado>
                      ))}
                    </ul>
                  )}
                  {cap.foto && (
                    <figure className="pt-4">
                      <img
                        src={cap.foto}
                        alt={cap.fotoLegenda ?? `Turma LÍDERNEGRA ${cap.ano}`}
                        loading="lazy"
                        className="aspect-[16/9] w-full rounded-sm object-cover"
                      />
                      {cap.fotoLegenda && (
                        <figcaption className="mt-2 text-sm text-cream-100/70">{cap.fotoLegenda}</figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
