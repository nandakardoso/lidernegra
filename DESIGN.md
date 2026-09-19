---
name: LÍDERNEGRA
description: Site institucional do Programa de Mentoria LÍDERNEGRA, uma rede de mentoria e liderança para mulheres negras.
colors:
  vinho-oficial: "#722a38"
  vinho-hover: "#5f2230"
  vinho-fundo: "#4d1b27"
  vinho-claro: "#8a3446"
  dourado-luz: "#e0bd6a"
  dourado: "#c9a227"
  dourado-texto: "#86650f"
  creme: "#fbf7f0"
  creme-suave: "#f7f1e6"
  creme-profundo: "#efe4d2"
  tinta: "#211012"
  tinta-texto: "#3a2226"
  tinta-suave: "#6b4b50"
typography:
  display:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.15
  title:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: "2px"
  full: "9999px"
spacing:
  section: "96px"
  gutter: "24px"
components:
  botao-principal-escuro:
    backgroundColor: "{colors.dourado-luz}"
    textColor: "{colors.vinho-oficial}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
    height: "48px"
  botao-principal-claro:
    backgroundColor: "{colors.vinho-oficial}"
    textColor: "{colors.creme}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
    height: "48px"
  botao-principal-claro-hover:
    backgroundColor: "{colors.vinho-hover}"
---

# Design System: LÍDERNEGRA

## Overview

**Creative North Star: "O Aquilombamento"**

Uma das palavras que as participantes da 6ª edição escolheram para definir a experiência foi *aquilombamento*. O visual parte dela: o site acolhe e reúne, em vez de exibir. Fala como uma publicação séria, com a voz humana da fundadora em primeiro plano, e nunca como um folheto de programa. A identidade vem do material oficial do programa: vinho profundo, serifa itálica elegante e filete dourado.

A ausência de pessoas é o principal risco. O sistema é feito para receber rostos e vozes reais de mulheres da rede. Quando não há material real e autorizado, a página é mais curta e mais honesta, e nunca preenchida com imagens genéricas.

**Key Characteristics:**
- Vinho oficial como superfície dominante nos momentos de abertura e destaque; creme para leitura.
- Dourado como acento fino, nunca como fundo grande.
- Serifa itálica para títulos e frases-gancho; sans limpa para corpo e interface.
- Fotografia real de mulheres negras em contexto profissional, sem estereótipos.
- Nenhuma informação inventada: onde falta conteúdo real, a interface diz isso com honestidade.

## Colors

