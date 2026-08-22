"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { COUPON, HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/lib/constants";

export function HeroVideo() {
  const [hasVideo, setHasVideo] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [fill, setFill] = useState(18);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(HERO_VIDEO_SRC, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setHasVideo(true);
      })
      .catch(() => {
        /* placeholder until file exists */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!hasVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlayWithSound = async () => {
      video.muted = false;
      video.volume = 1;
      try {
        await video.play();
        setNeedsGesture(false);
      } catch {
        video.muted = true;
        try {
          await video.play();
        } catch {
          /* ignore */
        }
        setNeedsGesture(true);
      }
    };

    void tryPlayWithSound();
    video.addEventListener("loadeddata", () => void tryPlayWithSound());
  }, [hasVideo]);

  /* Barra de marketing (escasez), no progreso real del video */
  useEffect(() => {
    if (!hasVideo) return;
    const id = window.setInterval(() => {
      setFill((prev) => {
        if (prev >= 91) return 91;
        const step = prev < 55 ? 0.35 : prev < 78 ? 0.18 : 0.07;
        return Math.min(91, prev + step);
      });
    }, 400);
    return () => window.clearInterval(id);
  }, [hasVideo]);

  const unlockSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    void video.play().then(() => setNeedsGesture(false)).catch(() => {});
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[20px] border border-[var(--line)] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-video w-full">
        {hasVideo ? (
          <>
            <video
              ref={videoRef}
              className="pointer-events-none h-full w-full object-cover select-none"
              autoPlay
              loop
              playsInline
              preload="auto"
              poster={HERO_VIDEO_POSTER}
              controls={false}
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>

            {needsGesture && (
              <button
                type="button"
                onClick={unlockSound}
                className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center bg-black/50 px-4 text-center"
                aria-label="Activar sonido del video"
              >
                <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--orange)] text-2xl text-white shadow-lg">
                  ▶
                </span>
                <span className="font-display text-xl font-extrabold text-white md:text-2xl">
                  Toca para activar el sonido
                </span>
              </button>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-4">
              <p className="m-0 mb-2 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 sm:text-xs">
                Cupos con cupón {COUPON} llenándose…
              </p>
              <div
                className="h-2.5 w-full overflow-hidden rounded-full bg-white/20 ring-1 ring-white/25"
                role="presentation"
                aria-hidden
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--orange)] to-[#ff8a4c] transition-[width] duration-500 ease-out"
                  style={{ width: `${fill}%` }}
                />
              </div>
              <p className="mt-1.5 m-0 text-center text-[11px] font-semibold text-white/80 sm:text-xs">
                {Math.round(fill)}% de plazas VIP con descuento ya tomadas
              </p>
            </div>
          </>
        ) : (
          <>
            <Image
              src={HERO_VIDEO_POSTER}
              alt="Vista previa del video de mecánica VIP"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 px-4 text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--orange)] text-2xl text-white shadow-lg md:h-16 md:w-16 md:text-3xl">
                ▶
              </div>
              <p className="font-display m-0 text-xl font-extrabold text-white md:text-3xl">
                Aquí va tu video de mecánica
              </p>
              <p className="mt-2 m-0 max-w-md text-sm text-white/85">
                Créalo en Flow con el prompt que te pasé y súbelo como{" "}
                <span className="font-semibold text-white">hero-mecanica.mp4</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
