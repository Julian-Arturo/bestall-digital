/** Checkout con cupón 85OFF — verificado en Hotmart: US$393 → US$58.95 */
export const CHECKOUT_BASE = "https://go.hotmart.com/T73152906I?ap=0c9d";

export const CHECKOUT_URL = `${CHECKOUT_BASE}&src=landing`;

export const ctaUrl = (src: string) =>
  `${CHECKOUT_BASE}&src=${encodeURIComponent(src)}`;

/** Precio que muestra el checkout con cupón 85OFF */
export const PRICE_USD = 58.95;
export const PRICE_LABEL = "US$58.95";
export const PRICE_LIST = "US$393";
export const DISCOUNT_LABEL = "85% OFF";
export const COUPON = "85OFF";

export const PRICE_NOTE =
  "Pago único · Hotmart cobra en tu moneda local (cambia con el dólar)";

export const CTA_REL = "nofollow sponsored noopener" as const;

export const BRAND = {
  name: "Mecánica VIP",
  academy: "Academia",
  pageName: "Academia Mecánica MOTOS",
  handle: "@academiamecanicamotos",
  followers: "32 mil seguidores",
  slogan: "Aprende. Entiende. Repara. Ahorra.",
  promise: "Tu moto, tu pasión, nuestro compromiso",
  facebook: "https://www.facebook.com/academiamecanicamotos",
} as const;

export const PILLARS = [
  { title: "Tutoriales", desc: "Paso a paso en video, claro y práctico." },
  { title: "Mantenimiento", desc: "Lo que debes revisar antes de que falle." },
  { title: "Diagnósticos", desc: "Detecta el problema antes de pagar de más." },
  { title: "Tips VIP", desc: "Consejos de taller para el día a día." },
] as const;

export const BENEFITS = [
  {
    title: "Deja de adivinar en el taller",
    desc: "Llegas sabiendo qué preguntar y qué tiene sentido cobrar.",
  },
  {
    title: "Aprende desde cero",
    desc: "14 módulos y +300 lecciones. Empiezas reconociendo las partes de la moto.",
  },
  {
    title: "Acceso de por vida",
    desc: "Un solo pago. Clases en vivo, foro y comunidad siguen disponibles.",
  },
  {
    title: "Práctica real en tu moto",
    desc: "Manuales, scooters, carburación e inyección electrónica.",
  },
  {
    title: "Soporte cuando te trabas",
    desc: "Foro con ingeniero mecánico + comunidad privada en Telegram.",
  },
  {
    title: "Garantía de 7 días",
    desc: "Pruebas la membresía. Si no es para ti, Hotmart te devuelve el 100%.",
  },
] as const;

export const MODULES = [
  "Conociendo una moto",
  "Mecánica rápida: casos prácticos y comunes",
  "Todo sobre kit de arrastre",
  "Todo sobre frenos",
  "Llantas, suspensión y dirección",
  "Sincronización y carburación",
  "Estética de una moto",
  "Generalidades de moto scooter (automática)",
  "Todo sobre el motor — incluye caja de cambios e inyección electrónica",
  "Reforzando el aprendizaje en un motor más básico",
  "Todo sobre el sistema eléctrico",
  "El módulo del emprendedor motero",
  "Bonus",
  "Asistencia premium",
] as const;

export const INCLUSIONS = [
  "Acceso ilimitado y de por vida a +300 lecciones Full HD",
  "Clases y asesorías por Zoom/YouTube de por vida",
  "Foro de preguntas con ingeniero mecánico",
  "Canal y grupo privado de Telegram",
  "Biblioteca: ebooks, guías y manuales",
  "Curso de marketing digital para emprendedores",
  "Certificado o diploma imprimible",
] as const;

export const VALUE_STACK = [
  { name: "Curso +300 lecciones Full HD + 3D", value: "US$126" },
  { name: "Clases en vivo y asesorías de por vida", value: "US$82" },
  { name: "Foro con ingeniero mecánico", value: "US$64" },
  { name: "Biblioteca del conocimiento", value: "US$70" },
  { name: "Certificado imprimible", value: "US$30" },
  { name: "Canal exclusivo de Telegram", value: "US$21" },
  { name: "Comunidad privada + curso de marketing", value: "incluido" },
] as const;

/** Alias legacy usados en la UI */
export const VALUE_DECLARED = PRICE_LIST;

