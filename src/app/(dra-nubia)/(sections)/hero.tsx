"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Brush } from "@/components/brand/brush";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CREDENTIALS } from "@/lib/site";

// Frase que já existia no site da Dra. Núbia.
const WORDS = "Cuidando dos pequenos com carinho e precisão médica.".split(" ");

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax em camadas: a pincelada anda devagar, a foto anda mais rápido.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const brushY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);

  // Inclinação leve seguindo o mouse (só em telas com ponteiro fino).
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(useTransform(pointerX, [-1, 1], [-10, 10]), { stiffness: 80, damping: 20 });
  const tiltY = useSpring(useTransform(pointerY, [-1, 1], [-8, 8]), { stiffness: 80, damping: 20 });
  const brushTiltX = useTransform(tiltX, (v) => v * -0.6);
  const photoRotate = useTransform(tiltY, (v) => v * 0.15);

  const handlePointer = (event: React.PointerEvent) => {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onPointerMove={handlePointer}
      className="relative overflow-hidden pb-24 pt-28 lg:pb-32 lg:pt-32"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="relative z-10 lg:col-span-7">
          {/* Como no logo: o título escrito sobre a pincelada rosa */}
          <div className="relative isolate">
            <motion.div
              style={{ y: brushY, x: brushTiltX }}
              className="absolute -inset-x-[9%] -inset-y-[16%] -z-10 -rotate-[1.5deg] sm:-inset-x-[12%]"
            >
              <Brush paint className="size-full" />
            </motion.div>

            <h1 className="max-w-[17ch] text-balance font-display text-display font-bold text-plum">
              {WORDS.map((word, index) => (
                <span key={index}>
                  <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                    <span
                      className="animate-word inline-block"
                      style={{ animationDelay: `${0.35 + index * 0.06}s` }}
                    >
                      {word}
                    </span>
                  </span>
                  {index < WORDS.length - 1 && " "}
                </span>
              ))}
            </h1>
          </div>

          <p
            className="animate-fade-up mt-12 max-w-[34rem] text-lead text-plum"
            style={{ animationDelay: "0.8s" }}
          >
            Sou a <strong className="font-bold">Dra. Núbia Carmo</strong>, reumatologista
            pediátrica em Palmas. Investigo e acompanho doenças reumáticas em crianças e
            adolescentes.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ animationDelay: "0.95s" }}
          >
            <WhatsAppButton />
            <a href="#o-que-trata" className="font-semibold underline">
              Ver o que ela trata
            </a>
          </div>

          <dl
            className="animate-fade-up mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-plum-soft"
            style={{ animationDelay: "1.1s" }}
          >
            <div>
              <dt className="sr-only">Registro no conselho</dt>
              <dd className="font-bold text-plum">{CREDENTIALS.crm}</dd>
            </div>
            {CREDENTIALS.rqes.map((rqe) => (
              <div key={rqe.number} className="flex gap-1.5">
                <dt className="font-bold text-plum">{rqe.number}</dt>
                <dd>{rqe.specialty}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          style={{ y: photoY, x: tiltX, rotateZ: photoRotate }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:col-span-5 lg:max-w-none"
        >
          {/* Fio dourado: o contorno do arco, deslocado atrás da foto */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[999px_999px_24px_24px] border-[1.5px] border-gold"
          />
          <div
            className="animate-arch relative aspect-[4/5] overflow-hidden rounded-[999px_999px_24px_24px] bg-blush-mist"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/fotos/dra-nubia-sorrindo.jpg"
              alt="Dra. Núbia Carmo sorrindo, de blazer caramelo, com as mãos apoiadas sob o queixo"
              fill
              preload
              quality={90}
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 416px, 352px"
              className="object-cover object-[50%_25%]"
            />
          </div>
          {/* Fio do estetoscópio: sai do auscultador e desce para o resto da página */}
          <svg
            aria-hidden="true"
            viewBox="0 0 120 260"
            fill="none"
            className="absolute -bottom-[15.5rem] -left-10 h-64 w-28 lg:-left-16"
          >
            <path
              d="M58 34C30 70 92 96 70 138C52 172 20 178 34 214C42 236 64 244 60 260"
              stroke="var(--color-cord)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
              className="animate-cord"
              style={{ animationDelay: "1.2s" }}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 grid size-16 place-items-center rounded-full border-2 border-cord bg-sky lg:-left-10"
          >
            <div className="size-9 rounded-full border-2 border-cord/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
