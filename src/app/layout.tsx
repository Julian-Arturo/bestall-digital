import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/*
  Contrato de dirección de la home (/). Vive solo en el código fuente: no se
  emite en el HTML de producción.

  BESTALL DIGITAL · / · EL AVISO PINTADO · seed 994a7669

  THESIS: Bestall es el rotulista de la era digital — una lámina esmaltada
  atornillada al muro, no otro hero azul noche con orbes morados y vidrio.
  OWN-WORLD: verde esmalte, hueso, rojo esmalte y negro de contorno; cuatro
  pasadas de pintura, sombra dura sin difuminar, tornillos, óxido de borde,
  Archivo de ancho variable y una sola línea de pincel.
  STORY: el visitante reconoce el oficio, cree porque ve dos letreros ya
  colgados en este mismo dominio, y toca la placa roja de WhatsApp.
  FIRST VIEWPORT: lámina verde a sangre atornillada; marca arriba-izquierda,
  lámpara ABIERTO arriba-derecha; tres renglones monumentales en hueso con
  sombra dura, el último condensándose para caber; línea de pincel roja; placa
  roja de WhatsApp como único elemento caliente; banda inferior con los siete
  servicios pintados.
  FORM: rotulación comercial pintada a mano; candidato 1 de la lista, elegido
  por el usuario sobre la asignación del dado; seed 994a7669.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, DESIGN.md, and every shipping raster carrying
  its provenance
*/

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Agencia de Marketing Digital en Colombia | Bestall Digital",
    template: "%s | Bestall Digital",
  },
  description:
    "Agencia de marketing digital en Colombia: páginas web rápidas, campañas en Meta y Google y cierre automático en WhatsApp. Cotiza tu proyecto hoy.",
  keywords: [
    "Agencia de marketing digital Colombia",
    "desarrollo web alta conversion",
    "automatizacion whatsapp",
    "embudos de venta",
    "Bestall Digital",
  ],
  openGraph: {
    title: "Bestall Digital | Agencia de Marketing Digital en Colombia",
    description:
      "Páginas web de alta velocidad, tráfico calificado y cierre directo en WhatsApp para negocios en Colombia.",
    url: "/",
    siteName: SITE_NAME,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${body.variable} h-full`}>
      <body className="min-h-full antialiased w-full max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
