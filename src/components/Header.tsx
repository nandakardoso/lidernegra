import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Botao } from "./Botao";
import logo from "../assets/logo-lidernegra-vinho.png";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/historia", label: "Nossa história" },
  { to: "/programa", label: "O programa" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-wine-800/15 bg-cream-50/95 backdrop-blur" : "border-transparent bg-cream-50/0"
      }`}
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link to="/" className="shrink-0" aria-label="LÍDERNEGRA, página inicial" onClick={() => setOpen(false)}>
          <img src={logo} alt="LÍDERNEGRA" width={491} height={86} className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navItems.filter((item) => item.to !== "/").map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap font-sans text-sm font-medium transition-colors ${
                  isActive ? "text-wine-900" : "text-ink-700 hover:text-wine-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Botao to="/participar" tamanho="compacto">
            Como participar
          </Botao>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-wine-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        hidden={!open}
        aria-label="Navegação principal (mobile)"
        className="border-t border-wine-800/10 bg-cream-50 px-6 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 font-sans text-base font-medium ${
                    isActive ? "bg-wine-900/5 text-wine-900" : "text-ink-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Botao to="/participar" bloco onClick={() => setOpen(false)}>
              Como participar
            </Botao>
          </li>
        </ul>
      </nav>
    </header>
  );
}
