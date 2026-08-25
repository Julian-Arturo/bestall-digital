"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
  sp: number;
};

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  r: number;
};

/** Starfield sky + mouse as a subtle comet. */
export function AgencyCursorLight() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let stars: Star[] = [];
    const sparks: Spark[] = [];
    const mouse = { x: 0, y: 0, alive: false };
    const comet = { x: 0, y: 0, px: 0, py: 0 };
    let lastSpawn = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(160, (w * h) / 14000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.55 + 0.15,
        tw: Math.random() * Math.PI * 2,
        sp: 0.008 + Math.random() * 0.02,
      }));
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!mouse.alive) {
        comet.x = mouse.x;
        comet.y = mouse.y;
        comet.px = mouse.x;
        comet.py = mouse.y;
      }
      mouse.alive = true;
    };

    const onLeave = () => {
      mouse.alive = false;
    };

    const spawnTrail = (now: number) => {
      if (!fine || !mouse.alive) return;
      if (now - lastSpawn < 16) return;
      lastSpawn = now;
      const dx = comet.x - comet.px;
      const dy = comet.y - comet.py;
      const speed = Math.hypot(dx, dy);
      if (speed < 0.4) return;

      const n = Math.min(4, 1 + Math.floor(speed / 18));
      for (let i = 0; i < n; i++) {
        sparks.push({
          x: comet.x + (Math.random() - 0.5) * 6,
          y: comet.y + (Math.random() - 0.5) * 6,
          vx: -dx * 0.08 + (Math.random() - 0.5) * 0.6,
          vy: -dy * 0.08 + (Math.random() - 0.5) * 0.6,
          life: 1,
          max: 0.55 + Math.random() * 0.55,
          r: 0.6 + Math.random() * 1.4,
        });
      }
      if (sparks.length > 80) sparks.splice(0, sparks.length - 80);
    };

    const tick = (now: number) => {
      ctx.clearRect(0, 0, w, h);

      // stars
      for (const s of stars) {
        s.tw += s.sp;
        const pulse = 0.55 + 0.45 * Math.sin(s.tw);
        const alpha = s.a * pulse;
        ctx.beginPath();
        ctx.fillStyle = `rgba(220, 235, 255, ${alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.r > 1.1) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 180, 120, ${alpha * 0.25})`;
          ctx.arc(s.x, s.y, s.r * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (fine && mouse.alive) {
        comet.px = comet.x;
        comet.py = comet.y;
        comet.x += (mouse.x - comet.x) * 0.18;
        comet.y += (mouse.y - comet.y) * 0.18;
        spawnTrail(now);

        const dx = comet.x - comet.px;
        const dy = comet.y - comet.py;
        const ang = Math.atan2(dy, dx);
        const len = Math.min(70, 14 + Math.hypot(dx, dy) * 3.2);

        // comet tail streak
        const grad = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - Math.cos(ang) * len,
          comet.y - Math.sin(ang) * len,
        );
        grad.addColorStop(0, "rgba(255, 200, 140, 0.55)");
        grad.addColorStop(0.35, "rgba(255, 120, 60, 0.22)");
        grad.addColorStop(1, "rgba(46, 196, 182, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x - Math.cos(ang) * len,
          comet.y - Math.sin(ang) * len,
        );
        ctx.stroke();

        // soft halo
        const halo = ctx.createRadialGradient(
          comet.x,
          comet.y,
          0,
          comet.x,
          comet.y,
          42,
        );
        halo.addColorStop(0, "rgba(255, 230, 200, 0.45)");
        halo.addColorStop(0.35, "rgba(255, 140, 70, 0.16)");
        halo.addColorStop(1, "rgba(46, 196, 182, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 42, 0, Math.PI * 2);
        ctx.fill();

        // nucleus
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 248, 240, 0.9)";
        ctx.arc(comet.x, comet.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // spark particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.life -= 0.018;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        if (p.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        const a = (p.life / p.max) * 0.7;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 190, 130, ${a})`;
        ctx.arc(p.x, p.y, p.r * (p.life / p.max), 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  if (reduce) {
    return <div className="bd-starfield-static" aria-hidden />;
  }

  return (
    <div className="bd-cursor-layer" aria-hidden>
      <canvas ref={canvasRef} className="bd-starfield-canvas" />
    </div>
  );
}
