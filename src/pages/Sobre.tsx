import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { jornadaParticipante } from "../data/historia";
import {
  capitulosHistoria,
  fechamentoHistoria,
  jornadaContinua,
  origemContinuacao,
  origemHistoria,
  perguntaOrigem,
} from "../data/historiaLiderNegra";
import vania from "../assets/vania-neves.jpg";
import { NumberBadge } from "../components/NumberBadge";

export function Sobre() {
  const [aberto, setAberto] = useState<string | null>(null);

  return (
    <>
      <PageHero kicker="Sobre o LÍDERNEGRA" titulo="Uma rede que cresce a cada trajetória">
        Orienta, empodera e transforma: o propósito por trás de cada edição do programa.
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              A história do LÍDERNEGRA
            </p>
            <h2 className="mt-4 font-display text-3xl italic text-wine-900 md:text-4xl">
              Um sonho que nasceu de um incômodo e se transformou em movimento
            </h2>
            <div className="mt-10 space-y-5 font-sans text-lg leading-relaxed text-ink-700">
              {origemHistoria.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="border-l-2 border-gold-500 pl-6 font-display text-xl italic text-wine-900">
                {perguntaOrigem}
              </p>
              {origemContinuacao.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <figure className="md:sticky md:top-28">
            <img
              src={vania}
              alt="Vânia Neves, fundadora do LÍDERNEGRA"
              width={600}
              height={670}
              className="aspect-[4/5] w-full rounded-sm object-cover object-top"
            />
            <figcaption className="mt-4 border-l-2 border-gold-500 pl-4">
              <p className="font-display text-xl text-wine-900">Vânia Neves</p>
              <p className="font-sans text-sm text-ink-700">Fundadora do LÍDERNEGRA</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-wine-950 py-24 text-cream-50">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Linha do tempo</p>
          <h2 className="mt-4 font-display text-3xl italic md:text-4xl">De 2021 a 2026</h2>

          <ol className="relative mt-16 space-y-20 border-l border-gold-500/40 pl-8 md:pl-14">
            {capitulosHistoria.map((cap) => (
              <li key={cap.ano} className="relative">
                <span
                  className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-gold-500 ring-4 ring-wine-950 md:-left-[61px]"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  aria-expanded={aberto === cap.ano}
                  aria-controls={`cap-${cap.ano}`}
                  onClick={() => setAberto(aberto === cap.ano ? null : cap.ano)}
                  className="group block w-full text-left"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-5xl italic text-gold-400 md:text-6xl">{cap.ano}</span>
                    <span className="shrink-0 font-sans text-sm font-medium text-gold-400 group-hover:text-gold-500">
                      {aberto === cap.ano ? "Recolher −" : "Ler mais +"}
                    </span>
                  </span>
                  <span className="mt-2 block font-display text-2xl text-cream-50">{cap.titulo}</span>
                  <span className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-2">
                    <span className="font-display text-5xl italic leading-none text-gold-400">{cap.numero}</span>
                    <span className="max-w-xs pb-1 font-sans text-sm text-cream-100/70">{cap.numeroLegenda}</span>
                  </span>
                  <span className="mt-6 block border-l-2 border-gold-500 pl-6 font-display text-xl italic text-cream-50 md:text-2xl">
                    {cap.frase}
                  </span>
                </button>

                <div
                  id={`cap-${cap.ano}`}
                  hidden={aberto !== cap.ano}
                  className="mt-8 space-y-4 font-sans text-base leading-relaxed text-cream-100/85"
                >
                  {cap.paragrafos.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {cap.lista && (
                    <ul className="space-y-3">
                      {cap.lista.map((item) => (
                        <li key={item.termo} className="flex gap-4">
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                          <span>
                            <strong className="font-semibold text-cream-50">{item.termo}</strong>, {item.texto}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <figure className="pt-4">
                    {cap.foto ? (
                      <img
                        src={cap.foto}
                        alt={cap.fotoLegenda ?? `Turma LÍDERNEGRA ${cap.ano}`}
                        loading="lazy"
                        className="aspect-[16/9] w-full rounded-sm object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-sm border border-dashed border-gold-500/40 bg-wine-900/40">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-cream-100/50">
                          Foto da turma {cap.ano}
                        </span>
                      </div>
                    )}
                    {cap.fotoLegenda && (
                      <figcaption className="mt-2 font-sans text-xs text-cream-100/60">{cap.fotoLegenda}</figcaption>
                    )}
                  </figure>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <h3 className="font-display text-2xl italic text-wine-900 md:text-3xl">Uma jornada que continua</h3>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink-700">
          {jornadaContinua.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 space-y-2 font-display text-lg italic text-wine-900">
          {fechamentoHistoria.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-10 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-wine-900">LÍDERNEGRA</p>
        <p className="mt-1 font-display text-xl italic text-gold-600">Orienta. Empodera. Transforma.</p>
      </section>

      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como funciona</h2>
          <p className="mt-4 max-w-xl font-sans text-base text-ink-700">
            A jornada de cada participante, do primeiro interesse à transformação.
          </p>

          <ol className="mt-10 space-y-8">
            {jornadaParticipante.map((etapa, i) => (
              <li key={etapa.titulo} className="flex gap-6">
                <NumberBadge numero={String(i + 1).padStart(2, "0")} />
                <div className="pt-2">
                  <h3 className="font-display text-lg text-wine-900">{etapa.titulo}</h3>
                  <p className="mt-1 font-sans text-sm text-ink-700">{etapa.descricao}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
