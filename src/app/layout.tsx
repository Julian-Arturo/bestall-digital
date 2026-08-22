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
  title: {
    default: "Bestall Digital | Marketing y tecnología",
    template: "%s | Bestall Digital",
  },
  description:
    "Agencia Bestall Digital: páginas web, tráfico, apps y crecimiento. Productos en vivo en bestalldigital.com.",
  openGraph: {
    title: "Bestall Digital",
    description: "Marketing · Tecnología · Crecimiento",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        {children}
      </body>
    </html>
  );
}
