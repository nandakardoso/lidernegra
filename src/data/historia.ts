export interface Etapa {
  titulo: string;
  descricao: string;
}

export const jornadaParticipante: Etapa[] = [
  { titulo: "Inscrição", descricao: "A mulher demonstra interesse e participa do processo de seleção." },
  { titulo: "Conexão", descricao: "A participante é conectada à sua mentora e à comunidade." },
  {
    titulo: "Desenvolvimento",
    descricao: "São trabalhados temas relacionados a carreira, liderança, autoconhecimento e protagonismo.",
  },
  { titulo: "Troca", descricao: "A participante amplia sua rede e compartilha experiências com outras mulheres." },
  {
    titulo: "Transformação",
    descricao: "O processo gera novos aprendizados, perspectivas e possibilidades profissionais.",
  },
];
