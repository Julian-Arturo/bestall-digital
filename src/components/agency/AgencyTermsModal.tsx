"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface AgencyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgencyTermsModal({ isOpen, onClose }: AgencyTermsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="bd-terms-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bd-terms-dialog relative" ref={dialogRef}>
        {/* Encabezado */}
        <div className="bd-terms-header shrink-0">
          <div>
            <span className="bd-terms-kicker">Marco Legal & Transparencia</span>
            <h2 id="terms-modal-title">Términos y Condiciones del Servicio</h2>
          </div>
          <button
            type="button"
            className="bd-terms-close"
            onClick={onClose}
            aria-label="Cerrar términos y condiciones"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Contenedor desplazable con degradado de desvanecimiento */}
        <div className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
          <div className="bd-terms-body space-y-6 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600">
            {/* Punto 01 */}
            <div className="bd-terms-item flex items-start gap-3.5 sm:gap-4">
              <span className="bd-terms-item-num text-sky-400 border border-sky-500/30 bg-sky-950/40 rounded-full px-2.5 py-0.5 text-xs font-mono font-bold shrink-0 mt-0.5">
                01
              </span>
              <div className="bd-terms-item-content space-y-2">
                <h3 className="text-white font-semibold text-base tracking-tight">
                  Propiedad Intelectual y Entregables
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tras la liquidación y pago del 100% de la tarifa pactada para el paquete o
                  desarrollo contratado, el cliente adquiere la titularidad y propiedad patrimonial
                  exclusiva sobre el código fuente, la arquitectura web, los componentes y los
                  activos digitales entregados.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Los accesos a repositorios, hosting (Vercel) y dominios quedan registrados a nombre
                  del cliente. Bestall Digital no retiene claves, licencias propietarias ni cobra tarifas
                  de liberación.
                </p>
              </div>
            </div>

            {/* Punto 02 */}
            <div className="bd-terms-item flex items-start gap-3.5 sm:gap-4">
              <span className="bd-terms-item-num text-sky-400 border border-sky-500/30 bg-sky-950/40 rounded-full px-2.5 py-0.5 text-xs font-mono font-bold shrink-0 mt-0.5">
                02
              </span>
              <div className="bd-terms-item-content space-y-2">
                <h3 className="text-white font-semibold text-base tracking-tight">
                  Límites de Responsabilidad en Plataformas de Terceros
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Bestall Digital configura, audita e integra servicios externos de infraestructura,
                  tráfico y recaudo (Meta Ads, Google Ads, Wompi, PSE, tarjetas bancarias y APIs de
                  WhatsApp Business).
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  La agencia no se hace responsable por caídas generales o interrupciones de servicio
                  de estos proveedores, variaciones en sus políticas de costos o privacidad, ni por
                  bloqueos o suspensiones de cuentas publicitarias derivados del tipo de oferta o
                  contenido promocionado por el cliente. Las comisiones por transacción son
                  facturadas directamente por la pasarela de pagos seleccionada.
                </p>
              </div>
            </div>

            {/* Punto 03 */}
            <div className="bd-terms-item flex items-start gap-3.5 sm:gap-4">
              <span className="bd-terms-item-num text-sky-400 border border-sky-500/30 bg-sky-950/40 rounded-full px-2.5 py-0.5 text-xs font-mono font-bold shrink-0 mt-0.5">
                03
              </span>
              <div className="bd-terms-item-content space-y-2">
                <h3 className="text-white font-semibold text-base tracking-tight">
                  Confidencialidad y Tratamiento de Datos (Ley 1581 de 2012)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  En cumplimiento estricto del régimen de Protección de Datos Personales en Colombia
                  (Habeas Data — Ley 1581 de 2012 y Decreto 1377 de 2013), toda información comercial,
                  estrategias de negocio, accesos técnicos y datos de clientes suministrados son tratados
                  bajo reserva profesional rigurosa.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Bestall Digital no comercializa, transfiere ni cede bases de datos de prospectos o
                  información corporativa a terceros bajo ninguna circunstancia.
                </p>
              </div>
            </div>
          </div>

          {/* Degradado sutil de desvanecimiento para indicar scroll */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-950 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Pie del modal */}
        <div className="bd-terms-footer shrink-0">
          <span className="bd-terms-foot-note text-slate-400 text-xs">
            Bestall Digital — {new Date().getFullYear()} • Colombia
          </span>
          <button
            type="button"
            className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2.5 rounded-xl border border-slate-700/80 transition-colors text-sm shadow-sm cursor-pointer"
            onClick={onClose}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
