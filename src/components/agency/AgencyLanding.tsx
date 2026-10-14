/*
  Bestall Digital — B2B High-Conversion Agency Funnel.
  Server Component: el contenido sale completo en el HTML; solo el cotizador,
  el FAQ, los modales y el fondo animado son islas cliente.
*/

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AGENCY,
  CASE_STUDIES,
  METHOD_STEPS,
  PAINS,
  PROOF_METRICS,
  SERVICE_PACKAGES,
  TECH_STACK,
  waUrl,
} from "@/lib/agency";
import { AgencyCursorLight } from "./AgencyCursorLight";
import { AgencyFaq } from "./AgencyFaq";
import { AgencyFooterTerms } from "./AgencyFooterTerms";
import { AgencyLeadModal } from "./AgencyLeadModal";
import { AgencyQuoteCalculator } from "./AgencyQuoteCalculator";
import { AgencyReveal } from "./AgencyReveal";

/** Retraso escalonado para los bloques con `data-reveal`. */
function revealDelay(seconds: number) {
  return { "--reveal-delay": `${seconds}s` } as CSSProperties;
}

export function AgencyLanding() {
  return (
    <div className="bd-root w-full max-w-full overflow-x-hidden">
      <AgencyCursorLight />
      <AgencyReveal />
      <a className="bd-skip" href="#servicios">
        Ir a servicios
      </a>

      {/* 1. HEADER */}
      <header className="bd-nav w-full max-w-full overflow-hidden">
        <Link href="/" className="bd-brand" aria-label="Bestall Digital Home">
          <Image
            src={AGENCY.mark}
            alt="Logo Bestall Digital"
            width={34}
            height={34}
            className="bd-mark"
            loading="eager"
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
          className="bd-btn bd-btn-sm shrink-0 whitespace-nowrap"
          href={waUrl("Hola Bestall 👋 Quiero cotizar un proyecto por WhatsApp:")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden sm:inline">Cotizar por </span>WhatsApp
        </a>
      </header>

      <main className="w-full max-w-full overflow-x-hidden">
        {/* 2. HERO SECTION */}
        <section id="inicio" className="bd-hero w-full max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="bd-hero-grid grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-8 md:gap-12 items-center w-full">
            <div className="bd-hero-copy order-1 w-full max-w-full">
              <span className="bd-pill">¿Inviertes y no ves resultados?</span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight break-words">
                Inviertes… y el teléfono <span>no suena</span>.
              </h1>
              <p className="bd-lead text-base sm:text-lg text-slate-400 mt-4 max-w-xl">
                Construimos el sistema que le falta a tu negocio: páginas web de alta velocidad, tráfico calificado y cierre automático en WhatsApp.
              </p>
              <div className="bd-actions flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
                <a
                  className="bd-btn w-full sm:w-auto text-center justify-center"
                  href={waUrl(
                    "Hola Bestall 👋 Quiero auditar mi negocio y ver dónde se están perdiendo ventas.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auditar mi negocio
                </a>
                <a className="bd-btn-ghost w-full sm:w-auto text-center justify-center" href="#metodo">
                  Ver metodología
                </a>
              </div>
            </div>

            {/* Mockup en contenedor estilo navegador */}
            <div className="bd-hero-stage order-2 w-full max-w-full">
              <div className="bd-browser-frame bd-hero-mockup w-full max-w-full overflow-hidden">
                <div className="bd-browser-bar w-full" aria-hidden="true">
                  <div className="bd-browser-dots shrink-0">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="bd-browser-url truncate max-w-[140px] sm:max-w-[280px]">
                    bestalldigital.com/conversion
                  </div>
                  <span className="bd-browser-badge shrink-0 text-xs">Sistema Activo</span>
                </div>
                <div className="bd-browser-screen relative w-full aspect-video sm:aspect-[16/10] overflow-hidden">
                  <Image
                    src={AGENCY.heroDesk}
                    alt="Interfaz web de alta conversión diseñada por Bestall Digital"
                    fill
                    sizes="(max-width: 990px) 100vw, 540px"
                    className="object-cover object-top"
                    preload
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TECH STACK & PROOF BAR */}
        <section className="bd-proof-bar w-full px-4 py-8 md:px-8 md:py-10 overflow-x-hidden" aria-label="Métricas de confianza y stack tecnológico">
          <div className="bd-proof-inner w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="bd-proof-metrics grid grid-cols-2 sm:flex sm:flex-row items-center gap-4 sm:gap-8 w-full lg:w-auto">
              {PROOF_METRICS.map((m, idx) => (
                <div key={m.label} className={`bd-proof-metric flex items-center gap-2.5 ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                  <span className="bd-proof-val text-xl sm:text-2xl font-extrabold text-cyan-400">{m.value}</span>
                  <span className="bd-proof-lbl text-xs sm:text-sm text-slate-400 font-semibold leading-tight">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="bd-proof-divider hidden lg:block" aria-hidden="true" />
            <div className="bd-proof-badges flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="bd-proof-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm">
                  <span className="bd-proof-badge-dot" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="bd-proof-badge-role text-xs text-slate-400">{tech.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN DE DOLORES (EL PROBLEMA REAL) */}
        <section id="dolor" className="bd-section w-full max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="bd-head bd-head-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="bd-kicker text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">El problema real</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              Tu negocio probablemente está <span>perdiendo clientes</span> si…
            </h2>
            <p className="bd-sub text-sm sm:text-base text-slate-400 mt-3">
              La mayoría de empresas no tienen un problema de producto o precio, sino
              fricciones técnicas y mensajes dispersos que ahuyentan las ventas.
            </p>
          </div>
          <div className="bd-pains grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {PAINS.map((p, i) => (
              <article
                key={p.code}
                className="bd-pain w-full max-w-full overflow-hidden"
                data-reveal
                style={revealDelay(i * 0.05)}
              >
                <div className="bd-pain-top">
                  <span className="bd-pain-num">{p.code}</span>
                </div>
                <h3>{p.title}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* 5. CÓMO TRABAJAMOS (3 PASOS DIRECTOS SIN FRICCIÓN) */}
        <section id="metodo" className="bd-section bd-section-soft w-full px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="w-full max-w-7xl mx-auto">
            <div className="bd-head bd-head-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
              <p className="bd-kicker text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">Cómo Trabajamos</p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
                Flujo directo de contratación <span>sin reuniones eternas de 40 minutos</span>
              </h2>
              <p className="bd-sub text-sm sm:text-base text-slate-400 mt-3">
                Sin burocracia, sin presentaciones vacías y sin humo. Del audio de WhatsApp a tu sistema de ventas en producción.
              </p>
            </div>
            <div className="bd-methods grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {METHOD_STEPS.map((m, i) => (
                <div
                  key={m.step}
                  className="bd-method-card w-full max-w-full overflow-hidden p-5 sm:p-6"
                  data-reveal
                  style={revealDelay(i * 0.08)}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PAQUETES DE SERVICIO TRANSPARENTES */}
        <section id="servicios" className="bd-section w-full max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="bd-head bd-head-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="bd-kicker text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">Paquetes de Servicio Transparentes</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              3 soluciones enfocadas en <span>crecimiento y rentabilidad</span>
            </h2>
            <p className="bd-sub text-sm sm:text-base text-slate-400 mt-3">
              Precios claros en COP, entregables itemizados y tiempos definidos sin costos ocultos.
            </p>
          </div>
          <div className="bd-packages grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-stretch">
            {SERVICE_PACKAGES.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`bd-package-card w-full max-w-full overflow-hidden p-6 sm:p-8${pkg.featured ? " bd-package-featured" : ""}`}
                data-reveal
                style={revealDelay(i * 0.08)}
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
                  className="bd-btn bd-package-cta w-full text-center justify-center"
                  href={waUrl(pkg.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 7. COTIZADOR INTERACTIVO DINÁMICO (LEAD MAGNET) */}
        <section id="cotizador" className="bd-section bd-section-soft w-full px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="w-full max-w-7xl mx-auto">
            <div className="bd-head bd-head-center flex flex-col items-center text-center mx-auto max-w-xl mb-8 md:mb-12">
              <p className="bd-kicker text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 text-center">Cotizador en 2 Pasos</p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-center mt-2">
                Calcula tu solución y <span>consulta disponibilidad</span>
              </h2>
              <p className="bd-sub text-sm sm:text-base text-slate-400 text-center max-w-xl mx-auto mt-3">
                Configura lo que necesita tu empresa hoy y recibe viabilidad técnica y tarifa estimada directamente en tu WhatsApp en minutos.
              </p>
            </div>
            <div className="bd-calc-wrap w-full max-w-4xl mx-auto">
              <AgencyQuoteCalculator />
            </div>
          </div>
        </section>

        {/* 8. CASOS DE ÉXITO DOCUMENTADOS */}
        <section id="casos" className="bd-section w-full max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="bd-head bd-head-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="bd-kicker text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">Casos Reales Documentados</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              Resultados comprobados — <span>sin capturas recicladas ni humo</span>
            </h2>
            <p className="bd-sub text-sm sm:text-base text-slate-400 mt-3">
              Proyectos reales implementados para empresas reales: arquitectura limpia, pasarelas conectadas y medición estricta.
            </p>
          </div>
          <div className="bd-cases grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
            {CASE_STUDIES.map((c, i) => (
              <article
                key={c.title}
                className="bd-case-card w-full max-w-full overflow-hidden"
                data-reveal
                style={revealDelay(i * 0.08)}
              >
                {/* Contenedor estilo navegador */}
                <div className="bd-browser-frame w-full max-w-full overflow-hidden">
                  <div className="bd-browser-bar w-full" aria-hidden="true">
                    <div className="bd-browser-dots shrink-0">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="bd-browser-url truncate max-w-[140px] sm:max-w-[240px]">{c.urlPreview}</div>
                    <span className="bd-browser-badge shrink-0 text-xs">En Producción</span>
                  </div>
                  <div className="bd-browser-screen relative w-full aspect-video sm:aspect-[16/10] overflow-hidden">
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
                    <strong>Reto:</strong>
                    <p>{c.challenge}</p>
                  </div>

                  <div className="bd-case-block">
                    <strong>Solución:</strong>
                    <p>{c.solution}</p>
                  </div>

                  <div className="bd-case-block">
                    <strong>Resultado:</strong>
                    <p>{c.result}</p>
                  </div>

                  {"architecture" in c && Array.isArray(c.architecture) ? (
                    <div className="bd-case-arch mt-4 pt-3 border-t border-slate-800/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Arquitectura Técnica:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {c.architecture.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-cyan-500/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

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
              </article>
            ))}
          </div>
        </section>

        {/* 9. PREGUNTAS FRECUENTES (FAQ) */}
        <section id="faq" className="bd-section w-full max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div className="bd-head bd-head-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="bd-kicker text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">Preguntas Frecuentes</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              Claridad total sobre <span>tiempos, código y garantías</span>
            </h2>
            <p className="bd-sub text-sm sm:text-base text-slate-400 mt-3">
              Resolvemos de forma directa las dudas operativas antes de iniciar cualquier desarrollo.
            </p>
          </div>
          <AgencyFaq />
        </section>

        {/* FINAL CTA */}
        <section id="contacto" className="bd-final w-full px-4 py-12 md:px-8 md:py-20 overflow-x-hidden">
          <div
            className="w-full max-w-3xl mx-auto text-center"
            data-reveal
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ¿Listo para que tu inversión se traduzca en ventas?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-xl mx-auto">
              Analizamos tu caso sin rodeos ni costos ocultos. En la primera llamada te
              indicamos la ruta técnica más rápida para generar clientes.
            </p>
            <div className="bd-actions bd-actions-center flex flex-col sm:flex-row gap-3 mt-6 justify-center w-full max-w-md mx-auto sm:max-w-none">
              <a
                className="bd-btn w-full sm:w-auto text-center justify-center"
                href={waUrl(
                  "Hola Bestall 👋 Quiero agendar una conversación para evaluar mi sistema de ventas.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </a>
              <a className="bd-btn-ghost w-full sm:w-auto text-center justify-center" href="#servicios">
                Ver paquetes de servicio
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bd-foot w-full max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-x-hidden">
        <div className="bd-foot-brand flex items-center gap-3">
          <Image
            src={AGENCY.mark}
            alt="Logo Bestall Digital"
            width={32}
            height={32}
            className="shrink-0"
          />
          <div>
            <strong className="block text-white font-bold">{AGENCY.name}</strong>
            <span className="block text-xs text-slate-400">
              {AGENCY.tagline}
            </span>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400" aria-label="Enlaces secundarios y legales">
          <a
            href={waUrl("Hola Bestall 👋 Les escribo desde el pie de página:")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            WhatsApp
          </a>
          <AgencyFooterTerms />
        </nav>
        <p className="text-xs text-slate-400 m-0 text-center md:text-right">
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
    </div>
  );
}
