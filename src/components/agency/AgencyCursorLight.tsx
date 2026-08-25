"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Soft wand-like glow that follows the pointer — not a grid of squares. */
export function AgencyCursorLight() {
  const reduce = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const active = useRef(false);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const onMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      active.current = true;
    };

    const onLeave = () => {
      active.current = false;
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (trailRef.current) trailRef.current.style.opacity = "0";
    };

    const tick = () => {
      const t = 0.12;
      const t2 = 0.06;
      smooth.current.x += (pos.current.x - smooth.current.x) * t;
      smooth.current.y += (pos.current.y - smooth.current.y) * t;
      trail.current.x += (smooth.current.x - trail.current.x) * t2;
      trail.current.y += (smooth.current.y - trail.current.y) * t2;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${smooth.current.x}px, ${smooth.current.y}px, 0) translate(-50%, -50%)`;
        glowRef.current.style.opacity = active.current ? "1" : "0";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0) translate(-50%, -50%)`;
        trailRef.current.style.opacity = active.current ? "0.7" : "0";
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div className="bd-cursor-layer" aria-hidden>
      <div ref={trailRef} className="bd-cursor-trail" />
      <div ref={glowRef} className="bd-cursor-glow" />
    </div>
  );
}
