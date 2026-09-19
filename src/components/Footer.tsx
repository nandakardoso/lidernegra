import { Link } from "react-router-dom";
import logo from "../assets/logo-lidernegra.png";

export function Footer() {
  return (
    <footer className="bg-wine-950 text-cream-100" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="font-display text-2xl italic text-cream-50">Faça parte da rede.</p>

        <div className="mt-10 grid gap-10 border-t border-cream-100/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="LÍDERNEGRA" width={491} height={86} className="h-12 w-auto" />
            <p className="mt-2 text-sm text-cream-100/80">Orienta, Empodera e Transforma.</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">Navegação</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-gold-400" to="/sobre">Nossa história</Link></li>
              <li><Link className="hover:text-gold-400" to="/mentoria">O programa</Link></li>
              <li><Link className="hover:text-gold-400" to="/impacto">Impacto</Link></li>
              <li><Link className="hover:text-gold-400" to="/mentoras">Mentoras</Link></li>
              <li><Link className="hover:text-gold-400" to="/comunidade">Comunidade</Link></li>
              <li><Link className="hover:text-gold-400" to="/parcerias">Parcerias</Link></li>
              <li><Link className="hover:text-gold-400" to="/faq">Perguntas frequentes</Link></li>
              <li><Link className="hover:text-gold-400" to="/inscreva-se">Quero participar</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">Conecte-se</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="hover:text-gold-400" href="https://www.instagram.com/lidernegraoficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a className="hover:text-gold-400" href="https://www.linkedin.com/company/lidernegra/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a
                  className="hover:text-gold-400"
                  href="https://wa.me/5521971464241"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +55 21 97146-4241
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">Institucional</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-gold-400" to="/privacidade">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50">
          © {new Date().getFullYear()} LÍDERNEGRA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
