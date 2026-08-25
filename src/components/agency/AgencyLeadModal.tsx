"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { waUrl } from "@/lib/agency";

const DISCOUNT = 15;
const STORAGE_DISMISS = "bd-lead-card-dismissed-v4";

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
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [left, setLeft] = useState<TimeLeft>(() => calcLeft(endOfMonthMs()));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [biz, setBiz] = useState("");
  const [budget, setBudget] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const target = endOfMonthMs();
    const tick = () => setLeft(calcLeft(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_DISMISS) === "1") return;
    } catch {
      /* ignore */
    }

    let opened = false;
    const openOnce = () => {
      if (opened) return;
      opened = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    const scrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return 0;
      return window.scrollY / max;
    };

    const onScroll = () => {
      // Mostrar hacia la segunda mitad / ~65–80% del recorrido
      if (scrollProgress() < 0.65) return;
      openOnce();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return;
    }
    const id = window.requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(id);
    };
  }, [open]);

  function close() {
    setVisible(false);
    window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_DISMISS, "1");
      } catch {
        /* ignore */
      }
      setOpen(false);
    }, 420);
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

  if (!mounted || !open) return null;

  const cells: { label: string; value: number }[] = [
    { label: "Días", value: left.days },
    { label: "Horas", value: left.hours },
    { label: "Minutos", value: left.minutes },
    { label: "Segundos", value: left.seconds },
  ];

  return createPortal(
    <div
      className={`bd-modal-root${visible ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bd-modal-title"
    >
      <button type="button" className="bd-modal-backdrop" aria-label="Cerrar" onClick={close} />
      <aside className="bd-modal">
        <button type="button" className="bd-modal-x" onClick={close} aria-label="Cerrar">
          ×
        </button>
        <span className="bd-modal-badge">Asesoría gratuita</span>
        <h2 id="bd-modal-title">Agenda tu asesoría gratuita</h2>
        <p className="bd-modal-offer">
          Este mes tenemos <strong>{DISCOUNT}% de descuento</strong> en marketing,
          tecnología y crecimiento.
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
          <div className="bd-modal-row">
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
          </div>
          <label>
            <span className="sr-only">A qué se dedica</span>
            <textarea
              name="biz"
              rows={2}
              placeholder="Cuéntanos brevemente sobre tu negocio"
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
                Selecciona tu presupuesto
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
      </aside>
    </div>,
    document.body,
  );
}
