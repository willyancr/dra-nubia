"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

// Onda do fio: repete um "S" suave a cada 120 unidades do viewBox (0 0 40 1000).
const CORD_PATH = Array.from({ length: 9 }, (_, i) => {
  const y = i * 110;
  return i === 0
    ? `M20 0C4 30 36 60 20 ${y + 110}`
    : `S4 ${y + 80} 20 ${y + 110}`;
}).join("") + "L20 1000";

// O fio do estetoscópio do logo: atravessa a página pela margem esquerda, se desenha
// conforme o scroll e termina no auscultador azul, ao lado da chamada final.
export const StethoscopeCord = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end end"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const chestScale = useTransform(drawn, [0.94, 1], [0, 1]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[clamp(6rem,12vw,10rem)] left-[max(0px,calc(50%-640px))] top-0 hidden w-12 lg:block"
    >
      <svg viewBox="0 0 40 1000" preserveAspectRatio="none" className="size-full overflow-visible">
        <motion.path
          d={CORD_PATH}
          fill="none"
          stroke="var(--color-cord)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduce ? 1 : drawn }}
        />
      </svg>
      <motion.div
        style={{ scale: reduce ? 1 : chestScale }}
        className="absolute -bottom-8 left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-full border-2 border-cord bg-sky"
      >
        <div className="size-9 rounded-full border-2 border-cord/60" />
      </motion.div>
    </div>
  );
};
