"use client";

import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";

// Scroll suave com Lenis; com redução de movimento ativada, fica o scroll nativo.
export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -104 } });
    return () => lenis.destroy();
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};
