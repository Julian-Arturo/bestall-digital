import type { Metadata } from "next";
import { Bricolage_Grotesque, Karla } from "next/font/google";
import { AgencyLanding } from "@/components/agency/AgencyLanding";

const display = Bricolage_Grotesque({
  variable: "--font-close-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Karla({
  variable: "--font-close-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bestall Digital | Marketing y tecnología que convierte",
  description:
    "Agencia Bestall Digital: páginas web, tráfico, apps y sistemas que convierten visitas en clientes. Productos reales en vivo.",
  openGraph: {
    title: "Bestall Digital — Clientes, no solo páginas bonitas",
    description:
      "Marketing y tecnología con prueba en vivo. Escríbenos por WhatsApp.",
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
