import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Historia } from "./pages/Historia";
import { Programa } from "./pages/Programa";
import { Participar } from "./pages/Participar";
import { FaqPage } from "./pages/FaqPage";
import { AreaMentorada } from "./pages/AreaMentorada";
import { Privacidade } from "./pages/Privacidade";
import { NotFound } from "./pages/NotFound";
import seo from "./data/seo.json";

type MetaRota = { titulo: string; descricao: string; indexar?: boolean };
const rotas = seo.rotas as Record<string, MetaRota>;

function definirTag(seletor: string, atributo: string, valor: string) {
  document.querySelector(seletor)?.setAttribute(atributo, valor);
}

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }

    const conhecida = rotas[pathname];
    const meta: MetaRota = conhecida ?? { ...seo.naoEncontrada, indexar: false };
    const url = `${seo.site}${pathname}`;

    document.title = meta.titulo;
    definirTag('meta[name="description"]', "content", meta.descricao);
    definirTag('meta[property="og:title"]', "content", meta.titulo);
    definirTag('meta[property="og:description"]', "content", meta.descricao);
    definirTag('meta[name="twitter:title"]', "content", meta.titulo);
    definirTag('meta[name="twitter:description"]', "content", meta.descricao);
    definirTag('meta[property="og:url"]', "content", url);
    definirTag('meta[name="robots"]', "content", meta.indexar === false ? "noindex, follow" : "index, follow");
    if (conhecida) definirTag('link[rel="canonical"]', "href", url);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <RouteEffects />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/participar" element={<Participar />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/area-da-mentorada" element={<AreaMentorada />} />
          <Route path="/privacidade" element={<Privacidade />} />
          {/* Rotas antigas: o servidor redireciona (vercel.json); estas cobrem o ambiente de desenvolvimento. */}
          <Route path="/sobre" element={<Navigate to="/historia" replace />} />
          <Route path="/mentoria" element={<Navigate to="/programa" replace />} />
          <Route path="/inscreva-se" element={<Navigate to="/participar" replace />} />
          <Route path="/impacto" element={<Navigate to="/historia#impacto" replace />} />
          <Route path="/comunidade" element={<Navigate to="/programa#comunidade" replace />} />
          <Route path="/mentoras" element={<Navigate to="/programa" replace />} />
          <Route path="/parcerias" element={<Navigate to="/faq" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
