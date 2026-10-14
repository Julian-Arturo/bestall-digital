"use client";

import { useState } from "react";
import { QUOTE_OPTIONS, waUrl } from "@/lib/agency";

export function AgencyQuoteCalculator() {
  const [selectedService, setSelectedService] = useState<string>("sistema");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("urgente");

  const activeServiceObj =
    QUOTE_OPTIONS.services.find((s) => s.id === selectedService) ??
    QUOTE_OPTIONS.services[1];
  const activeTimeframeObj =
    QUOTE_OPTIONS.timeframes.find((t) => t.id === selectedTimeframe) ??
    QUOTE_OPTIONS.timeframes[0];

  const dynamicWaMessage = `Hola Bestall 👋 Quiero consultar disponibilidad y tarifa para mi negocio:
• Requerimiento: ${activeServiceObj.label} (${activeServiceObj.pack})
• Plazo estimado de lanzamiento: ${activeTimeframeObj.label} (${activeTimeframeObj.urgency})
¿Tienen cupo disponible en su agenda para coordinar?`;

  const dynamicWaUrl = waUrl(dynamicWaMessage);

  return (
    <div className="bd-calc-card w-full max-w-full p-4 sm:p-8 md:p-10 rounded-2xl overflow-hidden box-border">
      <div className="bd-calc-steps-indicator flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8" aria-label="Progreso de cotización">
        <span className="bd-calc-step-pill is-active text-xs sm:text-sm">
          <span className="bd-calc-step-num">1</span>
          Tipo de Requerimiento
        </span>
        <span className="bd-calc-step-pill is-active text-xs sm:text-sm">
          <span className="bd-calc-step-num">2</span>
          Plazo de Lanzamiento
        </span>
      </div>

      {/* Pregunta 1 */}
      <div className="bd-calc-step-group mb-6 sm:mb-8">
        <h3 className="bd-calc-question text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-3">
          <span className="bd-calc-question-badge">01</span>
          ¿Qué requiere tu negocio hoy?
        </h3>
        <div className="bd-calc-options grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {QUOTE_OPTIONS.services.map((opt) => {
            const isSelected = selectedService === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                className={`bd-calc-opt w-full text-left p-4 rounded-xl border transition-all${isSelected ? " is-selected" : ""}`}
                onClick={() => setSelectedService(opt.id)}
                aria-pressed={isSelected}
              >
                <span className="bd-calc-opt-pack block text-xs font-bold text-cyan-400 mb-1">{opt.pack}</span>
                <strong className="block text-sm sm:text-base font-bold text-white mb-1">{opt.label}</strong>
                <p className="text-xs sm:text-sm text-slate-400 break-words">{opt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pregunta 2 */}
      <div className="bd-calc-step-group mb-6 sm:mb-8">
        <h3 className="bd-calc-question text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-3">
          <span className="bd-calc-question-badge">02</span>
          ¿En qué plazo planeas lanzar?
        </h3>
        <div className="bd-calc-options grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
          {QUOTE_OPTIONS.timeframes.map((opt) => {
            const isSelected = selectedTimeframe === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                className={`bd-calc-opt w-full text-left p-4 rounded-xl border transition-all${isSelected ? " is-selected" : ""}`}
                onClick={() => setSelectedTimeframe(opt.id)}
                aria-pressed={isSelected}
              >
                <span className="bd-calc-opt-urgency block text-xs font-bold text-emerald-400 mb-1">{opt.urgency}</span>
                <strong className="block text-sm sm:text-base font-bold text-white">{opt.label}</strong>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumen y Salida dinámica a WhatsApp */}
      <div className="bd-calc-summary flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-xl w-full">
        <div className="bd-calc-summary-text text-sm sm:text-base text-slate-300 w-full md:w-auto break-words">
          <strong className="text-white">Configuración elegida:</strong>{" "}
          <span className="text-cyan-400 font-bold">{activeServiceObj.label}</span> ({activeServiceObj.pack}) • Plazo:{" "}
          <span className="text-cyan-400 font-bold">{activeTimeframeObj.label}</span>
        </div>
        <a
          className="bd-btn w-full md:w-auto text-center justify-center shrink-0"
          href={dynamicWaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar Disponibilidad y Tarifa
        </a>
      </div>
    </div>
  );
}
