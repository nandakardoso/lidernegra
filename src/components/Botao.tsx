import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Tom = "sobreEscuro" | "sobreClaro";
type Tamanho = "padrao" | "compacto";

const tons: Record<Tom, string> = {
  sobreEscuro: "bg-gold-400 text-wine-950 hover:bg-gold-500 focus-visible:outline-cream-50",
  sobreClaro: "bg-wine-900 text-cream-50 hover:bg-wine-800 focus-visible:outline-wine-900",
};

const tamanhos: Record<Tamanho, string> = {
  padrao: "min-h-12 px-8 py-3",
  compacto: "min-h-10 whitespace-nowrap px-5 py-2.5",
};

interface BotaoBase {
  tom?: Tom;
  tamanho?: Tamanho;
  /** Ocupa a largura toda do contêiner. */
  bloco?: boolean;
  className?: string;
  children: ReactNode;
}

type BotaoProps = BotaoBase &
  (
    | ({ to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BotaoBase>)
    | ({ href: string; to?: undefined } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BotaoBase>)
    | ({ to?: undefined; href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BotaoBase>)
  );

/** Ação principal: único elemento preenchido em cada bloco de chamada. Renderiza link interno, link externo ou botão. */
export function Botao(props: BotaoProps) {
  const { tom = "sobreClaro", tamanho = "padrao", bloco = false, className = "", children, ...rest } = props;
  const classes = `inline-flex items-center justify-center rounded-full font-sans text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${tamanhos[tamanho]} ${tons[tom]} ${bloco ? "w-full" : ""} ${className}`.trim();

  if ("to" in rest && rest.to) {
    const { to, ...resto } = rest;
    return (
      <Link to={to} className={classes} {...(resto as object)}>
        {children}
      </Link>
    );
  }
  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
