import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/**
 * Contrato de dirección de la home (/). Se emite como comentario HTML real
 * para que sobreviva al build de producción y se pueda auditar con
 * `grep 994a7669` sobre la salida compilada.
 */
const DIRECTION_CONTRACT = `<!--
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
-->`;

export const metadata: Metadata = {
  metadataBase: new URL("https://agencia.bestalldigital.com"),
  title: {
    default: "Bestall Digital | Agencia de Crecimiento, Desarrollo Web y Automatización",
    template: "%s | Bestall Digital",
  },
  description:
    "Agencia especializada en adquisición de clientes, diseño de páginas web de alta conversión, campañas de tráfico y automatizaciones con WhatsApp en Colombia.",
  keywords: [
    "Agencia de marketing digital Colombia",
    "desarrollo web alta conversion",
    "automatizacion whatsapp",
    "embudos de venta",
    "Bestall Digital",
  ],
  icons: {
    icon: [{ url: "/brand/agency/favicon.png", type: "image/png" }],
    apple: [{ url: "/brand/agency/mark.png" }],
    shortcut: ["/brand/agency/favicon.png"],
  },
  openGraph: {
    title: "Bestall Digital | Marketing, Tecnología y Crecimiento",
    description:
      "Creamos sistemas de adquisición: páginas de alta velocidad, tráfico calificado y cierre directo en WhatsApp.",
    url: "https://agencia.bestalldigital.com",
    siteName: "Bestall Digital",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bestall Digital",
    description: "Sistemas de adquisición y desarrollo web en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased w-full max-w-full overflow-x-hidden">
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        {children}
      </body>
    </html>
  );
}
