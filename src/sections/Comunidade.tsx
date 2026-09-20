import { pilaresComunidade } from "../data/jornada";
import { TextLink } from "../components/TextLink";
import { Titulo } from "../components/Titulo";

export function Comunidade({ comLink = false }: { comLink?: boolean }) {
  return (
    <section id="comunidade" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24 md:px-10">
      <Titulo>
        Uma mentoria termina. Uma rede permanece.
      </Titulo>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
        A Comunidade LÍDERNEGRA é o espaço permanente de troca, apoio e oportunidades entre as mulheres da rede,
        mesmo depois que a mentoria formal se encerra.
      </p>

      <dl className="mt-14">
        {pilaresComunidade.map((pilar) => (
          <div
            key={pilar.titulo}
            className="grid gap-2 border-t border-wine-900/15 py-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-10"
          >
            <dt className="font-display text-xl text-wine-900">{pilar.titulo}</dt>
            <dd className="font-sans text-base leading-relaxed text-ink-700">{pilar.descricao}</dd>
          </div>
        ))}
      </dl>

      {comLink && (
        <div className="mt-8">
          <TextLink to="/mentoria#comunidade">Conhecer a comunidade</TextLink>
        </div>
      )}
    </section>
  );
}
