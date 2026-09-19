import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-lidernegra-vinho.png";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Nossa história" },
  { to: "/mentoria", label: "O programa" },
  { to: "/parcerias", label: "Parcerias" },
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
          <Link to="/area-da-mentorada" className="whitespace-nowrap font-sans text-sm font-medium text-wine-800 underline decoration-gold-500 decoration-2 underline-offset-8">
            Área da Mentorada
          </Link>
          <Link
            to="/inscreva-se"
            className="whitespace-nowrap rounded-full bg-wine-900 px-5 py-2.5 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-800"
          >
            Quero participar
          </Link>
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
          <li>
            <NavLink
              to="/area-da-mentorada"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 font-sans text-base font-medium text-wine-800"
            >
              Área da Mentorada
            </NavLink>
          </li>
          <li className="pt-2">
            <Link
              to="/inscreva-se"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-wine-900 px-5 py-3 text-center font-sans text-sm font-semibold text-cream-50"
            >
              Quero participar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
