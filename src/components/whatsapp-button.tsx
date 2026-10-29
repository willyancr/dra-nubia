import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site";
import { WhatsappIcon } from "@/components/whatsapp-icon";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  size?: "md" | "lg";
}

// Toda chamada de ação do site leva ao WhatsApp com a mensagem pronta.
export const WhatsAppButton = ({
  children = "Agendar pelo WhatsApp",
  href = buildWhatsAppUrl(),
  className,
  size = "lg",
}: WhatsAppButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-rose font-semibold text-white",
      "transition-[background-color,transform] duration-500 ease-expo hover:-translate-y-0.5 hover:bg-rose-deep active:translate-y-0",
      size === "lg" ? "min-h-14 px-7 text-base md:text-lg" : "min-h-11 px-5 text-[0.9375rem]",
      className,
    )}
  >
    <WhatsappIcon className={size === "lg" ? "size-5" : "size-4"} />
    <span>{children}</span>
  </a>
);
