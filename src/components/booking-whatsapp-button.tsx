"use client";

import { useBooking } from "@/components/booking-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";

// Botão de WhatsApp que leva junto o que os pais já escolheram no agendamento e no mapa.
export const BookingWhatsAppButton = (
  props: Omit<React.ComponentProps<typeof WhatsAppButton>, "href">,
) => {
  const { whatsappUrl } = useBooking();
  return <WhatsAppButton {...props} href={whatsappUrl} />;
};
