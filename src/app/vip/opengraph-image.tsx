import { OG_SIZE, renderOgCard } from "@/lib/og";

export const alt = "Mecánica VIP — Curso de mecánica de motos online";
export const size = OG_SIZE;
export const contentType = "image/jpeg";

export default function Image() {
  return renderOgCard({
    kicker: "Curso online · 85% OFF",
    title: "Aprende mecánica de motos paso a paso",
    subtitle: "14 módulos, +300 lecciones y garantía de 7 días. US$58.95.",
    footer: "Mecánica VIP Academia",
    background: "#FFF7F0",
    ink: "#121417",
    accent: "#D94812",
    photo: "brand/hero-video-poster.webp",
  });
}
