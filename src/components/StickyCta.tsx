"use client";

import { useEffect, useState } from "react";
import { CTA_REL, DISCOUNT_LABEL, PRICE_LABEL, ctaUrl } from "@/lib/constants";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const offer = document.getElementById("oferta");
      if (!hero) return;
      const pastHero = window.scrollY > hero.offsetHeight * 0.55;
      const inOffer =
        !!offer &&
        window.scrollY + window.innerHeight > offer.offsetTop &&
        window.scrollY < offer.offsetTop + offer.offsetHeight * 0.85;
      setVisible(pastHero && !inOffer);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <div>
        <p className="m-0 text-xs font-bold uppercase tracking-wide text-[var(--orange)]">
          {DISCOUNT_LABEL} aplicado
        </p>
        <p className="price-face m-0 text-[1.75rem] leading-none text-[var(--ink)]">
          {PRICE_LABEL}
        </p>
      </div>
      <a
        href={ctaUrl("sticky")}
        rel={CTA_REL}
        className="cta-primary !min-h-11 shrink-0 !px-4 !text-base"
        tabIndex={visible ? 0 : -1}
        data-event="cta_click"
        data-cta-src="sticky"
      >
        Quiero el descuento
      </a>
    </div>
  );
}
