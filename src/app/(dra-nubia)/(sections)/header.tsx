"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { title: "O que trata", href: "#o-que-trata" },
  { title: "Sinais no corpo", href: "#sinais" },
  { title: "Sobre", href: "#sobre" },
  { title: "Consultório", href: "#consultorio" },
];

// No hero o menu fica solto no topo, com a logo maior. Depois do hero ele flutua como uma
// pílula destacada das bordas, sempre visível, e a logo volta ao tamanho menor.
export default function Header() {
  const [floating, setFloating] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setFloating(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "inset-x-0 z-50",
        floating ? "animate-header fixed top-3 px-3 sm:top-4 sm:px-5" : "absolute top-0",
        !floating && open && "bg-paper/95",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1240px]",
          floating && "rounded-[2rem] bg-paper/90 shadow-float ring-1 ring-plum/5 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-8 px-5",
            floating ? "h-[4.5rem] lg:px-8" : "h-24 lg:h-28 lg:px-12",
          )}
        >
          <a href="#inicio" className="mr-auto shrink-0" aria-label="Dra. Núbia Carmo, início">
            <Image
              src="/logo.png"
              alt="Dra. Núbia Carmo, reumatopediatra"
              width={645}
              height={365}
              loading="eager"
              className={cn("w-auto", floating ? "h-12" : "h-16 lg:h-20")}
            />
          </a>

          <nav aria-label="Seções" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.9375rem] font-semibold">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="py-2 transition-colors duration-500 ease-expo hover:text-rose">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <WhatsAppButton size="md" className="hidden sm:inline-flex">
            Agendar
          </WhatsAppButton>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <nav id="menu-mobile" aria-label="Seções" className="border-t border-blush px-5 pb-6 lg:hidden">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-3 font-display text-2xl font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-4 w-full sm:hidden" />
          </nav>
        )}
      </div>
    </header>
  );
}
