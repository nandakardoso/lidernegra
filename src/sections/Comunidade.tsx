import { pilaresComunidade } from "../data/jornada";
import { TextLink } from "../components/TextLink";

export function Comunidade() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="font-display text-2xl italic text-wine-900 md:text-3xl">
        Uma mentoria termina. Uma rede permanece.
      </p>

      <h2 className="mt-6 font-display text-3xl text-wine-900 md:text-4xl">Comunidade LÍDERNEGRA</h2>
      <p className="mt-4 max-w-2xl font-sans text-lg text-ink-700">
        O programa não termina quando a mentoria formal se encerra. A Comunidade LÍDERNEGRA é o espaço
        permanente de troca, apoio e oportunidades entre as mulheres da rede.
      </p>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {pilaresComunidade.map((pilar) => (
          <div key={pilar.titulo} className="border-t border-wine-900/15 pt-5">
            <h3 className="font-display text-lg text-wine-900">{pilar.titulo}</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-700">{pilar.descricao}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <TextLink to="/comunidade">Conhecer a comunidade</TextLink>
      </div>
    </section>
  );
}
