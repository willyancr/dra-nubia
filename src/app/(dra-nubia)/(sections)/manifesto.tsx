"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Brush } from "@/components/brand/brush";

// Frase que já existia no site da Dra. Núbia.
const WORDS = "Cada criança é única, assim como seu tratamento.".split(" ");

const Word = ({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
};

// O manifesto acende palavra por palavra conforme a frase atravessa a tela.
export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });

  return (
    <section ref={ref} aria-label="Manifesto" className="relative isolate overflow-hidden py-[clamp(6rem,14vw,12rem)]">
      <div aria-hidden="true" className="absolute inset-x-[-6%] inset-y-[8%] -z-10 -rotate-1">
        <Brush className="size-full" />
      </div>
      <p className="mx-auto max-w-[1240px] px-5 font-display text-[clamp(2.5rem,1.6rem+4vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.025em] lg:px-12">
        {WORDS.map((word, index) => (
          <span key={index}>
            {reduce ? (
              word
            ) : (
              <Word
                word={word}
                progress={scrollYProgress}
                range={[index / WORDS.length, (index + 1) / WORDS.length]}
              />
            )}
            {index < WORDS.length - 1 && " "}
          </span>
        ))}
      </p>
    </section>
  );
}
