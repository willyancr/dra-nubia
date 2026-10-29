import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Títulos: grotesca expressiva e calorosa. Texto: sans de terminais arredondados e fácil leitura.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dra. Núbia Carmo | Reumatologista Pediátrica em Palmas - TO",
  description:
    "Reumatologista pediátrica em Palmas. A Dra. Núbia Carmo investiga e acompanha doenças reumáticas em crianças e adolescentes. Agendamento pelo WhatsApp.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Dra. Núbia Carmo | Reumatologista Pediátrica",
    description: "Reumatologia pediátrica em Palmas - TO. Agendamento pelo WhatsApp.",
    images: ["/fotos/dra-nubia-sorrindo.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8C8D8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
