export interface Indicador {
  valor: string;
  label: string;
}

// Números reais ainda não fornecidos — todos os valores abaixo são placeholders
// claramente identificados. Substituir por dados reais quando disponíveis.
export const indicadoresImpacto: Indicador[] = [
  { valor: "6ª", label: "edição do programa" },
  { valor: "[INSERIR NÚMERO]", label: "de mulheres inscritas" },
  { valor: "[INSERIR NÚMERO]", label: "de mentoras" },
  { valor: "[INSERIR NÚMERO]", label: "de mentoradas formadas" },
  { valor: "[INSERIR NÚMERO]", label: "de horas de mentoria" },
];

export const historicoLinhaDoTempo = [
  {
    titulo: "Início",
    descricao: "Nascimento da iniciativa e construção da comunidade.",
  },
  {
    titulo: "Expansão",
    descricao: "Novas participantes, mentoras e conexões.",
  },
  {
    titulo: "Impacto",
    descricao: "Histórias de desenvolvimento e transformação.",
  },
  {
    titulo: "Hoje — 6ª edição",
    descricao: "Uma comunidade que continua criando oportunidades e fortalecendo mulheres.",
  },
];
