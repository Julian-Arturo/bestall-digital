"use client";

/*
  Bestall Digital — B2B High-Conversion Agency Funnel.
  Restructured wireframe & information hierarchy.
*/

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AGENCY,
  CASE_STUDIES,
  FAQS,
  METHOD_STEPS,
  PAINS,
  PROOF_METRICS,
  QUOTE_OPTIONS,
  SERVICE_PACKAGES,
  TECH_STACK,
  waUrl,
} from "@/lib/agency";
import { AgencyCursorLight } from "./AgencyCursorLight";
import { AgencyLeadModal } from "./AgencyLeadModal";
import { AgencyTermsModal } from "./AgencyTermsModal";

const ease = [0.22, 1, 0.36, 1] as const;

export function AgencyLanding() {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [termsOpen, setTermsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("sistema");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("urgente");

  const activeServiceObj =
    QUOTE_OPTIONS.services.find((s) => s.id === selectedService) ??
    QUOTE_OPTIONS.services[1];
  const activeTimeframeObj =
    QUOTE_OPTIONS.timeframes.find((t) => t.id === selectedTimeframe) ??
    QUOTE_OPTIONS.timeframes[0];

  const dynamicWaMessage = `Hola Bestall 👋 Quiero consultar disponibilidad y tarifa para mi negocio:
• Requerimiento: ${activeServiceObj.label} (${activeServiceObj.pack})
• Plazo estimado de lanzamiento: ${activeTimeframeObj.label} (${activeTimeframeObj.urgency})
¿Tienen cupo disponible en su agenda para coordinar?`;

  const dynamicWaUrl = waUrl(dynamicWaMessage);

  return (
    <div className="bd-root">
      <AgencyCursorLight />
      <a className="bd-skip" href="#servicios">
        Ir a servicios
      </a>

      {/* 1. HEADER */}
      <header className="bd-nav">
        <Link href="/" className="bd-brand" aria-label="Bestall Digital Home">
          <Image
            src={AGENCY.mark}
            alt="Logo Bestall Digital"
            width={34}
            height={34}
            className="bd-mark"
            priority
          />
          <span>bestall</span>
        </Link>
        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#metodo">Método</a>
          <a href="#servicios">Servicios</a>
          <a href="#cotizador">Cotizador</a>
          <a href="#casos">Casos</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          className="bd-btn bd-btn-sm"
          href={waUrl("Hola Bestall 👋 Quiero cotizar un proyecto por WhatsApp:")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar por WhatsApp
        </a>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section id="inicio" className="bd-hero">
          <div className="bd-hero-grid">
            <div className="bd-hero-copy">
              <span className="bd-pill">¿Inviertes y no ves resultados?</span>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
              >
                Inviertes… y el teléfono <span>no suena</span>.
              </motion.h1>
              <motion.p
                className="bd-lead"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55, ease }}
              >
                Eliminamos la falta de sistema. Diseñamos páginas web de alta velocidad,
                tráfico calificado y automatizaciones que llevan clientes listos para
                comprar directamente a tu WhatsApp.
              </motion.p>
              <motion.div
                className="bd-actions"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease }}
              >
                <a
                  className="bd-btn"
                  href={waUrl(
                    "Hola Bestall 👋 Quiero auditar mi negocio y ver dónde se están perdiendo ventas.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auditar mi negocio
                </a>
                <a className="bd-btn-ghost" href="#metodo">
                  Ver metodología
                </a>
              </motion.div>
            </div>

            {/* Mockup en contenedor estilo navegador */}
            <motion.div
              className="bd-hero-stage"
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.65, ease }}
            >
              <div className="bd-browser-frame bd-hero-mockup">
                <div className="bd-browser-bar" aria-hidden="true">
                  <div className="bd-browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="bd-browser-url">
                    bestalldigital.com/conversion
                  </div>
                  <span className="bd-browser-badge">Sistema Activo</span>
                </div>
                <div className="bd-browser-screen">
                  <Image
                    src={AGENCY.heroDesk}
                    alt="Interfaz web de alta conversión diseñada por Bestall Digital"
                    fill
                    sizes="(max-width: 990px) 92vw, 540px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. TECH STACK & PROOF BAR */}
        <section className="bd-proof-bar" aria-label="Métricas de confianza y stack tecnológico">
          <div className="bd-proof-inner">
            <div className="bd-proof-metrics">
              {PROOF_METRICS.map((m) => (
                <div key={m.label} className="bd-proof-metric">
                  <span className="bd-proof-val">{m.value}</span>
                  <span className="bd-proof-lbl">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="bd-proof-divider" aria-hidden="true" />
            <div className="bd-proof-badges">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="bd-proof-badge">
                  <span className="bd-proof-badge-dot" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="bd-proof-badge-role">{tech.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN DE DOLORES (EL PROBLEMA REAL) */}
        <section id="dolor" className="bd-section">
          <div className="bd-head bd-head-center">
            <p className="bd-kicker">El problema real</p>
            <h2>
              Tu negocio probablemente está <span>perdiendo clientes</span> si…
            </h2>
            <p className="bd-sub">
              La mayoría de empresas no tienen un problema de producto o precio, sino
              fricciones técnicas y mensajes dispersos que ahuyentan las ventas.
            </p>
          </div>
          <div className="bd-pains">
            {PAINS.map((p, i) => (
              <motion.article
                key={p.code}
                className="bd-pain"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: i * 0.05, duration: 0.45, ease }}
              >
                <div className="bd-pain-top">
                  <span className="bd-pain-num">{p.code}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* 5. NUESTRO MÉTODO ("EL SISTEMA BESTALL" EN 4 PASOS) */}
        <section id="metodo" className="bd-section bd-section-soft">
          <div className="bd-head bd-head-center">
            <p className="bd-kicker">El Sistema Bestall</p>
            <h2>
              Cómo convertimos tu inversión en <span>ventas reales</span> en 4 pasos
            </h2>
            <p className="bd-sub">
              Un proceso quirúrgico y medible que conecta tu propuesta comercial con
              canales directos de cierre.
            </p>
          </div>
          <div className="bd-methods">
            {METHOD_STEPS.map((m, i) => (
              <motion.div
                key={m.step}
                className="bd-method-card"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
              >
                <div className="bd-method-header">
                  <span className="bd-method-step">{m.step}</span>
                  <span className="bd-method-badge">{m.badge}</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <ul className="bd-method-list">
                  {m.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. PAQUETES DE SERVICIO TRANSPARENTES */}
        <section id="servicios" className="bd-section">
          <div className="bd-head bd-head-center">
            <p className="bd-kicker">Paquetes de Servicio Transparentes</p>
            <h2>
              3 soluciones enfocadas en <span>crecimiento y rentabilidad</span>
            </h2>
            <p className="bd-sub">
              Precios claros en COP, entregables itemizados y tiempos definidos sin costos ocultos.
            </p>
          </div>
          <div className="bd-packages">
            {SERVICE_PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                className={`bd-package-card${pkg.featured ? " bd-package-featured" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
              >
                <div className="bd-package-top">
                  <span className="bd-package-badge">{pkg.badge}</span>
                </div>
                <h3>{pkg.title}</h3>

                <div className="bd-package-price-wrap">
                  <span className="bd-package-price">{pkg.price}</span>
                  <span className="bd-package-currency">{pkg.currency}</span>
                  <span className="bd-package-payment">• {pkg.priceNote}</span>
                </div>

                <div className="bd-package-timeframe">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Tiempo estimado: {pkg.timeframe}</span>
                </div>

                <p className="bd-package-desc">{pkg.desc}</p>

                <ul className="bd-package-deliverables">
                  {pkg.deliverables.map((d) => (
                    <li key={d}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="bd-btn bd-package-cta"
                  href={waUrl(pkg.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. COTIZADOR INTERACTIVO DINÁMICO (LEAD MAGNET) */}
        <section id="cotizador" className="bd-section bd-section-soft">
          <div className="bd-head bd-head-center text-center mx-auto flex flex-col items-center">
            <p className="bd-kicker text-center">Cotizador en 2 Pasos</p>
            <h2 className="text-center">
              Calcula tu solución y <span>consulta disponibilidad</span>
            </h2>
            <p className="bd-sub text-center max-w-xl mx-auto">
              Configura lo que necesita tu empresa hoy y recibe viabilidad técnica y tarifa estimada directamente en tu WhatsApp en minutos.
            </p>
          </div>
          <div className="bd-calc-wrap">
            <div className="bd-calc-card">
              <div className="bd-calc-steps-indicator" aria-label="Progreso de cotización">
                <span className="bd-calc-step-pill is-active">
                  <span className="bd-calc-step-num">1</span>
                  Tipo de Requerimiento
                </span>
                <span className="bd-calc-step-pill is-active">
                  <span className="bd-calc-step-num">2</span>
                  Plazo de Lanzamiento
                </span>
              </div>

              {/* Pregunta 1 */}
              <div className="bd-calc-step-group">
                <h3 className="bd-calc-question">
                  <span className="bd-calc-question-badge">01</span>
                  ¿Qué requiere tu negocio hoy?
                </h3>
                <div className="bd-calc-options">
                  {QUOTE_OPTIONS.services.map((opt) => {
                    const isSelected = selectedService === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`bd-calc-opt${isSelected ? " is-selected" : ""}`}
                        onClick={() => setSelectedService(opt.id)}
                        aria-pressed={isSelected}
                      >
                        <span className="bd-calc-opt-pack">{opt.pack}</span>
                        <strong>{opt.label}</strong>
                        <p>{opt.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pregunta 2 */}
              <div className="bd-calc-step-group">
                <h3 className="bd-calc-question">
                  <span className="bd-calc-question-badge">02</span>
                  ¿En qué plazo planeas lanzar?
                </h3>
                <div className="bd-calc-options">
                  {QUOTE_OPTIONS.timeframes.map((opt) => {
                    const isSelected = selectedTimeframe === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`bd-calc-opt${isSelected ? " is-selected" : ""}`}
                        onClick={() => setSelectedTimeframe(opt.id)}
                        aria-pressed={isSelected}
                      >
                        <span className="bd-calc-opt-urgency">{opt.urgency}</span>
                        <strong>{opt.label}</strong>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Resumen y Salida dinámica a WhatsApp */}
              <div className="bd-calc-summary">
                <div className="bd-calc-summary-text">
                  <strong>Configuración elegida:</strong>{" "}
                  <span>{activeServiceObj.label}</span> ({activeServiceObj.pack}) • Plazo:{" "}
                  <span>{activeTimeframeObj.label}</span>
                </div>
                <a
                  className="bd-btn"
                  href={dynamicWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar Disponibilidad y Tarifa
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CASOS DE ÉXITO DOCUMENTADOS */}
        <section id="casos" className="bd-section">
          <div className="bd-head bd-head-center">
            <p className="bd-kicker">Casos Reales Documentados</p>
            <h2>
              Resultados comprobados — <span>sin capturas recicladas ni humo</span>
            </h2>
            <p className="bd-sub">
              Proyectos reales implementados para empresas reales: arquitectura limpia, pasarelas conectadas y medición estricta.
            </p>
          </div>
          <div className="bd-cases">
            {CASE_STUDIES.map((c, i) => (
              <motion.article
                key={c.title}
                className="bd-case-card"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
              >
                {/* Contenedor estilo navegador */}
                <div className="bd-browser-frame">
                  <div className="bd-browser-bar" aria-hidden="true">
                    <div className="bd-browser-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="bd-browser-url">{c.urlPreview}</div>
                    <span className="bd-browser-badge">En Producción</span>
                  </div>
                  <div className="bd-browser-screen">
                    <Image
                      src={c.image}
                      alt={`Captura del proyecto ${c.title}`}
                      fill
                      sizes="(max-width: 960px) 100vw, 580px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="bd-case-content">
                  <div className="bd-case-meta">
                    <span className="bd-case-tag">{c.tag}</span>
                    <span className="bd-case-badge">{c.badge}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p className="bd-case-subtitle">{c.subtitle}</p>

                  <div className="bd-case-block">
                    <strong>El Reto:</strong>
                    <p>{c.challenge}</p>
                  </div>

                  <div className="bd-case-block">
                    <strong>Solución Técnica:</strong>
                    <p>{c.solution}</p>
                  </div>

                  <div className="bd-case-block">
                    <strong>Resultado Tangible:</strong>
                    <p>{c.result}</p>
                  </div>

                  <div className="bd-case-action">
                    {"waMsg" in c && c.waMsg ? (
                      <a
                        href={waUrl(c.waMsg)}
                        className="bd-btn bd-btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.ctaText} →
                      </a>
                    ) : "linkHref" in c && c.linkHref ? (
                      <Link href={c.linkHref} className="bd-btn bd-btn-sm">
                        {c.ctaText} →
                      </Link>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* 9. PREGUNTAS FRECUENTES (FAQ) */}
        <section id="faq" className="bd-section">
          <div className="bd-head bd-head-center">
            <p className="bd-kicker">Preguntas Frecuentes</p>
            <h2>
              Claridad total sobre <span>tiempos, código y garantías</span>
            </h2>
            <p className="bd-sub">
              Resolvemos de forma directa las dudas operativas antes de iniciar cualquier
              desarrollo.
            </p>
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
                    <i aria-hidden="true">{open ? "−" : "+"}</i>
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
            <h2>¿Listo para que tu inversión se traduzca en ventas?</h2>
            <p>
              Analizamos tu caso sin rodeos ni costos ocultos. En la primera llamada te
              indicamos la ruta técnica más rápida para generar clientes.
            </p>
            <div className="bd-actions bd-actions-center">
              <a
                className="bd-btn"
                href={waUrl(
                  "Hola Bestall 👋 Quiero agendar una conversación para evaluar mi sistema de ventas.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </a>
              <a className="bd-btn-ghost" href="#servicios">
                Ver paquetes de servicio
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bd-foot">
        <div className="bd-foot-brand">
          <Image
            src={AGENCY.mark}
            alt="Logo Bestall Digital"
            width={32}
            height={32}
          />
          <div>
            <strong>{AGENCY.name}</strong>
            <span style={{ fontSize: "0.82rem", color: "var(--bd-mute)" }}>
              {AGENCY.tagline}
            </span>
          </div>
        </div>
        <nav aria-label="Enlaces secundarios y legales">
          <Link href="/vip">Mecánica VIP</Link>
          <Link href="/diabetes">Toma el Control (21 días)</Link>
          <a
            href={waUrl("Hola Bestall 👋 Les escribo desde el pie de página:")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="bd-foot-link-btn"
            onClick={() => setTermsOpen(true)}
          >
            Términos y Condiciones
          </button>
        </nav>
        <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--bd-mute)" }}>
          © {new Date().getFullYear()} {AGENCY.name}. Todos los derechos reservados.
        </p>
      </footer>

      {/* Botón flotante WhatsApp (FAB) */}
      <a
        className="bd-fab-wa"
        href={waUrl("Hola Bestall 👋 Vengo de su página y quiero cotizar:")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <span className="bd-fab-badge" aria-hidden="true">
          1
        </span>
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.01 3C9.4 3 4 8.35 4 14.9c0 2.1.56 4.07 1.53 5.78L4 29l8.55-1.5A12.1 12.1 0 0 0 16.01 27C22.63 27 28 21.65 28 15.1S22.63 3 16.01 3zm6.97 16.68c-.29.82-1.7 1.51-2.38 1.61-.61.09-1.39.13-2.24-.14-.52-.16-1.18-.38-2.03-.75-3.57-1.55-5.9-5.15-6.08-5.39-.18-.24-1.46-1.94-1.46-3.7 0-1.76.92-2.63 1.25-2.99.33-.36.72-.45.96-.45h.7c.22 0 .52-.08.81.62.29.72.99 2.48 1.08 2.66.09.18.14.39.03.63-.12.24-.18.39-.35.6-.18.21-.37.47-.53.63-.18.18-.36.37-.15.72.21.36.93 1.53 2 2.48 1.38 1.22 2.54 1.6 2.9 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.2 1.69z"
          />
        </svg>
      </a>

      <AgencyLeadModal />
      <AgencyTermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}
