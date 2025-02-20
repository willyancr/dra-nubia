import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ButtonBackToTop from "@/components/button-back-to-top";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Núbia Carmo | Médica Reumatologista Pediátrica",
  description:
    "Especialista em reumatologia pediátrica, oferecendo um atendimento humanizado e personalizado para crianças com doenças reumatológicas. Agende uma consulta!",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Dra. Núbia Carmo – Reumatologista Pediátrica",
              url: "https://www.dranubiareumatopediatra.com.br",
              sameAs: ["https://www.instagram.com/dranubiareumatopediatra"],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "EndUrban Futuro - Q. 201 Sul Avenida Joaquim Teotônio Segurado, 15 - Sala 301 - Plano Diretor Sul",
                addressLocality: "Palmas",
                addressRegion: "TO",
                postalCode: "77015-200",
              },
              medicalSpecialty: "Reumatologia Pediátrica",
              physician: {
                "@type": "Physician",
                name: "Dra. Núbia Carmo",
                medicalSpecialty: "Reumatologia Pediátrica",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "EndUrban Futuro - Q. 201 Sul Avenida Joaquim Teotônio Segurado, 15 - Sala 301 - Plano Diretor Sul",
                  addressLocality: "Palmas",
                  addressRegion: "TO",
                  postalCode: "77015-200",
                },
              },
            }),
          }}
        />
      </Head>
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
