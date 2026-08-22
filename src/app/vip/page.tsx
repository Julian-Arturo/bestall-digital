import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCta } from "@/components/StickyCta";
import { LandingPage } from "@/components/LandingPage";
import { FloatingMotoReviews } from "@/components/FloatingMotoReviews";

export const metadata: Metadata = {
  title: "Mecánica VIP Academia | Curso de mecánica de motos — US$58.95",
  description:
    "Aprende a reparar y mantener tu moto paso a paso. Membresía VIP: 14 módulos, +300 lecciones, garantía 7 días. Precio US$58.95.",
  openGraph: {
    title: "Mecánica VIP — Aprende. Entiende. Repara. Ahorra.",
    description:
      "Tutoriales, mantenimiento, diagnósticos y tips VIP. Acceso de por vida. US$58.95.",
    locale: "es_CO",
    type: "website",
  },
};

export default function VipPage() {
  return (
    <>
      <SiteHeader />
      <LandingPage />
      <FloatingMotoReviews />
      <StickyCta />
    </>
  );
}
