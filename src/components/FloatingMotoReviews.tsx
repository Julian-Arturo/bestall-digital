"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FLOATING_REVIEWS } from "@/lib/constants";

export function FloatingMotoReviews() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = window.setTimeout(() => setEnabled(true), 1600);
    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let hideTimer: number | undefined;
    const show = () => {
      setVisible(true);
      hideTimer = window.setTimeout(() => {
        setVisible(false);
        window.setTimeout(() => {
          setIndex((i) => (i + 1) % FLOATING_REVIEWS.length);
        }, 400);
      }, 5200);
    };
    show();
    const cycle = window.setInterval(show, 7000);
    return () => {
      window.clearInterval(cycle);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    FLOATING_REVIEWS.forEach((r) => {
      const img = new window.Image();
      img.src = r.photo;
    });
  }, [enabled]);

  if (!enabled) return null;
  const review = FLOATING_REVIEWS[index];

  return (
    <div
      className={`floating-review-card ${visible ? "is-in" : "is-out"}`}
      aria-live="polite"
    >
      <article className="pointer-events-auto overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_16px_40px_rgba(18,20,23,0.14)]">
        <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--orange)]">
            Reseña de alumno
          </span>
          <span className="ml-auto text-amber-500 text-sm" aria-label="5 estrellas">
            ★★★★★
          </span>
        </div>
        <div className="flex gap-3 p-3">
          <Image
            src={review.photo}
            alt=""
            width={48}
            height={48}
            sizes="48px"
            className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-2 ring-[var(--orange-soft)]"
          />
          <div className="min-w-0">
            <p className="m-0 text-sm font-bold text-[var(--ink)]">{review.name}</p>
            <p className="m-0 mt-1 text-sm leading-snug text-[var(--muted)]">
              “{review.quote}”
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
