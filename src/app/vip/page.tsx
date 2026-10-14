import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCta } from "@/components/StickyCta";
import { LandingPage } from "@/components/LandingPage";
import { FloatingMotoReviews } from "@/components/FloatingMotoReviews";
import { JsonLd } from "@/components/JsonLd";
import { CHECKOUT_URL, FAQ, MODULES, PRICE_USD } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Curso de Mecánica de Motos Online | Mecánica VIP" },
  description:
    "Aprende a reparar y mantener tu moto paso a paso: 14 módulos, +300 lecciones, acceso de por vida y garantía de 7 días. US$58.95.",
  alternates: {
    canonical: "/vip",
  },
  openGraph: {
    url: "/vip",
    siteName: "Bestall Digital",
    title: "Mecánica VIP — Aprende. Entiende. Repara. Ahorra.",
    description:
      "Tutoriales, mantenimiento, diagnósticos y tips VIP. Acceso de por vida. US$58.95.",
    locale: "es_CO",
    type: "website",
  },
};

const vipJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Mecánica VIP — Curso de mecánica de motos",
      description:
        "Membresía online para aprender a reparar y mantener tu moto: 14 módulos y más de 300 lecciones, desde reconocer las partes hasta motor, inyección y sistema eléctrico.",
      inLanguage: "es",
      url: `${SITE_URL}/vip`,
      provider: { "@type": "Organization", name: "La Tienda Del Motero" },
      syllabusSections: MODULES.map((name) => ({ "@type": "Syllabus", name })),
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
      },
      offers: {
        "@type": "Offer",
        category: "Paid",
        price: PRICE_USD,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: CHECKOUT_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function VipPage() {
  return (
    <>
      <JsonLd data={vipJsonLd} />
      <SiteHeader />
      <LandingPage />
      <FloatingMotoReviews />
      <StickyCta />
    </>
  );
}
