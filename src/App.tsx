import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { MentoriaPage } from "./pages/Mentoria";
import { ImpactoPage } from "./pages/ImpactoPage";
import { Mentoras } from "./pages/Mentoras";
import { ComunidadePage } from "./pages/ComunidadePage";
import { Inscricao } from "./pages/Inscricao";
import { Privacidade } from "./pages/Privacidade";
import { NotFound } from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/mentoria" element={<MentoriaPage />} />
          <Route path="/impacto" element={<ImpactoPage />} />
          <Route path="/mentoras" element={<Mentoras />} />
          <Route path="/comunidade" element={<ComunidadePage />} />
          <Route path="/inscreva-se" element={<Inscricao />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
