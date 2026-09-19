export interface Indicador {
  valor: string;
  label: string;
}

/** Números informados pelo próprio LÍDERNEGRA. Só incluir aqui dados oficiais. */
export const indicadoresImpacto: Indicador[] = [
  { valor: "6", label: "edições desde 2021" },
  { valor: "quase 200", label: "mulheres formadas ao longo da história do programa" },
  { valor: "750+", label: "mulheres inscritas na 6ª edição, em 2026" },
  { valor: "86%", label: "das participantes da primeira turma declararam aumento de autoconfiança" },
  {
    valor: "73%",
    label: "da primeira turma relataram avanços profissionais: promoção, nova empresa, reconhecimento ou aumento salarial",
  },
];

/** Palavras escolhidas pelas participantes no primeiro encontro da 6ª edição. */
export const palavrasSextaEdicao = ["Aquilombamento", "União", "Pertencimento", "Motivação", "Comunidade"];
