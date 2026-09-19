import { useState, type FormEvent } from "react";
import { PageHero } from "../components/PageHero";

const inputClasses =
  "mt-2 w-full rounded-lg border border-wine-900/20 bg-cream-50 px-4 py-3 font-sans text-base text-ink-900 placeholder:text-ink-500/50 focus:border-wine-800 focus:outline-none";

export function Inscricao() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Sem integração de backend definida ainda. Estrutura pronta para conectar
    // a uma ferramenta externa de formulários (ex.: um endpoint próprio, Typeform, etc.).
    setSubmitted(true);
  }

  return (
    <>
      <PageHero kicker="Inscreva-se" titulo="Faça parte da próxima edição">
        O LÍDERNEGRA é voltado a mulheres negras e pardas interessadas em desenvolvimento de carreira e
        liderança. [INSERIR CRITÉRIOS DETALHADOS DE ELEGIBILIDADE DA PRÓXIMA EDIÇÃO]
      </PageHero>

      <section className="mx-auto max-w-2xl px-6 py-24 md:px-10">
        {submitted ? (
          <div role="status" className="border-t-2 border-gold-500 pt-6">
            <h2 className="font-display text-2xl italic text-wine-900">Inscrição recebida.</h2>
            <p className="mt-3 font-sans text-base text-ink-700">
              Obrigada pelo interesse em fazer parte do LÍDERNEGRA. [INSERIR MENSAGEM DEFINITIVA DE
              CONFIRMAÇÃO E PRÓXIMOS PASSOS]
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="nome" className="font-sans text-sm font-semibold text-wine-900">
                Nome completo
              </label>
              <input id="nome" name="nome" type="text" required autoComplete="name" className={inputClasses} />
            </div>

            <div>
              <label htmlFor="email" className="font-sans text-sm font-semibold text-wine-900">
                E-mail
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
            </div>

            <div>
              <label htmlFor="whatsapp" className="font-sans text-sm font-semibold text-wine-900">
                WhatsApp
              </label>
              <input id="whatsapp" name="whatsapp" type="tel" required autoComplete="tel" className={inputClasses} />
            </div>

            <div>
              <label htmlFor="cidade" className="font-sans text-sm font-semibold text-wine-900">
                Cidade/Estado
              </label>
              <input id="cidade" name="cidade" type="text" required className={inputClasses} />
            </div>

            <div>
              <label htmlFor="cargo" className="font-sans text-sm font-semibold text-wine-900">
                Cargo/profissão
              </label>
              <input id="cargo" name="cargo" type="text" required className={inputClasses} />
            </div>

            <div>
              <label htmlFor="linkedin" className="font-sans text-sm font-semibold text-wine-900">
                LinkedIn
              </label>
              <input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." className={inputClasses} />
            </div>

            <div>
              <label htmlFor="motivo" className="font-sans text-sm font-semibold text-wine-900">
                Por que deseja participar?
              </label>
              <textarea id="motivo" name="motivo" required rows={4} className={inputClasses} />
            </div>

            <div>
              <label htmlFor="origem" className="font-sans text-sm font-semibold text-wine-900">
                Como conheceu o LÍDERNEGRA?
              </label>
              <input id="origem" name="origem" type="text" className={inputClasses} />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-full bg-wine-900 px-8 py-3.5 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-800"
            >
              Quero me inscrever
            </button>
          </form>
        )}
      </section>
    </>
  );
}
