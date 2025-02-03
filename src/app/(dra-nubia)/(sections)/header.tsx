import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItemsHome = [
    { id: 1, title: "Home", href: "/#home" },
    { id: 2, title: "Sobre Mim", href: "/#about" },
    { id: 3, title: "Serviços", href: "/#services" },
    { id: 4, title: "Contatos", href: "/#contacts" },
  ];

  return (
    <header className="w-full bg-[#A7D1E6]/15">
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
                  className="transition-all hover:text-tertiary"
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
