import { OfficeStatusNote } from "@/components/office-status";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PROCESS_STEPS } from "@/lib/site";

// Número dentro de um círculo feito à mão, no traço do estetoscópio.
const HandNumber = ({ n }: { n: number }) => (
  <span className="relative grid size-16 shrink-0 place-items-center font-display text-2xl font-bold">
    <svg viewBox="0 0 64 64" aria-hidden="true" className="absolute inset-0 size-full">
      <path
        d="M32 5c15.4-.4 27.2 11.4 26.8 26.6-.4 15-12.1 27-27.2 26.8C16.4 58.2 4.8 46.3 5.2 31.5 5.5 16.9 17.8 6.3 34.4 7"
        fill="var(--color-paper)"
        stroke="var(--color-cord)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
    <span className="relative">{n}</span>
  </span>
);

export default function Process() {
  return (
    <section aria-labelledby="como-titulo" className="bg-sky-mist py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-12">
        <h2 id="como-titulo" className="max-w-[18ch] font-display text-h2 font-bold">
          Como funciona
        </h2>

        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-5 md:flex-col">
              <HandNumber n={index + 1} />
              <div>
                <h3 className="font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 max-w-[30rem] text-plum-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <WhatsAppButton />
          <OfficeStatusNote />
        </div>
      </div>
    </section>
  );
}
