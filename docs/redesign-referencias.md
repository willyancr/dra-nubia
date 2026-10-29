# Referências para o redesign v2 do site da Dra. Núbia Carmo

Reumatologia pediátrica em Palmas - TO. O público são pais preocupados, quase sempre no celular. A v2 segue o `docs/prompt-redesign.md`: site moderno, sem cara de IA, com SVG, parallax e animações.

**Fontes desta pesquisa:**
- **Favoritos do Vivaldi:** a pasta *Projetos/Nubia* e as pastas de *Programação*.
- **Planilhas** em `Desktop/posts redes socials - IA`: reels do Instagram e tweets salvos.
- **Galerias e templates:** Dribbble, Framer, Figma e Behance.
- **A v1 (Agenda de Sintomas):** o que funcionou e o que não funcionou.

Descartei o que não serve ao site: finanças, vagas, edição de vídeo genérica, Google Ads e Search Console.

## 0. O que o projeto já tem
- **Cores do logo** (`INFOS.md`): rosa `#F8C8D8`, dourado `#B38E5D`, azul claro `#A7D1E6`, branco `#FFFFFF` e cinza `#EAEAEA`. O dourado puro tem contraste 2,9:1 sobre o branco, então em texto precisa de uma versão mais escura.
- **Logo:** só existe em PNG de 645×365, com ursinhos, estetoscópio, pincelada rosa e o nome em letra cursiva dourada. Não há vetor nem fonte da marca. A pincelada vai ser redesenhada à mão em SVG para virar o símbolo do site.
- **Fotos reais** em `public/fotos/` e `fotos/`:
  - retrato sorrindo, de 7360×6264
  - retrato na poltrona, de 2048×2048
  - cantinho infantil, de 1792×2400
  - sala de consulta: a original tem 960×1280, e a versão ampliada (`Gemini_Generated_Image…jpg`) tem 1792×2390. O cliente aprovou usar a ampliada.
- **Dados centralizados** em `src/lib/site.ts`: WhatsApp, telefone, CRM-TO/RQE, endereço, horário, Maps e Waze.
- **Lição da v1:** o conceito "agenda pautada" ficou literal demais. A v2 deve ter cara de marca, não de objeto.

