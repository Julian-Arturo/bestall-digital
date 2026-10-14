import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";

export const OG_SIZE = { width: 1200, height: 630 };

/** Convierte un asset de /public a data URL PNG (satori no lee WebP). */
async function publicImage(path: string, width: number) {
  const file = await readFile(join(process.cwd(), "public", path));
  const png = await sharp(file).resize({ width, withoutEnlargement: true }).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

type OgCard = {
  kicker: string;
  title: string;
  subtitle: string;
  footer: string;
  background: string;
  ink: string;
  accent: string;
  /** Logo de Bestall junto al pie; solo en páginas de la agencia. */
  showMark?: boolean;
  /** Foto de /public que ocupa la columna derecha. */
  photo?: string;
};

export async function renderOgCard(card: OgCard) {
  const photo = card.photo ? await publicImage(card.photo, 560) : null;
  const mark = card.showMark ? await publicImage("brand/agency/favicon.png", 96) : null;

  const png = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: card.background,
          color: card.ink,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px 56px 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: card.accent, letterSpacing: 2 }}>
            {card.kicker.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1 }}>
              {card.title}
            </div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 30, lineHeight: 1.3, opacity: 0.8 }}>
              {card.subtitle}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, fontWeight: 700 }}>
            {mark ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={mark} width={48} height={48} alt="" style={{ borderRadius: 12 }} />
            ) : null}
            {card.footer}
          </div>
        </div>
        {photo ? (
          <div style={{ display: "flex", width: 460, height: "100%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} width={460} height={630} alt="" style={{ objectFit: "cover" }} />
          </div>
        ) : null}
      </div>
    ),
    OG_SIZE,
  );

  // JPEG: WhatsApp descarta previsualizaciones pesadas y el PNG pasa de 500 KB.
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpeg), {
    headers: { "Content-Type": "image/jpeg" },
  });
}
