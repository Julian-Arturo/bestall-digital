"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

/**
 * La lámina pintándose, pasada por pasada, atada al scroll.
 *
 * No es un adorno: es la demostración. En vez de escribir "trabajamos por
 * fases", se ve el letrero salir de la nada — boceto, cuadrícula, fondo,
 * letra y sombra — al ritmo en que el visitante baja por la sección.
 */

const W = 420;
const H = 280;

export function PaintingDemo({
  target,
  active,
}: {
  target: RefObject<HTMLElement | null>;
  active: number;
}) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    // termina en "end 1": la última pasada cae mientras la lámina sigue
    // clavada en pantalla, no cuando ya se está yendo por arriba
    offset: ["start 0.85", "end 1"],
  });

  // cada tramo corresponde a la pasada que la lista marca como mojada,
  // así el renglón encendido y lo que se ve pintarse son lo mismo
  const boceto = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const cuadricula = useTransform(scrollYProgress, [0.22, 0.45], [0, 1]);
  const fondo = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
  const letra = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const filete = useTransform(scrollYProgress, [0.88, 1], [0, 1]);

  // el boceto se borra cuando entra el fondo — nadie deja el lápiz debajo
  const bocetoFade = useTransform(scrollYProgress, [0.48, 0.66], [1, 0.12]);
  const gridFade = useTransform(scrollYProgress, [0.52, 0.7], [1, 0.16]);

  const wipe = (v: number) => `inset(0 ${(1 - v) * 100}% 0 0)`;

  const fondoClip = useTransform(fondo, wipe);
  const letraClip = useTransform(letra, wipe);
  const fileteClip = useTransform(filete, wipe);
  const bocetoDash = useTransform(boceto, (v) => `${v * 1400} 1400`);
  const gridDash = useTransform(cuadricula, (v) => `${v * 900} 900`);

  const still = reduce;

  return (
    <div className="paint-demo" role="img" aria-label={`Lámina en la pasada ${active + 1} de 4: el letrero se pinta por capas.`}>
      <svg viewBox={`0 0 ${W} ${H}`} className="paint-demo-svg">
        <defs>
          <clipPath id="paint-plate">
            <rect x="10" y="10" width={W - 20} height={H - 20} rx="4" />
          </clipPath>
        </defs>

        {/* la lámina desnuda */}
        <rect
          x="10"
          y="10"
          width={W - 20}
          height={H - 20}
          rx="4"
          className="pd-plate"
        />

        <g clipPath="url(#paint-plate)">
          {/* pasada 1 — boceto a lápiz */}
          <motion.g
            className="pd-boceto"
            style={still ? undefined : { opacity: bocetoFade }}
          >
            <motion.path
              d="M40 60 L380 60 M40 128 L380 128 M40 196 L380 196 M40 232 L380 232"
              style={still ? undefined : { strokeDasharray: bocetoDash }}
            />
            <motion.path
              d="M60 42 L60 250 M180 42 L180 250 M300 42 L300 250 M370 42 L370 250"
              style={still ? undefined : { strokeDasharray: bocetoDash }}
            />
          </motion.g>

          {/* pasada 2 — cuadrícula y márgenes en firme */}
          <motion.g
            className="pd-grid"
            style={still ? undefined : { opacity: gridFade }}
          >
            <motion.rect
              x="34"
              y="36"
              width={W - 68}
              height={H - 72}
              style={still ? undefined : { strokeDasharray: gridDash }}
            />
            <motion.path
              d="M34 96 L386 96 M34 168 L386 168"
              style={still ? undefined : { strokeDasharray: gridDash }}
            />
          </motion.g>

          {/* pasada 3 — fondo de esmalte */}
          <motion.rect
            x="22"
            y="24"
            width={W - 44}
            height={H - 48}
            className="pd-fondo"
            style={still ? undefined : { clipPath: fondoClip }}
          />

          {/* pasada 4 — letra sobre su sombra */}
          <motion.g style={still ? undefined : { clipPath: letraClip }}>
            <text x="60" y="118" className="pd-letra-sombra">
              TU NEGOCIO
            </text>
            <text x="56" y="114" className="pd-letra">
              TU NEGOCIO
            </text>
            <text x="60" y="176" className="pd-sub-sombra">
              ABIERTO Y VENDIENDO
            </text>
            <text x="57" y="173" className="pd-sub">
              ABIERTO Y VENDIENDO
            </text>
          </motion.g>

          {/* filete final */}
          <motion.rect
            x="44"
            y="46"
            width={W - 88}
            height={H - 92}
            className="pd-filete"
            style={still ? undefined : { clipPath: fileteClip }}
          />
        </g>

        {/* tornillos: la lámina va atornillada */}
        {[
          [22, 22],
          [W - 22, 22],
          [22, H - 22],
          [W - 22, H - 22],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy + 1.5} r="5" className="pd-bolt-shade" />
            <circle cx={cx} cy={cy} r="5" className="pd-bolt" />
            <path d={`M${cx - 3} ${cy} L${cx + 3} ${cy}`} className="pd-bolt-slot" />
          </g>
        ))}
      </svg>
    </div>
  );
}
