import { useState, type FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";

const campo =
  "mt-2 w-full rounded-sm border border-wine-900/30 bg-cream-50 px-4 py-3 font-sans text-base text-ink-900 focus:border-wine-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const conteudos = ["Materiais", "Aulas", "Conteúdos"];

export function AreaMentorada() {
  const [tentou, setTentou] = useState(false);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setTentou(true);
  }

  return (
    <>
      <PageHero kicker="Área da Mentorada" titulo="Acesso das mentoradas">
        O login dará acesso à aba de materiais, aulas e conteúdos do programa.
      </PageHero>

      <section className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Entrar</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink-700">
            O acesso ainda não está ativo. Por enquanto, este formulário não envia nem guarda nenhuma informação.
          </p>

          <form onSubmit={enviar} className="mt-8 space-y-6" autoComplete="off">
            <div>
              <label htmlFor="login-nome" className="font-sans text-sm font-semibold text-wine-900">
                Nome
              </label>
              <input id="login-nome" name="nome" type="text" autoComplete="off" required className={campo} />
            </div>
            <div>
              <label htmlFor="login-senha" className="font-sans text-sm font-semibold text-wine-900">
                Senha
              </label>
              <input
                id="login-senha"
                name="senha"
                type="password"
                autoComplete="new-password"
                required
                className={campo}
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine-900 px-8 py-3 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine-900"
            >
              Entrar
            </button>
            {tentou && (
              <p role="status" className="font-sans text-base leading-relaxed text-wine-900">
                A Área da Mentorada ainda não está disponível. Assim que for lançada, você poderá entrar por aqui.
              </p>
            )}
          </form>
        </div>

        <div>
          <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">O que você encontrará</h2>
          <ul className="mt-8">
            {conteudos.map((item) => (
              <li
                key={item}
                className="border-t border-wine-900/15 py-5 font-display text-2xl text-wine-900 last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TextLink to="/inscreva-se">Ver canais de contato</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