export const EBOOKS = [
  "Manual de arquitectura de motores de motocicletas",
  "Manual de motores de 2 tiempos",
  "Manual de limpieza del depósito de combustible",
  "Manual de chasis y suspensión",
  "Manual de construcción de caballetes",
  "Guía de herramientas del motero",
  "Guía de equipamiento mínimo de taller",
] as const;

export const HERO_VIDEO_SRC = "/brand/hero-mecanica.mp4";
export const HERO_VIDEO_POSTER = "/brand/hero-video-poster.webp";

export const FLOATING_REVIEWS = [
  {
    name: "Edwin Piñeros",
    quote:
      "Este curso me llenó todas las expectativas, lo hago a mi tiempo y me ha parecido muy bien.",
    photo: "/brand/moto-review-1.webp",
  },
  {
    name: "Victor Alfonso",
    quote:
      "Antes pagaba el cambio de aceite porque me daba miedo. Ahora le he hecho de todo a mi moto.",
    photo: "/brand/moto-review-2.webp",
  },
  {
    name: "Danny Zambrano",
    quote:
      "Me han llegado motos para arreglar; si tengo dudas me guío con los videos.",
    photo: "/brand/moto-review-3.webp",
  },
  {
    name: "Cristian Celaya",
    quote:
      "La explicación es muy clara. Aprendo mucho mejor que en cursos presenciales.",
    photo: "/brand/moto-review-4.webp",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Edwin Piñeros",
    quote:
      "Este curso me llenó todas las expectativas, lo hago a mi tiempo y me ha parecido muy bien.",
    photo: "/brand/moto-review-1.webp",
  },
  {
    name: "Victor Alfonso",
    quote:
      "Anteriormente tenía que pagar para hacer los cambios de aceite porque me daba miedo. Es sorprendente todo lo que le he hecho a mi moto.",
    photo: "/brand/moto-review-2.webp",
  },
  {
    name: "Danny Zambrano",
    quote:
      "Me han llegado motos para arreglar; si tengo dudas me guío con los videos. Lo recomiendo.",
    photo: "/brand/moto-review-3.webp",
  },
  {
    name: "Hermelindo Montecinos",
    quote:
      "No tenía ningún conocimiento de mecánica antes, y cualquier pregunta la responden muy rápido. Las clases en vivo me han servido muchísimo.",
    photo: "/brand/moto-review-4.webp",
  },
  {
    name: "Cristian Celaya",
    quote:
      "La explicación es muy clara. Aprendo mucho mejor que en cursos presenciales.",
    photo: "/brand/moto-review-1.webp",
  },
  {
    name: "Jean Carlos Mendez",
    quote:
      "Me gusta cómo enseñan a usar las herramientas y a desarmar. El soporte me despeja las dudas.",
    photo: "/brand/moto-review-2.webp",
  },
  {
    name: "Freddy Estrada",
    quote:
      "Son las mejores lecciones, todo tiene explicación, nada es complicado. He mejorado mucho como mecánico.",
    photo: "/brand/moto-review-3.webp",
  },
  {
    name: "Antonio Ortiz",
    quote:
      "Explican cada detalle y el costo es bajo para la información que tiene. El soporte es de por vida.",
    photo: "/brand/moto-review-4.webp",
  },
] as const;

export const FAQ = [
  {
    q: "¿Necesito saber algo de mecánica?",
    a: "No. El módulo 1 empieza por reconocer las partes de una moto.",
  },
  {
    q: "¿Sirve para mi moto?",
    a: "Cubre manuales y scooters, carburación e inyección electrónica. No es de una sola marca.",
  },
  {
    q: "¿Cuánto pago realmente?",
    a: "En el checkout de Hotmart con el cupón 85OFF el total es US$58.95 (lista US$393). Hotmart cobra en tu moneda local según el dólar del día.",
  },
  {
    q: "¿Es un pago mensual?",
    a: "No. Un solo pago. Acceso de por vida.",
  },
  {
    q: "¿Cómo recibo el acceso?",
    a: "Al confirmar el pago, Hotmart te envía el correo con tus datos de acceso.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Tienes 7 días. Si no es para ti, pides el reembolso y Hotmart te devuelve el 100%.",
  },
  {
    q: "¿Cuánto me demoro?",
    a: "A tu ritmo. El productor habla de ~1 hora diaria; el acceso no se vence.",
  },
  {
    q: "¿Esta página es del productor?",
    a: "Somos afiliados autorizados (Academia Mecánica MOTOS). El curso lo entrega La Tienda Del Motero y el pago/garantía los gestiona Hotmart.",
  },
] as const;
