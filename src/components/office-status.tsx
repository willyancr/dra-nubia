"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { OFFICE_STATUS_TEXT, getOfficeStatus, type OfficeStatus } from "@/lib/site";

// Calculado só no navegador, para não divergir do HTML gerado no servidor.
export const OfficeStatusNote = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState<OfficeStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOfficeStatus());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className={cn("text-sm text-plum-soft", className)} aria-live="polite">
      {status ? OFFICE_STATUS_TEXT[status] : "A secretária responde no mesmo dia útil."}
    </p>
  );
};
