# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript + Tailwind CSS (confirmado pelo usuário).

## Users

- **Mulheres negras** (o material oficial de história usa "mulheres negras"; validar se o público inclui "e pardas") interessadas em desenvolvimento profissional, liderança, carreira, empreendedorismo, networking, autoconhecimento, protagonismo e troca com outras mulheres. Público principal do site: potenciais inscritas na mentoria.
- **Mentoras**: mulheres profissionais que desejam compartilhar experiência e conhecimento, contribuindo para o desenvolvimento de outras mulheres.
- **Empresas e organizações**: potenciais parceiras, patrocinadoras ou apoiadoras da iniciativa.
- **Comunidade geral**: pessoas interessadas em conhecer e divulgar a iniciativa.

## Product Purpose

O site é a presença digital oficial do Programa de Mentoria LíderNegra, uma iniciativa de desenvolvimento, fortalecimento e protagonismo de mulheres negras e pardas. Ele existe para explicar o que é o programa, sua história e propósito, mostrar impacto, apresentar mentoras e mentoradas, valorizar a comunidade formada, atrair novas participantes/mentoras/apoiadores, facilitar inscrições e contato, e fortalecer a marca LíderNegra. Sucesso = a visitante entende rapidamente o que é → por que existe → como funciona → quem participa → qual impacto gera → como fazer parte, e sente vontade de fazer parte da comunidade.

## Positioning

O LíderNegra não é apresentado como "apenas" uma mentoria profissional, mas como uma rede de desenvolvimento, troca e construção de novas possibilidades entre mulheres negras e pardas — a comunidade permanece ativa além da relação formal mentora/mentorada ("Uma mentoria termina. Uma rede permanece.").

## Operating Context

- **CONFIRMADO por material real fornecido pelo usuário** (arquivo `LIDERNEGRA_LIderanca Digital Era Inteligencia vfinal-completa_compressed.pdf`, uma apresentação real de capacitação da 6ª edição, datada 27/08/2026): o programa está atualmente em sua **6ª edição**. A "Jornada LÍDERNEGRA" real tem 5 etapas:
  1. **Eu como Líder** — Fortalecer identidade, propósito e carreira (Autoconhecimento, Assessment regenerativo de carreira, Carreira e Sucesso)
  2. **Liderança e Influência** — Desenvolver competências para liderar pessoas e ampliar influência (Liderança que Inspira, Comunicação e Posicionamento, Influência e Negociação, Marca Pessoal/Marketing Profissional, LinkedIn como plataforma de protagonismo)
  3. **Pensamento Estratégico e Inovação** — Preparar para o futuro do trabalho e ambientes em transformação (Introdução ao Pensamento Exponencial, Criatividade para Soluções Inovadoras, IA e seus impactos, Liderança Digital e Futuro do Trabalho)
  4. **Gestão para Geração de Valor** — Ampliar visão financeira para autonomia e tomada de decisão (Finanças com Propósito)
  5. **Liderança em Ação** — Consolidar aprendizados em um plano de desenvolvimento (Mentoria, Plano de Desenvolvimento Individual)
  - Mais uma dimensão paralela e permanente, a **Comunidade LÍDERNEGRA**: Networking, Compartilhamento de oportunidades, Eventos e conteúdo, Apoio/conexão e aprendizado contínuo, Cursos de Instituições Apoiadoras.
- Cada edição é dividida em etapas nomeadas (ex.: a etapa "CAPACITAÇÃO" observada no material real cobre os módulos 1-4 da jornada).
- Formulário de inscrição deve estar preparado para futura integração com ferramentas externas (não especificado qual).
- **Ainda não confirmado**: critérios de elegibilidade e seleção, custo, duração total, perfis das mentoras, depoimentos e apoiadores.

## Capabilities and Constraints

