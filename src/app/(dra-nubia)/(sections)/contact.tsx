import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="mx-auto my-16 flex max-w-6xl flex-col items-center justify-between px-6 py-16 lg:flex-row">
      {/* Left Side - Contact Info */}
      <div className="mb-8 text-left lg:mb-0 lg:w-1/2">
        <h3 className="text-lg font-semibold text-gray-900">Contate-nos</h3>
        <h2 className="mt-2 text-3xl font-bold text-tertiary">
          Entre em contato
        </h2>
        <p className="mt-4 text-gray-600">
          Estamos aqui para ajudar e responder a quaisquer perguntas que você
          possa ter sobre os cuidados do seu filho. Se você precisa de mais
          informações, quer agendar uma consulta ou simplesmente quer falar com
          alguém da nossa equipe.
        </p>
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
      </div>

      {/* Right Side - Form */}
      <div className="w-full rounded-lg bg-white p-6 shadow-md lg:w-1/2">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input placeholder="Primeiro Nome" className="p-3" />
            <Input placeholder="Sobrenome" className="p-3" />
          </div>
          <Input placeholder="Digite seu email" className="p-3" />

          <Textarea
            placeholder="Digite sua mensagem..."
            className="resize-none p-3"
            rows={4}
          />
          <Button
            type="submit"
            className="w-full bg-[#b5d5e2] text-zinc-900 transition-all hover:brightness-95"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
}
