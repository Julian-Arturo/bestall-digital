"use client";

/*
  Bestall Digital — conversion agency landing.
  Structure inspired by high-converting agency landings; own colors & copy.
*/

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AGENCY,
  FAQS,
  PAINS,
  PRICE_BULLETS,
  PROCESS,
  REVIEWS,
  SERVICE_PERKS,
  SERVICES,
  SHOWCASES,
  STATS,
  TRUST,
  waUrl,
} from "@/lib/agency";
import { AgencyCursorLight } from "./AgencyCursorLight";
import { AgencyLeadModal } from "./AgencyLeadModal";

const ease = [0.22, 1, 0.36, 1] as const;

function Chevron({ dir }: { dir: "l" | "r" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "l" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AgencyLanding() {
  const reduce = useReducedMotion();
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollRow = useCallback(
    (ref: { current: HTMLDivElement | null }, dir: -1 | 1) => {
      const el = ref.current;
      if (!el) return;
      el.scrollBy({
        left: dir * Math.min(el.clientWidth * 0.75, 360),
        behavior: "smooth",
      });
    },
    [],
  );

  return (
    <div className="bd-root">
      <AgencyCursorLight />
      <a className="bd-skip" href="#contacto">
        Ir al contacto
      </a>

      <header className="bd-nav">
        <Link href="/" className="bd-brand">
          <Image
            src={AGENCY.mark}
            alt=""
            width={36}
            height={36}
            className="bd-mark"
            priority
          />
          <span>bestall</span>
        </Link>
        <nav aria-label="Principal">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#casos">Proyectos</a>
          <a href="#proceso">Proceso</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="bd-btn bd-btn-sm" href={waUrl()}>
          Cotizar ahora
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="bd-hero">
          <div className="bd-hero-grid">
            <div className="bd-hero-copy">
              <p className="bd-pill">¿Te suena familiar?</p>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
              >
                Inviertes… y el teléfono{" "}
                <span>no suena</span>.
              </motion.h1>
              <motion.p
                className="bd-lead"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.55, ease }}
              >
                Si ya pagaste anuncios, una página o “presencia digital” y siguen
                sin llegar clientes, el problema no es otro logo. Es falta de
                sistema: mensaje, tráfico, conversión y seguimiento. Bestall
                arma eso — Marketing · Tecnología · Crecimiento.
              </motion.p>
              <motion.div
                className="bd-actions"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.5, ease }}
              >
                <a className="bd-btn" href={waUrl()}>
                  Quiero que me escriban
                </a>
                <a className="bd-btn-ghost" href="#servicios">
                  Ver cómo lo resolvemos
                </a>
              </motion.div>
            </div>

            <motion.div
              className="bd-hero-stage"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease }}
            >
              <div className="bd-device bd-device-desk">
                <div className="bd-device-chrome" aria-hidden>
                  <i />
                  <i />
                  <i />
                </div>
                <div className="bd-device-screen">
                  <Image
                    src={AGENCY.heroDesk}
                    alt="Ejemplo de landing de conversión — Mecánica VIP"
                    fill
                    sizes="(max-width: 900px) 90vw, 480px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div className="bd-device bd-device-phone">
                <div className="bd-device-screen">
                  <Image
                    src={AGENCY.heroPhone}
                    alt="Ejemplo móvil — programa de bienestar"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="bd-device bd-device-float">
                <div className="bd-device-screen">
                  <Image
                    src={AGENCY.heroStrip}
                    alt="Proyectos Bestall: taller, reunión y bienestar"
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <ul className="bd-trust">
            {TRUST.map((t, i) => (
              <motion.li
                key={t.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease }}
              >
                <span className="bd-trust-n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{t.title}</strong>
                <p>{t.desc}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* PRICE BAND */}
        <section className="bd-price" aria-labelledby="precio-title">
          <div className="bd-price-inner">
            <div>
              <p className="bd-price-kicker">Inversión según lo que necesitas</p>
              <h2 id="precio-title">
                Proyectos desde{" "}
                <span>{AGENCY.priceFrom} COP</span>
              </h2>
              <p className="bd-price-note">
                La página web es solo uno de siete servicios. Cotizamos packs de
                tráfico, apps, automatización o acompañamiento.
              </p>
            </div>
            <ul>
              {PRICE_BULLETS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className="bd-btn"
              href={waUrl(
                "Hola Bestall 👋 Quiero cotizar. No solo página: les cuento qué necesito.",
              )}
            >
              Cotizar mi caso
            </a>
          </div>
        </section>

        {/* PAINS */}
        <section id="dolor" className="bd-section">
          <div className="bd-head">
            <p className="bd-kicker">¿Te identificas?</p>
            <h2>
              Tu negocio probablemente está{" "}
              <span>perdiendo clientes</span> si…
            </h2>
          </div>
          <div className="bd-pains">
            {PAINS.map((p, i) => (
              <motion.article
                key={p.title}
                className="bd-pain"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ delay: i * 0.05, duration: 0.45, ease }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="bd-section bd-section-soft">
          <div className="bd-head bd-head-row">
            <div>
              <p className="bd-kicker">Nuestros servicios</p>
              <h2>
                Siete formas de crecer —{" "}
                <span>no solo una página web</span>
              </h2>
              <p className="bd-sub">
                Marketing, tecnología y crecimiento: eliges el frente o armamos
                el pack. Páginas, tráfico, apps, automatización, partner e
                influencers.
              </p>
            </div>
            <div className="bd-car-nav">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => scrollRow(servicesRef, -1)}
              >
                <Chevron dir="l" />
              </button>
              <button
                type="button"
                aria-label="Siguiente"
                onClick={() => scrollRow(servicesRef, 1)}
              >
                <Chevron dir="r" />
              </button>
            </div>
          </div>

          <div className="bd-carousel" ref={servicesRef}>
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.code}
                className="bd-service"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease }}
              >
                <span className="bd-service-code">{s.code}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href={s.href.startsWith("/") ? s.href : s.href}>
                  Más información →
                </a>
                <div className="bd-service-media">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              </motion.article>
            ))}
          </div>

          <ul className="bd-perks">
            {SERVICE_PERKS.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* LIVE CASES */}
        <section id="casos" className="bd-section">
          <div className="bd-head">
            <p className="bd-kicker">Proyectos reales</p>
            <h2>
              Entra y siente el nivel —{" "}
              <span>no son demos inventadas</span>
            </h2>
          </div>
          <div className="bd-cases">
            {SHOWCASES.map((item, i) => (
              <motion.div
                key={item.href}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
              >
                <Link href={item.href} className="bd-case">
                  <div className="bd-case-media">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="bd-case-body">
                    <p className="bd-case-tag">{item.result}</p>
                    <h3>{item.title}</h3>
                    <p className="bd-case-sub">{item.subtitle}</p>
                    <p>{item.blurb}</p>
                    <span>Ver cómo se siente →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="bd-section bd-section-soft" id="resenas">
          <div className="bd-head bd-head-row">
            <div>
              <p className="bd-kicker">Resultados reales</p>
              <h2>
                Clientes que confiaron en Bestall para{" "}
                <span>crecer</span>
              </h2>
              <p className="bd-sub">
                Negocios que necesitaban más que una página bonita: claridad,
                contactos y ventas.
              </p>
            </div>
            <div className="bd-car-nav">
              <button
                type="button"
                aria-label="Anterior reseñas"
                onClick={() => scrollRow(reviewsRef, -1)}
              >
                <Chevron dir="l" />
              </button>
              <button
                type="button"
                aria-label="Siguiente reseñas"
                onClick={() => scrollRow(reviewsRef, 1)}
              >
                <Chevron dir="r" />
              </button>
            </div>
          </div>

          <div className="bd-reviews" ref={reviewsRef}>
            {REVIEWS.map((r, i) => (
              <motion.blockquote
                key={r.name}
                className="bd-review"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05, duration: 0.4, ease }}
              >
                <div className="bd-stars" aria-label="5 de 5">
                  ★★★★★
                </div>
                <p>“{r.quote}”</p>
                <footer>
                  <Image
                    src={r.photo}
                    alt=""
                    width={44}
                    height={44}
                    className="bd-avatar"
                  />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          <ul className="bd-stats">
            {STATS.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PROCESS */}
        <section id="proceso" className="bd-section">
          <div className="bd-head bd-head-row">
            <div>
              <p className="bd-kicker">Así trabajamos</p>
              <h2>
                Nuestro proceso — del dolor a un{" "}
                <span>sistema que vende</span>
              </h2>
            </div>
          </div>
          <ol className="bd-process">
            {PROCESS.map((step, i) => (
              <motion.li
                key={step.title}
                className={i === 1 ? "bd-process-accent" : undefined}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease }}
              >
                <span>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="bd-section bd-section-soft">
          <div className="bd-head">
            <p className="bd-kicker">Preguntas frecuentes</p>
            <h2>
              Resolvemos tus dudas sobre{" "}
              <span>precio, alcance y resultados</span>
            </h2>
          </div>
          <div className="bd-faq">
            {FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className={`bd-faq-item${open ? " is-open" : ""}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{item.q}</span>
                    <i aria-hidden>{open ? "−" : "+"}</i>
                  </button>
                  {open ? <p>{item.a}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contacto" className="bd-final">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <h2>¿Listo para conseguir más clientes?</h2>
            <p>
              Cuéntanos qué vendes y qué te duele. En la primera conversación te
              decimos si podemos ayudarte — y cómo.
            </p>
            <div className="bd-actions bd-actions-center">
              <a className="bd-btn" href={waUrl()}>
                Hablar por WhatsApp
              </a>
              <a className="bd-btn-ghost" href="#servicios">
                Ver planes
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bd-foot">
        <div className="bd-foot-brand">
          <Image src={AGENCY.mark} alt="" width={36} height={36} />
          <div>
            <strong>{AGENCY.name}</strong>
            <span>{AGENCY.tagline}</span>
          </div>
        </div>
        <nav>
          <Link href="/vip">Mecánica VIP</Link>
          <Link href="/diabetes">Diabetes 21 días</Link>
          <a href={waUrl()}>WhatsApp</a>
        </nav>
        <p>
          © {new Date().getFullYear()} {AGENCY.name} • Términos y Condiciones
        </p>
      </footer>

      <a
        className="bd-fab-wa"
        href={waUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <span className="bd-fab-badge" aria-hidden>
          1
        </span>
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M16.01 3C9.4 3 4 8.35 4 14.9c0 2.1.56 4.07 1.53 5.78L4 29l8.55-1.5A12.1 12.1 0 0 0 16.01 27C22.63 27 28 21.65 28 15.1S22.63 3 16.01 3zm6.97 16.68c-.29.82-1.7 1.51-2.38 1.61-.61.09-1.39.13-2.24-.14-.52-.16-1.18-.38-2.03-.75-3.57-1.55-5.9-5.15-6.08-5.39-.18-.24-1.46-1.94-1.46-3.7 0-1.76.92-2.63 1.25-2.99.33-.36.72-.45.96-.45h.7c.22 0 .52-.08.81.62.29.72.99 2.48 1.08 2.66.09.18.14.39.03.63-.12.24-.18.39-.35.6-.18.21-.37.47-.53.63-.18.18-.36.37-.15.72.21.36.93 1.53 2 2.48 1.38 1.22 2.54 1.6 2.9 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.2 1.69z"
          />
        </svg>
      </a>

      <AgencyLeadModal />
    </div>
  );
}
