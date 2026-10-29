"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Brush } from "@/components/brand/brush";
import { CREDENTIALS, ROLES, TRAINING } from "@/lib/site";

// O ano aparece contando quando entra na tela; sem JavaScript, já mostra o valor final.
const Year = ({ year }: { year: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const node = ref.current;
    const controls = animate(year - 12, year, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        node.textContent = String(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, year]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold tabular-nums text-gold-ink md:text-4xl">
      {year}
    </span>
  );
};

export default function About() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 80%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="overflow-x-clip py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="relative isolate mx-auto w-full max-w-[24rem] lg:col-span-5 lg:mx-0 lg:max-w-none">
          <div aria-hidden="true" className="absolute -left-[12%] -right-[8%] top-[18%] -z-10 h-[70%] rotate-[4deg]">
            <Brush className="size-full" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-soft bg-blush-mist">
            <Image
              src="/fotos/dra-nubia-poltrona.jpg"
              alt="Dra. Núbia Carmo sentada em uma poltrona, sorrindo, com a mão próxima ao queixo"
              fill
              quality={90}
              sizes="(min-width: 1024px) 460px, 384px"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 id="sobre-titulo" className="font-display text-h2 font-bold">
            Prazer, sou a Dra. Núbia
          </h2>
          <div className="mt-6 max-w-[38rem] space-y-5 text-lead text-plum-soft">
            <p>
              Sou pediatra e reumatologista pediátrica. Atendo em Palmas crianças e adolescentes
              com doenças reumáticas, muitas vezes de famílias que vêm de outras cidades do
              Tocantins.
            </p>
            <p>
              Doença reumática na infância costuma pedir acompanhamento por anos. Meu trabalho é
              investigar com calma, explicar cada passo para a família e seguir junto durante o
              tratamento.
            </p>
          </div>

          <ol ref={timelineRef} className="relative mt-12 space-y-8 pl-10">
            {/* Linha do tempo que se desenha com o scroll */}
            <svg
              aria-hidden="true"
              className="absolute bottom-2 left-3 top-3 w-1 overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 2 100"
            >
              <line x1="1" y1="0" x2="1" y2="100" stroke="var(--color-blush)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="var(--color-gold)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: reduce ? 1 : line }}
              />
            </svg>
            {TRAINING.map((item) => (
              <li key={item.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.15rem] top-3 size-3 rounded-full border-2 border-gold bg-paper"
                />
                <Year year={item.year} />
                <p className="mt-1 max-w-[32rem]">{item.text}</p>
              </li>
            ))}
          </ol>

          <ul className="mt-12 grid gap-x-8 gap-y-3 text-[0.9375rem] text-plum-soft sm:grid-cols-2">
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[0.9375rem]">
            <div>
              <dt className="text-plum-soft">Registro</dt>
              <dd className="font-bold">{CREDENTIALS.crm}</dd>
            </div>
            {CREDENTIALS.rqes.map((rqe) => (
              <div key={rqe.number}>
                <dt className="text-plum-soft">{rqe.specialty}</dt>
                <dd className="font-bold">{rqe.number}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
