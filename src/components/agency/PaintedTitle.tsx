"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Un renglón pintado a mano.
 *
 * Dos oficios del rotulista, en código:
 *
 * 1. LAS PASADAS. La brocha no revela con un fundido: barre. Cada capa entra
 *    con un borde dentado que avanza de izquierda a derecha, y entran en el
 *    orden real del taller — primero la sombra, encima la letra, y de último
 *    el filete. El brillo del esmalte cabalga sobre el borde mojado.
 *
 * 2. EL AJUSTE. Cuando al rotulista se le acaba la lámina, condensa la letra
 *    hasta que el renglón cierra justo en el borde. Aquí lo hace el eje de
 *    ancho variable de la tipografía: medimos el renglón y ajustamos `wdth`
 *    hasta que llena la lámina exactamente, en cada ancho de pantalla.
 */

type Layer = "shadow" | "fill" | "key";

type Props = {
  text: string;
  /** Ordena el escalonado entre renglones del mismo letrero. */
  index?: number;
  /** Ajustar el ancho de la letra hasta llenar la lámina. */
  fit?: boolean;
  /** Capas de pintura, de atrás hacia adelante. */
  layers?: Layer[];
  /** Espera antes de la primera pasada, en segundos. */
  delay?: number;
  /** Pinta al entrar en pantalla en vez de al cargar. */
  onView?: boolean;
  weight?: number;
  className?: string;
  /**
   * El renglón va en versales, así que cuando el encabezado ya ofrece el
   * texto en prosa para lectores de pantalla, la pintura se marca decorativa
   * y nadie escucha el título dos veces.
   */
  decorative?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;
const STEPS = 7;

/**
 * Borde dentado de brocha: la pasada no termina en una línea recta, termina
 * donde las cerdas dejaron de tocar la lámina.
 */
function bristleEdge(progress: number, seed: number) {
  const pts: string[] = ["0% -6%"];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    // dentado fijo por renglón: la misma brocha siempre deja la misma huella
    const wobble = Math.sin(seed * 12.9898 + i * 4.1414) * 2.4;
    const x = Math.max(-8, progress * 118 - 9 + wobble);
    pts.push(`${x.toFixed(2)}% ${(t * 112 - 6).toFixed(2)}%`);
  }
  pts.push("0% 106%");
  return `polygon(${pts.join(", ")})`;
}

function useBrushFit(enabled: boolean, text: string) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const gaugeRef = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState({ wdth: 100, size: 1 });

  useLayoutEffect(() => {
    if (!enabled) return;
    const line = lineRef.current;
    const gauge = gaugeRef.current;
    if (!line || !gauge) return;

    let raf = 0;

    const measure = () => {
      const target = line.clientWidth;
      if (!target) return;

      // el eje de ancho no es lineal, así que se mide y se corrige
      let wdth = 100;
      let natural = 0;
      for (let i = 0; i < 3; i++) {
        gauge.style.fontVariationSettings = `"wdth" ${wdth}`;
        natural = gauge.scrollWidth;
        if (!natural) return;
        wdth = Math.min(125, Math.max(62, wdth * (target / natural)));
      }

      // si ni condensada al máximo cierra el renglón, se baja el cuerpo
      gauge.style.fontVariationSettings = `"wdth" ${wdth}`;
      natural = gauge.scrollWidth;
      const size = natural > target ? Math.max(0.5, target / natural) : 1;

      setFit((prev) =>
        Math.abs(prev.wdth - wdth) < 0.4 && Math.abs(prev.size - size) < 0.005
          ? prev
          : { wdth, size },
      );
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(line);

    // la letra solo mide bien cuando la fuente ya está cargada
    document.fonts?.ready.then(schedule).catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [enabled, text]);

  return { lineRef, gaugeRef, fit };
}

export function PaintedLine({
  text,
  index = 0,
  fit = false,
  layers = ["shadow", "fill", "key"],
  delay = 0,
  onView = false,
  weight = 900,
  className = "",
  decorative = false,
}: Props) {
  const reduce = useReducedMotion();
  const { lineRef, gaugeRef, fit: metrics } = useBrushFit(fit, text);
  const hostRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(hostRef, { once: true, margin: "-12%" });
  const started = onView ? inView : true;

  const progress = useMotionValue(reduce ? 1 : 0);
  const shadowClip = useTransform(progress, (p) => bristleEdge(p, index + 1));
  const fillClip = useTransform(progress, (p) =>
    bristleEdge(Math.max(0, (p - 0.16) / 0.84), index + 2),
  );
  const keyClip = useTransform(progress, (p) =>
    bristleEdge(Math.max(0, (p - 0.4) / 0.6), index + 3),
  );
  // el brillo del esmalte va montado en el borde mojado de la pasada
  const wetX = useTransform(progress, (p) => `${(p - 0.16) * 118 - 9}%`);
  const wetOpacity = useTransform(progress, [0, 0.2, 0.85, 1], [0, 0.9, 0.7, 0]);

  useEffect(() => {
    if (reduce || !started) return;
    const controls = animate(progress, 1, {
      duration: 1.05,
      delay: delay + index * 0.16,
      ease: EASE,
    });
    return () => controls.stop();
  }, [started, reduce, delay, index, progress]);

  const clipFor: Record<Layer, typeof shadowClip> = {
    shadow: shadowClip,
    fill: fillClip,
    key: keyClip,
  };

  const style = {
    "--wdth": metrics.wdth,
    "--wght": weight,
    "--fit-size": metrics.size,
  } as React.CSSProperties;

  return (
    <span
      ref={hostRef}
      className={`pt-line ${fit ? "pt-fit" : ""} ${className}`}
      style={style}
    >
      {fit && (
        <span className="pt-measure" ref={lineRef} aria-hidden>
          <span className="pt-gauge" ref={gaugeRef}>
            {text}
          </span>
        </span>
      )}

      {layers.map((layer) => (
        <motion.span
          key={layer}
          className={`pt-layer pt-${layer}`}
          style={{ clipPath: reduce ? undefined : clipFor[layer] }}
          aria-hidden={decorative || layer !== "fill"}
        >
          {text}
        </motion.span>
      ))}

      {!reduce && (
        <motion.span
          className="pt-wet"
          style={{ left: wetX, opacity: wetOpacity }}
          aria-hidden
        />
      )}
    </span>
  );
}

/** Varios renglones de un mismo letrero, escalonados como pasadas de brocha. */
export function PaintedSign({
  lines,
  fit = true,
  onView = false,
  delay = 0,
  decorative = false,
  className = "",
}: {
  lines: readonly string[];
  fit?: boolean;
  onView?: boolean;
  delay?: number;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <span className={`pt-sign ${className}`}>
      {lines.map((line, i) => (
        <PaintedLine
          key={line}
          text={line}
          index={i}
          fit={fit}
          onView={onView}
          delay={delay}
          decorative={decorative}
        />
      ))}
    </span>
  );
}
