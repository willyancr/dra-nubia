import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItemsHome = [
    { id: 1, title: "Home", href: "/#home" },
    { id: 2, title: "Sobre mim", href: "/#about" },
    { id: 3, title: "Serviços", href: "/#services" },
    { id: 4, title: "Contatos", href: "/#contact" },
    { id: 5, title: "Localização", href: "/#location" },
  ];

  return (
    <header className="w-full">
      <div className="container items-center">
        <Image
          src="/logo.png"
          alt="Logo Dra. Nubia"
          width={150}
          height={100}
          quality={100}
        />
        <nav>
          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            {navItemsHome.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="underline-offset-4 transition-all hover:text-tertiary hover:underline"
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
