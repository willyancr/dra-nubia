"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Building2, Users, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-image-bg-about px-4  py-32">
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
              className="leading-relaxed text-muted-foreground text-zinc-900"
            >
              Olá! Sou a <strong>Dra. Núbia Carmo</strong>, médica especializada
              em Reumatologia Pediátrica, dedicada ao cuidado e bem-estar das
              crianças com doenças reumatológicas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <Stethoscope className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Médica Pediatra e Reumatopediatra CRMTO 3581/ RQE 2025 / RQE 3660
                </p>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Graduada em Pedicina pelo Centro Universitário UNIRG (2014)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Residência Médica em Pediatria pela Universidade Federal do Tocantins - UFT (2017)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Residência Médica em Reumatologia Pediátrica pela Universidade Estadual de Campinas - UNICAMP (2024)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Membro da Sociedade Brasileira de Pediatria
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Membro da Sociedade Brasileira de Reumatologia
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Professora do Curso de Medicina ITPAC PORTO
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm text-zinc-900">
                  Preceptora Voluntária do Programa de Residência Médica em Pediatria - UFT e do Internato de Medicina da UFT
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-10 w-full border-b-[1px] border-zinc-200"
            />
            {/* Doctor profile */}
            {/* <motion.div
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
                  quality={100}
                />
              </div>
              <div>
                <h4 className="font-semibold">Dra. Núbia Carmo</h4>
                <p className="text-sm text-muted-foreground">
                  Médica Reumatologista Pediátrica
                </p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
