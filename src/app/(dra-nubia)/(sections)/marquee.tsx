"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { CONDITIONS } from "@/lib/site";

const ITEMS = [
  ...CONDITIONS.map((condition) => condition.name),
  "Crianças e adolescentes",
  "Palmas e interior do Tocantins",
];

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

// Pequena pincelada que separa os itens do letreiro.
const Dab = () => (
  <svg viewBox="0 0 40 20" aria-hidden="true" className="mx-6 h-4 w-8 shrink-0 text-blush md:mx-10 md:h-5 md:w-10">
    <path
      fill="currentColor"
      d="M4 6C12 2 26 3 36 5C39 8 38 13 35 15C24 18 12 17 5 15C1 13 1 8 4 6Z"
    />
  </svg>
);

// Letreiro com as áreas atendidas: anda sozinho e acelera com a velocidade do scroll.
export default function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (value) => `${wrap(-50, 0, value)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const step = -1.4 * (delta / 1000);
    baseX.set(baseX.get() + step + step * Math.abs(factor.get()));
  });

  return (
    <section aria-label="Áreas atendidas" className="overflow-hidden border-y border-gold/50 py-6 md:py-8">
      <motion.div style={{ x }} className="flex w-max items-center whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="font-display text-[clamp(1.75rem,1.2rem+2.4vw,3.25rem)] font-semibold tracking-[-0.02em]">
                  {item}
                </span>
                <Dab />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
