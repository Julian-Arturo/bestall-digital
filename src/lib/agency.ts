/**
 * Bestall Digital — agency data, copy & funnel configuration.
 * B2B High-Conversion Agency Model.
 */

export const AGENCY = {
  name: "Bestall Digital",
  tagline: "Marketing · Tecnología · Crecimiento",
  whatsapp: "573003550714",
  since: "2024",
  mark: "/brand/agency/mark.webp",
  markPng: "/brand/agency/mark.png",
  heroDesk: "/brand/agency/hero-desk.png",
  heroPhone: "/brand/agency/hero-phone.png",
  heroStrip: "/brand/agency/hero-strip.png",
  priceFrom: "$1.200.000",
  priceFromCurrency: "COP",
} as const;

export const WA_PREFILL =
  "Hola Bestall Digital 👋 Vi su página y quiero auditar mi negocio para implementar un sistema de ventas. Les cuento mi caso:";

export function waUrl(text?: string) {
  const phone = (AGENCY.whatsapp || "573003550714").replace(/\D/g, "");
  const message = (text ?? WA_PREFILL).trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const PROOF_METRICS = [
  { value: "< 1.5s", label: "Velocidad de Carga" },
  { value: "99.9%", label: "Disponibilidad Garantizada" },
  { value: "Local", label: "Soporte en Colombia" },
] as const;

export const TECH_STACK = [
  { name: "Pasarelas de Pago", badge: "Wompi, PSE, Tarjetas" },
  { name: "Pauta y Rendimiento", badge: "Meta Ads & Google" },
  { name: "Cierre Inmediato", badge: "WhatsApp CRM" },
] as const;

export const PAINS = [
  {
    code: "01",
    title: "Inviertes en pauta y no hay retorno comercial real.",
  },
  {
    code: "02",
    title: "Tu presencia digital confunde y no tiene un llamado claro a la acción.",
  },
  {
    code: "03",
    title: "El equipo pierde ventas por demoras en responder y tareas manuales repetitivas.",
  },
] as const;

export const METHOD_STEPS = [
  {
    step: "01",
    badge: "Fase 1",
    title: "Diagnóstico",
    desc: "Auditamos la oferta y detectamos dónde se fugan tus prospectos.",
    deliverables: [
      "Auditoría comercial de tu oferta",
      "Detección de puntos de fuga de prospectos",
      "Definición de público con alta intención de pago",
    ],
  },
  {
    step: "02",
    badge: "Fase 2",
    title: "Arquitectura & Copy",
    desc: "Diseñamos el mensaje de conversión directo y sin humo.",
    deliverables: [
      "Copywriting comercial enfocado en objeciones",
      "Diseño modular de alta legibilidad y jerarquía",
      "Optimización de velocidad y Core Web Vitals (< 1.5s)",
    ],
  },
  {
    step: "03",
    badge: "Fase 3",
    title: "Integración Técnica",
    desc: "Desarrollamos en Next.js con píxeles, tracking y pasarelas listas.",
    deliverables: [
      "Configuración de eventos de conversión sin fugas",
      "Integración de recaudo (Wompi, PSE, tarjetas)",
      "Enlaces inteligentes con mensajes preconfigurados",
    ],
  },
  {
    step: "04",
    badge: "Fase 4",
    title: "Activación de Ventas",
    desc: "Campañas de tráfico dirigidas a cierre directo en WhatsApp.",
    deliverables: [
      "Campañas publicitarias segmentadas con alta intención",
      "Guiones de respuesta ágil para WhatsApp",
      "Monitoreo de costo por lead y retorno sobre inversión",
    ],
  },
] as const;

export const SERVICE_PACKAGES = [
  {
    id: "pack-web",
    featured: false,
    badge: "Pack 1",
    title: "Web de Alta Conversión",
    price: "$1.200.000",
    currency: "COP",
    priceNote: "Pago único",
    timeframe: "7 a 10 días hábiles",
    desc: "Página ultrarrápida en Next.js enfocada en captar prospectos y cerrar por WhatsApp.",
    deliverables: [
      "Landing page ultrarrápida en Next.js (Móvil y Desktop)",
      "Copywriting enfocado en captación directa",
      "Tracking configurado (Meta Pixel y Google Analytics)",
      "Entrega estimada: 7 a 10 días hábiles",
    ],
    cta: "Cotizar Pack Web ($1.2M)",
    waMsg: "Hola Bestall 👋 Quiero cotizar el Pack 1: Web de Alta Conversión ($1.200.000 COP)",
  },
  {
    id: "pack-sistema",
    featured: true,
    badge: "Recomendado para crecer",
    badgeLabel: "Más Vendido",
    title: "Sistema Completo de Ventas",
    price: "$2.200.000",
    currency: "COP",
    priceNote: "Inversión integral",
    timeframe: "15 días hábiles",
    desc: "Atracción constante de prospectos calificados, presentación de alto impacto y cierre en WhatsApp.",
    deliverables: [
      "Todo lo incluido en el Pack Web",
      "Configuración y optimización de pauta (Meta Ads / Google)",
      "Estructura de oferta de alto valor y creativos",
      "Flujo de captura y cierre ágil en WhatsApp",
    ],
    cta: "Cotizar Sistema Completo ($2.2M)",
    waMsg: "Hola Bestall 👋 Quiero cotizar el Pack 2: Sistema Completo de Ventas ($2.200.000 COP)",
  },
  {
    id: "pack-soluciones",
    featured: false,
    badge: "Pack 3",
    title: "Soluciones Digitales & Software",
    price: "Desde $3.500.000",
    currency: "COP",
    priceNote: "Según alcance técnico",
    timeframe: "A convenir según módulos",
    desc: "Desarrollo de software y automatizaciones avanzadas para empresas con cobros o procesos complejos.",
    deliverables: [
      "Desarrollo de aplicaciones o plataformas web a medida",
      "Integración de pasarelas de pago (Wompi, PSE, tarjetas)",
      "Cotizadores dinámicos y paneles interactivos",
      "Automatización de flujos operativos sin fricción manual",
    ],
    cta: "Cotizar Solución a Medida ($3.5M)",
    waMsg: "Hola Bestall 👋 Quiero cotizar el Pack 3: Soluciones Digitales y Software a Medida",
  },
] as const;

export const CASE_STUDIES = [
  {
    tag: "Reserva Digital & Pagos Wompi",
    badge: "Sector Automotriz",
    title: "CDA Automotriz (CDA Ferrocarril)",
    subtitle: "Cotizador dinámico por año y recaudo seguro con Wompi",
    challenge:
      "Automatizar cotización por año y recaudo técnico-mecánico sin llamadas.",
    solution:
      "Landing de alta velocidad con cotizador dinámico y checkout seguro Wompi.",
    result:
      "Reservas y pagos directos en línea 24/7 sin intermediación manual.",
    image: "/brand/agency/cda-hero.jpg",
    urlPreview: "cdaferrocarril.com/motos",
    ctaText: "Consultar Solución Similar",
    waMsg:
      "Hola Bestall 👋 Me interesa una solución de reserva digital y pasarela de pago similar al caso CDA Automotriz:",
  },
  {
    tag: "Funnel de Ventas & Tracking",
    badge: "Formación & Salud",
    title: "Plataforma de Formación y Salud",
    subtitle: "Embudo optimizado con CAPI y canal directo a WhatsApp",
    challenge:
      "Reducir costo de adquisición y caídas en checkout.",
    solution:
      "Embudo optimizado con tracking de eventos CAPI y soporte por WhatsApp.",
    result:
      "Trazabilidad total de compras y aumento en tasa de conversión.",
    image: "/brand/agency/demo-moto.png",
    urlPreview: "bestalldigital.com/vip",
    ctaText: "Ver Embudo de Demostración",
    linkHref: "/vip",
  },
] as const;

export const QUOTE_OPTIONS = {
  services: [
    { id: "web", label: "Solo Web", desc: "Landing de alta velocidad y presencia profesional", pack: "Pack 1 ($1.2M)" },
    { id: "sistema", label: "Sistema Web + Campañas", desc: "Web de conversión + Pauta en Meta/Google + Flujo WhatsApp", pack: "Pack 2 ($2.2M)" },
    { id: "software", label: "Software o Automatización", desc: "Plataforma a medida, cotizador dinámico o pasarelas", pack: "Pack 3 ($3.5M+)" },
  ],
  timeframes: [
    { id: "urgente", label: "Urgente (< 15 días)", urgency: "Prioridad alta" },
    { id: "estandar", label: "Estándar (1 mes)", urgency: "Plazo regular" },
    { id: "explorando", label: "Explorando opciones", urgency: "En evaluación" },
  ],
} as const;

export const FAQS = [
  {
    q: "¿En cuánto tiempo está listo mi proyecto?",
    a: "De 7 a 15 días hábiles según el paquete seleccionado (Web de Alta Conversión en 7-10 días, Sistema Completo en 15 días). Soluciones a medida según alcance acordado.",
  },
  {
    q: "¿Quién es el dueño del código y del dominio?",
    a: "El cliente es 100% propietario del código, dominio y cuentas publicitarias. No cobramos licencias recurrentes ni retenemos accesos.",
  },
  {
    q: "¿Qué incluye el soporte post-lanzamiento?",
    a: "Acompañamiento técnico, monitoreo de rendimiento y garantía operativa para asegurar que el sistema funcione sin fricciones.",
  },
] as const;

// Compatibility aliases
export const SERVICES = SERVICE_PACKAGES;
export const PROCESS = METHOD_STEPS;
export const SHOWCASES = CASE_STUDIES;
