import Stars from "@/components/stars";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="h-[700px] w-full overflow-hidden">
      <div className="container flex flex-col">
        <div className="flex items-center justify-center gap-4 pt-8">
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <Stars />
            </div>
            <h1 className="text-2xl font-medium text-tertiary">Dra. Núbia</h1>
            <p className="text-3xl font-bold">
              Cuidando dos pequenos com carinho e precisão médica.
            </p>
            <p className="text-sm">
              Especialista em reumatologia pediátrica, oferecendo um atendimento
              humanizado e personalizado para crianças com doenças
              reumatológicas.
            </p>
            <div className="flex items-center justify-between">
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
              <Stars />
            </div>
          </div>
          <Image
            src="/rectangle_foto1.png"
            alt="Hero"
            width={500}
            height={400}
            quality={100}
          />
        </div>
        {/* <div>
          <Image
            src="/vector.png"
            alt="Hero"
            width={500}
            height={300}
            quality={100}
            className="opacity-50"
          />
        </div> */}
      </div>
      <div className=""></div>
    </div>
  );
}
