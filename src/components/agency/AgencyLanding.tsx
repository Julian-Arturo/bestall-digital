"use client";

/*
  THESIS: Bestall turns strangers into clients in one sitting — a closing-room
  home, not enamel signboards or purple agency templates.
  OWN-WORLD: cool paper #f4f5f7, ink #12151c, teal #0f766e, coral CTA #ea580c;
  Bricolage Grotesque + Karla; full-bleed hero photo; list rows not card grids.
  STORY: recognize the offer → trust via two live products → WhatsApp.
  FIRST VIEWPORT: edge-to-edge hero, Bestall mark, one headline, one lead,
  one WhatsApp CTA group — no stats strip, no cards on the photo.
  FORM: grounded #6 closing room (seed ff5a5e9e); raised by jackfield amber
  link discipline (process rail), drum-machine step cadence, papercut layers.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, DESIGN.md, and every shipping raster carrying
  its provenance
*/

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  AGENCY,
  PROCESS,
  REVIEWS,
  REVIEWS_DISCLAIMER,
  SERVICES,
  SHOWCASES,
  waUrl,
} from "@/lib/agency";

const ease = [0.22, 1, 0.36, 1] as const;

export function AgencyLanding() {
  const reduce = useReducedMotion();

  return (
    <div className="close-root">
      <a className="close-skip" href="#contacto">
        Ir al contacto
      </a>

      <header className="close-nav">
        <Link href="/" className="close-brand">
          <Image
            src={AGENCY.mark}
            alt=""
            width={40}
            height={40}
            className="close-mark"
            priority
          />
          <span>
            BESTALL<span>DIGITAL</span>
          </span>
        </Link>
        <nav aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#prueba">Prueba</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto" className="close-nav-cta">
            Hablar
          </a>
        </nav>
      </header>

      <main>
        <section className="close-hero">
          <Image
            src={AGENCY.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="close-hero-img"
          />
          <div className="close-hero-veil" />
          <div className="close-hero-copy">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              Tu negocio necesita
              <br />
              <em>clientes</em>, no otra
              <br />
              página bonita.
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65, ease }}
            >
              Bestall Digital construye páginas, tráfico y sistemas que
              convierten visitas en conversaciones de venta. Mira dos productos
              reales ya publicados en este dominio — y escríbenos.
            </motion.p>
            <motion.div
              className="close-actions"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55, ease }}
            >
              <a className="close-btn" href={waUrl()}>
                WhatsApp ahora
              </a>
              <a className="close-btn-ghost" href="#prueba">
                Ver prueba en vivo
              </a>
            </motion.div>
          </div>
        </section>

        <section className="close-strip">
          <p>
            Llegas frío. En minutos entiendes qué hacemos, ves prueba real y
            tienes un botón claro para hablar. Eso es el trabajo.
          </p>
        </section>

        <section id="servicios" className="close-section">
          <div className="close-head">
            <h2>Lo que hacemos</h2>
            <p>
              Siete capacidades. Un estándar: claridad, conversión y ejecución.
            </p>
          </div>
          <ul className="close-services">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.code}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: i * 0.04, duration: 0.45, ease }}
              >
                <span>{s.code}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="prueba" className="close-section close-section-ink">
          <div className="close-head close-head-light">
            <h2>Prueba en vivo</h2>
            <p>
              No son mockups. Son landings reales en este mismo dominio.
            </p>
          </div>
          <div className="close-cases">
            {SHOWCASES.map((item, i) => (
              <motion.div
                key={item.href}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease }}
              >
                <Link href={item.href} className="close-case">
                  <div className="close-case-media">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="close-case-body">
                    <p className="close-case-live">Publicado · en vivo</p>
                    <h3>{item.title}</h3>
                    <p className="close-case-sub">{item.subtitle}</p>
                    <p>{item.blurb}</p>
                    <span>Abrir landing →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="proceso" className="close-section">
          <div className="close-head">
            <h2>Cómo trabajamos</h2>
            <p>De la primera llamada al tráfico midiendo.</p>
          </div>
          <ol className="close-process">
            {PROCESS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45, ease }}
              >
                <i aria-hidden />
                <strong>{step.title}</strong>
                <p>{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="close-section close-section-soft">
          <div className="close-head">
            <h2>Lo que buscan quienes nos escriben</h2>
            <p>{REVIEWS_DISCLAIMER}</p>
          </div>
          <div className="close-quotes">
            {REVIEWS.map((r, i) => (
              <motion.blockquote
                key={r.name}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease }}
              >
                <p>“{r.quote}”</p>
                <footer>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="contacto" className="close-final">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <h2>Si vendes algo, hablemos.</h2>
            <p>
              Cuéntanos qué ofreces. En la primera conversación te decimos si
              podemos ayudarte — y cómo.
            </p>
            <div className="close-actions">
              <a className="close-btn" href={waUrl()}>
                Escribir por WhatsApp
              </a>
              <a className="close-btn-ghost close-btn-ghost-dark" href={`mailto:${AGENCY.email}`}>
                {AGENCY.email}
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="close-foot">
        <div className="close-foot-brand">
          <Image src={AGENCY.mark} alt="" width={36} height={36} />
          <div>
            <strong>{AGENCY.name}</strong>
            <span>{AGENCY.tagline}</span>
          </div>
        </div>
        <nav>
          <Link href="/vip">Mecánica VIP</Link>
          <Link href="/diabetes">Diabetes 21 días</Link>
        </nav>
        <p>© {new Date().getFullYear()} {AGENCY.name}</p>
      </footer>
    </div>
  );
}
