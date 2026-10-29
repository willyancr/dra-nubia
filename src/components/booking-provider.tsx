"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/site";

type BookingContextValue = {
  age?: string;
  visit?: string;
  symptoms: string[];
  setAge: (age: string) => void;
  setVisit: (visit: string) => void;
  toggleSymptom: (id: string) => void;
  // Usado pelo mapa do corpo: inclui ou retira de uma vez os sinais de uma região.
  setSymptomsIncluded: (ids: string[], included: boolean) => void;
  message: string;
  whatsappUrl: string;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [age, setAge] = useState<string>();
  const [visit, setVisit] = useState<string>();
  const [symptoms, setSymptoms] = useState<string[]>([]);

  const toggleSymptom = useCallback((id: string) => {
    setSymptoms((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }, []);

  const setSymptomsIncluded = useCallback((ids: string[], included: boolean) => {
    setSymptoms((current) =>
      included
        ? Array.from(new Set([...current, ...ids]))
        : current.filter((item) => !ids.includes(item)),
    );
  }, []);

  const value = useMemo(() => {
    const choices = { age, visit, symptoms };
    return {
      age,
      visit,
      symptoms,
      setAge,
      setVisit,
      toggleSymptom,
      setSymptomsIncluded,
      message: buildWhatsAppMessage(choices),
      whatsappUrl: buildWhatsAppUrl(choices),
    };
  }, [age, visit, symptoms, toggleSymptom, setSymptomsIncluded]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking precisa estar dentro de BookingProvider");
  return context;
};
