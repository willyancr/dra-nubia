"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemsHome = [
    { id: 2, title: "Sobre mim", href: "/#about" },
    { id: 3, title: "Serviços", href: "/#services" },
    { id: 4, title: "Contatos", href: "/#contact" },
    { id: 5, title: "Localização", href: "/#location" },
  ];

  return (
    <header className="w-full">
      <div className="container mx-auto flex flex-col items-center p-4 md:flex-row md:justify-between">
        <Image
          src="/logo.png"
          alt="Logo Dra. Nubia"
          width={200}
          height={75}
          quality={100}
        />

        {/* Botão para mobile */}
        <button className="mt-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegação */}
        <nav
          className={`mt-4 w-full md:mt-0 md:w-auto ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            {navItemsHome.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-lg underline-offset-4 transition-all hover:text-tertiary hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
