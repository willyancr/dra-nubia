import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ButtonBackToTop from "@/components/button-back-to-top";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Núbia Carmo | Médica Reumatologista Pediátrica",
  description:
    "Especialista em reumatologia pediátrica, oferecendo um atendimento humanizado e personalizado para crianças com doenças reumatológicas. Agende uma consulta!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} mx-auto max-w-[1200px] bg-[#A7D1E6]/15 antialiased sm:px-6`}
      >
        {children}
        <ButtonBackToTop />
        <Analytics />
      </body>
    </html>
  );
}
