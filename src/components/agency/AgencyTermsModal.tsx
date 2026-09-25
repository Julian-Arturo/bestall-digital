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
      <div className="bd-terms-dialog" ref={dialogRef}>
        <div className="bd-terms-header">
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

        <div className="bd-terms-body">
          <div className="bd-terms-item">
            <div className="bd-terms-item-num">01</div>
            <div className="bd-terms-item-content">
              <h3>Propiedad Intelectual y Entregables</h3>
              <p>
                Tras la liquidación y pago del 100% de la tarifa pactada para el paquete o
                desarrollo contratado, el cliente adquiere la titularidad y propiedad patrimonial
                exclusiva sobre el código fuente, la arquitectura web, los componentes y los
                activos digitales entregados.
              </p>
              <p>
                Los accesos a repositorios, hosting (Vercel) y dominios quedan registrados a nombre
                del cliente. Bestall Digital no retiene claves, licencias propietarias ni cobra tarifas
                de liberación.
              </p>
            </div>
          </div>

          <div className="bd-terms-item">
            <div className="bd-terms-item-num">02</div>
            <div className="bd-terms-item-content">
              <h3>Límites de Responsabilidad en Plataformas de Terceros</h3>
              <p>
                Bestall Digital configura, audita e integra servicios externos de infraestructura,
                tráfico y recaudo (Meta Ads, Google Ads, Wompi, PSE, tarjetas bancarias y APIs de
                WhatsApp Business).
              </p>
              <p>
                La agencia no se hace responsable por caídas generales o interrupciones de servicio
                de estos proveedores, variaciones en sus políticas de costos o privacidad, ni por
                bloqueos o suspensiones de cuentas publicitarias derivados del tipo de oferta o
                contenido promocionado por el cliente. Las comisiones por transacción son
                facturadas directamente por la pasarela de pagos seleccionada.
              </p>
            </div>
          </div>

          <div className="bd-terms-item">
            <div className="bd-terms-item-num">03</div>
            <div className="bd-terms-item-content">
              <h3>Confidencialidad y Tratamiento de Datos (Ley 1581 de 2012)</h3>
              <p>
                En cumplimiento estricto del régimen de Protección de Datos Personales en Colombia
                (Habeas Data — Ley 1581 de 2012 y Decreto 1377 de 2013), toda información comercial,
                estrategias de negocio, accesos técnicos y datos de clientes suministrados son tratados
                bajo reserva profesional rigurosa.
              </p>
              <p>
                Bestall Digital no comercializa, transfiere ni cede bases de datos de prospectos o
                información corporativa a terceros bajo ninguna circunstancia.
              </p>
            </div>
          </div>
        </div>

        <div className="bd-terms-footer">
          <span className="bd-terms-foot-note">
            Bestall Digital — {new Date().getFullYear()} • Colombia
          </span>
          <button type="button" className="bd-btn bd-btn-sm" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
