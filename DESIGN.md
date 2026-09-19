# Design

<!-- impeccable:design-schema 1 -->

## World

Identidade institucional real do programa LÍDERNEGRA, extraída de material oficial de apresentação
(deck de capacitação da 6ª edição). Registro editorial-institucional: fundo vinho/bordô profundo para
momentos de abertura e destaque, dourado como único acento, creme/off-white para superfícies de leitura.
Tipografia serifada com itálico elegante para títulos e citações, sans-serif humanista limpa para corpo
e interface. Motivos gráficos recorrentes: arcos concêntricos finos em dourado no canto de painéis
escuros, numeração circular preenchida (círculo vinho, número dourado) para sequências (jornada, etapas).

## Tokens

Definidos em `src/index.css` via `@theme` do Tailwind v4:

- `--color-wine-950` a `--color-wine-600`: fundo escuro dominante (hero, seções de impacto, rodapé).
- `--color-gold-400/500/600`: único acento — kickers, rules, CTAs, numerais.
- `--color-cream-50/100/200`: fundos claros de leitura.
- `--color-ink-900/700/500`: texto sobre fundo claro.
- `--font-display`: Playfair Display (serifada com itálico) — títulos, citações, numerais.
- `--font-sans`: Work Sans — corpo de texto, navegação, formulários.

## Components

- `GoldArcMotif` — arcos concêntricos dourados, motivo de canto reutilizado no Hero e em `PageHero`.
- `NumberBadge` — círculo vinho com numeral dourado, usado na Jornada e na jornada da participante.
- `TextLink` — CTA em texto sublinhado (nunca botão preenchido), duas tonalidades (`onDark`/`onLight`).
- `Accordion` — FAQ, acessível via `aria-expanded`/`aria-controls`.
- `MentoraCard` + `MentoraModal` — grade de perfis com modal acessível (foco automático, fecha com Esc).
- `Header`/`Footer`/`Layout`/`PageHero` — casca compartilhada entre todas as páginas.

## Content

Todo conteúdo institucional real (nome da marca, slogan, 6ª edição, as 5 etapas da Jornada LÍDERNEGRA,
os pilares da Comunidade) está em `src/data/*.ts`, separado dos componentes. Dados ainda não fornecidos
pelo usuário (nomes de mentoras, números de impacto, depoimentos, links de redes sociais) usam
placeholders explícitos no formato `[INSERIR ...]`, nunca apresentados como reais.

## Known gaps

- Nenhuma verificação visual em navegador foi possível neste ambiente (extensão Chrome indisponível).
  Recomenda-se abrir `npm run dev` e revisar manualmente em desktop e mobile antes de publicar.
- Fotografia real de mulheres negras (conforme direção de fotografia do briefing) ainda não foi
  substituída — o hero e os cards de mentoras usam composição gráfica/tipográfica no lugar de fotos.
- Formulário de inscrição não está conectado a nenhum backend/serviço externo ainda.
