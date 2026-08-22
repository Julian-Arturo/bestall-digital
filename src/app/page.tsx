import type { Metadata } from "next";
import { Archivo, Yellowtail } from "next/font/google";
import { AgencyLanding } from "@/components/agency/AgencyLanding";

/**
 * Archivo se carga variable con su eje de ancho: el rotulista condensa la
 * letra hasta que el renglón cierra justo en el borde de la lámina, y ese
 * ajuste lo hace `wdth` en vivo, no una hoja de tamaños fijos.
 */
const sign = Archivo({
  variable: "--font-sign",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

/** La firma del pincel. Una sola línea por lámina, nunca más. */
const brush = Yellowtail({
  variable: "--font-brush",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bestall Digital | Le pintamos el letrero digital a tu negocio",
  description:
    "Taller de marketing y tecnología: páginas web, tráfico, apps, automatización e influencer marketing. Dos productos nuestros publicados y funcionando en este mismo dominio.",
  openGraph: {
    title: "Bestall Digital — Páginas que venden. Tráfico que llega.",
    description:
      "Le pintamos el letrero digital a tu negocio. Mira dos letreros nuestros ya colgados y escríbenos.",
    locale: "es_CO",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className={`${sign.variable} ${brush.variable}`}>
      <AgencyLanding />
    </div>
  );
}
