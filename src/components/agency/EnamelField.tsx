"use client";

import { useEffect, useRef } from "react";

/**
 * Textura de lámina esmaltada, dibujada en canvas.
 * El canvas aporta SOLO la materia (grano de lámina, cáscara de naranja,
 * mota de pintura, óxido de borde) en alfa; el color del esmalte lo pone el CSS
 * de la sección. Se dibuja una vez por tamaño — cero costo por frame.
 */

type Props = {
  /** Semilla: dos láminas con la misma semilla salen idénticas. */
  seed?: number;
  /** Cuánto óxido asoma por los bordes y los tornillos. 0 = lámina nueva. */
  rust?: number;
  /** Fuerza general de la materia. */
  strength?: number;
  className?: string;
};

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Grano de lámina cepillada: rayas horizontales finas, en un tile repetible. */
function grainTile(rand: () => number) {
  const size = 256;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const g = c.getContext("2d");
  if (!g) return null;
  const img = g.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    // cada renglón de lámina lleva su propio nivel: eso es el cepillado
    const row = rand();
    for (let x = 0; x < size; x++) {
      const n = row * 0.55 + rand() * 0.45;
      const i = (y * size + x) * 4;
      const v = n > 0.5 ? 255 : 0;
      d[i] = v;
      d[i + 1] = v;
      d[i + 2] = v;
      d[i + 3] = Math.round(Math.abs(n - 0.5) * 46);
    }
  }
  g.putImageData(img, 0, 0);
  return c;
}

export function EnamelField({
  seed = 7,
  rust = 0.35,
  strength = 1,
  className = "",
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    let frame = 0;

    const paint = () => {
      const rect = parent.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      if (w < 2 || h < 2) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const rand = mulberry32(seed * 9973 + 17);

      // 1 — lámina cepillada bajo el esmalte
      const tile = grainTile(mulberry32(seed * 131 + 5));
      if (tile) {
        const pattern = ctx.createPattern(tile, "repeat");
        if (pattern) {
          ctx.save();
          ctx.globalAlpha = 0.5 * strength;
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, w, h);
          ctx.restore();
        }
      }

      // 2 — cáscara de naranja: el esmalte nunca seca perfectamente liso
      const blobs = Math.round((w * h) / 24000);
      ctx.save();
      for (let i = 0; i < blobs; i++) {
        const x = rand() * w;
        const y = rand() * h;
        const r = 12 + rand() * 46;
        const light = rand() > 0.5;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        const a = (light ? 0.05 : 0.07) * strength;
        g.addColorStop(0, light ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3 — mota: polvo de pintura que quedó pegado
      const specks = Math.round((w * h) / 5200);
      ctx.save();
      for (let i = 0; i < specks; i++) {
        const x = rand() * w;
        const y = rand() * h;
        const s = rand() > 0.86 ? 1.8 : 0.9;
        ctx.fillStyle =
          rand() > 0.55
            ? `rgba(12,10,8,${(0.16 + rand() * 0.2) * strength})`
            : `rgba(255,248,232,${(0.1 + rand() * 0.16) * strength})`;
        ctx.fillRect(x, y, s, s);
      }
      ctx.restore();

      // 4 — óxido: entra por el canto y muerde alrededor de los tornillos
      if (rust > 0) {
        ctx.save();

        // el filo de la lámina es lo primero que se pica
        const band = ctx.createLinearGradient(0, 0, 0, h);
        band.addColorStop(0, `rgba(150,74,28,${0.42 * rust * strength})`);
        band.addColorStop(0.09, "rgba(0,0,0,0)");
        band.addColorStop(0.91, "rgba(0,0,0,0)");
        band.addColorStop(1, `rgba(150,74,28,${0.42 * rust * strength})`);
        ctx.fillStyle = band;
        ctx.fillRect(0, 0, w, h);

        const side = ctx.createLinearGradient(0, 0, w, 0);
        side.addColorStop(0, `rgba(150,74,28,${0.36 * rust * strength})`);
        side.addColorStop(0.05, "rgba(0,0,0,0)");
        side.addColorStop(0.95, "rgba(0,0,0,0)");
        side.addColorStop(1, `rgba(150,74,28,${0.36 * rust * strength})`);
        ctx.fillStyle = side;
        ctx.fillRect(0, 0, w, h);

        // florones de óxido colgando del canto
        const blooms = Math.round(14 + rust * 20);
        for (let i = 0; i < blooms; i++) {
          const onVertical = rand() > 0.45;
          const x = onVertical ? (rand() > 0.5 ? 0 : w) : rand() * w;
          const y = onVertical ? rand() * h : rand() > 0.5 ? 0 : h;
          const r = 30 + rand() * 130;
          const g = ctx.createRadialGradient(x, y, 0, x, y, r);
          g.addColorStop(0, `rgba(158,78,30,${0.5 * rust * strength})`);
          g.addColorStop(0.45, `rgba(128,60,24,${0.22 * rust * strength})`);
          g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }

        // la perforación de cada tornillo se oxida desde adentro
        const inset = 22;
        for (const [bx, by] of [
          [inset, inset],
          [w - inset, inset],
          [inset, h - inset],
          [w - inset, h - inset],
        ]) {
          const r = 30 + rust * 46;
          const g = ctx.createRadialGradient(bx, by, 2, bx, by, r);
          g.addColorStop(0, `rgba(166,84,34,${0.6 * rust * strength})`);
          g.addColorStop(0.4, `rgba(132,62,26,${0.28 * rust * strength})`);
          g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(bx, by, r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 5 — la lámina se oscurece contra sus propios bordes
      ctx.save();
      const vign = ctx.createRadialGradient(
        w / 2,
        h / 2,
        Math.min(w, h) * 0.2,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.78,
      );
      vign.addColorStop(0, "rgba(0,0,0,0)");
      vign.addColorStop(1, `rgba(0,0,0,${0.3 * strength})`);
      ctx.fillStyle = vign;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      canvas.dataset.painted = "true";
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(parent);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [seed, rust, strength]);

  return <canvas ref={ref} className={`sign-enamel ${className}`} aria-hidden />;
}
