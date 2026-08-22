"use client";

/*
  THESIS: Bestall turns strangers into clients — closing-room clarity, pain-first copy.
  OWN-WORLD: cool paper, ink, teal, coral CTA; Bricolage + Karla; full-bleed hero.
  STORY: feel the pain → see what we fix → trust live proof → WhatsApp.
  FIRST VIEWPORT: brand, one headline, one lead, dual CTA — no tech jargon.
  FORM: Sala de Cierre (seed ff5a5e9e).
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, DESIGN.md, and every shipping raster carrying
  its provenance
*/

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  AGENCY,
  PAINS,
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
            alt="Bestall Digital"
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
          <a href="#dolor">El problema</a>
          <a href="#servicios">Servicios</a>
          <a href="#prueba">Casos</a>
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
              Si ya invertiste y el teléfono sigue en silencio, aquí ordenamos
              el mensaje, la página y el tráfico para que lleguen personas
              listas para comprar. Mira dos proyectos reales nuestros — y
              escríbenos.
            </motion.p>
            <motion.div
              className="close-actions"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55, ease }}
            >
              <a className="close-btn" href={waUrl()}>
                Quiero más clientes
              </a>
              <a className="close-btn-ghost" href="#prueba">
                Ver proyectos reales
              </a>
            </motion.div>
          </div>
        </section>

        <section className="close-strip">
          <p>
            No vendemos “presencia digital”. Vendemos claridad, conversaciones
            y ventas que se pueden medir.
          </p>
        </section>

        <section id="dolor" className="close-band close-band-pain">
          <div className="close-band-inner">
            <div className="close-head close-head-on-dark">
              <h2>¿Te suena familiar?</h2>
              <p>
                Si reconoces alguno, no estás solo. Es exactamente lo que
                resolvemos cada semana.
              </p>
            </div>
            <div className="close-pains">
              {PAINS.map((p, i) => (
                <motion.article
                  key={p.title}
                  className="close-pain-tile"
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease }}
                >
                  <div className="close-pain-top">
                    <span className="close-pain-n" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="close-pain-tag">Dolor real</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="close-band close-band-help">
          <div className="close-band-inner">
            <div className="close-head">
              <h2>Cómo te ayudamos</h2>
              <p>
                Cada servicio ataca un dolor concreto y deja un resultado que
                puedes tocar.
              </p>
            </div>
            <ul className="close-services">
              {SERVICES.map((s, i) => (
                <motion.li
                  key={s.code}
                  className="close-service-tile"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ delay: i * 0.045, duration: 0.45, ease }}
                >
                  <div className="close-service-index">
                    <span>{s.code}</span>
                  </div>
                  <div className="close-service-body">
                    <h3>{s.title}</h3>
                    <p className="close-service-pain">
                      <em>El problema:</em> {s.pain}
                    </p>
                    <p className="close-service-fix">
                      <em>Lo que hacemos:</em> {s.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="close-section-cta">
              <a className="close-btn" href={waUrl()}>
                Contarnos mi caso por WhatsApp
              </a>
              <p className="close-section-cta-note">
                Respuesta humana. Sin formularios eternos.
              </p>
            </div>
          </div>
        </section>

        <section id="prueba" className="close-section close-section-ink">
          <div className="close-head close-head-light">
            <h2>Proyectos que ya están trabajando</h2>
            <p>
              No son demos inventadas. Entra, siente el nivel y imagina el tuyo.
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
                    <p className="close-case-live">{item.result}</p>
                    <h3>{item.title}</h3>
                    <p className="close-case-sub">{item.subtitle}</p>
                    <p>{item.blurb}</p>
                    <span>Ver cómo se siente →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="proceso" className="close-section">
          <div className="close-head">
            <h2>Así trabajamos juntos</h2>
            <p>
              Del primer mensaje a un plan que se puede tocar — sin teatro.
            </p>
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
            <h2>Si estás cansado de invertir sin ver clientes, hablemos.</h2>
            <p>
              Cuéntanos qué vendes y qué te está doliendo. En la primera
              conversación te decimos si podemos ayudarte — y cómo.
            </p>
            <div className="close-actions">
              <a className="close-btn" href={waUrl()}>
                Escribir por WhatsApp
              </a>
              <a
                className="close-btn-ghost close-btn-ghost-dark"
                href={`mailto:${AGENCY.email}`}
              >
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
        <p>
          © {new Date().getFullYear()} {AGENCY.name}
        </p>
      </footer>
    </div>
  );
}
