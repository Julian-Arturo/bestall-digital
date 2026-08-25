"use client";

import { useEffect, useState, type FormEvent } from "react";
import { waUrl } from "@/lib/agency";

const DISCOUNT = 15;
const STORAGE_DISMISS = "bd-lead-modal-dismissed";
const STORAGE_SHOWN = "bd-lead-modal-shown";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function endOfMonthMs() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999).getTime();
}

function calcLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const BUDGETS = [
  "$2.200.000 – $3.000.000 COP",
  "$3.000.000 – $5.000.000 COP",
  "Más de $5.000.000 COP",
  "Aún no lo sé",
] as const;

export function AgencyLeadModal() {
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState<TimeLeft>(() => calcLeft(endOfMonthMs()));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [biz, setBiz] = useState("");
  const [budget, setBudget] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const target = endOfMonthMs();
    const tick = () => setLeft(calcLeft(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_DISMISS) === "1") return;
    if (sessionStorage.getItem(STORAGE_SHOWN) === "1") return;

    const onScroll = () => {
      if (window.scrollY < 420) return;
      sessionStorage.setItem(STORAGE_SHOWN, "1");
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const fallback = window.setTimeout(() => {
      if (sessionStorage.getItem(STORAGE_SHOWN) === "1") return;
      if (sessionStorage.getItem(STORAGE_DISMISS) === "1") return;
      sessionStorage.setItem(STORAGE_SHOWN, "1");
      setOpen(true);
    }, 18000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    sessionStorage.setItem(STORAGE_DISMISS, "1");
    setOpen(false);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !ok) return;
    const msg = [
      `Hola Bestall Digital 👋 Quiero mi asesoría (${DISCOUNT}% este mes).`,
      `Nombre: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      biz.trim() ? `A qué me dedico: ${biz.trim()}` : null,
      budget ? `Presupuesto: ${budget}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waUrl(msg), "_blank", "noopener,noreferrer");
    close();
  }

  if (!open) return null;

  const cells: { label: string; value: number }[] = [
    { label: "Días", value: left.days },
    { label: "Horas", value: left.hours },
    { label: "Minutos", value: left.minutes },
    { label: "Segundos", value: left.seconds },
  ];

  return (
    <div className="bd-modal-root" role="dialog" aria-modal="true" aria-labelledby="bd-modal-title">
      <button type="button" className="bd-modal-backdrop" aria-label="Cerrar" onClick={close} />
      <div className="bd-modal">
        <button type="button" className="bd-modal-x" onClick={close} aria-label="Cerrar">
          ×
        </button>
        <span className="bd-modal-badge">Asesoría gratuita</span>
        <h2 id="bd-modal-title">Agenda tu asesoría gratuita</h2>
        <p className="bd-modal-offer">
          Este mes tenemos <strong>{DISCOUNT}% de descuento</strong> en
          proyectos de marketing, tecnología y crecimiento (páginas, tráfico,
          apps y más).
        </p>

        <div className="bd-countdown" aria-live="polite">
          {cells.map((c) => (
            <div key={c.label} className="bd-countdown-cell">
              <strong>{String(c.value).padStart(2, "0")}</strong>
              <span>{c.label}</span>
            </div>
          ))}
        </div>

        <form className="bd-modal-form" onSubmit={submit}>
          <label>
            <span className="sr-only">Nombre completo</span>
            <input
              required
              name="name"
              autoComplete="name"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span className="sr-only">Número de WhatsApp</span>
            <input
              required
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Número de WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            <span className="sr-only">A qué se dedica</span>
            <textarea
              name="biz"
              rows={3}
              placeholder="A qué se dedica"
              value={biz}
              onChange={(e) => setBiz(e.target.value)}
            />
          </label>
          <label>
            <span className="sr-only">Presupuesto</span>
            <select
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            >
              <option value="" disabled>
                Presupuesto para invertir en desarrollo web
              </option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label className="bd-modal-check">
            <input
              type="checkbox"
              checked={ok}
              onChange={(e) => setOk(e.target.checked)}
              required
            />
            <span>
              Acepto el contacto comercial por WhatsApp para agendar la asesoría.
            </span>
          </label>
          <button type="submit" className="bd-btn bd-modal-submit">
            Quiero mi asesoría
          </button>
        </form>
      </div>
    </div>
  );
}
