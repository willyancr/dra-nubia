"use client";

import Stars from "@/components/stars";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="home"
      className="bg-image-bg-home-2 relative h-[720px] w-full overflow-hidden"
      ref={ref}
    >
      <div className="container relative mx-auto flex flex-col px-4 ">
        <div className="flex flex-col items-center justify-center gap-4 space-y-8 md:flex-row md:gap-8 md:space-y-0">
          <motion.div
            className="flex w-full flex-col gap-2 md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="mb-4" variants={itemVariants}>
              <Stars />
            </motion.div>

            <motion.h1
              className="text-2xl font-medium text-tertiary"
              variants={itemVariants}
            >
              Dra. Núbia Carmo
            </motion.h1>

            <motion.p className="text-3xl font-bold" variants={itemVariants}>
              Cuidando dos pequenos com carinho e precisão médica.
            </motion.p>

            <motion.div className="text-sm" variants={itemVariants}>
              Especialista em reumatologia pediátrica, com foco na investigação
              e no acompanhamento de doenças reumatológicas em crianças.
              <motion.div
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <a href="https://wa.me/5563992819154" target="_blank">
                    <Button className="mt-4 w-fit bg-[#b5d5e2] text-zinc-900 transition-all hover:brightness-95">
                      {" "}
                      Agende a sua consulta{" "}
                      <Image
                        src="/icon_whatsapp.png"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        quality={100}
                      />
                    </Button>
                  </a>
                </motion.div>
                <Stars />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex w-full items-center justify-center md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] overflow-hidden">
              <Image
                src="/rectangle_foto1.png"
                alt="Hero"
                width={500}
                height={400}
                quality={100}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
