"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CTA_REL, DISCOUNT_LABEL, PRICE_LABEL, ctaUrl } from "@/lib/constants";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${
        solid
          ? "border-b border-[var(--line)] bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-pad mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/brand/logo.png"
            alt="Logo Mecánica VIP Academia"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="leading-none">
            <span className="font-display block text-[1.35rem] font-extrabold tracking-tight text-[var(--ink)]">
              MECÁNICA VIP
            </span>
            <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--orange)]">
              Academia
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--muted)] lg:flex">
          <a href="#beneficios" className="no-underline hover:text-[var(--ink)]">
            Beneficios
          </a>
          <a href="#modulos" className="no-underline hover:text-[var(--ink)]">
            Programa
          </a>
          <a href="#oferta" className="no-underline hover:text-[var(--ink)]">
            Oferta
          </a>
          <a href="#faq" className="no-underline hover:text-[var(--ink)]">
            FAQ
          </a>
        </nav>
        <a
          href={ctaUrl("header")}
          rel={CTA_REL}
          className="cta-primary !min-h-11 !px-4 !text-base"
          data-event="cta_click"
          data-cta-src="header"
        >
          {DISCOUNT_LABEL} · {PRICE_LABEL}
        </a>
      </div>
    </header>
  );
}