Vinho e creme sustentam a leitura; o dourado pontua. O vinho é a cor do logo do programa (#722A38).

### Primary
- **Vinho LÍDERNEGRA** (#722a38): a cor oficial da marca. Fundo do Hero, do bloco de Impacto, do rodapé e da linha do tempo; cor de títulos e do botão principal sobre fundo claro.
- **Vinho de interação** (#5f2230): hover do botão principal e numeração circular da jornada.
- **Vinho profundo** (#4d1b27) e **Vinho vivo** (#8a3446): variações de apoio, como a barra de rolagem.

### Secondary
- **Dourado luz** (#e0bd6a): kickers, numerais grandes e o botão principal sobre fundo vinho.
- **Dourado** (#c9a227): filetes, marcadores, sublinhado dos links e anel de foco.
- **Dourado de texto** (#86650f): o dourado usado como texto pequeno sobre creme, escurecido para atingir contraste AA.

### Neutral
- **Creme** (#fbf7f0): fundo padrão das páginas.
- **Creme suave** (#f7f1e6) e **Creme profundo** (#efe4d2): faixas de respiro entre seções e o bloco de fechamento.
- **Tinta** (#211012), **Tinta de texto** (#3a2226) e **Tinta suave** (#6b4b50): texto corrido sobre creme, do mais forte ao mais discreto.

### Named Rules
**The Dourado Rare Rule.** O dourado pontua, não preenche. Ele aparece em filetes, marcadores, numerais e no botão principal sobre vinho. Nunca cobre uma superfície grande.

**The Vinho Único Rule.** Existe um único vinho de marca (#722A38). Não criar variações escuras para fundos: o marrom escuro anterior foi substituído por ele.

## Typography

**Display Font:** Playfair Display (com Iowan Old Style, Georgia)
**Body Font:** Work Sans (com Helvetica Neue, Arial)

**Character:** uma serifa editorial em itálico, com autoridade e calor, sobre uma sans humanista legível. O par lembra uma publicação, não um site corporativo.

### Hierarchy
- **Display** (400 itálico, 36 a 72px, 1.1): título do Hero, um por página.
- **Headline** (400 itálico, 30 a 48px, 1.15): título de cada seção e frases-gancho, como "Uma mentoria termina. Uma rede permanece."
- **Title** (400, 20 a 24px): nomes de etapas, de pilares e de itens.
- **Body** (400, 16 a 18px, 1.65): texto corrido, com largura máxima de 65 a 75 caracteres.
- **Label** (600, 14px, tracking 0,08em, caixa alta): links de chamada em texto e kickers.

### Named Rules
**The Itálico Escasso Rule.** O itálico é a voz dos títulos e das frases-gancho, e só deles. Não usar itálico em parágrafos, e evitar dois títulos itálicos disputando a mesma seção.

## Layout

Coluna de leitura estreita (até 3xl a 5xl) dentro de contêineres de até 6xl a 7xl, com margem lateral de 24px no celular e 40px a partir de md. Seções separadas por 96px verticais. A ordem da Home segue o funil: por que existe, o programa, o impacto, a comunidade e o convite.

O menu completo aparece a partir de 1024px; abaixo disso vira um menu recolhível. Blocos longos usam divulgação progressiva: a linha do tempo da história abre por clique, e a Jornada da Home aparece resumida, com os módulos na página O programa. Alvos de toque têm pelo menos 44px de altura no celular.

## Elevation & Depth

Sem sombras. A profundidade vem de camadas tonais: vinho, creme e creme profundo alternam por seção, e filetes finos (dourado ou vinho a 15% de opacidade) separam grupos. Nenhum cartão flutuante.

### Named Rules
**The Plano Rule.** Superfícies são planas em repouso e em hover. O único estado é a mudança de cor ou a espessura do sublinhado.

## Shapes

Formas retas e editoriais. Fotografias com cantos quase retos (2px). O botão principal é a única forma arredondada por completo (pílula). O círculo preenchido é o motivo recorrente para numeração, e os arcos dourados concêntricos aparecem no canto do Hero e dos cabeçalhos de página.

## Components

### Buttons
- **Shape:** pílula (9999px), altura mínima de 48px.
- **Principal sobre vinho:** fundo dourado luz, texto vinho. Usado uma vez por bloco de chamada.
- **Principal sobre claro:** fundo vinho, texto creme; hover para o vinho de interação.
- **Secundário:** link de texto em caixa alta, sublinhado dourado de 2px com deslocamento de 8px, altura mínima de 44px.
- **Foco:** anel dourado de 2px, com deslocamento de 3 a 4px.

### Numeração circular
Círculo vinho de 56px com número em Playfair dourado. Serve para sequências reais, como as etapas da jornada.

### Linha do tempo expansível
Cada ano é um botão com `aria-expanded`: mostra o ano, um número em destaque e uma frase, e abre o texto completo e o espaço da foto da turma.

### Faixa de indicadores
Lista de definições sobre vinho, com número grande em dourado luz e rótulo curto em creme. Só recebe dados oficiais.

### Carrossel de apoiadores
Nomes ou logos em linha, sem cartões, com setas, pausa e rolagem por teclado. Não aparece enquanto a lista de apoiadores estiver vazia.

### Navegação
Cabeçalho fixo sobre creme com o logo em vinho. Cinco itens, "Área da Mentorada" como link discreto e um botão principal.

## Do's and Don'ts

### Do:
- **Do** usar o vinho #722A38 como única cor escura de marca.
- **Do** manter um único botão preenchido por bloco de chamada, e o resto como link de texto.
- **Do** dizer o estado real das inscrições onde houver uma chamada para participar.
- **Do** usar fotografia real e autorizada de mulheres negras; sem material, encurtar a página.
- **Do** qualificar dados de impacto com a origem, como "primeira turma".

### Don't:
- **Don't** inventar números, depoimentos, mentoras ou apoiadores; deixar a estrutura pronta e vazia.
- **Don't** usar sombras, cartões aninhados ou gradientes em texto.
- **Don't** repetir o mesmo bloco de "título, parágrafo e link" em sequência; variar a escala.
- **Don't** usar o dourado como texto pequeno sobre creme além do tom já escurecido (#86650f).
- **Don't** repetir listas de cinco itens em colunas em seções vizinhas.
