import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";
import { Titulo } from "../components/Titulo";
import { Impacto } from "../sections/Impacto";
import { LinhaDoTempo } from "../sections/LinhaDoTempo";
import {
  fechamentoHistoria,
  fotoJornada,
  jornadaContinua,
  origemContinuacao,
  origemHistoria,
  perguntaOrigem,
} from "../data/historiaLiderNegra";
import vania from "../assets/vania-neves.jpg";

export function Historia() {
  return (
    <>
      <PageHero titulo="Como o LÍDERNEGRA começou">
        Da pergunta de Vânia Neves, em 2018, à 6ª edição, em 2026.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <Titulo>Um sonho que nasceu de um incômodo e se transformou em movimento</Titulo>
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

      <Impacto tom="claro" palavras />
      <LinhaDoTempo />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div
          className={
            fotoJornada ? "grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16" : "max-w-3xl"
          }
        >
          <div>
            <Titulo tamanho="secundario">Uma jornada que continua</Titulo>
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
            <p className="mt-10 font-sans text-sm font-semibold uppercase tracking-kicker text-wine-900">LÍDERNEGRA</p>
            <p className="mt-1 font-display text-xl italic text-gold-600">Orienta. Empodera. Transforma.</p>
          </div>

          {fotoJornada && (
            <figure>
              <img
                src={fotoJornada.src}
                alt={fotoJornada.alt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover object-top"
              />
              {fotoJornada.legenda && (
                <figcaption className="mt-3 font-sans text-sm text-ink-500">{fotoJornada.legenda}</figcaption>
              )}
            </figure>
          )}
        </div>
      </section>

      <section className="bg-cream-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-2 px-6 md:px-10">
          <TextLink to="/programa">Conhecer o programa</TextLink>
          <TextLink to="/participar">Como participar</TextLink>
        </div>
      </section>
    </>
  );
}
