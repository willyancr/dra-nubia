import Link from "next/link";
import Image from "next/image";
import RedirectMidiaSocial from "@/components/redirect-midia";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto flex flex-col justify-center px-4">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo */}
          <div className="w-full space-y-4">
            <Image
              src="/logo.png"
              alt="Logo Dra. Nubia"
              width={150}
              height={100}
              quality={100}
              className="mb-4"
            />
            <div className="w-full space-y-2">
              <div className="w-full">
                <h3 className="font-semibold">Horario de atendimento:</h3>
                <p className="text-sm">8am-6pm (63) 99281-9154</p>
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Endereço:</h3>
                <p className="text-sm">Edifício Comercial Urban Futuro</p>
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Email:</h3>
                <p className="text-sm">nubiacarmo7@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h2 className="mb-4 text-lg font-semibold">Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-tertiary hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm hover:text-tertiary hover:underline"
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover: text-sm hover:text-tertiary hover:underline"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover: text-sm hover:text-tertiary hover:underline"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/#location"
                  className="hover: text-sm hover:text-tertiary hover:underline"
                >
                  Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full">
            <h2 className="mb-4 text-lg font-semibold">Redes Sociais</h2>
            <ul className="space-y-2">
              <li>
                <RedirectMidiaSocial href="https://www.instagram.com/dranubiareumatopediatra/">
                  Instragram
                </RedirectMidiaSocial>
              </li>
              <li>
                <RedirectMidiaSocial href="https://wa.me/5563992819154">
                  Whatsapp
                </RedirectMidiaSocial>
              </li>
              <li>

                <RedirectMidiaSocial href="https://www.youtube.com">
                  YouTube
                </RedirectMidiaSocial>
              </li>
              <li>
                <RedirectMidiaSocial href="https://www.linkedin.com/in/">
                  LinkedIn
                </RedirectMidiaSocial>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#F8E2E8] pt-4 text-center text-sm opacity-50">
          <p>
            © <span className="ml-1">{new Date().getFullYear()}</span>. Todos
            os direitos reservados | Desenvolvido por{" "}
            <a
              href="https://willyancosta.vercel.app"
              target="_blank"
              className="text-tertiary"
            >
              Willyan Costa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
