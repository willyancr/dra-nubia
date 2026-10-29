import Image from "next/image";
import {
  CREDENTIALS,
  EMAIL,
  HOURS_LABEL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_NUMBER,
} from "@/lib/site";

const LINKS = [
  { title: "O que trata", href: "#o-que-trata" },
  { title: "Sinais no corpo", href: "#sinais" },
  { title: "Sobre", href: "#sobre" },
  { title: "Consultório", href: "#consultorio" },
];

export default function Footer() {
  return (
    <footer className="bg-plum text-white/85">
      <div className="mx-auto max-w-[1240px] px-5 pb-28 pt-16 lg:px-12 lg:pb-12">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="inline-block rounded-soft bg-paper p-3">
              <Image
                src="/logo.png"
                alt="Dra. Núbia Carmo, reumatopediatra"
                width={645}
                height={365}
                className="h-14 w-auto"
              />
            </div>
            <dl className="mt-6 space-y-1 text-[0.9375rem]">
              <div>
                <dt className="sr-only">Registro no conselho</dt>
                <dd className="font-bold text-white">{CREDENTIALS.crm}</dd>
              </div>
              {CREDENTIALS.rqes.map((rqe) => (
                <div key={rqe.number} className="flex gap-1.5">
                  <dt className="font-bold text-white">{rqe.number}</dt>
                  <dd>{rqe.specialty}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="font-display text-lg font-bold text-white">Nesta página</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Contato</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={PHONE_HREF} className="hover:text-white hover:underline">
                  Ligar {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Instagram @dranubiareumatopediatra
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[0.9375rem]">{HOURS_LABEL}</p>
          </div>
        </div>

        <p className="mt-14 max-w-[42rem] text-[0.9375rem]">
          <strong className="font-bold text-white">Em caso de urgência</strong>, procure o
          pronto-socorro mais próximo. O WhatsApp do consultório é para agendamento.
        </p>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Dra. Núbia Carmo. Todos os direitos reservados.</p>
          <p>
            Site por{" "}
            <a
              href="https://willyancosta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Willyan Costa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
