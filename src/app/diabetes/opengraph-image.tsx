import { OG_SIZE, renderOgCard } from "@/lib/og";

export const alt = "Toma el Control — Plan de 21 días para la diabetes";
export const size = OG_SIZE;
export const contentType = "image/jpeg";

export default function Image() {
  return renderOgCard({
    kicker: "Plan de 21 días · Acceso digital",
    title: "Toma el control en 21 días",
    subtitle: "Recetas simples y hábitos sostenibles, sin dietas extremas. US$4.99.",
    footer: "Toma el Control",
    background: "#F7FBF9",
    ink: "#14241D",
    accent: "#00964B",
    photo: "brand/doctora.webp",
  });
}
