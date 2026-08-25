import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { AgencyLanding } from "@/components/agency/AgencyLanding";

const display = Bricolage_Grotesque({
  variable: "--font-close-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-close-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bestall Digital | Si inviertes y nadie te escribe",
  description:
    "Inviertes y el teléfono no suena. Bestall arma marketing, tecnología y crecimiento para que te escriban clientes. WhatsApp.",
  openGraph: {
    title: "Bestall Digital — Inviertes… y el teléfono no suena",
    description:
      "No es otro paquete digital. Es el sistema: mensaje, tráfico, conversión y seguimiento.",
    locale: "es_CO",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <AgencyLanding />
    </div>
  );
}
