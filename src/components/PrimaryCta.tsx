import {
  CTA_REL,
  DISCOUNT_LABEL,
  PRICE_LABEL,
  PRICE_NOTE,
  ctaUrl,
} from "@/lib/constants";

type CtaProps = {
  src?: string;
  label?: string;
  className?: string;
  showPrice?: boolean;
  id?: string;
};

export function PrimaryCta({
  src = "landing",
  label = "Sí, quiero el 85% de descuento",
  className = "",
  showPrice = true,
  id,
}: CtaProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <a
        id={id}
        href={ctaUrl(src)}
        rel={CTA_REL}
        className="cta-primary"
        data-event="cta_click"
        data-cta-src={src}
      >
        <span>{label}</span>
        {showPrice ? <span aria-hidden>· {PRICE_LABEL}</span> : null}
      </a>
      <p className="m-0 max-w-md text-sm leading-snug text-[var(--muted)]">
        Cupón {DISCOUNT_LABEL} · Acceso inmediato · {PRICE_NOTE}
      </p>
    </div>
  );
}
