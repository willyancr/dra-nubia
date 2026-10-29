# DESIGN.md: Dra. Núbia Carmo (v2, "Pincelada rosa")

Toda cor, fonte, espaçamento e animação do site sai deste arquivo. Os tokens ficam no `@theme` de `src/app/globals.css`. Se for preciso algo fora daqui, atualize este arquivo primeiro.

## Ideia
O site é a marca da Dra. Núbia em movimento. A **pincelada rosa** do logo é o chão onde o texto se apoia, como o nome dela no logo. O **traço do estetoscópio**, um fio cinza feito à mão, atravessa a página inteira, se desenha com o scroll e termina no auscultador azul, na chamada final. Esse traço é o elemento memorável. O resto fica calmo, branco e legível.

## Cores
| Token | Hex | Uso |
|---|---|---|
| `paper` | `#FFFFFF` | Fundo base. Branco puro, sem creme. |
| `blush` | `#F8C8D8` | Pincelada e campos grandes de seção. É a cor da marca. |
| `blush-mist` | `#FDEEF3` | Campos suaves e hover. |
| `rose` | `#B23A68` | Botões, links e foco. Texto branco sobre ele: 5,8:1. |
| `rose-deep` | `#8E2A51` | Hover do `rose`. |
| `plum` | `#33242F` | Todo o texto e o rodapé. Sobre o branco: 14:1. Sobre o `blush`: 10:1. |
| `plum-soft` | `#634F5E` | Texto secundário. Sobre o branco: 7,5:1. Sobre o `blush`: 5,1:1. |
| `sky` | `#A7D1E6` | Azul do estetoscópio: auscultador, campo da seção "como funciona" e marcadores. |
| `sky-mist` | `#E6F2F8` | Campo azul suave. |
| `gold` | `#B38E5D` | Só fios e detalhes decorativos, nunca texto (contraste de 2,9:1). |
| `gold-ink` | `#8A6A3E` | Dourado para texto pequeno, como os anos da linha do tempo (4,8:1). |
| `cord` | `#8C8189` | O traço do estetoscópio. |

Regras de cor:
- O rosa é protagonista. Os campos `blush` ocupam regiões inteiras (hero, manifesto, chamada final), não só detalhes.
- O `rose` é a única cor de ação. Todo botão de WhatsApp usa `rose`.
- O azul aparece só onde lembra o estetoscópio. O dourado só em fios.

## Tipografia
- **Bricolage Grotesque** nos títulos, pesos 600 a 800, com tracking levemente fechado (-0.02em) nos tamanhos grandes.
- **Nunito Sans** no texto, pesos 400 a 700.
- **Escala**, com razão de cerca de 1,25 e `clamp()` entre 375px e 1440px:
  - display: 3rem a 5.5rem, leading 1.0
  - h2: 2.25rem a 3.5rem, leading 1.05
  - h3: 1.375rem a 1.625rem
  - lead: 1.125rem a 1.25rem, leading 1.6
  - body: 1rem a 1.0625rem, leading 1.65
  - small: 0.875rem
- **Medida:** texto corrido com no máximo 38rem, entre 65 e 75 caracteres.
- **Proibido:**
  - CAIXA ALTA em rótulos
  - eyebrow acima de título
  - uma palavra destacada em outra cor dentro de título
  - "→" no texto de botão
  - meta-informação separada por pontos
- **Exceção da CAIXA ALTA:** só a palavra "REUMATOPEDIATRA" do próprio logo, que é imagem.

## Forma e espaço
- **Raios:**
  - `pill` (9999px): botões.
  - `arch`: fotos com o topo em arco (`border-radius: 999px 999px 24px 24px`).
  - `soft` (20px): o bloco de agendamento.
  - Nada mais é arredondado.
- **Sombra:** só no bloco de agendamento e no botão flutuante: `0 24px 48px -24px rgb(51 36 47 / 0.35)`. O resto fica plano.
- **Espaço:** escala de 4px. As seções usam padding vertical de `clamp(5rem, 10vw, 9rem)`, e o conteúdo tem no máximo 1240px, com gutter de 20px no mobile e 48px no desktop.
- **Layout:** sempre alinhado à esquerda e assimétrico. Nada de hero centralizado nem de grade de cards iguais.

## Símbolos da marca (SVG próprios, em `src/components/brand/`)
- **Pincelada** (`brush.tsx`): faixa de pincel seco com bordas irregulares e fiapos nas pontas, redesenhada a partir do logo. Usos:
  - chão do título no hero e no manifesto
  - máscara de foto
  - divisor entre seções
  - marcador da lista do que ela trata
- **Fio do estetoscópio** (`cord.tsx`): traço cinza fino e ondulado, com espessura de 2px e ponta arredondada. Atravessa a página e termina no auscultador (círculo `sky` com contorno `cord`).
- **Arco:** máscara da foto principal.
- **O que não entra:** ursinhos e emoji. Os ícones são Lucide, com traço de 1.75.

## Motion
- **Uma curva só:** ease-out expo, `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Durações:**
  - 0.9s para entradas
  - 0.5s para hover e estados
  - a pincelada se pinta em 1.2s
- **Momentos:**
  1. **Ao carregar o hero:** a pincelada se pinta da esquerda para a direita, o título sobe palavra por palavra e a foto entra no arco.
  2. **O fio do estetoscópio** se desenha conforme o scroll, com `pathLength` ligado ao progresso da página.
  3. **Parallax em camadas:** pincelada, foto e formas se movem em velocidades diferentes com o scroll e se inclinam levemente com o mouse no desktop.
  4. **O letreiro** acelera com a velocidade do scroll.
  5. **O manifesto** acende palavra por palavra.
  6. **A linha do tempo** se desenha, e os anos aparecem com contador.
  7. **No hover**, a pincelada cresce atrás do item.
- **Scroll suave** com Lenis.
- **`prefers-reduced-motion`:** tudo fica estático e visível, o Lenis desliga e o fio aparece inteiro.
- **Sem JavaScript**, o conteúdo continua visível. Nada começa com opacidade 0 no HTML do servidor.

## Conteúdo
- **Textos:** só o que já existe no site, os textos factuais revisados da v1 (sinais, condições e etapas da consulta) ou o que o cliente passar.
- **CFM:**
  - sem promessa de resultado, sem "antes e depois", sem preço
  - sem número ou depoimento inventado
  - CRM-TO e os dois RQEs, rotulados por especialidade, no hero e no rodapé
- **Ações:** toda chamada leva ao WhatsApp com a mensagem pronta (`src/lib/site.ts`).
- **Fotos:** só reais (a dela e as do consultório). Nada de banco de imagem nem foto gerada por IA. A foto da sala ampliada foi aprovada pelo cliente.
