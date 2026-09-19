export interface Mentora {
  nome: string;
  cargo: string;
  empresa: string;
  area: string;
  bio: string;
}

// Nenhuma mentora real foi cadastrada até o momento.
// Placeholders claramente identificados — substituir por perfis reais.
export const mentoras: Mentora[] = [
  {
    nome: "[INSERIR NOME DA MENTORA]",
    cargo: "[INSERIR CARGO]",
    empresa: "[INSERIR EMPRESA]",
    area: "[INSERIR ÁREA DE ATUAÇÃO]",
    bio: "[INSERIR MINIBIOGRAFIA DA MENTORA]",
  },
  {
    nome: "[INSERIR NOME DA MENTORA]",
    cargo: "[INSERIR CARGO]",
    empresa: "[INSERIR EMPRESA]",
    area: "[INSERIR ÁREA DE ATUAÇÃO]",
    bio: "[INSERIR MINIBIOGRAFIA DA MENTORA]",
  },
  {
    nome: "[INSERIR NOME DA MENTORA]",
    cargo: "[INSERIR CARGO]",
    empresa: "[INSERIR EMPRESA]",
    area: "[INSERIR ÁREA DE ATUAÇÃO]",
    bio: "[INSERIR MINIBIOGRAFIA DA MENTORA]",
  },
];

export interface Depoimento {
  nome: string;
  papel: string;
  texto: string;
}

// Nenhum depoimento real foi fornecido até o momento.
export const depoimentos: Depoimento[] = [
  {
    nome: "[INSERIR NOME]",
    papel: "[INSERIR PAPEL — mentorada/mentora]",
    texto: "[INSERIR DEPOIMENTO REAL]",
  },
  {
    nome: "[INSERIR NOME]",
    papel: "[INSERIR PAPEL — mentorada/mentora]",
    texto: "[INSERIR DEPOIMENTO REAL]",
  },
];
