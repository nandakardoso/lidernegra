---
target: home
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Amanda\\Onedrive\\Documentos\\Claude\\LiderNegra\\src\\pages\\Home.tsx"
target_fingerprint: "sha256:f6678e717a280f3997d570e3fedf08eb6e359202ec843dba78e4f7f946e93c8e"
target_path: "D:\\Amanda\\Onedrive\\Documentos\\Claude\\LiderNegra\\src\\pages\\Home.tsx"
timestamp: 2026-09-19T17-57-54Z
slug: src-pages-home-tsx
---
Method: dual-agent (A: revisão de design · B: detector e navegador)

# Crítica da Home (src/pages/Home.tsx)

Total: 21/32 (66%, Aceitável). Heurísticas 7 e 10 n/a (página de persuasão).

| # | Heurística | Nota | Problema-chave |
|---|---|---|---|
| 1 | Visibilidade do status | 2 | Não diz se as inscrições estão abertas |
| 2 | Correspondência com o mundo real | 3 | Jargão: frentes, pensamento exponencial |
| 3 | Controle e liberdade | 3 | WhatsApp abre em nova aba sem aviso |
| 4 | Consistência e padrões | 3 | Convite diz "Acompanhe", botão diz "Quero participar" |
| 5 | Prevenção de erros | 2 | Alvos de toque pequenos; ambiguidade sobre inscrição |
| 6 | Reconhecimento vs memorização | 3 | Quatro conjuntos de 3 a 5 itens |
| 7 | Flexibilidade e eficiência | n/a | Persuasão |
| 8 | Estética e minimalismo | 3 | Elegante mas repetitivo |
| 9 | Recuperação de erros | 2 | Sem estados de falha |
| 10 | Ajuda e documentação | n/a | Persuasão |

## Veredito de especificidade: parcial, 6/10
Origem (pergunta da Vânia, foto, filete dourado) é própria do produto. O resto segue o roteiro padrão institucional e não mostra mulheres além da fundadora. Detector: 0 achados.

## Problemas prioritários
- [P1] Convite final ambíguo: "Acompanhe as próximas inscrições" + 3 links de peso igual. Fix: um botão primário, "Apoiar" discreto, "Faça parte da rede." como título. Comandos: clarify, layout.
- [P1] Nenhum rosto além da fundadora. Fix: perfis de mentoras, citação de participante ou fotos reais e autorizadas. Comandos: shape, layout.
- [P2] Ritmo repetitivo e hierarquia plana; título duplo em Comunidade. Fix: fundir frentes e jornada, frase-gancho como H2. Comandos: layout, distill.
- [P2] 21 alvos de toque abaixo de 44px no celular; copyright do rodapé com contraste 3,43:1. Comandos: audit, adapt.
- [P3] Copy genérica em "Três frentes". Comando: clarify.

## Divergência
A avaliação A disse não haver skip link nem foco visível; a medição B mostrou que existem. Descartado.

## Personas
- Jordan: não sabe se pode se inscrever agora.
- Riley: WhatsApp em nova aba sem aviso.
- Casey: página de ~8.500px; único botão preenchido escondido no menu.
- Potencial inscrita: falta ver mentoras, critérios, custo, duração e quando abrem as inscrições.

## Perguntas
1. Sem o texto, alguém saberia que é um programa para mulheres negras?
2. Se as inscrições estão fechadas, por que o botão principal é "Quero participar"?
3. E se a página inteira tivesse o tom da origem?
