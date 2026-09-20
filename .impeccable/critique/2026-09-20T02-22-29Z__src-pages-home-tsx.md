---
target: home
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Amanda\\Onedrive\\Documentos\\Claude\\LiderNegra\\src\\pages\\Home.tsx"
target_fingerprint: "sha256:42e2b63e07d2c41de897c83eab4946db7b64bdf98f4a5446d6a6be02239cc381"
target_path: "D:\\Amanda\\Onedrive\\Documentos\\Claude\\LiderNegra\\src\\pages\\Home.tsx"
timestamp: 2026-09-20T02-22-29Z
slug: src-pages-home-tsx
---
Method: dual-agent (A: revisão de design · B: detector e medições no navegador)

# Crítica da Home (src/pages/Home.tsx), segunda rodada

Total: 19/28 (68%, Aceitável). Heurísticas 7, 9 e 10 n/a (persuasão, sem formulário, FAQ no menu).

| # | Heurística | Nota | Problema-chave |
|---|---|---|---|
| 1 | Visibilidade do status | 2 | "Fechadas" só no último bloco |
| 2 | Correspondência com o mundo real | 3 | Jargão sem explicação (Pensamento Exponencial, SingularityU) |
| 3 | Controle e liberdade | 3 | Navegação simples |
| 4 | Consistência e padrões | 3 | "Como participar" 3 vezes com o mesmo rótulo |
| 5 | Prevenção de erros | 2 | Clique induzido sem aviso de inscrição fechada |
| 6 | Reconhecimento vs memorização | 3 | Tudo visível |
| 7 | Flexibilidade e eficiência | n/a | Persuasão |
| 8 | Estética e minimalismo | 3 | Limpa, com vazio no Hero e no Convite |
| 9 | Recuperação de erros | n/a | Sem formulário na Home |
| 10 | Ajuda e documentação | n/a | FAQ no menu |

## Veredito de especificidade: parcial, 6/10
Origem (pergunta da Vânia, retrato) é própria. A estrutura geral é a de um site institucional padrão e mostra uma só mulher. Detector: 0 achados.

## Problemas prioritários
- [P1] Status "fechadas" invisível no topo; candidata não vê elegibilidade. Fix: linha sob os botões do Hero com status e resumo de elegibilidade. Comando: clarify.
- [P1] Convite sem ação real. Fix: "Seguir no Instagram" como botão principal, "Ver como participar" como link de texto. Comando: clarify.
- [P2] Só um rosto (fundadora). Fix: foto real e autorizada; a foto de grupo depende de validar quem são as mulheres e a autorização. Comandos: layout, bolder.
- [P2] Impacto (números 36px, legendas 14px) e Jornada (coluna estreita) com peso de rodapé. Fix: números em 60px, legendas em 16px, Jornada em duas colunas. Comandos: typeset, layout.
- [P3] Subtítulo do Hero burocrático. Fix: benefício primeiro. Comando: clarify.

## Divergências A x B
A duvidou de skip link, foco, contraste e alvos de toque; B mediu: skip link e foco existem, 0 falhas de contraste, nenhum alvo do conteúdo abaixo de 44px. A citou frase da Comunidade na Home, já removida.

## Medições B
Sem overflow, sem erros de console, 1 h1, sem saltos de heading, 1 largura de contêiner (1152px), 9 tamanhos de fonte, LCP 0,44s (desktop) e 0,72s (mobile) em dev.

## Personas
- Jordan: descobre só depois do clique que a inscrição fechou.
- Riley: Convite depende de link externo sem alternativa.
- Casey: botão principal só no topo e no fim.
- Candidata: falta ver mentoras reais e saber se é elegível.

## Perguntas
1. Trocando o vinho por azul, alguém reconheceria a página como do LÍDERNEGRA?
2. Quem mais quer participar descobre no último bloco que não pode: o que a página faz por ela?
3. A promessa é uma rede: onde aparece mais de uma mulher ao mesmo tempo?
