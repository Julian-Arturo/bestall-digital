import Image from "next/image";
import { PrimaryCta } from "@/components/PrimaryCta";
import { FaqList } from "@/components/FaqList";
import { HeroVideo } from "@/components/HeroVideo";
import {
  BENEFITS,
  BRAND,
  COUPON,
  CTA_REL,
  DISCOUNT_LABEL,
  EBOOKS,
  FAQ,
  INCLUSIONS,
  MODULES,
  PRICE_LABEL,
  PRICE_LIST,
  TESTIMONIALS,
  VALUE_STACK,
  ctaUrl,
} from "@/lib/constants";

export function LandingPage() {
  return (
    <main id="top" className="bg-white text-[var(--ink)]">
      {/* HERO — video primero, poco texto */}
      <section
        id="hero"
        className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#fff7f0_50%,#ffffff_100%)] pb-12 pt-24 md:pb-16 md:pt-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 flex flex-wrap justify-center gap-2">
            <span className="badge">{DISCOUNT_LABEL}</span>
            <span className="badge badge-ok">Garantía 7 días</span>
            <span className="badge">Acceso inmediato</span>
          </div>

          <HeroVideo />

          <div className="mt-8 text-center">
            <p className="m-0 text-sm font-bold uppercase tracking-[0.16em] text-[var(--orange)]">
              {BRAND.pageName}
            </p>
            <h1 className="font-display mx-auto mt-3 mb-0 max-w-[18ch] text-[clamp(2rem,6.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-[var(--ink)] md:max-w-3xl">
              Antes de pagar una reparación,{" "}
              <span className="text-[var(--orange-deep)]">
                aprende a detectar el problema.
              </span>
            </h1>
            <p className="font-display mx-auto mt-4 m-0 text-xl font-bold text-[var(--ink)] md:text-2xl">
              <span className="text-[var(--orange)]">Aprende.</span> Entiende.{" "}
              <span className="text-[var(--orange)]">Repara.</span> Ahorra.
            </p>

            <div className="mt-7 mx-auto flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:items-stretch">
              <PrimaryCta
                id="cta-hero"
                src="hero"
                label="Quiero el 85% OFF"
                className="w-full flex-1 items-stretch text-center sm:items-start sm:text-left"
              />
              <div className="flex shrink-0 flex-col justify-center rounded-2xl border border-[var(--line)] bg-white px-5 py-3 text-left shadow-sm sm:min-w-[168px]">
                <p className="m-0 text-sm font-bold text-[var(--orange-deep)]">
                  Cupón {COUPON}
                </p>
                <p className="m-0 mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="price-face text-lg text-[var(--muted)] line-through">
                    {PRICE_LIST}
                  </span>
                  <span className="price-face text-3xl font-extrabold text-[#1f7a4d]">
                    {PRICE_LABEL}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="section-pad mx-auto grid max-w-6xl gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "+2.300 alumnos en Hotmart",
            "4.4 ★ · 43 evaluaciones",
            "88% reseñas positivas",
            `${BRAND.followers} en Facebook`,
          ].map((item) => (
            <p
              key={item}
              className="font-display m-0 rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-center text-lg font-bold"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-y section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display m-0 text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-none">
            El problema no es la moto. Es entregarla sin saber qué le van a hacer.
          </h2>
          <p className="mx-auto mt-5 max-w-[var(--measure)] text-lg text-[var(--muted)]">
            Aceptas el precio del taller porque no tienes con qué discutir. Después
            vienen las tres de siempre:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            "Quedarte varado y no saber por dónde mirar.",
            "Pagar un mantenimiento y salir igual.",
            "Oír un ruido nuevo y no tener a quién preguntar.",
          ].map((t, i) => (
            <div key={t} className="card p-5">
              <p className="font-display m-0 text-4xl font-extrabold text-[var(--orange)]">
                0{i + 1}
              </p>
              <p className="mt-3 m-0 text-lg font-semibold leading-snug">{t}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold">
          Aprender mecánica no es dejar el taller. Es llegar sabiendo qué pedir.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCta src="problema" label="Quiero dejar de adivinar" />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="section-y section-pad bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-display m-0 text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-none">
              Beneficios claros. Sin humo.
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Todo lo que necesitas para entender tu moto y actuar con criterio.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <article key={b.title} className="card p-5">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-[var(--orange)]" />
                <h3 className="font-display m-0 text-2xl font-bold">{b.title}</h3>
                <p className="mt-2 m-0 leading-relaxed text-[var(--muted)]">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section className="section-y section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display m-0 text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-none">
              No es un curso que se acaba. Es una membresía que se queda.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              Cuando terminas de verlo, siguen las clases en vivo, el foro, la
              comunidad y la biblioteca. Un pago de {PRICE_LABEL}. Sin mensualidades.
            </p>
            <ul className="mt-6 list-none space-y-3 p-0">
              {INCLUSIONS.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--ink)]">
                  <span className="mt-1 text-[var(--orange)]" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PrimaryCta src="membresia" label="Quiero la membresía" />
            </div>
          </div>
          <div className="card overflow-hidden p-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[calc(var(--radius)-2px)] bg-[var(--black)]">
              <Image
                src="/brand/avatar.png"
                alt="Mecánica VIP — mentor de la academia"
                fill
                className="object-cover object-top opacity-95"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-display m-0 text-3xl font-bold text-white">
                  {BRAND.promise}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="section-y section-pad bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display m-0 text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-none">
              El programa · 14 módulos
            </h2>
            <p className="font-display m-0 text-2xl font-bold text-[var(--orange)]">
              +300 lecciones
            </p>
          </div>
          <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
            {MODULES.map((mod, i) => (
              <li
                key={mod}
                className="flex gap-4 rounded-xl border border-[var(--line)] bg-white p-4"
              >
                <span className="font-display text-3xl font-extrabold text-[var(--orange)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-lg font-semibold leading-snug">{mod}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <PrimaryCta src="modulos" />
          </div>
        </div>
      </section>

      {/* OFERTA / DESCUENTO */}
      <section id="oferta" className="section-y section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--black)] text-white shadow-[var(--shadow)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-10">
                <span className="badge !bg-[rgba(241,90,36,0.25)] !text-[#ffb48f]">
                  Oferta Hotmart · cupón {COUPON} · {DISCOUNT_LABEL}
                </span>
                <h2 className="font-display mt-4 mb-3 text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-none">
                  De {PRICE_LIST} a{" "}
                  <span className="text-[#3dDC84]">{PRICE_LABEL}</span>
                </h2>
                <p className="m-0 max-w-xl text-base leading-relaxed text-white/75">
                  Checkout oficial con descuento aplicado. Pagas en dólares (o tu
                  moneda local según el tipo de cambio). Acceso inmediato + garantía
                  de 7 días.
                </p>

                <div className="mt-8 space-y-2">
                  {VALUE_STACK.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-3 border-b border-white/10 py-2 text-sm"
                    >
                      <span className="text-white/85">{row.name}</span>
                      <span className="shrink-0 font-semibold text-[#ffb48f]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#3dDC84]/30 bg-white/5 p-4">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="m-0 text-sm text-white/60">Precio lista</p>
                      <p className="price-face m-0 text-3xl text-white/45 line-through">
                        {PRICE_LIST}
                      </p>
                    </div>
                    <div>
                      <p className="m-0 text-sm font-bold text-[#3dDC84]">
                        Hoy con {DISCOUNT_LABEL}
                      </p>
                      <p className="price-face m-0 text-6xl leading-none text-[#3dDC84]">
                        {PRICE_LABEL}
                      </p>
                    </div>
                  </div>
                  <p className="m-0 mt-3 text-xs text-white/55">
                    Link de checkout: go.hotmart.com · cupón {COUPON} aplicado · USD
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={ctaUrl("oferta")}
                    rel={CTA_REL}
                    className="cta-primary"
                    data-event="checkout_click"
                    data-cta-src="oferta"
                  >
                    Sí, quiero el {DISCOUNT_LABEL} ahora · {PRICE_LABEL}
                  </a>
                  <p className="mt-3 m-0 text-sm text-white/60">
                    Garantía 7 días · Pago seguro Hotmart · Sin mensualidades
                  </p>
                </div>
              </div>

              <div className="relative min-h-[320px] bg-[var(--bg-warm)] lg:min-h-full">
                <Image
                  src="/brand/logo.png"
                  alt="Logo Mecánica VIP"
                  fill
                  className="object-contain p-10 opacity-95"
                  sizes="40vw"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="rounded-2xl bg-white p-4 text-[var(--ink)] shadow-lg">
                    <p className="font-display m-0 text-2xl font-bold">
                      Libros digitales incluidos
                    </p>
                    <ul className="mt-2 list-none space-y-1 p-0 text-sm text-[var(--muted)]">
                      {EBOOKS.slice(0, 4).map((b) => (
                        <li key={b}>· {b}</li>
                      ))}
                      <li>· +3 guías más</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="section-y section-pad bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display m-0 text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-none">
            Lo que dicen quienes ya entraron
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Testimonios publicados por el productor. Resultados individuales varían.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card m-0 p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={56}
                    height={56}
                    sizes="56px"
                    className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-[var(--orange-soft)]"
                  />
                  <div>
                    <figcaption className="font-display m-0 text-xl font-bold text-[var(--orange-deep)]">
                      {t.name}
                    </figcaption>
                    <p className="m-0 text-amber-500" aria-hidden>
                      ★★★★★
                    </p>
                  </div>
                </div>
                <blockquote className="mt-4 m-0 text-lg leading-relaxed text-[var(--ink)]">
                  “{t.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <PrimaryCta src="testimonios" label="Quiero resultados como estos" />
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="section-y section-pad">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <div className="rounded-[20px] border border-[var(--orange)]/30 bg-[var(--bg-warm)] p-6">
            <h2 className="font-display m-0 text-3xl font-extrabold">Es para ti si…</h2>
            <ul className="mt-5 list-none space-y-3 p-0 text-lg">
              <li>· Tienes moto y quieres entender qué le pasa</li>
              <li>· Empiezas desde cero</li>
              <li>· Quieres hacer mantenimientos básicos tú mismo</li>
              <li>· Quieres ahorrar visitas evitables al taller</li>
            </ul>
          </div>
          <div className="rounded-[20px] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display m-0 text-3xl font-extrabold">No es para ti si…</h2>
            <ul className="mt-5 list-none space-y-3 p-0 text-lg text-[var(--muted)]">
              <li>· Ya buscas diagnóstico electrónico avanzado de taller</li>
              <li>· Necesitas práctica presencial guiada</li>
              <li>· Quieres un curso de una sola marca</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="section-y section-pad bg-[var(--ok-soft)]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge badge-ok">Risk free</span>
          <h2 className="font-display mt-4 mb-4 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-none">
            Garantía de 7 días. Sin explicaciones.
          </h2>
          <p className="mx-auto m-0 max-w-[var(--measure)] text-lg text-[var(--muted)]">
            Entras, ves módulos, pruebas el grupo. Si en 7 días decides que no era
            para ti, pides el reembolso y Hotmart te devuelve el 100%.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCta src="garantia" label="Probar con garantía de 7 días" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y section-pad">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display m-0 mb-8 text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-none">
            Preguntas antes de decidir
          </h2>
          <FaqList items={FAQ} />
        </div>
      </section>

      {/* CIERRE */}
      <section className="section-y section-pad bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/brand/logo.png"
            alt=""
            width={88}
            height={88}
            className="mx-auto rounded-full"
          />
          <h2 className="font-display mt-5 mb-3 text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold leading-none">
            Tu moto ya te está diciendo qué le pasa.
          </h2>
          <p className="text-lg text-[var(--muted)]">
            14 módulos · +300 lecciones · soporte de por vida · certificado ·{" "}
            {PRICE_LABEL}
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCta src="cierre" className="items-center" label="Entrar a la membresía" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] bg-white py-12">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt=""
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-display m-0 text-2xl font-extrabold">
                  {BRAND.name.toUpperCase()}
                </p>
                <p className="m-0 text-sm font-bold uppercase tracking-[0.16em] text-[var(--orange)]">
                  {BRAND.academy}
                </p>
              </div>
            </div>
            <p className="mt-4 m-0 text-sm leading-relaxed text-[var(--muted)]">
              Página de afiliado autorizado ({BRAND.pageName}). El curso lo produce
              y entrega La Tienda Del Motero. Pago y garantía: Hotmart. Precio de
              oferta: {PRICE_LABEL} (USD).
            </p>
          </div>
          <div className="text-sm text-[var(--muted)]">
            <p className="m-0 font-semibold text-[var(--ink)]">Retargeting / tracking</p>
            <p className="mt-2 m-0">
              CTAs con <code>?src=</code> (hero, sticky, oferta, etc.) listos para
              Meta/TikTok/GTM.
            </p>
            <p className="mt-3 m-0">
              Facebook:{" "}
              <a href={BRAND.facebook} className="font-semibold text-[var(--orange)]">
                {BRAND.handle}
              </a>
            </p>
            <p className="mt-4 m-0 text-xs">
              © {new Date().getFullYear()} {BRAND.pageName}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
