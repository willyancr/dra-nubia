// Silhueta de criança em traço único, no mesmo fio cinza do estetoscópio (viewBox 300 x 600).
const mirror = (d: string) =>
  d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => `${300 - Number(x)} ${y}`);

const ARM =
  "M98 184C80 198 70 230 64 270C60 292 56 306 50 316C46 330 64 340 70 326C76 308 82 290 88 270C92 250 94 230 96 210";
const LEG =
  "M114 382C116 420 118 466 120 512C121 534 118 552 110 566C104 576 112 584 124 584L146 584C152 584 152 576 148 568C144 548 142 528 142 508C142 466 144 424 146 386";

export const ChildFigure = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 600" aria-hidden="true" className={className}>
    <g
      fill="none"
      stroke="var(--color-cord)"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {/* Cabeça, cabelo e rosto */}
      <path d="M150 40C180 40 203 64 202 94C201 124 178 146 150 146C121 146 98 122 99 92C100 62 122 40 150 40Z" />
      <path d="M104 78C116 52 150 40 178 52C190 58 198 68 200 80" />
      <path d="M136 112Q150 122 164 112" />
      <circle cx="133" cy="92" r="2.5" fill="var(--color-cord)" />
      <circle cx="167" cy="92" r="2.5" fill="var(--color-cord)" />
      {/* Pescoço e tronco */}
      <path d="M138 146L138 160M162 146L162 160" />
      <path d="M118 162C108 166 98 172 94 184L92 300C92 320 100 330 112 332L188 332C200 330 208 320 208 300L206 184C202 172 192 166 182 162C172 170 160 174 150 174C140 174 128 170 118 162Z" />
      {/* Braços */}
      <path d={ARM} />
      <path d={mirror(ARM)} />
      {/* Shorts */}
      <path d="M110 330L106 382L146 386L150 352L154 386L194 382L190 330" />
      {/* Pernas e pés */}
      <path d={LEG} />
      <path d={mirror(LEG)} />
    </g>
  </svg>
);
