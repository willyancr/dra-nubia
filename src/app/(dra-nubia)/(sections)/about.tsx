"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container px-4 py-16">
      <div className="space-y-8">
        {/* Main content grid */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left column with image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg"
          >
            <Image
              src="/about_image.png"
              alt="Doctor consulting with a young patient and parent"
              width={500}
              height={400}
              quality={100}
              className="w-full object-cover"
            />
          </motion.div>

          {/* Right column with text and services */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-3xl font-bold tracking-tight text-tertiary">
                Sobre mim
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="leading-relaxed text-muted-foreground"
            >
              Olá! Sou a <strong>Dra. Núbia</strong>, médica especializada em
              Reumatologia Pediátrica, dedicada ao cuidado e bem-estar das
              crianças com doenças reumatológicas. Meu compromisso é oferecer um
              atendimento{" "}
              <strong>humanizado, acolhedor e baseado na ciência</strong>,
              garantindo que cada pequeno paciente receba o melhor tratamento
              para uma vida mais saudável e ativa. Acredito na importância do
              diagnóstico precoce e no acompanhamento próximo às famílias, para
              que juntos possamos proporcionar mais qualidade de vida às
              crianças. Se precisar de mais informações ou quiser agendar uma
              consulta, estou à disposição!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-10 w-full border-b-[1px] border-zinc-200"
            />
            {/* Doctor profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                <Image
                  src="/image_about.jpg"
                  alt="Doctor profile"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Dra. Núbia</h4>
                <p className="text-sm text-muted-foreground">
                  Médica Reumatologista Pediátrica
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
