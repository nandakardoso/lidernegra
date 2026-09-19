import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Tom = "sobreEscuro" | "sobreClaro";

const tons: Record<Tom, string> = {
  sobreEscuro: "bg-gold-400 text-wine-950 hover:bg-gold-500 focus-visible:outline-cream-50",
  sobreClaro: "bg-wine-900 text-cream-50 hover:bg-wine-800 focus-visible:outline-wine-900",
};

interface BotaoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  tom?: Tom;
}

/** Ação principal da página: único elemento preenchido em cada bloco de chamada. */
export function Botao({ to, tom = "sobreClaro", className = "", children, href, ...rest }: BotaoProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 font-sans text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${tons[tom]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
