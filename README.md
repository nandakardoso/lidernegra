# Site do LÍDERNEGRA

Site institucional do Programa de Mentoria LÍDERNEGRA. React + Vite + TypeScript + Tailwind CSS, publicado no Vercel.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # tsc + vite build + pré-renderização do <head> de cada página
npm run lint
```

## Onde editar o conteúdo

O conteúdo fica separado do código, em `src/data/`. Preencha só com informação confirmada pelo LÍDERNEGRA.

| Arquivo | O que controla |
|---|---|
| `contato.ts` | WhatsApp, e-mail, Instagram e LinkedIn |
| `historiaLiderNegra.ts` | História, linha do tempo e foto de "Uma jornada que continua" |
| `impacto.ts` | Números de impacto e palavras da 6ª edição |
| `jornada.ts` | As 5 etapas da jornada e a comunidade |
| `prerequisitos.ts` | Benefícios, pré-requisitos e processo de seleção |
| `faq.ts` | Perguntas frequentes |
| `mentoras.ts` | Perfis das mentoras (a seção só aparece com dados) |
| `apoiadores.ts` | Apoiadores e logos (a seção só aparece com dados) |
| `seo.json` | Título, descrição e indexação de cada página |

## Páginas

`/` · `/historia` · `/programa` · `/participar` · `/faq` · `/area-da-mentorada` · `/privacidade`.
As URLs antigas (`/sobre`, `/mentoria`, `/inscreva-se`, `/impacto`, `/comunidade`, `/mentoras`, `/parcerias`) redirecionam pelo `vercel.json`.

## Design

Veja `DESIGN.md` (sistema visual) e `PRODUCT.md` (produto e conteúdo). Componentes compartilhados em `src/components/`.
