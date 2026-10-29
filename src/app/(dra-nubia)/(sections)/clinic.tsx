"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import {
  ADDRESS,
  HOURS_LABEL,
  MAPS_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WAZE_URL,
} from "@/lib/site";

const outlineButton =
  "inline-flex min-h-12 items-center gap-2 rounded-full border-[1.5px] border-plum px-5 font-semibold transition-colors duration-500 ease-expo hover:bg-blush-mist";

// Recorte em forma de casinha, como as prateleiras do cantinho infantil do consultório.
const HOUSE = "polygon(50% 0, 100% 30%, 100% 100%, 0 100%, 0 30%)";

export default function Clinic() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const slow = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["6%", "-6%"]);
  const fast = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["22%", "-18%"]);

  return (
    <section id="consultorio" aria-labelledby="consultorio-titulo" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 id="consultorio-titulo" className="font-display text-h2 font-bold">
              O consultório
            </h2>
            <p className="mt-6 max-w-[32rem] text-lead text-plum-soft">
              Fica no {ADDRESS.building}, em Palmas. Tem um cantinho com brinquedos para a
              criança ficar à vontade enquanto a gente conversa.
            </p>

            <address className="mt-10 space-y-5 not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-rose" aria-hidden="true" />
                <span>
                  <strong className="font-bold">
                    {ADDRESS.building}, {ADDRESS.room}
                  </strong>
                  <br />
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.district}, {ADDRESS.city} - {ADDRESS.state}, CEP {ADDRESS.postalCode}
                </span>
              </p>
              <p className="flex gap-3">
                <Clock className="mt-1 size-5 shrink-0 text-rose" aria-hidden="true" />
                <span>{HOURS_LABEL}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-rose" aria-hidden="true" />
                <a href={PHONE_HREF} className="font-semibold underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </address>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                <MapPin className="size-5" aria-hidden="true" />
                Abrir no Google Maps
              </a>
              <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                <Navigation className="size-5" aria-hidden="true" />
                Abrir no Waze
              </a>
            </div>
          </div>

          <div ref={ref} className="relative grid grid-cols-2 gap-5 lg:col-span-6 lg:col-start-7">
            <motion.figure style={{ y: slow }} className="col-span-2 sm:col-span-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-soft bg-blush-mist">
                <Image
                  src="/fotos/consultorio-sala.jpg"
                  alt="Sala de consulta com mesa de madeira ripada, duas poltronas claras e janela com luz natural"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-plum-soft">A sala de consulta</figcaption>
            </motion.figure>
            <motion.figure style={{ y: fast }} className="col-span-2 sm:col-span-1 sm:mt-24">
              <div
                className="relative aspect-[3/4] overflow-hidden bg-blush-mist"
                style={{ clipPath: HOUSE }}
              >
                <Image
                  src="/fotos/consultorio-cantinho.jpg"
                  alt="Cantinho infantil com prateleiras em forma de casinha, mesa pequena, lápis de cor e brinquedos"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-plum-soft">O cantinho das crianças</figcaption>
            </motion.figure>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-soft border border-blush">
          <iframe
            src={MAP_EMBED_URL}
            title="Mapa do Edifício Comercial Urban Futuro, em Palmas"
            className="block h-[320px] w-full md:h-[420px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
