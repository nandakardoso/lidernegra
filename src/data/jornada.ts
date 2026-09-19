export interface EtapaJornada {
  numero: string;
  titulo: string;
  objetivo: string;
  modulos: string[];
}

export const jornadaLiderNegra: EtapaJornada[] = [
  {
    numero: "01",
    titulo: "Eu como Líder",
    objetivo: "Fortalecer identidade, propósito e carreira.",
    modulos: ["Autoconhecimento", "Assessment regenerativo de carreira", "Carreira e Sucesso"],
  },
  {
    numero: "02",
    titulo: "Liderança e Influência",
    objetivo: "Desenvolver competências para liderar pessoas e ampliar influência.",
    modulos: [
      "Liderança que Inspira",
      "Comunicação e Posicionamento",
      "Influência e Negociação",
      "Marca Pessoal e Marketing Profissional",
      "LinkedIn como plataforma de protagonismo",
    ],
  },
  {
    numero: "03",
    titulo: "Pensamento Estratégico e Inovação",
    objetivo: "Preparar para o futuro do trabalho e ambientes em transformação.",
    modulos: [
      "Introdução ao Pensamento Exponencial",
      "Criatividade para Soluções Inovadoras",
      "IA e seus impactos",
      "Liderança Digital e Futuro do Trabalho",
    ],
  },
  {
    numero: "04",
    titulo: "Gestão para Geração de Valor",
    objetivo: "Ampliar visão financeira para autonomia e tomada de decisão.",
    modulos: ["Finanças com Propósito"],
  },
  {
    numero: "05",
    titulo: "Liderança em Ação",
    objetivo: "Consolidar aprendizados em um plano de desenvolvimento.",
    modulos: ["Mentoria", "Plano de Desenvolvimento Individual"],
  },
];

export const pilaresComunidade = [
  {
    titulo: "Networking",
    descricao: "Conexões genuínas entre mulheres em diferentes momentos de carreira.",
  },
  {
    titulo: "Compartilhamento de oportunidades",
    descricao: "Vagas, indicações e caminhos profissionais circulando dentro da rede.",
  },
  {
    titulo: "Eventos e conteúdo",
    descricao: "Encontros e materiais que mantêm a comunidade em constante aprendizado.",
  },
  {
    titulo: "Apoio, conexão e aprendizado contínuo",
    descricao: "Um espaço de escuta e trocas que continua além do programa formal.",
  },
  {
    titulo: "Cursos de instituições apoiadoras",
    descricao: "Formações complementares oferecidas por organizações parceiras do LÍDERNEGRA.",
  },
];
