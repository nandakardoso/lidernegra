import { TextLink } from "../components/TextLink";

const possibilidades = [
  "Patrocínio",
  "Parceria institucional",
  "Apoio a eventos",
  "Voluntariado",
  "Produção de conteúdo",
  "Desenvolvimento de talentos",
];

export function ParaEmpresas() {
  return (
    <section className="bg-cream-200 py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="font-display text-3xl italic text-wine-900 md:text-4xl">
          Sua organização também pode fazer parte dessa transformação.
        </h2>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {possibilidades.map((item) => (
            <li key={item} className="font-sans text-base font-medium text-ink-700">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <TextLink to="/inscreva-se">Quero ser parceiro</TextLink>
        </div>
      </div>
    </section>
  );
}
