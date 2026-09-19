import { useCallback, useEffect, useRef, useState } from "react";
import { apoiadores } from "../data/apoiadores";

const INTERVALO_MS = 5000;

function Seta({ direcao }: { direcao: "esquerda" | "direita" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direcao === "esquerda" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const botaoControle =
  "flex h-10 w-10 items-center justify-center rounded-full border border-wine-900/20 text-wine-900 transition-colors hover:bg-wine-900/5 disabled:opacity-30";

export function Apoiadores() {
  const trilho = useRef<HTMLUListElement>(null);
  const [podeRolar, setPodeRolar] = useState(false);
  const [pausadoPeloUsuario, setPausadoPeloUsuario] = useState(false);
  const [pausadoTemporario, setPausadoTemporario] = useState(false);
  const [reduzMovimento, setReduzMovimento] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (el) setPodeRolar(el.scrollWidth > el.clientWidth + 2);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduzMovimento(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    atualizar();
    const el = trilho.current;
    if (!el) return;
    const ro = new ResizeObserver(atualizar);
    ro.observe(el);
    return () => ro.disconnect();
  }, [atualizar]);

  const mover = useCallback(
    (sentido: 1 | -1) => {
      const el = trilho.current;
      if (!el) return;
      const passo = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? el.clientWidth / 2;
      const fim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      const inicio = el.scrollLeft <= 2;
      const behavior: ScrollBehavior = reduzMovimento ? "auto" : "smooth";
      if (sentido === 1 && fim) el.scrollTo({ left: 0, behavior });
      else if (sentido === -1 && inicio) el.scrollTo({ left: el.scrollWidth, behavior });
      else el.scrollBy({ left: sentido * passo, behavior });
    },
    [reduzMovimento],
  );

  const autoplayAtivo = podeRolar && !reduzMovimento && !pausadoPeloUsuario && !pausadoTemporario;

  useEffect(() => {
    if (!autoplayAtivo) return;
    const id = window.setInterval(() => mover(1), INTERVALO_MS);
    return () => window.clearInterval(id);
  }, [autoplayAtivo, mover]);

  if (apoiadores.length === 0) return null;

  return (
    <section
      aria-labelledby="titulo-apoiadores"
      className="border-t border-wine-900/10 py-16"
      onMouseEnter={() => setPausadoTemporario(true)}
      onMouseLeave={() => setPausadoTemporario(false)}
      onFocus={() => setPausadoTemporario(true)}
      onBlur={() => setPausadoTemporario(false)}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 id="titulo-apoiadores" className="font-display text-2xl italic text-wine-900 md:text-3xl">
            Nossos Apoiadores
          </h2>

          {podeRolar && (
            <div className="flex shrink-0 items-center gap-2">
              {!reduzMovimento && (
                <button
                  type="button"
                  className={`${botaoControle} text-xs font-semibold`}
                  aria-label={pausadoPeloUsuario ? "Retomar rotação automática" : "Pausar rotação automática"}
                  onClick={() => setPausadoPeloUsuario((v) => !v)}
                >
                  {pausadoPeloUsuario ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
                    </svg>
                  )}
                </button>
              )}
              <button type="button" className={botaoControle} aria-label="Apoiadores anteriores" onClick={() => mover(-1)}>
                <Seta direcao="esquerda" />
              </button>
              <button type="button" className={botaoControle} aria-label="Próximos apoiadores" onClick={() => mover(1)}>
                <Seta direcao="direita" />
              </button>
            </div>
          )}
        </div>

        <div role="region" aria-roledescription="carrossel" aria-label="Apoiadores do LÍDERNEGRA" className="mt-10">
          <ul
            ref={trilho}
            tabIndex={0}
            aria-label="Lista de apoiadores, use as setas do teclado para navegar"
            className="grid snap-x snap-mandatory auto-cols-[50%] grid-flow-col overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 md:auto-cols-[25%] lg:auto-cols-[20%] [&::-webkit-scrollbar]:hidden"
          >
            {apoiadores.map((apoiador) => {
              const conteudo = apoiador.logo ? (
                <img
                  src={apoiador.logo}
                  alt={apoiador.nome}
                  loading="lazy"
                  className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="text-center font-display text-lg text-ink-700 md:text-xl">{apoiador.nome}</span>
              );

              return (
                <li
                  key={apoiador.nome}
                  className="flex h-20 snap-start items-center justify-center px-4"
                >
                  {apoiador.url ? (
                    <a
                      href={apoiador.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${apoiador.nome} (abre em nova aba)`}
                      className="flex items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    conteudo
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
