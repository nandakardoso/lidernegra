const frentes = [
  {
    titulo: "Capacitação",
    texto: "Amplia conhecimentos e desenvolve habilidades de liderança.",
  },
  {
    titulo: "Mentoria",
    texto: "Aproxima as participantes de executivas experientes, em espaços de troca, orientação e inspiração.",
  },
  {
    titulo: "Pensamento exponencial",
    texto: "Fundamentos do Pensamento Exponencial, curso da SingularityU Brazil.",
  },
];

export function OQueE() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">O programa</p>
        <h2 className="mt-4 font-display text-3xl italic text-wine-900 md:text-4xl">
          Três frentes, um mesmo propósito: orientar, empoderar, transformar.
        </h2>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-700">
          O Programa de Mentoria LÍDERNEGRA apoia mulheres negras que querem crescer profissionalmente e
          ocupar posições de liderança. A proposta foi construída de forma coletiva, por uma rede de
          profissionais voluntárias, mentoras e palestrantes.
        </p>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {frentes.map((f) => (
            <li key={f.titulo} className="border-t border-wine-900/15 pt-6">
              <h3 className="font-display text-2xl text-wine-900">{f.titulo}</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-ink-700">{f.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
