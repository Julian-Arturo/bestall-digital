"use client";

import { useState } from "react";
import { AgencyTermsModal } from "./AgencyTermsModal";

export function AgencyFooterTerms() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={termsOpen}
        className="bd-foot-link-btn hover:text-cyan-400 transition-colors bg-transparent border-0 p-0 text-inherit cursor-pointer font-inherit"
        onClick={() => setTermsOpen(true)}
      >
        Términos del Servicio &amp; Tratamiento de Datos
      </button>
      <AgencyTermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
