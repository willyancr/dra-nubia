import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container px-4 py-16">
      <div className="space-y-8">
        {/* Main content grid */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left column with image */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/about_image.png"
              alt="Doctor consulting with a young patient and parent"
              width={500}
              height={400}
              quality={100}
              className="w-full object-cover"
            />
          </div>

          {/* Right column with text and services */}

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold tracking-tight text-tertiary">
                Sobre mim
              </h3>
            </div>
            <p className="leading-relaxed text-muted-foreground">
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
            </p>

            {/* Services list */}
            {/* <ul className="space-y-4">
              {[
                "Comprehensive Evaluation",
                "Collaborative Care",
                "Personalized Treatment",
                "Ongoing Support",
              ].map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul> */}
            <div className="my-10 w-full border-b-[1px] border-zinc-200" />
            {/* Doctor profile */}
            <div className="flex items-center gap-3 pt-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
