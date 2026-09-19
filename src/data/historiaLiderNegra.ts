export interface CapituloHistoria {
  ano: string;
  titulo: string;
  /** Número em destaque na linha do tempo. */
  numero: string;
  numeroLegenda: string;
  /** Frase marcante do capítulo. */
  frase: string;
  paragrafos: string[];
  lista?: { termo: string; texto: string }[];
  /** Caminho da foto da turma (ex.: "/turmas/2021.jpg"). Quando ausente, nada é exibido. */
  foto?: string;
  fotoLegenda?: string;
}

export const origemHistoria: string[] = [
  "Em 2018, durante uma experiência executiva de inovação no Vale do Silício, Vânia Neves viveu uma situação que ficaria marcada em sua trajetória.",
  "Entre cerca de 100 executivos participantes, havia apenas duas mulheres negras.",
];

export const perguntaOrigem =
  "Como falar sobre o futuro, inovação e transformação sem que a diversidade esteja presente nos espaços onde esse futuro está sendo construído?";

export const origemContinuacao: string[] = [
  "A experiência despertou um incômodo que se transformou em propósito.",
  "Mulher negra e executiva, Vânia conhecia de perto os desafios de construir uma carreira e ocupar espaços de liderança sendo parte de uma parcela ainda sub-representada nesses ambientes. Em vez de aceitar essa realidade, decidiu criar caminhos para que outras mulheres pudessem chegar mais preparadas.",
  "Foi assim que nasceu o LÍDERNEGRA.",
];

export const capitulosHistoria: CapituloHistoria[] = [
  {
    ano: "2021",
    titulo: "O começo",
    numero: "24",
    numeroLegenda: "mulheres na primeira edição",
    frase: "Orienta. Empodera. Transforma.",
    paragrafos: [
      "Em 2 de agosto de 2021, o sonho se tornou realidade.",
      "Nascia o Programa de Mentoria LÍDERNEGRA, uma iniciativa sem fins lucrativos criada para apoiar o desenvolvimento de mulheres negras que desejam crescer profissionalmente e ocupar posições de liderança.",
      "A primeira edição começou com 24 mulheres e uma proposta construída de forma coletiva por uma rede de profissionais voluntários, mentoras e palestrantes.",
      "A jornada combinava três elementos fundamentais:",
    ],
    lista: [
      { termo: "Capacitação", texto: "para ampliar conhecimentos e desenvolver habilidades de liderança." },
      {
        termo: "Mentoria",
        texto: "aproximando as participantes de executivas experientes e criando espaços de troca, orientação e inspiração.",
      },
      {
        termo: "Pensamento exponencial",
        texto: "por meio do curso Fundamentos do Pensamento Exponencial, da SingularityU Brazil.",
      },
    ],
  },
  {
    ano: "2022",
    titulo: "O propósito começa a gerar impacto",
    numero: "86%",
    numeroLegenda: "relataram mais autoconfiança · 73% relataram avanços profissionais",
    frase: "Quando mulheres negras têm acesso a conhecimento, referências e uma rede de apoio, novas possibilidades de carreira são construídas.",
    paragrafos: [
      "A segunda edição mostrou que a transformação ia além da formação.",
      "Entre as participantes da primeira turma, 86% declararam aumento de autoconfiança e 73% relataram avanços profissionais, como promoção, mudança para uma nova empresa, maior reconhecimento na posição ou aumento salarial.",
      "Os resultados reforçaram uma convicção: quando mulheres negras têm acesso a conhecimento, referências, orientação e uma rede de apoio, novas possibilidades de carreira podem ser construídas.",
    ],
  },
  {
    ano: "2023",
    titulo: "Uma rede que cresce",
    numero: "3ª",
    numeroLegenda: "edição do programa",
    frase: "Mais do que um programa de capacitação, o LÍDERNEGRA foi se tornando uma rede.",
    paragrafos: [
      "Nas edições seguintes, o LÍDERNEGRA continuou ampliando sua comunidade e fortalecendo sua jornada de desenvolvimento.",
      "O programa manteve uma característica essencial desde sua origem: profissionais experientes dedicando tempo, conhecimento e experiência para contribuir voluntariamente com o desenvolvimento de outras mulheres.",
    ],
  },
  {
    ano: "2024",
    titulo: "Conectadas por um objetivo comum",
    numero: "4ª",
    numeroLegenda: "edição do programa",
    frase: "Mulheres com diferentes histórias, setores, experiências e sonhos, conectadas para ocupar novos espaços de liderança.",
    paragrafos: [
      "Uma rede de mulheres com diferentes histórias, setores, experiências e sonhos, conectadas por um objetivo comum: ampliar suas possibilidades e ocupar novos espaços de liderança.",
    ],
  },
  {
    ano: "2025",
    titulo: "Cinco anos de construção coletiva",
    numero: "5ª",
    numeroLegenda: "edição, cinco anos depois da criação",
    frase: "O que começou como o sonho de uma executiva se tornou uma construção coletiva.",
    paragrafos: [
      "Cinco anos depois de sua criação, o LÍDERNEGRA chegou à sua quinta edição celebrando mais uma turma de mulheres certificadas e uma comunidade que continuava crescendo.",
      "A trajetória deixou cada vez mais claro que o impacto não acontece apenas durante a jornada formal do programa. Ele continua nas conexões construídas, nas referências compartilhadas, nas oportunidades que surgem e nas mulheres que passam a ocupar novos espaços.",
    ],
  },
  {
    ano: "2026",
    titulo: "A 6ª edição",
    numero: "750+",
    numeroLegenda: "mulheres inscritas",
    frase: "Ninguém precisa construir sua trajetória sozinha.",
    paragrafos: [
      "Em 2026, o LÍDERNEGRA chegou à sua sexta edição. Mais de 750 mulheres se inscreveram para participar dessa nova jornada.",
      "A dimensão dessa procura revela a força de uma comunidade que, ao longo dos anos, vem construindo algo maior do que um programa de mentoria.",
      "No primeiro encontro da sexta edição, as próprias participantes escolheram palavras para definir a experiência: Aquilombamento. União. Pertencimento. Motivação. Comunidade.",
    ],
  },
];

export const jornadaContinua: string[] = [
  "O LÍDERNEGRA nasceu de uma pergunta sobre quem estava presente nos espaços que constroem o futuro.",
  "Hoje, ele segue trabalhando para que cada vez mais mulheres negras estejam nesses espaços — preparadas, conectadas e conscientes de seu potencial.",
  "Ao longo de sua história, o programa já formou quase 200 mulheres e construiu uma rede formada por mentoradas, mentoras, palestrantes, voluntários e aliados.",
];

export const fechamentoHistoria: string[] = [
  "Porque liderança também se constrói quando conhecimento é compartilhado.",
  "Quando experiências são colocadas à disposição de outras pessoas.",
  "Quando uma mulher abre uma porta e ajuda outra a atravessá-la.",
  "E quando uma trajetória deixa de ser apenas individual e passa a abrir caminho para muitas outras.",
];

/**
 * Foto de impacto exibida em "Uma jornada que continua". Enquanto for `undefined`, o texto ocupa a largura toda.
 * Para incluir: coloque o arquivo em `public/` e preencha, por exemplo:
 *   { src: "/fotos/jornada.jpg", alt: "Descrição da foto", legenda: "Turma da 6ª edição, 2026" }
 */
export const fotoJornada: { src: string; alt: string; legenda?: string } | undefined = {
  src: "/fotos/jornada.jpg",
  alt: "Cinco mulheres negras em traje profissional posam juntas em um espaço com teto de vidro, sorrindo para a câmera.",
};
