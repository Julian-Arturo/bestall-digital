import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { DiabetesLanding } from "@/components/diabetes/DiabetesLanding";

const display = Lexend({
  variable: "--font-diabetes-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-diabetes-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Toma el Control: 21 Días para Controlar la Diabetes | US$4.99",
  description:
    "Guía práctica de 21 días con recetas simples, hábitos sostenibles y bienestar. Sin dietas extremas. Acceso digital vía Hotmart.",
  openGraph: {
    title: "Toma el Control — 21 días para controlar la diabetes",
    description:
      "Plan práctico para estabilizar tu rutina y recuperar energía. US$4.99.",
    locale: "es_CO",
    type: "website",
  },
};

export default function DiabetesPage() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      {/*
        THESIS: Calm control — a 21-day wellness plan sold with clarity, not medical hype.
        OWN-WORLD: mint soft ground, forest CTA green, Lexend clarity type, white cards, morning-light gradients.
        STORY: understand the 21-day offer → believe it's sustainable → buy at US$4.99.
        FIRST VIEWPORT: title + price + green CTA + three badges; no overlapping highlights.
        FORM: code-led wellness storefront in same Vercel app at /diabetes.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
      */}
      <DiabetesLanding />
    </div>
  );
}
