"use client";

/*
  THESIS: Bestall es el rotulista de la era digital — una lámina esmaltada
  atornillada al muro, no otro hero azul noche con orbes morados y vidrio.
  OWN-WORLD: verde esmalte, hueso, rojo esmalte y negro de contorno; cuatro
  pasadas de pintura, sombra dura sin difuminar, tornillos, óxido de borde,
  Archivo de ancho variable y una sola línea de pincel.
  STORY: el visitante reconoce el oficio, cree porque ve dos letreros ya
  colgados en este mismo dominio, y toca la placa roja de WhatsApp.
  FIRST VIEWPORT: lámina verde a sangre atornillada; marca arriba-izquierda,
  lámpara ABIERTO arriba-derecha; tres renglones monumentales en hueso con
  sombra dura, el último condensándose para caber; línea de pincel roja; placa
  roja de WhatsApp como único elemento caliente; banda inferior con los siete
  servicios pintados.
  FORM: rotulación comercial pintada a mano; candidato 1 de la lista, elegido
  por el usuario sobre la asignación del dado; seed 994a7669.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, DESIGN.md, and every shipping raster carrying its
  provenance
*/

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  AGENCY,
  PROCESS,
  REVIEWS,
  REVIEWS_DISCLAIMER,
  SERVICES,
  SHOWCASES,
  SIGN_FLOURISH,
  SIGN_LINES,
  WALL,
  waUrl,
} from "@/lib/agency";
import { EnamelField } from "./EnamelField";
import { PaintedLine, PaintedSign } from "./PaintedTitle";
import { PaintingDemo } from "./PaintingDemo";
import { Bolt, BrushStroke, SignIcon, SignMark, ToggleMark } from "./SignIcon";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Los cuatro tornillos que sostienen la lámina contra el muro. */
function Bolts() {
  return (
    <div className="sign-bolts" aria-hidden>
      <Bolt className="sign-bolt-tl" />
      <Bolt className="sign-bolt-tr" />
      <Bolt className="sign-bolt-bl" />
      <Bolt className="sign-bolt-br" />
    </div>
  );
}

/** La lámpara del taller: encendida mientras el sitio está publicado. */
function OpenLamp() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString("es-CO", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="sign-open" title="El taller está publicado y respondiendo">
      <span className="sign-open-bulb" aria-hidden />
      <span className="sign-open-word">ABIERTO</span>
      <span className="sign-open-time">{now ?? "--:--"}</span>
    </p>
  );
}

