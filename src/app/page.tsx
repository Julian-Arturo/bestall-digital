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
  title: "Bestall Digital | Embudos B2B y Sistemas de Conversión a WhatsApp",
  description:
    "Eliminamos la falta de sistema. Diseñamos páginas de alta velocidad, tráfico calificado y embudos directos a WhatsApp para que tu inversión se traduzca en ventas reales.",
  openGraph: {
    title: "Bestall Digital — Inviertes… y el teléfono no suena",
    description:
      "Eliminamos la falta de sistema. Páginas de alta velocidad, tracking de píxeles sin fugas y embudos directos a WhatsApp.",
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
