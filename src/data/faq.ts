export interface FaqItem {
  pergunta: string;
  resposta: string;
}

/**
 * Somente perguntas com resposta confirmada. Atualize "As inscrições estão abertas?" quando o status mudar.
 * Ainda faltam respostas oficiais para: custo, duração total e como ser mentora.
 */
export const faqItems: FaqItem[] = [
  {
    pergunta: "O que é o LÍDERNEGRA?",
    resposta:
      "Um programa de mentoria sem fins lucrativos, criado em 2021, para mulheres negras (pretas e pardas) que desejam crescer profissionalmente e ocupar posições de liderança. Combina capacitação, mentoria com executivas experientes e pensamento exponencial.",
  },
  {
    pergunta: "Quem criou o programa?",
    resposta:
      "A executiva Vânia Neves. Em 2018, em uma experiência de inovação no Vale do Silício, ela reparou que, entre cerca de 100 executivos, havia apenas duas mulheres negras. Esse incômodo virou o programa, que começou em 2 de agosto de 2021.",
  },
  {
    pergunta: "As inscrições estão abertas?",
    resposta:
      "No momento, estão fechadas. Acompanhe o Instagram @lidernegraoficial e o LinkedIn do LÍDERNEGRA, ou fale com a equipe pelo WhatsApp, para saber quando a próxima edição abre.",
  },
  {
    pergunta: "Quem pode participar?",
    resposta:
      "Mulheres que se autodeclaram pretas ou pardas, com nível superior completo, no mínimo 4 anos de experiência no ambiente corporativo e aspiração de alcançar uma posição de liderança ou potencializar seu perfil como líder. Podem morar em qualquer região do país, com acesso à internet, e não ter feito outro programa de mentoria similar nos últimos 6 meses. Todos os critérios estão em Como participar.",
  },
  {
    pergunta: "Quem são as mentoras?",
    resposta:
      "Profissionais experientes que dedicam, de forma voluntária, tempo, conhecimento e experiência ao desenvolvimento de outras mulheres.",
  },
  {
    pergunta: "O que a jornada inclui?",
    resposta:
      "Cinco etapas: Eu como Líder, Liderança e Influência, Pensamento Estratégico e Inovação, Gestão para Geração de Valor e Liderança em Ação. Depois da mentoria, a Comunidade LÍDERNEGRA continua ativa.",
  },
  {
    pergunta: "Como minha organização pode apoiar?",
    resposta:
      "Com patrocínio, parceria institucional, apoio a eventos, voluntariado, produção de conteúdo ou cursos pela Comunidade LÍDERNEGRA. Fale com a equipe pelo WhatsApp ou pelo e-mail lidernegra.x@gmail.com.",
  },
];
