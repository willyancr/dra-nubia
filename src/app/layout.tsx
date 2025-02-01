import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Nubia | Médica Reumatologista Pediátrica",
  description:
    "Especialista em reumatologia pediátrica, oferecendo um atendimento humanizado e personalizado para crianças com doenças reumatológicas. Agende uma consulta e proporcione mais qualidade de vida ao seu pequeno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
