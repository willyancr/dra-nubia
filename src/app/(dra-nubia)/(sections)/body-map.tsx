"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Plus, TriangleAlert } from "lucide-react";
import { useBooking } from "@/components/booking-provider";
import { ChildFigure } from "@/components/brand/child-figure";
import { cn } from "@/lib/utils";
import { BODY_POINTS } from "@/lib/site";

// Mapa do corpo da criança: cada ponto é um pequeno auscultador; o que for incluído
// vai para a mensagem do agendamento.
export default function BodyMap() {
  const [activeId, setActiveId] = useState(BODY_POINTS[3].id);
  const { symptoms, setSymptomsIncluded } = useBooking();
  const active = BODY_POINTS.find((point) => point.id === activeId) ?? BODY_POINTS[0];
  const included = active.symptoms.every((id) => symptoms.includes(id));

  return (
    <section id="sinais" aria-labelledby="sinais-titulo" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <h2 id="sinais-titulo" className="font-display text-h2 font-bold">
            Onde os sinais costumam aparecer
          </h2>
          <p className="mt-6 max-w-[34rem] text-lead text-plum-soft">
            Toque numa parte do corpo para ver o que observar. O que você incluir entra na
            mensagem do agendamento.
          </p>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Partes do corpo">
            {BODY_POINTS.map((point) => (
              <li key={point.id}>
                <button
                  type="button"
                  aria-pressed={point.id === activeId}
                  onClick={() => setActiveId(point.id)}
                  className={cn(
                    "min-h-11 rounded-full border-[1.5px] px-4 text-[0.9375rem] font-semibold transition-colors duration-500 ease-expo",
                    point.id === activeId
                      ? "border-plum bg-blush"
                      : "border-blush hover:border-rose/60 hover:bg-blush-mist",
                  )}
                >
                  {point.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 min-h-[13rem] rounded-soft bg-sky-mist p-6 md:p-8" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-2xl font-bold">{active.label}</h3>
                <p className="mt-3 max-w-[30rem]">{active.text}</p>
                <button
                  type="button"
                  onClick={() => setSymptomsIncluded(active.symptoms, !included)}
                  className={cn(
                    "mt-6 inline-flex min-h-11 items-center gap-2 rounded-full px-5 font-semibold transition-colors duration-500 ease-expo",
                    included
                      ? "bg-plum text-white hover:bg-plum/90"
                      : "border-[1.5px] border-plum hover:bg-paper",
                  )}
                >
                  {included ? (
                    <Check className="size-4" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="size-4" strokeWidth={2.5} aria-hidden="true" />
                  )}
                  {included ? "Incluído na mensagem" : "Incluir na mensagem"}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 flex max-w-[34rem] gap-3 text-sm text-plum-soft">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              O mapa ajuda a conversar e não substitui a consulta. Febre alta com a criança muito
              abatida, falta de ar ou dor forte: procure o pronto-socorro.
            </span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] lg:col-span-6 lg:col-start-7 lg:max-w-[22rem]">
          <ChildFigure className="h-auto w-full" />
          {BODY_POINTS.map((point) => {
            const isActive = point.id === activeId;
            return (
              <button
                key={point.id}
                type="button"
                aria-label={`Ver sinais: ${point.label}`}
                aria-pressed={isActive}
                onClick={() => setActiveId(point.id)}
                style={{ left: `${(point.x / 300) * 100}%`, top: `${(point.y / 600) * 100}%` }}
                className={cn(
                  "absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-cord transition-[background-color,transform] duration-500 ease-expo hover:scale-110",
                  isActive ? "scale-110 bg-rose" : "bg-sky",
                )}
              >
                <span
                  className={cn(
                    "size-4 rounded-full border-2",
                    isActive ? "border-white/80" : "border-cord/60",
                  )}
                />
                {isActive && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-rose/30 motion-reduce:hidden" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
