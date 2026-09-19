import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { MentoriaPage } from "./pages/Mentoria";
import { Parcerias } from "./pages/Parcerias";
import { FaqPage } from "./pages/FaqPage";
import { Inscricao } from "./pages/Inscricao";
import { AreaMentorada } from "./pages/AreaMentorada";
import { Privacidade } from "./pages/Privacidade";
import { NotFound } from "./pages/NotFound";

const marca = "LÍDERNEGRA";

const metaPorRota: Record<string, { titulo: string; descricao: string }> = {
  "/": {
    titulo: `${marca} | Mentoria e liderança para mulheres negras`,
    descricao:
      "Programa de mentoria sem fins lucrativos, criado em 2021, que apoia mulheres negras a crescer profissionalmente e ocupar posições de liderança.",
  },
  "/sobre": {
    titulo: `Nossa história | ${marca}`,
    descricao:
      "Como um incômodo no Vale do Silício, em 2018, virou o LÍDERNEGRA. Da primeira turma, em 2021, à 6ª edição, com números de impacto.",
  },
  "/mentoria": {
    titulo: `O programa | ${marca}`,
    descricao: "A jornada em cinco etapas, a comunidade e as mentoras do LÍDERNEGRA.",
  },
  "/parcerias": {
    titulo: `Parcerias | ${marca}`,
    descricao: "Como organizações podem apoiar o LÍDERNEGRA: patrocínio, parceria, eventos, voluntariado e conteúdo.",
  },
  "/faq": {
    titulo: `Perguntas frequentes | ${marca}`,
    descricao: "Respostas sobre o programa LÍDERNEGRA, quem pode participar e como apoiar.",
  },
  "/inscreva-se": {
    titulo: `Quero participar | ${marca}`,
    descricao: "Como acompanhar as inscrições do LÍDERNEGRA e falar com a equipe.",
  },
  "/area-da-mentorada": {
    titulo: `Área da Mentorada | ${marca}`,
    descricao: "Espaço exclusivo para as mentoradas do LÍDERNEGRA, em breve.",
  },
  "/privacidade": {
    titulo: `Política de Privacidade | ${marca}`,
    descricao: "Informações de privacidade do site do LÍDERNEGRA.",
  },
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const alvo = document.getElementById(hash.slice(1));
      if (alvo) {
        alvo.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
    const meta = metaPorRota[pathname] ?? {
      titulo: `Página não encontrada | ${marca}`,
      descricao: "A página procurada não existe.",
    };
    document.title = meta.titulo;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.descricao);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.titulo);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.descricao);
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
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/mentoria" element={<MentoriaPage />} />
          <Route path="/impacto" element={<Navigate to="/sobre#impacto" replace />} />
          <Route path="/mentoras" element={<Navigate to="/mentoria#mentoras" replace />} />
          <Route path="/comunidade" element={<Navigate to="/mentoria#comunidade" replace />} />
          <Route path="/parcerias" element={<Parcerias />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/inscreva-se" element={<Inscricao />} />
          <Route path="/area-da-mentorada" element={<AreaMentorada />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
