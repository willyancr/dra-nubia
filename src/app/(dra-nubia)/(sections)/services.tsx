"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Diagnóstico e Avaliação",
    description:
      "O diagnóstico preciso e precoce é a primeira etapa para oferecer um atendimento eficaz. Realizamos avaliações abrangentes, inclusive avaliações médicas detalhadas.",
    icon: "🩺",
    image: "/image_service_1.png",
  },
  {
    title: "Planos de Tratamento Personalizados",
    description:
      "Cada criança é única, assim como seu tratamento. Com base no diagnóstico, desenvolvemos um plano de tratamento personalizado.",
    icon: "📋",
    image: "/image_service_2.png",
  },
  {
    title: "Artrite Idiopática Juvenil",
    description:
      "Como especialista no tratamento da artrite juvenil, oferecemos terapias avançadas e cuidados contínuos para ajudar a controlar os sintomas e evitar danos às articulações.",
    icon: "🧑‍⚕️",
    image: "/image_service_3.png",
  },
  {
    title: "Tratamento de doenças autoimunes",
    description:
      "Condições como lúpus, vasculite e esclerodermia exigem cuidados especializados. Oferecemos gerenciamento abrangente.",
    icon: "🧑‍⚕️",
    image: "/image_service_4.png",
  },
  {
    title: "Gestão da dor crônica",
    description:
      "Crianças com condições reumáticas frequentemente sentem dor crônica. Oferecemos estratégias de controle da dor para reduzir o desconforto e melhorar a qualidade de vida.",
    icon: "🧑‍⚕️",
    image: "/image_service_5.png",
  },
  {
    title: "Atendimento Multidisciplinar",
    description:
      "As condições reumáticas pediátricas geralmente exigem cuidados de especialistas em várias áreas. Colaboramos com fisioterapeutas, nutricionistas e psicólogos.",
    icon: "🧑‍⚕️",
    image: "/image_service_6.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="h-[1150px] bg-[#F6D1DC]/15 py-16 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900"
      >
        Serviços <span className="text-tertiary">Oferecidos</span>
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="group relative mb-52"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              quality={100}
              className="h-64 w-full rounded-lg object-cover"
            />
            <Card className="absolute bottom-0 left-1/2 h-full w-11/12 -translate-x-1/2 translate-y-3/4 transform rounded-lg bg-white p-2 shadow-lg md:w-10/12">
              <CardContent className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  className="text-4xl"
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
                  className="mt-2 text-lg font-semibold text-gray-900"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
                  className="mt-2 text-sm text-gray-600"
                >
                  {service.description}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
