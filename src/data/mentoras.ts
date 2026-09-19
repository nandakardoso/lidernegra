export interface Mentora {
  nome: string;
  cargo: string;
  empresa: string;
  area: string;
  bio: string;
}

/**
 * Perfis reais das mentoras. Enquanto a lista estiver vazia, a página mostra uma mensagem
 * institucional em vez de cards. Adicione aqui apenas dados fornecidos pelo LÍDERNEGRA.
 */
export const mentoras: Mentora[] = [];
