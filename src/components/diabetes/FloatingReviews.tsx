"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DIABETES_REVIEWS } from "@/lib/diabetes";

export function FloatingReviews() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const start = window.setTimeout(() => setEnabled(true), 1800);
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
          setIndex((i) => (i + 1) % DIABETES_REVIEWS.length);
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

  // Prefetch review thumbs once enabled
  useEffect(() => {
    if (!enabled) return;
    DIABETES_REVIEWS.forEach((r) => {
      const img = new window.Image();
      img.src = r.photo;
    });
  }, [enabled]);

  if (!enabled) return null;

  const review = DIABETES_REVIEWS[index];

  return (
    <div
      className={`floating-review-card ${visible ? "is-in" : "is-out"}`}
      aria-live="polite"
    >
      <article className="pointer-events-auto overflow-hidden rounded-2xl border border-[var(--d-line)] bg-white shadow-[0_16px_40px_rgba(20,36,29,0.14)]">
        <div className="flex items-center gap-2 border-b border-[var(--d-line)] bg-[var(--d-soft)] px-3 py-2">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--d-cta)]">
            Reseña
          </span>
          <span className="ml-auto text-sm text-amber-500" aria-label={`${review.rating} estrellas`}>
            {"★".repeat(review.rating)}
          </span>
        </div>
        <div className="flex gap-3 p-3">
          <Image
            src={review.photo}
            alt=""
            width={48}
            height={48}
            sizes="48px"
            className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-2 ring-[var(--d-soft)]"
          />
          <div className="min-w-0">
            <p className="m-0 text-sm font-bold text-[var(--d-ink)]">
              {review.name}{" "}
              <span className="font-medium text-[var(--d-muted)]">· {review.place}</span>
            </p>
            <p className="m-0 mt-1 text-sm leading-snug text-[var(--d-muted)]">
              “{review.quote}”
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
