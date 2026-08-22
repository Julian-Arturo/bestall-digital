export const DIABETES_CHECKOUT_BASE =
  "https://pay.hotmart.com/I100734049A?off=zosnsp6a";

export const diabetesCta = (src: string) =>
  `${DIABETES_CHECKOUT_BASE}&src=${encodeURIComponent(src)}`;

export const DIABETES_PRICE = "US$4.99";
export const DIABETES_PRICE_NOTE =
  "Pago único · Hotmart cobra en tu moneda local (el equivalente cambia con el dólar)";

export const DIABETES_CTA_REL = "nofollow sponsored noopener" as const;

export const DIABETES = {
  title: "Toma el Control: 21 Días para Controlar la Diabetes",
  shortTitle: "Toma el Control",
  author: "BESTALLDIGITAL",
  days: 21,
  pitch:
    "Guía práctica para transformar tu relación con la diabetes: recetas simples, hábitos diarios sostenibles y estrategias de bienestar físico y emocional.",
  outcome:
    "Estabilizar tu glucosa, recuperar tu energía y construir una rutina saludable sin complicaciones.",
  idealFor:
    "Ideal para quienes buscan tomar el control con confianza, sin dietas extremas ni soluciones imposibles.",
} as const;

export const DIABETES_PILLARS = [
  {
    title: "Recetas simples",
    desc: "Comidas claras y realistas para el día a día, sin cocina de laboratorio.",
  },
  {
    title: "Hábitos sostenibles",
    desc: "Rutinas de 21 días pensadas para mantenerse, no para agotarte.",
  },
  {
    title: "Cuerpo y mente",
    desc: "Estrategias de bienestar físico y emocional para acompañar el proceso.",
  },
] as const;

export const DIABETES_DAYS = [
  { range: "Días 1–7", title: "Base y claridad", desc: "Entiendes tu punto de partida y armás la rutina mínima viable." },
  { range: "Días 8–14", title: "Estabilidad", desc: "Consolidas comidas, ritmo diario y señales de cómo te sientes." },
  { range: "Días 15–21", title: "Control con confianza", desc: "Cierras el plan con hábitos que puedas sostener después." },
] as const;

export const DIABETES_BENEFITS = [
  "Plan de 21 días paso a paso",
  "Enfoque práctico, sin dietas extremas",
  "Recetas simples para el día a día",
  "Hábitos sostenibles de bienestar",
  "Acceso digital por Hotmart tras el pago",
  "Empiezas cuando quieras, a tu ritmo",
] as const;

export const DIABETES_FAQ = [
  {
    q: "¿Esto reemplaza al médico?",
    a: "No. Es una guía práctica de hábitos y bienestar. No sustituye diagnóstico, tratamiento ni indicaciones de un profesional de la salud.",
  },
  {
    q: "¿Para quién es?",
    a: "Para personas que quieren tomar el control con confianza, con un plan claro de 21 días, sin dietas extremas ni soluciones imposibles.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: `El checkout muestra ${DIABETES_PRICE}. Hotmart puede cobrar el equivalente en tu moneda local según el dólar del día.`,
  },
  {
    q: "¿Cómo recibo el acceso?",
    a: "Al confirmar el pago, Hotmart te envía el acceso por correo electrónico.",
  },
  {
    q: "¿Es un pago mensual?",
    a: "No. Es un pago único.",
  },
  {
    q: "¿Hay garantía?",
    a: "La compra se gestiona en Hotmart. Revisa las condiciones de reembolso que muestre el checkout al momento de pagar.",
  },
] as const;

export const DIABETES_REVIEWS = [
  {
    name: "Carolina M.",
    place: "Bogotá",
    rating: 5,
    quote:
      "Por fin un plan que entiendo. Las recetas son simples y no me siento agobiada.",
    photo: "/brand/review-1.webp",
  },
  {
    name: "José R.",
    place: "Medellín",
    rating: 5,
    quote:
      "En tres semanas ordené mis hábitos. Me siento con más energía y más claro con lo que como.",
    photo: "/brand/review-2.webp",
  },
  {
    name: "Ana Lucía P.",
    place: "Cali",
    rating: 5,
    quote:
      "Lo mejor es que no promete milagros. Es práctico, diario y se puede sostener.",
    photo: "/brand/review-3.webp",
  },
  {
    name: "Andrés V.",
    place: "Barranquilla",
    rating: 5,
    quote:
      "Empecé sin saber por dónde. El recorrido de 21 días me dio estructura sin complicarme.",
    photo: "/brand/review-4.webp",
  },
] as const;

export const HOTMART_DISCLAIMER =
  "Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un control editorial previo de los productos vendidos, ni valora la tecnicidad y experiencia de los autores. La existencia de un producto y su adquisición en la plataforma no puede ser considerada como garantía de calidad de contenido y resultado, en ningún caso. Al comprarlo, el comprador declara que conoce esta información.";
