import Header from "./header";
import Hero from "./hero";
import Booking from "./booking";
import Marquee from "./marquee";
import Treats from "./treats";
import BodyMap from "./body-map";
import Manifesto from "./manifesto";
import About from "./about";
import Process from "./process";
import Clinic from "./clinic";
import Cta from "./cta";
import Footer from "./footer";
import { BookingProvider } from "@/components/booking-provider";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { StethoscopeCord } from "@/components/brand/cord";
import { ADDRESS, CREDENTIALS, EMAIL, INSTAGRAM_URL, PHONE_DISPLAY, SITE_URL } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Núbia Carmo",
  description: "Reumatologista pediátrica em Palmas - TO",
  url: SITE_URL,
  image: `${SITE_URL}/fotos/dra-nubia-sorrindo.jpg`,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  sameAs: [INSTAGRAM_URL],
  medicalSpecialty: ["Pediatric", "Rheumatologic"],
  identifier: [CREDENTIALS.crm, ...CREDENTIALS.rqes.map((rqe) => rqe.number)],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.building}, ${ADDRESS.room}, ${ADDRESS.street}, ${ADDRESS.district}`,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.postalCode,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
  ],
};

export default function Sections() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <Booking />
        {/* O fio do estetoscópio atravessa daqui até a chamada final */}
        <div className="relative">
          <StethoscopeCord />
          <Marquee />
          <Treats />
          <BodyMap />
          <Manifesto />
          <About />
          <Process />
          <Clinic />
          <Cta />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </BookingProvider>
  );
}
