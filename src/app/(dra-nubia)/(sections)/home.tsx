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
    <div id="home" className="h-[700px] w-full overflow-hidden" ref={ref}>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center gap-4 pt-8">
          <motion.div
            className="flex w-1/2 flex-col gap-2"
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
              Dra. Núbia
            </motion.h1>

            <motion.p className="text-3xl font-bold" variants={itemVariants}>
              Cuidando dos pequenos com carinho e precisão médica.
            </motion.p>

            <motion.div className="text-sm" variants={itemVariants}>
              Especialista em reumatologia pediátrica, oferecendo um atendimento
              humanizado e personalizado para crianças com doenças
              reumatológicas.
              <motion.div
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
                </motion.div>
                <Stars />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/rectangle_foto1.png"
              alt="Hero"
              width={500}
              height={400}
              quality={100}
            />
          </motion.div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
