export interface Apoiador {
  nome: string;
  /** Caminho do logo oficial (ex.: "/apoiadores/empresa.svg"). Sem logo, o nome aparece em texto. */
  logo?: string;
  /** Site oficial. Sem URL, o nome funciona só como elemento visual. */
  url?: string;
}

/**
 * Apoiadores oficiais do LÍDERNEGRA. Enquanto a lista estiver vazia, a seção não aparece na Home.
 * Para incluir um apoiador, basta adicionar um item, por exemplo:
 *   { nome: "Nome da Organização", logo: "/apoiadores/nome.svg", url: "https://..." }
 * Coloque os arquivos de logo em `public/apoiadores/`.
 */
export const apoiadores: Apoiador[] = [];
