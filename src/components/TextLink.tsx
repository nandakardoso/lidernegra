import type { AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Tone = "onDark" | "onLight";

const toneClasses: Record<Tone, string> = {
  onDark: "text-cream-50 decoration-gold-500",
  onLight: "text-wine-800 decoration-gold-500",
};

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  tone?: Tone;
}

/** CTA em estilo de link sublinhado — nunca botão preenchido, conforme direção editorial da marca. */
export function TextLink({ to, tone = "onLight", className = "", children, href, ...rest }: TextLinkProps) {
  const base =
    "inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.08em] underline decoration-2 underline-offset-8 transition-colors duration-200 hover:decoration-4";
  const classes = `${base} ${toneClasses[tone]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...(rest as Omit<LinkProps, "to" | "className">)}>
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
