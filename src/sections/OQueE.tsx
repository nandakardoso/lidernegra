const palavras = ["Desenvolvimento", "Liderança", "Representatividade", "Conexão", "Protagonismo"];

export function OQueE() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <h2 className="font-display text-3xl italic text-wine-900 md:text-4xl">O que é o LÍDERNEGRA?</h2>

      <div className="mt-8 max-w-3xl space-y-6 font-sans text-lg leading-relaxed text-ink-700">
        <p>
          O LÍDERNEGRA nasceu para criar espaços de desenvolvimento, conexão e fortalecimento para mulheres
          negras e pardas.
        </p>
        <p>
          Por meio da mentoria e da troca entre mulheres com diferentes experiências profissionais, o
          programa estimula autoconhecimento, protagonismo, liderança, networking e a construção de novas
          possibilidades.
        </p>
      </div>

      <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3" aria-label="Valores centrais do programa">
        {palavras.map((palavra, i) => (
          <li key={palavra} className="flex items-center gap-8">
            <span className="font-display text-xl italic text-wine-800 md:text-2xl">{palavra}</span>
            {i < palavras.length - 1 && <span className="hidden h-1.5 w-1.5 rounded-full bg-gold-500 sm:block" aria-hidden="true" />}
          </li>
        ))}
      </ul>
    </section>
  );
}