- Site institucional multi-página em React + Vite, publicado no Vercel (https://lidernegra.vercel.app), com código no GitHub (nandakardoso/lidernegra). Navegação: Início, Nossa história (história, linha do tempo e impacto), O programa (jornada, comunidade e mentoras), Parcerias, FAQ, Próxima edição (/inscreva-se) e Área da Mentorada (apenas ponto de entrada, "Em breve").
- Não há formulário nem backend. Os contatos reais são WhatsApp (+55 21 97146-4241), Instagram (@lidernegraoficial) e LinkedIn (company/lidernegra), centralizados em `src/data/contato.ts`.
- **Inscrições fechadas no momento** (informado pelo usuário em 19/09/2026). Todas as chamadas para participar devem dizer isso; atualizar a FAQ e a página /inscreva-se quando o status mudar.
- Seções sem conteúdo real ficam ocultas ou mostram uma mensagem honesta, sem placeholders visíveis: Nossos Apoiadores (`src/data/apoiadores.ts`, vazia), perfis de mentoras (`src/data/mentoras.ts`, vazia) e fotos das turmas na linha do tempo (espaço reservado).
- Responsivo, acessível e com SEO: título e descrição por rota, `robots.txt`, `sitemap.xml`, imagem de compartilhamento, dados estruturados e redirecionamentos das rotas antigas (/impacto, /mentoras, /comunidade).
- Conteúdo separado do código em `src/data/`. Estrutura: components/, pages/, sections/, assets/, data/.
- Etapa 2 (futura): Área da Mentorada com login e "Minha Jornada". Não implementada.

## Brand Commitments

- Nome oficial da marca conforme material real: **LÍDERNEGRA** (wordmark uma palavra), com slogan confirmado **"Orienta, Empodera e Transforma"**.
- **Identidade visual real e confirmada** (extraída de `LIDERNEGRA_LIderanca Digital Era Inteligencia vfinal-completa_compressed.pdf`, material oficial de apresentação da 6ª edição): paleta vinho/bordô escuro profundo como cor dominante, dourado/mostarda como cor de destaque, creme/off-white para superfícies claras, preto/texto escuro para leitura sobre fundo claro. Tipografia de títulos serifada com itálico elegante (registro editorial clássico); corpo de texto em sans-serif limpa e moderna. Elementos gráficos recorrentes: arcos/linhas circulares finas em dourado no canto de slides escuros, numeração circular preenchida (círculo bordô sólido com número dourado dentro), kickers em tracked-caps dourado sobre fundo escuro, divisores em linha fina dourada.
- Esta identidade real substitui qualquer direção visual genérica anterior — deve ser preservada e estendida ao site, não substituída.
- Tom de voz: humano, acolhedor, potente, inspirador, inteligente, contemporâneo, direto. Evitar clichês de marketing genérico ("Transformando sonhos em realidade", "Juntas somos mais fortes", "Faça a diferença").
- Identidade deve evitar aparência de ONG genérica, site corporativo tradicional, template pronto, estética infantil, excesso de rosa ou excesso de elementos decorativos.
- Direção de fotografia: imagens reais (não estereotipadas) de mulheres negras em contextos profissionais, de mentoria, eventos e networking, com diversidade de idades, estilos e trajetórias. Já existem a foto da fundadora e uma foto de grupo; faltam fotos das turmas, das mentoras e de eventos. Sem material real e autorizado, não usar imagem genérica.

## Evidence on Hand

Conteúdo real fornecido pelo usuário: a história completa do programa (origem em 2018, início em 2 de agosto de 2021, fundadora Vânia Neves, 6 edições), números oficiais (24 mulheres na primeira turma, 86% e 73% da primeira turma, mais de 750 inscritas na 6ª edição, quase 200 mulheres formadas), o logo, a foto da fundadora, uma foto de grupo, os contatos e a paleta oficial (vinho #722A38).

Ainda não fornecido: critérios de elegibilidade e de seleção, custo ou gratuidade, duração total, como ser mentora, perfis das mentoras, depoimentos, lista de apoiadores, fotos das turmas e política de privacidade completa.

## Product Principles

1. Nunca inventar dados institucionais (nomes, números, depoimentos, empresas). Onde a informação real não existe, deixar a estrutura pronta e a seção oculta ou com uma mensagem honesta; nunca mostrar placeholders ao público.
2. Equilibrar emoção + credibilidade + representatividade + profissionalismo + conversão em cada seção, evitando tanto o tom corporativo genérico quanto o excesso decorativo.
3. Estruturar a navegação para que a visitante entenda rapidamente: o que é → por que existe → como funciona → quem participa → qual impacto gera → como fazer parte.
4. Priorizar conteúdo e dados desacoplados do código (data/) para facilitar atualização futura por quem não é desenvolvedor.
5. Tratar a comunidade como elemento central da proposta (não apenas a mentoria 1:1), refletindo isso em pelo menos uma seção dedicada.

## Accessibility & Inclusion

Requisito explícito do usuário: contraste adequado, navegação por teclado, labels em formulários, alt text, hierarquia correta de headings, estados de foco visíveis, respeito a `prefers-reduced-motion`.