export function AgencyLanding() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const tallerRef = useRef<HTMLElement>(null);
  const [openService, setOpenService] = useState<string | null>(SERVICES[0].code);
  const [pass, setPass] = useState(0);
  const [here, setHere] = useState<string>(WALL[0].id);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const plateY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 90]);
  const plateFade = useTransform(heroProgress, [0, 0.85], [1, 0.35]);

  const { scrollYProgress: tallerProgress } = useScroll({
    target: tallerRef,
    offset: ["start 0.85", "end 1"],
  });
  useMotionValueEvent(tallerProgress, "change", (v) => {
    const next = v < 0.25 ? 0 : v < 0.5 ? 1 : v < 0.72 ? 2 : 3;
    setPass((prev) => (prev === next ? prev : next));
  });

  // el riel del muro sigue en qué lámina va el visitante
  useEffect(() => {
    const targets = WALL.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setHere(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6, 1] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sign-root">
      <a href="#contacto" className="sign-skip">
        Saltar al contacto
      </a>

      <header className="sign-topbar">
        <Link href="/" className="sign-brand" aria-label="Bestall Digital, inicio">
          <SignMark />
          <span className="sign-wordmark">
            Bestall<span>Digital</span>
          </span>
        </Link>

        <nav className="sign-nav" aria-label="Secciones del muro">
          <a href="#servicios">Servicios</a>
          <a href="#colgados">Trabajos</a>
          <a href="#taller">Taller</a>
          <a href="#contacto" className="sign-nav-hot">
            Pedir letrero
          </a>
        </nav>

        <OpenLamp />
      </header>

      {/* riel del muro: placas chicas atornilladas al borde */}
      <nav className="sign-rail" aria-label="Ir a una lámina">
        <ul>
          {WALL.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={here === s.id ? "is-here" : undefined}
                aria-current={here === s.id ? "true" : undefined}
              >
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {/* ───────────── LÁMINA 1 · el letrero ───────────── */}
        <section id="letrero" ref={heroRef} className="sign-sheet sheet-verde sign-hero">
          <EnamelField seed={3} rust={0.5} />
          <i className="sign-sheen" aria-hidden />
          <Bolts />

          <motion.div
            className="sign-hero-inner"
            style={reduce ? undefined : { y: plateY, opacity: plateFade }}
          >
            <div className="sign-hero-copy">
              <h1 className="sign-hero-title">
                <span className="sr-only">
                  Páginas que venden. Tráfico que llega. Tecnología que aguanta.
                </span>
                <PaintedSign lines={SIGN_LINES} decorative />
              </h1>

              {/* cuarta pasada: la pincelada roja que cierra el letrero */}
              <motion.div
                className="sign-brushline-wrap"
                initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 1.42, duration: 0.62, ease: EASE }}
                aria-hidden
              >
                <BrushStroke />
              </motion.div>

              <motion.p
                className="sign-flourish"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.62, duration: 0.7, ease: EASE }}
              >
                {SIGN_FLOURISH}
              </motion.p>

              <motion.p
                className="sign-lead"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.74, duration: 0.6, ease: EASE }}
              >
                Somos el taller que le pinta el letrero digital a tu negocio:
                páginas, tráfico, apps y automatización. Y no te lo contamos —
                abajo hay dos letreros nuestros colgados en este mismo dominio,
                funcionando ahora mismo.
              </motion.p>

              <motion.div
                className="sign-actions"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.86, duration: 0.6, ease: EASE }}
              >
                <a
                  className="sign-plate-hot"
                  href={waUrl()}
                >
                  Escribir por WhatsApp
                </a>
                <a className="sign-plate-ghost" href="#servicios">
                  Ver qué pintamos
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="sign-band" aria-hidden>
            <div className="sign-band-track">
              {[...SERVICES, ...SERVICES].map((s, i) => (
                <span key={`${s.code}-${i}`}>
                  <b>{s.code}</b> {s.title}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── LÁMINA 2 · los servicios ───────────── */}
        <section id="servicios" className="sign-sheet sheet-hueso">
          <EnamelField seed={11} rust={0.12} strength={0.7} />
          <Bolts />

          <div className="sign-body">
            <h2 className="sign-heading">
              <span className="sr-only">Siete renglones en el letrero</span>
              <PaintedLine
                text="SIETE RENGLONES"
                layers={["shadow", "fill"]}
                onView
                decorative
              />
            </h2>
            <p className="sign-subhead">
              Cada servicio dice qué entra por un lado y qué sale por el otro.
              Toca un renglón para ver el detalle.
            </p>

            <ol className="sign-rows">
              {SERVICES.map((s) => {
                const open = openService === s.code;
                return (
                  <li
                    key={s.code}
                    className={`sign-row ${open ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="sign-row-head"
                      aria-expanded={open}
                      aria-controls={`svc-${s.code}`}
                      onClick={() => setOpenService(open ? null : s.code)}
                    >
                      <span className="sign-row-code">{s.code}</span>
                      <span className="sign-row-icon">
                        <SignIcon name={s.icon} />
                      </span>
                      <span className="sign-row-title">{s.title}</span>
                      <span className="sign-row-flow">
                        <em>{s.entra}</em>
                        <span className="sign-row-arrow" aria-hidden>
                          <svg viewBox="0 0 40 12" aria-hidden>
                            <path
                              d="M1 6h33M29 1.5L34.5 6 29 10.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <strong>{s.sale}</strong>
                      </span>
                      <span className="sign-row-toggle" aria-hidden>
                        <ToggleMark open={open} />
                      </span>
                    </button>
                    <div
                      id={`svc-${s.code}`}
                      className="sign-row-detail"
                      hidden={!open}
                    >
                      <p>{s.detail}</p>
                      <a
                        className="sign-row-cta"
                        href={waUrl(
                          `Hola Bestall Digital 👋 Vengo de bestalldigital.com y me interesa el servicio ${s.code} — ${s.title}. Quiero cotizar.`,
                        )}
                      >
                        Cotizar {s.title.toLowerCase()}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ───────────── LÁMINA 3 · lo que ya está colgado ───────────── */}
        <section id="colgados" className="sign-sheet sheet-negro">
          <EnamelField seed={23} rust={0.3} strength={0.85} />
          <Bolts />

          <div className="sign-body">
            <h2 className="sign-heading sign-heading-invert">
              <span className="sr-only">Letreros ya colgados</span>
              <PaintedLine
                text="YA COLGADOS"
                layers={["shadow", "fill"]}
                onView
                decorative
              />
            </h2>
            <p className="sign-subhead sign-subhead-invert">
              No son maquetas ni casos de estudio prestados. Son dos productos
              publicados en <b>{AGENCY.domain}</b>. Ábrelos y míralos trabajar.
            </p>

            <div className="sign-hung">
              {SHOWCASES.map((item, i) => (
                <motion.article
                  key={item.href}
                  className="sign-hung-item"
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 46, rotate: i % 2 ? 1.4 : -1.4 }
                  }
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 0.5 : -0.5 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.75, delay: i * 0.12, ease: EASE }}
                >
                  <Link href={item.href} className="sign-hung-link">
                    <span className="sign-hung-stamp" aria-hidden>
                      {item.stamp}
                    </span>
                    <span className="sign-hung-media">
                      <Image
                        src={item.image}
                        alt={`Captura de la landing ${item.title} publicada en ${AGENCY.domain}`}
                        fill
                        sizes="(max-width: 860px) 92vw, 44vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="sign-hung-body">
                      <h3>{item.title}</h3>
                      <p className="sign-hung-sub">{item.subtitle}</p>
                      <p className="sign-hung-blurb">{item.blurb}</p>
                      <span className="sign-hung-go">
                        Abrir el letrero
                        <svg viewBox="0 0 24 12" aria-hidden>
                          <path
                            d="M1 6h20M17 1.5L21.5 6 17 10.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── LÁMINA 4 · el taller ───────────── */}
        <section id="taller" ref={tallerRef} className="sign-sheet sheet-hueso">
          <EnamelField seed={31} rust={0.1} strength={0.6} />
          <Bolts />

          <div className="sign-body">
            <h2 className="sign-heading">
              <span className="sr-only">Así se pinta</span>
              <PaintedLine
                text="ASÍ SE PINTA"
                layers={["shadow", "fill"]}
                onView
                decorative
              />
            </h2>
            <p className="sign-subhead">
              Cuatro pasadas. Ninguna se salta, y la última no se termina nunca
              del todo. Baja y mira la lámina salir de la nada.
            </p>

            <div className="sign-workshop">
              <div className="sign-workshop-stage">
                <PaintingDemo target={tallerRef} active={pass} />
              </div>

              <ol className="sign-passes">
                {PROCESS.map((step, i) => (
                  <li
                    key={step.pass}
                    className={`sign-pass ${i === pass ? "is-wet" : ""} ${
                      i < pass ? "is-dry" : ""
                    }`}
                  >
                    <span className="sign-pass-mark" aria-hidden>
                      <i />
                    </span>
                    <div>
                      <h3>
                        {step.pass}
                        <span>{step.title}</span>
                      </h3>
                      <p className="sign-pass-desc">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────────── LÁMINA 5 · voces ───────────── */}
        <section id="voces" className="sign-sheet sheet-verde">
          <EnamelField seed={47} rust={0.4} />
          <i className="sign-sheen sign-sheen-slow" aria-hidden />
          <Bolts />

          <div className="sign-body">
            <h2 className="sign-heading sign-heading-invert">
              <span className="sr-only">Lo que dicen</span>
              <PaintedLine
                text="LO QUE DICEN"
                layers={["shadow", "fill"]}
                onView
                decorative
              />
            </h2>

            <div className="sign-voices">
              {REVIEWS.map((r, i) => (
                <figure
                  key={r.name}
                  className="sign-voice"
                  style={{
                    // cada placa se cuelga con su propio ladeo, como en el muro
                    rotate: `${i === 1 ? 0.6 : i ? -0.5 : 0.4}deg`,
                  }}
                >
                  <blockquote>{r.quote}</blockquote>
                  <figcaption>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="sign-voices-note">{REVIEWS_DISCLAIMER}</p>
          </div>
        </section>

        {/* ───────────── LÁMINA 6 · el cierre ───────────── */}
        <section id="contacto" className="sign-sheet sheet-rojo">
          <EnamelField seed={59} rust={0.55} />
          <Bolts />

          <div className="sign-body sign-close">
            <h2 className="sign-close-title">
              <span className="sr-only">Cuéntanos qué vendes</span>
              <PaintedSign
                lines={["CUÉNTANOS", "QUÉ VENDES."]}
                onView
                fit={false}
                decorative
              />
            </h2>
            <p className="sign-close-lead">
              En la primera conversación te decimos si podemos ayudarte y cómo.
              Si no somos el taller para tu negocio, también te lo decimos.
            </p>

            <div className="sign-actions sign-actions-center">
              <a
                className="sign-plate-hot sign-plate-hot-invert"
                href={waUrl()}
              >
                Escribir por WhatsApp
              </a>
              <a className="sign-plate-ghost sign-plate-ghost-invert" href={`mailto:${AGENCY.email}`}>
                {AGENCY.email}
              </a>
            </div>

            {AGENCY.whatsappPending && (
              <p className="sign-note" role="note">
                Pendiente por publicar: el número de WhatsApp real. Hoy apunta a
                un número de marcador — se cambia en{" "}
                <code>src/lib/agency.ts</code>.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="sign-colophon">
        <div className="sign-colophon-brand">
          <SignMark size={38} />
          <div>
            <strong>{AGENCY.name}</strong>
            <span>{AGENCY.tagline}</span>
          </div>
        </div>
        <nav className="sign-colophon-links" aria-label="Otros letreros">
          <Link href="/vip">Mecánica VIP</Link>
          <Link href="/diabetes">Toma el Control</Link>
          <a href={`mailto:${AGENCY.email}`}>{AGENCY.email}</a>
        </nav>
        <p className="sign-colophon-sig">
          Pintado a mano desde {AGENCY.since} · © {new Date().getFullYear()}{" "}
          {AGENCY.name}
        </p>
      </footer>
    </div>
  );
}
