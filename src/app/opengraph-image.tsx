import { OG_SIZE, renderOgCard } from "@/lib/og";

export const alt = "Bestall Digital — Agencia de marketing digital en Colombia";
export const size = OG_SIZE;
export const contentType = "image/jpeg";

export default function Image() {
  return renderOgCard({
    kicker: "Agencia de marketing digital · Colombia",
    title: "Inviertes en publicidad… y el teléfono no suena.",
    subtitle: "Páginas web rápidas, tráfico calificado y cierre en WhatsApp.",
    footer: "www.bestalldigital.com",
    background: "#090D16",
    ink: "#F8FAFC",
    accent: "#38BDF8",
    showMark: true,
    photo: "brand/agency/hero-desk.webp",
  });
}
