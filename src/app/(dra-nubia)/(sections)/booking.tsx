"use client";

import { Check } from "lucide-react";
import { useBooking } from "@/components/booking-provider";
import { OfficeStatusNote } from "@/components/office-status";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cn } from "@/lib/utils";
import { AGE_GROUPS, SYMPTOMS, VISIT_TYPES } from "@/lib/site";

const chip =
  "inline-flex min-h-11 cursor-pointer select-none items-center gap-2 rounded-full border-[1.5px] px-4 text-[0.9375rem] font-semibold transition-colors duration-500 ease-expo has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-rose";
const chipIdle = "border-blush bg-paper text-plum hover:border-rose/60 hover:bg-blush-mist";
const chipOn = "border-plum bg-blush text-plum";

const StepTitle = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <legend className="mb-4 flex items-center gap-3 font-display text-lg font-bold">
    <span className="grid size-8 place-items-center rounded-full border-2 border-cord bg-sky text-sm">
      {n}
    </span>
    {children}
  </legend>
);

// Agendamento em 3 passos: monta a mensagem e abre o WhatsApp. Nada vai para servidor.
export default function Booking() {
  const { age, setAge, visit, setVisit, symptoms, toggleSymptom, whatsappUrl } = useBooking();

  return (
    <section id="agendar" aria-labelledby="agendar-titulo" className="relative z-20 -mt-6 lg:-mt-14">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-12">
        <div className="rounded-soft border border-blush bg-paper p-6 shadow-float md:p-8 lg:p-10">
          <h2 id="agendar-titulo" className="font-display text-2xl font-bold md:text-3xl">
            Agende em três toques
          </h2>
          <p className="mt-2 max-w-[38rem] text-plum-soft">
            Escolha as opções e a mensagem já sai pronta no WhatsApp da secretária.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)_minmax(0,0.8fr)] lg:gap-10">
            <fieldset>
              <StepTitle n={1}>Para quem é?</StepTitle>
              <div className="flex flex-wrap gap-2">
                {AGE_GROUPS.map((group) => (
                  <label key={group.id} className={cn(chip, age === group.id ? chipOn : chipIdle)}>
                    <input
                      type="radio"
                      name="idade"
                      value={group.id}
                      checked={age === group.id}
                      onChange={() => setAge(group.id)}
                      className="sr-only"
                    />
                    {group.label}
                    <span className="font-normal text-plum-soft">{group.detail}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <StepTitle n={2}>O que você notou?</StepTitle>
              <div className="flex flex-wrap gap-2">
                {SYMPTOMS.map((symptom) => {
                  const on = symptoms.includes(symptom.id);
                  return (
                    <label key={symptom.id} className={cn(chip, on ? chipOn : chipIdle)}>
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggleSymptom(symptom.id)}
                        className="sr-only"
                      />
                      {on && <Check className="size-4" strokeWidth={2.5} aria-hidden="true" />}
                      {symptom.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <StepTitle n={3}>É a primeira vez?</StepTitle>
              <div className="flex flex-wrap gap-2">
                {VISIT_TYPES.map((type) => (
                  <label key={type.id} className={cn(chip, visit === type.id ? chipOn : chipIdle)}>
                    <input
                      type="radio"
                      name="consulta"
                      value={type.id}
                      checked={visit === type.id}
                      onChange={() => setVisit(type.id)}
                      className="sr-only"
                    />
                    {type.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-blush pt-8 sm:flex-row sm:items-center sm:gap-6">
            <WhatsAppButton href={whatsappUrl}>Enviar pelo WhatsApp</WhatsAppButton>
            <OfficeStatusNote className="max-w-[30rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
