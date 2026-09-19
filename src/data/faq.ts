export interface FaqItem {
  pergunta: string;
  resposta: string;
}

/**
 * Somente perguntas com resposta confirmada. Ainda faltam respostas oficiais para:
 * critérios de elegibilidade, processo seletivo, custo, duração total, como ser mentora
 * e participação em mais de uma edição.
 */
export const faqItems: FaqItem[] = [
  {
    pergunta: "O que é o LÍDERNEGRA?",
    resposta:
      "É um programa de mentoria sem fins lucrativos, criado em 2021, que apoia o desenvolvimento de mulheres negras que desejam crescer profissionalmente e ocupar posições de liderança. Combina capacitação, mentoria com executivas experientes e pensamento exponencial.",
  },
  {
    pergunta: "Quem criou o programa?",
    resposta:
      "A executiva Vânia Neves. Em 2018, em uma experiência de inovação no Vale do Silício, ela percebeu que, entre cerca de 100 executivos, havia apenas duas mulheres negras. Esse incômodo virou o programa, que começou em 2 de agosto de 2021.",
  },
  {
    pergunta: "Quem pode participar?",
    resposta:
      "O programa é voltado a mulheres negras que desejam crescer profissionalmente e ocupar posições de liderança.",
  },
  {
    pergunta: "Quem são as mentoras?",
    resposta:
      "Profissionais experientes que dedicam, de forma voluntária, tempo, conhecimento e experiência ao desenvolvimento de outras mulheres.",
  },
  {
    pergunta: "O que a jornada inclui?",
    resposta:
      "Cinco etapas: Eu como Líder, Liderança e Influência, Pensamento Estratégico e Inovação, Gestão para Geração de Valor e Liderança em Ação. Também há a Comunidade LÍDERNEGRA, que segue ativa depois da mentoria.",
  },
  {
    pergunta: "Como minha empresa pode apoiar?",
    resposta:
      "Empresas podem contribuir como patrocinadoras, parceiras institucionais, com cursos pela Comunidade LÍDERNEGRA ou apoiando eventos. Fale com a equipe pelo WhatsApp +55 21 97146-4241.",
  },
  {
    pergunta: "Onde acompanho as próximas inscrições?",
    resposta:
      "No Instagram @lidernegraoficial e no LinkedIn do LÍDERNEGRA. Você também pode falar com a equipe pelo WhatsApp +55 21 97146-4241.",
  },
];
