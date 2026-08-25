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
  title: "Bestall Digital | Marketing · Tecnología · Crecimiento",
  description:
    "Páginas, tráfico, apps, automatización, Gurú Partner e influencer marketing. Sistemas que traen clientes. WhatsApp.",
  openGraph: {
    title: "Bestall Digital — Marketing · Tecnología · Crecimiento",
    description:
      "No solo páginas: armamos el sistema completo para que te escriban personas listas para comprar.",
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
