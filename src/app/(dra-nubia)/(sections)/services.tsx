import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Diagnóstico e Avaliação",
    description:
      "O diagnóstico preciso é a primeira etapa para oferecer um atendimento eficaz. Realizamos avaliações abrangentes, inclusive avaliações médicas detalhadas.",
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
      "Crianças com condições reumáticas frequentemente sentem dor crônica. Oferecemos estratégias de gerenciamento da dor para reduzir o desconforto.",
    icon: "🧑‍⚕️",
    image: "/image_service_5.png",
  },
  {
    title: "Atendimento Multidisciplinar",
    description:
      "As condições reumáticas pediátricas geralmente exigem cuidados de especialistas em várias áreas. Colaboramos com fisioterapeutas, nutricionistas",
    icon: "🧑‍⚕️",
    image: "/image_service_6.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="h-[1150px] bg-[#F6D1DC]/15 my-16 py-16 text-center ">
      <h2 className="text-3xl font-bold text-gray-900">
        Serviços <span className="text-tertiary">Oferecidos</span>
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="group relative mb-52">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              quality={100}
              className="h-64 w-full rounded-lg object-cover"
            />
            <Card className="absolute bottom-0 left-1/2 h-full w-11/12 -translate-x-1/2 translate-y-3/4 transform rounded-lg bg-white p-3 shadow-lg md:w-10/12">
              <CardContent className="text-center">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
    </section>

  );
}
