import { Link } from "react-router-dom";
import logo from "../assets/logo-lidernegra.png";
import { IconeCanal, type Canal } from "./IconeCanal";
import { contato } from "../data/contato";

const canais: { canal: Canal; nome: string; href: string; externo: boolean }[] = [
  { canal: "instagram", nome: "Instagram", href: contato.instagram, externo: true },
  { canal: "linkedin", nome: "LinkedIn", href: contato.linkedin, externo: true },
  { canal: "email", nome: "E-mail", href: `mailto:${contato.email}`, externo: false },
  { canal: "whatsapp", nome: "WhatsApp", href: contato.whatsapp, externo: true },
];

export function Footer() {
  return (
    <footer className="bg-wine-900 text-cream-100" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="LÍDERNEGRA" width={491} height={86} className="h-12 w-auto" />
            <p className="mt-2 text-sm text-cream-100/80">Orienta, Empodera e Transforma.</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">Navegação</h2>
            <ul className="mt-3 text-sm">
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/historia">Nossa história</Link></li>
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/programa">O programa</Link></li>
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/faq">Perguntas frequentes</Link></li>
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/participar">Como participar</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">Conecte-se</h2>
            <ul className="mt-3 text-sm">
              {canais.map((c) => (
                <li key={c.canal}>
                  <a
                    className="flex min-h-11 items-center gap-3 hover:text-gold-400"
                    href={c.href}
                    {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <IconeCanal canal={c.canal} className="h-5 w-5 shrink-0 text-gold-400" />
                    {c.nome}
                    {c.externo && <span className="sr-only"> (abre em nova aba)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">Institucional</h2>
            <ul className="mt-3 text-sm">
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/area-da-mentorada">Área da Mentorada</Link></li>
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/faq">Para organizações</Link></li>
              <li><Link className="flex min-h-11 items-center hover:text-gold-400" to="/privacidade">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-cream-100/15 pt-6 text-sm text-cream-100/75">
          © {new Date().getFullYear()} LÍDERNEGRA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
