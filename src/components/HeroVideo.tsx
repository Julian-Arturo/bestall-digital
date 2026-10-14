"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { COUPON, HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/lib/constants";

export function HeroVideo() {
  const [needsGesture, setNeedsGesture] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fill, setFill] = useState(18);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* El MP4 (~2.7 MB) se pide cuando la página ya cargó y el hilo está libre,
     para que no compita con el póster (LCP de /vip) ni con el JS de la página */
  useEffect(() => {
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

    const start = () => {
      video.preload = "auto";
      video.load();
      void tryPlayWithSound();
    };

    let idleId: number | undefined;
    const schedule = () => {
      idleId = window.requestIdleCallback
        ? window.requestIdleCallback(start, { timeout: 2500 })
        : window.setTimeout(start, 1200);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId === undefined) return;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);

  /* Barra de marketing (escasez), no progreso real del video */
  useEffect(() => {
    const id = window.setInterval(() => {
      setFill((prev) => {
        if (prev >= 91) return 91;
        const step = prev < 55 ? 0.35 : prev < 78 ? 0.18 : 0.07;
        return Math.min(91, prev + step);
      });
    }, 400);
    return () => window.clearInterval(id);
  }, []);

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
        <Image
          src={HERO_VIDEO_POSTER}
          alt="Vista previa del curso Mecánica VIP"
          fill
          preload
          fetchPriority="high"
          sizes="(max-width: 900px) 100vw, 900px"
          className="object-cover object-center"
        />
        <video
          ref={videoRef}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover select-none transition-opacity duration-300 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setPlaying(true)}
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          aria-label="Video de presentación del curso Mecánica VIP"
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
      </div>
    </div>
  );
}
