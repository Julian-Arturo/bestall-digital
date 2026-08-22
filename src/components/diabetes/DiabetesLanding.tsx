"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DIABETES,
  DIABETES_BENEFITS,
  DIABETES_CTA_REL,
  DIABETES_DAYS,
  DIABETES_FAQ,
  DIABETES_PILLARS,
  DIABETES_PRICE,
  DIABETES_PRICE_NOTE,
  DIABETES_REVIEWS,
  HOTMART_DISCLAIMER,
  diabetesCta,
} from "@/lib/diabetes";
import { FloatingReviews } from "@/components/diabetes/FloatingReviews";

function Cta({
  src,
  label = "Quiero empezar los 21 días",
  full = false,
}: {
  src: string;
  label?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "w-full" : ""}>
      <a
        href={diabetesCta(src)}
        rel={DIABETES_CTA_REL}
        data-event="cta_click"
        data-cta-src={src}
        className={`btn-d-cta ${full ? "w-full" : ""}`}
      >
        {label} · {DIABETES_PRICE}
      </a>
      <p className="mt-2 m-0 max-w-md text-sm text-[var(--d-muted)]">
        Acceso digital · {DIABETES_PRICE_NOTE}
      </p>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--d-line)] bg-white">
      {DIABETES_FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-[var(--d-line)] last:border-b-0">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-d-display text-xl font-bold leading-tight text-[var(--d-ink)]">
                {item.q}
              </span>
              <span className="mt-0.5 text-xl font-bold text-[var(--d-cta)]" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-[grid-template-rows] duration-300`}>
              <div className="overflow-hidden">
                <p className="m-0 px-4 pb-4 text-[var(--d-muted)] leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Sticky() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("d-hero");
      const offer = document.getElementById("d-oferta");
      if (!hero) return;
      const past = window.scrollY > hero.offsetHeight * 0.5;
      const inOffer =
        !!offer &&
        window.scrollY + window.innerHeight > offer.offsetTop &&
        window.scrollY < offer.offsetTop + offer.offsetHeight * 0.9;
      setVisible(past && !inOffer);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-[var(--d-line)] bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-200 md:inset-x-auto md:left-4 md:right-auto md:bottom-4 md:w-[380px] md:rounded-2xl md:border ${
        visible ? "translate-y-0" : "translate-y-[120%]"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <div>
        <p className="m-0 text-xs font-bold uppercase tracking-wide text-[var(--d-cta)]">
          Plan 21 días
        </p>
        <p className="m-0 text-2xl font-extrabold text-[var(--d-ink)]">{DIABETES_PRICE}</p>
      </div>
      <a
        href={diabetesCta("sticky")}
        rel={DIABETES_CTA_REL}
        tabIndex={visible ? 0 : -1}
        className="btn-d-cta !min-h-11 !px-4 !text-sm"
      >
        Empezar
      </a>
    </div>
  );
}

export function DiabetesLanding() {
  return (
    <div className="theme-diabetes min-h-screen bg-[var(--d-bg)] text-[var(--d-ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--d-line)] bg-[var(--d-bg)]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="leading-none">
            <p className="font-d-display m-0 text-lg font-extrabold tracking-tight">
              {DIABETES.shortTitle}
            </p>
            <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--d-cta)]">
              21 días
            </p>
          </div>
          <a
            href={diabetesCta("header")}
            rel={DIABETES_CTA_REL}
            className="btn-d-cta !min-h-10 !px-4 !text-sm"
          >
            Comprar · {DIABETES_PRICE}
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="d-hero" className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(31,169,113,0.16),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(15,107,76,0.1),transparent_40%)]" />
          <div className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--d-soft)] px-3 py-1 text-sm font-bold text-[var(--d-cta)]">
                  Plan de 21 días
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-[var(--d-ink)] ring-1 ring-[var(--d-line)]">
                  Pago único {DIABETES_PRICE}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-[var(--d-ink)] ring-1 ring-[var(--d-line)]">
                  Acceso digital
                </span>
              </div>

              <h1 className="font-d-display m-0 max-w-[16ch] text-[clamp(2.4rem,8vw,4.6rem)] font-extrabold leading-[1.05] tracking-tight">
                Toma el control en{" "}
                <span className="text-[var(--d-cta)]">21 días</span>
              </h1>
              <p className="mt-5 m-0 max-w-xl text-lg leading-relaxed text-[var(--d-muted)] sm:text-xl">
                {DIABETES.pitch}
              </p>
              <p className="mt-4 m-0 max-w-xl text-base font-semibold leading-relaxed text-[var(--d-ink)]">
                {DIABETES.outcome}
              </p>

              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end">
                <Cta src="hero" full />
                <div className="rounded-2xl border border-[var(--d-line)] bg-white p-4 shadow-sm sm:min-w-[200px]">
                  <p className="m-0 text-sm text-[var(--d-muted)]">Hoy</p>
                  <p className="m-0 text-4xl font-extrabold tracking-tight text-[var(--d-cta)]">
                    {DIABETES_PRICE}
                  </p>
                  <p className="m-0 mt-1 text-xs text-[var(--d-muted)]">
                    Autor: {DIABETES.author}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[28px] bg-[radial-gradient(circle_at_50%_30%,rgba(61,220,132,0.25),transparent_60%)]" />
              <div className="relative overflow-hidden rounded-[24px] border border-[var(--d-line)] bg-white p-3 shadow-[0_18px_40px_rgba(20,36,29,0.1)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--d-soft)]">
                  <Image
                    src="/brand/doctora.webp"
                    alt="Doctora — imagen ilustrativa de la campaña"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover object-[center_12%]"
                  />
                </div>
                <div className="mt-3 px-1 pb-1">
                  <p className="font-d-display m-0 text-xl font-bold text-[var(--d-ink)]">
                    Acompañamiento claro
                  </p>
                  <p className="m-0 text-sm text-[var(--d-muted)]">
                    Guía práctica · 21 días · sin dietas extremas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="border-y border-[var(--d-line)] bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-d-display m-0 text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-tight">
              No necesitas un plan imposible. Necesitas una rutina que puedas sostener.
            </h2>
            <p className="mx-auto mt-5 m-0 max-w-2xl text-lg leading-relaxed text-[var(--d-muted)]">
              {DIABETES.idealFor}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {DIABETES_PILLARS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-[var(--d-line)] bg-[var(--d-bg)] p-5"
              >
                <div className="mb-3 h-1.5 w-10 rounded-full bg-[var(--d-cta)]" />
                <h3 className="font-d-display m-0 text-2xl font-bold">
                  {p.title}
                </h3>
                <p className="mt-2 m-0 leading-relaxed text-[var(--d-muted)]">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 21 DÍAS */}
        <section className="px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-d-display m-0 text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-tight">
              Cómo se siente el recorrido
            </h2>
            <p className="mt-3 m-0 max-w-2xl text-[var(--d-muted)]">
              Tres semanas para pasar de la confusión a una rutina clara.
            </p>
            <ol className="mt-8 m-0 grid list-none gap-4 p-0 md:grid-cols-3">
              {DIABETES_DAYS.map((d, i) => (
                <li
                  key={d.range}
                  className="rounded-2xl border border-[var(--d-line)] bg-white p-5 shadow-sm"
                >
                  <p className="m-0 text-sm font-bold uppercase tracking-wide text-[var(--d-cta)]">
                    {d.range}
                  </p>
                  <p className="font-d-display mt-2 m-0 text-2xl font-bold">
                    {String(i + 1).padStart(2, "0")} · {d.title}
                  </p>
                  <p className="mt-2 m-0 text-[var(--d-muted)] leading-relaxed">{d.desc}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Cta src="recorrido" label="Quiero el plan de 21 días" />
            </div>
          </div>
        </section>

        {/* INCLUYE */}
        <section className="bg-[var(--d-soft)] px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-d-display m-0 text-[clamp(1.9rem,5vw,3rem)] font-extrabold">
              Qué recibes
            </h2>
            <ul className="mt-8 m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
              {DIABETES_BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-xl border border-[var(--d-line)] bg-white px-4 py-3"
                >
                  <span className="font-bold text-[var(--d-cta)]" aria-hidden>
                    ✓
                  </span>
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFERTA */}
        <section id="d-oferta" className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[28px] bg-[var(--d-ink)] p-6 text-white sm:p-10">
            <p className="m-0 text-sm font-bold uppercase tracking-[0.16em] text-[var(--d-mint)]">
              Oferta actual
            </p>
            <h2 className="font-d-display mt-3 mb-3 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-none">
              {DIABETES.title}
            </h2>
            <p className="m-0 max-w-xl text-white/75 leading-relaxed">
              Un pago. Empiezas hoy. Construye una rutina saludable sin complicaciones.
            </p>
            <p className="mt-8 m-0 text-5xl font-extrabold tracking-tight text-[var(--d-mint)] sm:text-6xl">
              {DIABETES_PRICE}
            </p>
            <p className="mt-2 m-0 text-sm text-white/55">{DIABETES_PRICE_NOTE}</p>
            <div className="mt-8">
              <a
                href={diabetesCta("oferta")}
                rel={DIABETES_CTA_REL}
                data-event="checkout_click"
                className="btn-d-cta w-full sm:w-auto"
              >
                Sí, quiero tomar el control · {DIABETES_PRICE}
              </a>
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <section id="reseñas" className="border-t border-[var(--d-line)] bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-d-display m-0 text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-tight">
              Lo que dicen quienes ya empezaron
            </h2>
            <p className="mt-3 m-0 max-w-2xl text-[var(--d-muted)]">
              Experiencias de personas reales con el plan de 21 días. Resultados individuales varían.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DIABETES_REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className="m-0 rounded-2xl border border-[var(--d-line)] bg-[var(--d-bg)] p-5"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={r.photo}
                      alt={r.name}
                      width={56}
                      height={56}
                      sizes="56px"
                      loading="lazy"
                      className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-white"
                    />
                    <div>
                      <figcaption className="font-d-display m-0 text-lg font-bold text-[var(--d-ink)]">
                        {r.name}
                      </figcaption>
                      <p className="m-0 text-sm text-[var(--d-muted)]">{r.place}</p>
                      <p className="m-0 text-amber-500" aria-label={`${r.rating} estrellas`}>
                        {"★".repeat(r.rating)}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-4 m-0 text-base leading-relaxed text-[var(--d-ink)]">
                    “{r.quote}”
                  </blockquote>
                </figure>
              ))}
            </div>
            <div className="mt-10">
              <Cta src="reseñas" label="Quiero empezar como ellos" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--d-line)] bg-[var(--d-soft)] px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-d-display m-0 mb-8 text-[clamp(1.9rem,5vw,3rem)] font-extrabold">
              Preguntas frecuentes
            </h2>
            <Faq />
          </div>
        </section>

        {/* CIERRE */}
        <section className="px-4 py-16 text-center sm:px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-d-display m-0 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-tight">
              Empieza hoy. 21 días para tomar el control.
            </h2>
            <div className="mt-8 flex justify-center">
              <Cta src="cierre" />
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--d-line)] bg-[var(--d-soft)] px-4 py-10 text-sm text-[var(--d-muted)] sm:px-6">
          <div className="mx-auto max-w-5xl space-y-4">
            <p className="font-d-display m-0 text-xl font-bold text-[var(--d-ink)]">
              {DIABETES.shortTitle}
            </p>
            <p className="m-0 max-w-3xl leading-relaxed">{HOTMART_DISCLAIMER}</p>
            <p className="m-0">
              Autor: {DIABETES.author}. Pago y entrega gestionados por Hotmart.{" "}
              <a
                href="https://www.hotmart.com"
                className="font-semibold text-[var(--d-cta)] underline"
              >
                Términos y Políticas de Hotmart
              </a>
              .
            </p>
            <p className="m-0 text-xs">
              Esta página es de afiliado / promoción del producto. No es consejo médico.
            </p>
          </div>
        </footer>
      </main>

      <FloatingReviews />
      <Sticky />
    </div>
  );
}
