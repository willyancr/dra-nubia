import { Brush } from "@/components/brand/brush";
import { BookingWhatsAppButton } from "@/components/booking-whatsapp-button";
import { HOURS_LABEL } from "@/lib/site";

export default function Cta() {
  return (
    <section aria-labelledby="cta-titulo" className="relative isolate overflow-hidden py-[clamp(6rem,12vw,10rem)]">
      <div aria-hidden="true" className="absolute inset-x-[-4%] inset-y-[6%] -z-10 rotate-1">
        <Brush className="size-full" />
      </div>
      <div className="mx-auto max-w-[1240px] px-5 lg:px-12">
        <h2 id="cta-titulo" className="max-w-[16ch] font-display text-h2 font-bold">
          Vamos conversar sobre a saúde do seu filho?
        </h2>
        <p className="mt-6 max-w-[34rem] text-lead">
          A secretária responde no mesmo dia útil. {HOURS_LABEL}.
        </p>
        <BookingWhatsAppButton className="mt-10" />
      </div>
    </section>
  );
}
