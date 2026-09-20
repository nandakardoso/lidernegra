import { jornadaLiderNegra } from "../data/jornada";
import { NumberBadge } from "../components/NumberBadge";
import { TextLink } from "../components/TextLink";
import { Titulo } from "../components/Titulo";

export function Jornada({ resumo = false }: { resumo?: boolean }) {
  return (
    <section id="jornada" className="scroll-mt-20 bg-cream-100 py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Titulo>A Jornada LÍDERNEGRA</Titulo>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
          O programa combina capacitação, mentoria com executivas experientes e o curso Fundamentos do
          Pensamento Exponencial, da SingularityU Brazil. Cinco etapas conduzem cada mentorada, da identidade de
          liderança à ação.
        </p>

        <ol className="mt-14 space-y-10">
          {jornadaLiderNegra.map((etapa) => (
            <li key={etapa.numero} className="flex gap-6 border-t border-wine-900/10 pt-8 first:border-t-0 first:pt-0 md:gap-10">
              <NumberBadge numero={etapa.numero} />
              <div>
                <h3 className="font-display text-xl text-wine-900 md:text-2xl">{etapa.titulo}</h3>
                <p className="mt-2 font-sans text-base text-ink-700">{etapa.objetivo}</p>
                <ul hidden={resumo} className="mt-4 flex flex-wrap gap-2">
                  {etapa.modulos.map((modulo) => (
                    <li
                      key={modulo}
                      className="rounded-full border border-wine-900/15 px-3 py-1 font-sans text-xs font-medium text-wine-800"
                    >
                      {modulo}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        {resumo && (
          <div className="mt-12">
            <TextLink to="/mentoria#jornada">Ver os módulos de cada etapa</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
