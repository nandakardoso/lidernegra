import { useState, type FormEvent } from "react";
import { Botao } from "../components/Botao";
import { PageHero } from "../components/PageHero";
import { TextLink } from "../components/TextLink";
import { Titulo } from "../components/Titulo";

const campo =
  "mt-2 w-full rounded-sm border border-wine-900/30 bg-cream-50 px-4 py-3 font-sans text-base text-ink-900 focus:border-wine-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const conteudos = ["Materiais", "Aulas", "Conteúdos"];

function Cadeado() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </svg>
  );
}

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

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid items-start gap-14 md:grid-cols-[minmax(0,26rem)_1fr] md:gap-20">
          <div className="bg-cream-100 p-8 md:p-10">
            <Titulo tamanho="secundario">Entrar</Titulo>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink-700">
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
              <Botao type="submit" bloco>
                Entrar
              </Botao>
              {tentou && (
                <p role="status" className="font-sans text-base leading-relaxed text-wine-900">
                  A Área da Mentorada ainda não está disponível. Assim que for lançada, você poderá entrar por aqui.
                </p>
              )}
            </form>
          </div>

          <div className="md:pt-8">
            <Titulo tamanho="secundario">O que você encontrará</Titulo>
            <ul className="mt-8">
              {conteudos.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 border-t border-wine-900/15 py-6 last:border-b"
                >
                  <span className="font-display text-xl text-wine-900 md:text-2xl">{item}</span>
                  <span className="flex shrink-0 items-center gap-2 font-sans text-sm text-ink-500">
                    <Cadeado />
                    Em breve
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink to="/inscreva-se">Ver canais de contato</TextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
