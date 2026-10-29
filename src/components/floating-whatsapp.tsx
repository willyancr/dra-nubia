"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useBooking } from "@/components/booking-provider";
import { WhatsappIcon } from "@/components/whatsapp-icon";

// Botão de WhatsApp que aparece depois do hero e acompanha a leitura.
export const FloatingWhatsApp = () => {
  const { whatsappUrl } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar pelo WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center gap-3 rounded-full bg-rose px-4 font-semibold text-white shadow-float transition-colors duration-500 ease-expo hover:bg-rose-deep md:bottom-8 md:right-8 md:px-6"
        >
          <WhatsappIcon className="size-6" />
          <span className="hidden md:inline">Agendar pelo WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