## 1. Como fugir da cara de IA
- **DESIGN.md antes do código:** toda cor, fonte e animação sai dele. Modelos em [styles.refero.design](http://styles.refero.design) e no repositório `VoltAgent/awesome-design-md` ([tweet do @Voxyz_ai](https://x.com/Voxyz_ai/status/2104284941437784139)). Para entender o porquê, veja o [reel do Felipe Barros](https://www.instagram.com/reel/DcaugK5h8Gb/).
- **Skills de design** (pasta *Skills/DESIGN* do Vivaldi):
  - [frontend-design](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md): já instalada no projeto.
  - [Hallmark](https://www.usehallmark.com/)
  - [taste-skill](https://github.com/leonxlnx/taste-skill)
  - [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
  - [web-design-guidelines da Vercel](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)
  - [revenue-centric-design](https://github.com/heliocosta-dev/revenue-centric-design): conversão para o WhatsApp.
- **Checklist de 20 itens antes de publicar:** [tweet do @Voxyz_ai](https://x.com/Voxyz_ai/status/2103977414711767244).
- **Os padrões a evitar:**
  - hero centralizado com médico de jaleco e bebê
  - azul hospitalar chapado
  - grade de cards iguais com foto de banco
  - gradiente roxo
  - glassmorphism
  - blobs genéricos
  - texto arco-íris

## 2. Inspiração e referência

### Da pasta *Projetos/Nubia* (Vivaldi)
- [Pediatric Rheumatologist website (Figma)](https://www.figma.com/design/YTftOkcP25YWkWRFNVqs9l/Pediatric-Rheumatologist-website): o mesmo nicho, com a ordem de seções clássica (equipe, serviços, por que escolher, depoimentos). O visual é o template azul e rosa com foto de banco, então serve como estrutura e **também como o que evitar**.
- [IVF Doctor website (Figma)](https://www.figma.com/design/yslGQ0a4Z4Bpmi4NHPCyWy/IVF-Doctor-website): site de médica com o **rosa como cor dominante** e rodapé escuro. É a melhor pista do gosto do cliente: o rosa deve ser protagonista, não detalhe.
- [Doctor's Consultation Landing Page, de Bato (Dribbble)](https://dribbble.com/shots/25320498-Doctor-s-Consultation-Landing-Page).
- [Landing page de psicóloga (Behance)](https://www.behance.net/gallery/212398503/Landing-page-for-a-psychologist-Psychology-web-site): tom calmo e pessoal.
- [Fruit Salad Health Food (Figma)](https://www.figma.com/design/Ml3rAbPLT9BIymsmmxUD9W/Fruit-Salad-Health-Food-(Community)): formas orgânicas e cor chapada.
- Pins do Pinterest: [doctors & healthcare](https://br.pinterest.com/pin/524458319124973785/) e [referência salva](https://i.pinimg.com/originals/e2/0f/40/e20f400a8a25b5f071dd99f503eeddd4.jpg).

### Pediatria e médico pessoal
- **Pediatria:**
  - [WeeKare Pediatrics](https://dribbble.com/shots/27803790-WeeKare-Pediatrics-Website-Design): criança saudável brincando, não em consultório.
  - [Pediatric Landing Page UI](https://dribbble.com/shots/26611880-Pediatric-Landing-Page-UI-Design)
- **Médico como marca pessoal:**
  - [Dr. Lauryn](https://dribbble.com/shots/26968647-Dr-Lauryn-Functional-Medicine-Mindset-Mentor-Website-Design)
  - [Mental Health Specialist](https://dribbble.com/shots/27268836-Personal-Website-for-a-Mental-Health-Specialist)
  - [Metin Cayiroglu MD](https://dribbble.com/shots/27630434-Metin-Cayiroglu-MD-Burnout-Psychiatry-Website-Design)
- **Sites reais:**
  - [Little Otter](https://www.littleotterhealth.com): como falar com pais preocupados.
  - [Hospital Infantil Sabará](https://www.hospitalinfantilsabara.org.br/)
  - [PRINTO em português](https://www.printo.it/pediatric-rheumatology/BR/intro): base técnica para os textos sobre doenças.

### Galerias gerais
- [Inspo MCP](https://inspomcp.dev/): o agente pesquisa em mais de 800 sites.
- [Mobbin](https://mobbin.com/), [Godly](https://godly.website/), [Land-book](https://land-book.com/) e [One Page Love](https://onepagelove.com/).
- Partes da página ([tweet do @iamtanzil_](https://x.com/iamtanzil_/status/2104426792006422608)): [jiro.build](http://jiro.build), [cta.gallery](http://cta.gallery), [navbar.gallery](http://navbar.gallery) e [60fps.design](http://60fps.design).

## 3. Animações
- **Base:**
  - [Motion para React](https://www.framer.com/motion/): scroll-linked, `useScroll`, `useTransform` e `useVelocity` para o letreiro.
  - [Lenis](https://lenis.darkroom.engineering/): scroll suave.
- **Linhas SVG que se desenham:** `pathLength` do Motion ligado ao scroll. Serve para a pincelada da marca, a linha do tempo e o contorno do mapa do corpo.
- **Contadores:** [NumberFlow](https://number-flow.barvian.me/examples), só com números reais, como os anos da formação.
- **Componentes animados para estudar:**
  - [React Bits](https://reactbits.dev/)
  - [Magic UI](https://magicui.design/)
  - [21st.dev](https://21st.dev/)
  - [Bencho](https://bencho.dev/blocks/slosh)
  - [Mvpblocks](https://blocks.mvp-subha.me/)
- **Fica fora:** Aceternity sem adaptação, porque tem cara reconhecível de template.
- **Ícones animados:** [itshover](https://www.itshover.com/icons).
- **Alternativas guardadas:** [GSAP](https://gsap.com/), [anime.js](https://animejs.com/) e [mo.js](https://mojs.github.io/api/), caso o Motion não dê conta de algum efeito.
- **Tutoriais de sites animados:** do Viktor Oddy com [Claude](https://x.com/viktoroddy/status/2069439811774251273) e com [Gemini](https://x.com/viktoroddy/status/2057128809930104864).
- **Regra única:** uma curva (ease-out expo) e durações parecidas. Com `prefers-reduced-motion`, tudo desliga, inclusive o Lenis.

## 4. Componentes e visual
- **Base:** [Radix UI](https://www.radix-ui.com/) para acordeão e diálogo acessíveis, e [Lucide](https://lucide.dev/) para os ícones.
- **Cores:** [Kigen](https://kigen.design/color) gera as escalas de 50 a 950 do rosa, do azul e do dourado. [Coolors](https://coolors.co/) e [Adobe Color](https://color.adobe.com/pt/create/color-wheel) servem para testar.
- **Fontes:** [Google Fonts](https://fonts.google.com/) e [fontpair.co](https://www.fontpair.co/all). Não há fonte da marca. A escolha fica no DESIGN.md e foge de Inter, Poppins e Geist.
- **Fundos e formas:** [Haikei](https://app.haikei.app/), [BGJar](https://bgjar.com/), [Get Waves](https://getwaves.io/) e [Shape Divider](https://www.shapedivider.app/). Use com moderação, porque o símbolo principal é a pincelada.
- **Ilustração:** [Storyset](https://storyset.com/) como referência de traço para a silhueta do mapa do corpo, que vai ser desenhada em SVG próprio.
- **Fotos:** [Squoosh](https://squoosh.app/) para conferir compressão e [Photoroom](https://www.photoroom.com/pt-br/ferramentas/remover-fundo-de-imagem) para recorte.
- **Carrossel**, se precisar: [Splide](https://splidejs.com/) ou [Swiper](https://swiperjs.com/demos).

## 5. Ferramentas para gerar o primeiro rascunho
- [Stitch do Google](https://stitch.withgoogle.com/): melhor que Claude e Codex para design, segundo o [tweet do Akita](https://x.com/AkitaOnRails/status/2110852270497693917).
- [v0](https://v0.dev/), [Lovable](https://lovable.dev/), [Open Design](https://open-design.ai/pt-br/), [Marver](https://marver.design/) e [Dyad](https://github.com/dyad-sh/dyad).
- **Site a partir de uma foto:** [experimento do @vedovelli74](https://x.com/vedovelli74/status/2111145004643004662). Dá para testar com a foto do cantinho infantil.
- **Planejar antes de codar:** [grill-with-docs](https://www.skills.sh/mattpocock/skills/grill-with-docs).

## 6. Stack recomendada e ordem de trabalho
- **Stack:**
  - Next.js 16.4 e React 19, já atualizados na branch `redesign/v2`.
  - Tailwind CSS 4, com os tokens no `@theme` saindo do DESIGN.md.
  - Motion e Lenis.
  - `next/image` com WebP, qualidade 90 (já liberada no `next.config.mjs`) e `sizes` corretos.
- **Ordem:**
  1. Escolher a direção visual e escrever o DESIGN.md (cores, fontes, pincelada em SVG, motion).
  2. Montar as seções: header, hero, agendamento, letreiro, o que trata, mapa do corpo, manifesto, sobre, como funciona, consultório, chamada final e rodapé.
  3. Aplicar o motion numa única passada, com redução de movimento.
  4. Rodar o checklist de 20 itens, testar em 1280 e 375px e rodar tipos, lint e build.
  5. Publicar a prévia num projeto separado da Vercel (`dra-nubia-preview`).
