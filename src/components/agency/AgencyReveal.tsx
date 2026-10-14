"use client";

import { useEffect } from "react";

/**
 * Animación de entrada para todo lo marcado con `data-reveal`, sin framer-motion.
 * El HTML del servidor sale visible (bueno para LCP y para Google); solo después
 * de hidratar se ocultan los bloques que siguen fuera de pantalla.
 */
export function AgencyReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const fold = window.innerHeight;
    for (const el of items) {
      if (el.getBoundingClientRect().top < fold) el.classList.add("is-in");
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -5% 0px" },
    );
    for (const el of items) {
      if (!el.classList.contains("is-in")) io.observe(el);
    }
    document.documentElement.classList.add("bd-reveal-on");

    return () => io.disconnect();
  }, []);

  return null;
}
