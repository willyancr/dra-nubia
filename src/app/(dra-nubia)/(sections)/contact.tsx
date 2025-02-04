"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      id="contact"
      className="mx-auto my-16 flex max-w-6xl flex-col items-center justify-between overflow-auto bg-image-bg-contact px-6 py-16 lg:flex-row"
    >
      {/* Left Side - Contact Info */}
      <motion.div
        variants={itemVariants}
        className="mb-8 text-left lg:mb-0 lg:w-1/2"
      >
        <motion.h3
          variants={itemVariants}
          className="text-lg font-semibold text-gray-900"
        >
          Contate-nos
        </motion.h3>
        <motion.h2
          variants={itemVariants}
          className="mt-2 text-3xl font-bold text-tertiary"
        >
          Entre em contato
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-gray-600">
          Estamos aqui para ajudar e responder a quaisquer perguntas que você
          possa ter sobre os cuidados do seu filho. Se você precisa de mais
          informações, quer agendar uma consulta ou simplesmente quer falar com
          alguém da nossa equipe.
        </motion.p>
        <motion.div variants={itemVariants}>
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
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        variants={itemVariants}
        className="w-full rounded-lg bg-white p-6 shadow-md lg:w-1/2"
      >
        <form className="space-y-4">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <Input placeholder="Primeiro Nome" className="p-3" />
            <Input placeholder="Sobrenome" className="p-3" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input placeholder="Digite seu email" className="p-3" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Textarea
              placeholder="Digite sua mensagem..."
              className="resize-none p-3"
              rows={4}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full bg-[#b5d5e2] text-zinc-900 transition-all hover:brightness-95"
            >
              Enviar Mensagem
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
}
