import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { DiabetesLanding } from "@/components/diabetes/DiabetesLanding";
import { JsonLd } from "@/components/JsonLd";
import { DIABETES, DIABETES_CHECKOUT_BASE, DIABETES_FAQ, DIABETES_PRICE } from "@/lib/diabetes";
import { SITE_URL } from "@/lib/site";

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
  title: { absolute: "Toma el Control: Plan de 21 Días para la Diabetes" },
  description:
    "Guía práctica de 21 días con recetas simples, hábitos sostenibles y bienestar. Sin dietas extremas. Acceso digital por US$4.99.",
  alternates: {
    canonical: "/diabetes",
  },
  openGraph: {
    url: "/diabetes",
    siteName: "Bestall Digital",
    title: "Toma el Control — 21 días para controlar la diabetes",
    description:
      "Plan práctico para estabilizar tu rutina y recuperar energía. US$4.99.",
    locale: "es_CO",
    type: "website",
  },
};

const diabetesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: DIABETES.title,
      description: DIABETES.pitch,
      image: `${SITE_URL}/brand/doctora.webp`,
      url: `${SITE_URL}/diabetes`,
      brand: { "@type": "Brand", name: DIABETES.author },
      offers: {
        "@type": "Offer",
        price: Number(DIABETES_PRICE.replace(/[^d.]/g, "")),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: DIABETES_CHECKOUT_BASE,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: DIABETES_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
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
      <JsonLd data={diabetesJsonLd} />
      <DiabetesLanding />
    </div>
  );
}
