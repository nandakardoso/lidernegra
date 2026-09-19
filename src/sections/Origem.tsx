import vania from "../assets/vania-neves.jpg";
import { TextLink } from "../components/TextLink";
import { origemHistoria, perguntaOrigem } from "../data/historiaLiderNegra";

export function Origem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Por que existe</p>
          <h2 className="mt-4 font-display text-3xl italic text-wine-900 md:text-4xl">
            Tudo começou com uma pergunta.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 font-sans text-lg leading-relaxed text-ink-700">
            {origemHistoria.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="border-l-2 border-gold-500 pl-6 font-display text-xl italic text-wine-900">
              {perguntaOrigem}
            </p>
            <p>Esse incômodo virou propósito e, em 2021, virou programa.</p>
          </div>

          <div className="mt-10">
            <TextLink to="/sobre">Ler a história completa</TextLink>
          </div>
        </div>

        <figure>
          <img
            src={vania}
            alt="Vânia Neves, fundadora do LÍDERNEGRA"
            width={600}
            height={670}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover object-top"
          />
          <figcaption className="mt-4 border-l-2 border-gold-500 pl-4">
            <p className="font-display text-xl text-wine-900">Vânia Neves</p>
            <p className="font-sans text-sm text-ink-700">Fundadora do LÍDERNEGRA</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
