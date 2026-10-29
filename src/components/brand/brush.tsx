import { cn } from "@/lib/utils";

interface BrushProps {
  className?: string;
  // Pinta da esquerda para a direita ao carregar (só no hero e no manifesto).
  paint?: boolean;
  delay?: number;
}

// Faixas soltas nas pontas imitam o pincel seco do logo: a tinta acaba em fiapos.
const LEFT_FINGERS = [
  { y1: 60, y2: 116, x: 30 },
  { y1: 120, y2: 172, x: 6 },
  { y1: 176, y2: 228, x: 44 },
  { y1: 232, y2: 290, x: 16 },
  { y1: 294, y2: 342, x: 58 },
  { y1: 346, y2: 380, x: 26 },
];
const RIGHT_FINGERS = [
  { y1: 54, y2: 104, x: 1150 },
  { y1: 108, y2: 164, x: 1192 },
  { y1: 168, y2: 222, x: 1136 },
  { y1: 226, y2: 284, x: 1178 },
  { y1: 288, y2: 336, x: 1128 },
  { y1: 340, y2: 376, x: 1166 },
];

const leftFinger = ({ y1, y2, x }: (typeof LEFT_FINGERS)[number]) =>
  `M${x + 10} ${y1 + 4}C${x + 40} ${y1 - 2} ${x + 90} ${y1 + 2} 140 ${y1}L140 ${y2}C${x + 80} ${y2 + 2} ${x + 30} ${y2 - 2} ${x + 4} ${y2 - 6}C${x - 4} ${y2 - 16} ${x} ${y1 + 14} ${x + 10} ${y1 + 4}Z`;

const rightFinger = ({ y1, y2, x }: (typeof RIGHT_FINGERS)[number]) =>
  `M1060 ${y1}C${x - 90} ${y1 - 2} ${x - 40} ${y1 + 3} ${x - 10} ${y1 + 5}C${x} ${y1 + 14} ${x + 4} ${y2 - 16} ${x - 6} ${y2 - 5}C${x - 36} ${y2 - 1} ${x - 90} ${y2 + 2} 1060 ${y2}Z`;

// Pincelada redesenhada a partir do logo: corpo de bordas onduladas e pontas desfiadas.
export const Brush = ({ className, paint, delay = 0 }: BrushProps) => (
  <svg
    viewBox="0 0 1200 420"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={cn("text-blush", paint && "animate-brush", className)}
    style={paint ? { animationDelay: `${delay}s` } : undefined}
  >
    <g fill="currentColor">
      <path d="M120 66C330 48 610 64 870 52C960 48 1030 54 1080 58L1084 372C900 382 640 362 420 374C290 382 190 372 116 378Z" />
      {LEFT_FINGERS.map((finger) => (
        <path key={`l${finger.y1}`} d={leftFinger(finger)} />
      ))}
      {RIGHT_FINGERS.map((finger) => (
        <path key={`r${finger.y1}`} d={rightFinger(finger)} />
      ))}
    </g>
  </svg>
);
