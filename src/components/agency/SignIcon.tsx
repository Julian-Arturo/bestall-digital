"use client";

import type { ServiceIconName } from "@/lib/agency";

/**
 * Pictogramas del rotulista: un solo grosor de trazo, puntas redondas,
 * formas que se leen desde la acera de enfrente. Nada de glifos prestados.
 */

const BASE = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "sign-icon",
  "aria-hidden": true as const,
};

export function SignIcon({ name }: { name: ServiceIconName }) {
  switch (name) {
    case "pagina":
      return (
        <svg {...BASE}>
          <rect x="6" y="9" width="36" height="30" rx="2.5" />
          <path d="M6 18h36" />
          <path d="M12 25h13M12 31h9" />
          <path d="M31 25h6v8h-6z" />
        </svg>
      );
    case "trafico":
      return (
        <svg {...BASE}>
          <path d="M6 38V10" />
          <path d="M6 38h36" />
          <path d="M12 31l8-9 7 5 11-15" />
          <path d="M31 12h7v7" />
        </svg>
      );
    case "socio":
      return (
        <svg {...BASE}>
          <circle cx="18" cy="17" r="6" />
          <circle cx="33" cy="20" r="4.5" />
          <path d="M7 39c0-6.5 5-11 11-11s11 4.5 11 11" />
          <path d="M33 29c5 0 8 3.5 8 10" />
        </svg>
      );
    case "app":
      return (
        <svg {...BASE}>
          <rect x="15" y="6" width="18" height="36" rx="3" />
          <path d="M21 12h6" />
          <path d="M20 22h8M20 28h5" />
          <circle cx="24" cy="36" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "engranaje":
      return (
        <svg {...BASE}>
          <circle cx="24" cy="24" r="7" />
          <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.6 10.6l4.3 4.3M33.1 33.1l4.3 4.3M37.4 10.6l-4.3 4.3M14.9 33.1l-4.3 4.3" />
        </svg>
      );
    case "brocha":
      return (
        <svg {...BASE}>
          <path d="M28 6l14 14-9 9-14-14z" />
          <path d="M19 15l-6 6 14 14 6-6" />
          <path d="M13 35c-3 3-4 5-5 8 3-1 5-2 8-5" />
        </svg>
      );
    case "megafono":
      return (
        <svg {...BASE}>
          <path d="M8 20v8a3 3 0 003 3h5l14 8V9L16 17h-5a3 3 0 00-3 3z" />
          <path d="M36 17c2.6 2 2.6 12 0 14" />
          <path d="M16 31v9" />
        </svg>
      );
  }
}

/** La marca, pintada: placa con la B y su sombra dura desplazada. */
export function SignMark({ size = 46 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className="sign-mark"
      aria-hidden
    >
      <rect x="5" y="7" width="38" height="38" rx="2" className="sign-mark-shade" />
      <rect x="2" y="3" width="38" height="38" rx="2" className="sign-mark-plate" />
      <path
        d="M12 12h9.5c3.4 0 5.5 1.7 5.5 4.6 0 2.1-1.1 3.5-3 4.1 2.4.5 3.9 2.2 3.9 4.7 0 3.3-2.4 5.3-6.4 5.3H12V12zm4.6 3.4v4.4h4c1.6 0 2.5-.8 2.5-2.2 0-1.4-.9-2.2-2.5-2.2h-4zm0 7.5v4.9h4.5c1.8 0 2.8-.9 2.8-2.4 0-1.6-1-2.5-2.8-2.5h-4.5z"
        className="sign-mark-letter"
      />
      <circle cx="6.5" cy="7.5" r="1.3" className="sign-mark-bolt" />
      <circle cx="35.5" cy="7.5" r="1.3" className="sign-mark-bolt" />
      <circle cx="6.5" cy="36.5" r="1.3" className="sign-mark-bolt" />
      <circle cx="35.5" cy="36.5" r="1.3" className="sign-mark-bolt" />
    </svg>
  );
}

/**
 * El control de abrir y cerrar un renglón, dibujado con el mismo trazo que
 * los demás pictogramas: la barra vertical se retrae cuando el renglón abre.
 */
export function ToggleMark({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="sign-toggle-mark" aria-hidden>
      <path
        d="M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 5v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="sign-toggle-stem"
        style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
      />
    </svg>
  );
}

/**
 * La pincelada roja del rotulista: una cinta que engorda en el medio y se
 * corta donde las cerdas se quedaron sin pintura. Va debajo del titular,
 * como la firma que cierra el letrero.
 */
export function BrushStroke() {
  return (
    <svg
      viewBox="0 0 600 34"
      preserveAspectRatio="none"
      className="sign-brushline"
      aria-hidden
    >
      <mask id="sign-brush-dry">
        <rect x="0" y="0" width="600" height="34" fill="#fff" />
        {/* los saltos de brocha seca */}
        <ellipse cx="118" cy="15" rx="26" ry="1.5" fill="#000" />
        <ellipse cx="318" cy="19" rx="38" ry="1.2" fill="#000" />
        <ellipse cx="486" cy="16" rx="20" ry="1.1" fill="#000" />
      </mask>
      <path
        mask="url(#sign-brush-dry)"
        d="M4 22C80 9 170 7 250 11c90 4 180 10 270 1 32-3 54-2 76-7v8c-22 6-44 5-76 8-90 9-180 3-270-1C170 16 80 18 4 28z"
      />
    </svg>
  );
}

/** Tornillo de fijación: la lámina está atornillada al muro, y se nota. */
export function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`sign-bolt ${className}`} aria-hidden>
      <circle cx="12" cy="12" r="9" className="sign-bolt-head" />
      <circle cx="12" cy="11" r="7" className="sign-bolt-face" />
      <path d="M7.5 11.5h9" className="sign-bolt-slot" />
    </svg>
  );
}
