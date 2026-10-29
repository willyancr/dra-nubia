# Prompt de redesign de site (reutilizável)

Troque o que está entre [colchetes] antes de colar.

---

Quero fazer uma repaginação completa no site deste projeto. É de [PROFISSIONAL/NEGÓCIO: ex. um médico ortopedista e traumatologista], em [CIDADE]. O site deve ficar **moderno, bonito, sem cara de IA e com animações**.

## 1. Pesquise primeiro (antes de escrever código)

Busque referências, skills, exemplos e sites de inspiração nestas fontes:
- [CAMINHO das planilhas de reels/tweets salvos, se houver]
- Meus favoritos do navegador, pastas de programação e do projeto: [NAVEGADOR e PASTAS, ex. Vivaldi, arquivo `AppData/Local/Vivaldi/User Data/Default/Bookmarks`]
- Inspiração visual de layout: [LINK do template do Figma/Dribbble]

Entregue as referências em `docs/redesign-referencias.md`, separadas pelo que resolvem:
1. Como fugir da cara de IA (DESIGN.md, skills de design, checklist antes de publicar)
2. Inspiração e referência (específicas do meu nicho e galerias gerais)
3. Animações (bibliotecas, componentes, motion)
4. Componentes e visual (base de UI, cores, fontes, ícones, fundos)
5. Ferramentas para gerar o primeiro rascunho
6. Stack recomendada e ordem de trabalho

Descarte o que não serve ao projeto (finanças, vagas, edição de vídeo genérica).

## 2. Identidade visual

Use os materiais da marca que estão em `[PASTA, ex. material/]`:
- Cores oficiais e fonte da marca (use a fonte da marca no lugar de Geist/Inter; avise se a licença web precisa ser confirmada).
- A logo: se só existir em EPS/AI/CDR/PDF, **converta o vetor para SVG** (versão positiva, negativa e só o símbolo). Não use PNG borrado.
- Use o símbolo da marca como elemento gráfico do site: máscara de foto, marcador, separador e decoração em parallax.
- Fotos reais do profissional e do local. **Nunca** use fotos de banco de imagem ou geradas por IA no lugar delas; troque por ícones e ilustrações em SVG.

Escreva um `DESIGN.md` na raiz com cores (tokens), tipografia, escala, raio, sombra, motion e regras de conteúdo. Toda cor, fonte e animação nova sai dele.

## 3. Direção criativa

- Solte a criatividade: **use e abuse de SVGs, efeitos e parallax**.
- Parallax em camadas ligado ao scroll e ao mouse, linhas SVG que se desenham com a rolagem, letreiro que acelera com a velocidade do scroll, títulos que sobem palavra por palavra, contadores, hover com forma da marca crescendo.
- Uma linguagem de motion só: mesma curva (ease-out expo) e duração parecida em tudo.
- Layout editorial e assimétrico. Sem hero centralizado padrão, sem gradiente roxo, sem texto arco-íris, sem glassmorphism por padrão, sem blobs genéricos.
- Respeitar `prefers-reduced-motion` (animações desligadas e scroll suave desligado).
- Remover o que dá cara de template (componentes Aceternity reconhecíveis, textos animados coloridos).

## 4. Seções (adapte ao negócio)

Header que esconde ao descer, hero com foto em arco, barra de agendamento em poucos passos (abre o WhatsApp com a mensagem pronta, sem enviar dado a servidor), letreiro de áreas atendidas, especialidades, mapa interativo do corpo (ou equivalente do nicho), frase de manifesto que acende palavra por palavra, sobre com linha do tempo, como funciona (3 passos), local com mapa, chamada final, rodapé, botão de WhatsApp que aparece depois do hero.

## 5. Regras de conteúdo

- Sem "antes e depois", sem promessa de resultado, sem preço, sem número ou depoimento inventado. [REGRAS DO CONSELHO DA PROFISSÃO, ex. CFM]
- Registro profissional ([CRM/RQE]) visível no hero e no rodapé.
- Toda chamada de ação leva ao WhatsApp [NÚMERO] com mensagem pronta.
- Concentre dados de contato, endereço e links em um único arquivo (`src/lib/site.ts`).
- Textos só do que já existe no site ou do que eu disser. Não invente.

## 6. Stack e qualidade

- Mantenha a stack existente se ela já serve [ex. Next, Tailwind, motion]; adicione só o necessário (ex. Lenis para scroll suave).
- Um componente responsivo por seção, sem pares `hero` + `hero-mobile`. Remova arquivos e dependências que ficaram sem uso.
- Imagens com `next/image`, WebP, qualidade 90 e `sizes` corretos. Se a foto original for pequena, **avise e me diga o tamanho mínimo e o arquivo a substituir**, em vez de esticar.
- Acessibilidade: foco visível, contraste AA, rótulos, ordem de leitura.
- Teste no navegador em desktop (1280) e mobile (375): sem rolagem horizontal, sem sobreposição, sem erro no console.
- Rode tipos, lint e `next build` antes de entregar. Mantenha o Next/React em versões sem falhas de segurança.

## 7. Entrega

Responda sempre em português do Brasil. Não faça commit nem envie ao GitHub sem eu pedir. Ao terminar cada etapa, resuma o que mudou e o que ficou pendente.

## 8. Prévia para o cliente (sem tocar na produção)

Publique num **projeto novo e separado da Vercel** (ex. `[nome]-preview`), com `vercel.json` `{ "framework": "nextjs" }` e um `.vercelignore` que exclua `material/`, `docs/`, `.claude/` e `DESIGN.md`. Eu faço o login e rodo o deploy (`npx vercel@latest deploy --prod --yes`). Depois da aprovação, o redesign vai para o repositório principal e o projeto de prévia é apagado.
