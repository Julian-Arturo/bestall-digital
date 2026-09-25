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
    title: "Inviertes en pauta y no hay retorno",
    desc: "Pagas anuncios cada mes en redes o Google, pero el teléfono sigue en silencio o los clics nunca se traducen en clientes con dinero en mano.",
  },
  {
    code: "02",
    title: "Tu web actual confunde y no tiene llamado claro",
    desc: "Los prospectos entran, se pierden en textos genéricos sin dirección comercial y se van sin escribirte ni dejar sus datos.",
  },
  {
    code: "03",
    title: "Pierdes ventas por demoras en responder",
    desc: "Leads calificados se enfrían porque nadie les responde a tiempo con el mensaje, precio o cotización exacta para cerrar la compra.",
  },
  {
    code: "04",
    title: "Procesos manuales y desorden operativo",
    desc: "Copiar y pegar información, mandar PDFs desactualizados y un WhatsApp desorganizado que satura a tu equipo e impide escalar.",
  },
] as const;

export const METHOD_STEPS = [
  {
    step: "01",
    badge: "Fase 1",
    title: "Diagnóstico de Oferta y Fuga de Leads",
    desc: "Auditamos tu embudo actual, eliminamos la ambigüedad en tu propuesta de valor y definimos el gancho de venta directo que tu cliente entiende en 5 segundos.",
    deliverables: [
      "Auditoría comercial de tu oferta",
      "Detección de puntos de fuga de prospectos",
      "Definición de público con alta intención de pago",
    ],
  },
  {
    step: "02",
    badge: "Fase 2",
    title: "Maquetación Rápida y Copywriting de Conversión",
    desc: "Escribimos textos persuasivos centrados en beneficios y diseñamos una interfaz ultra limpia, mobile-first, sin plantillas lentas ni elementos de relleno.",
    deliverables: [
      "Copywriting comercial enfocado en objeciones",
      "Diseño modular de alta legibilidad y jerarquía",
      "Optimización de velocidad y Core Web Vitals (< 1.5s)",
    ],
  },
  {
    step: "03",
    badge: "Fase 3",
    title: "Integración Técnica, Píxeles y Pasarelas",
    desc: "Conectamos tracking milimétrico de conversiones (Meta Pixel y Google Analytics), pasarelas de pago seguras y enlaces directos a WhatsApp.",
    deliverables: [
      "Configuración de eventos de conversión sin fugas",
      "Integración de recaudo (Wompi, PSE, tarjetas si aplica)",
      "Enlaces inteligentes con mensajes preconfigurados",
    ],
  },
  {
    step: "04",
    badge: "Fase 4",
    title: "Activación de Tráfico y Cierre en WhatsApp",
    desc: "Encendemos campañas de anuncios sincronizadas al embudo y estructuramos las respuestas rápidas para que tu equipo comercial cierre ventas de inmediato.",
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
    desc: "Para negocios que necesitan validar o profesionalizar su oferta digital con una página ultrarrápida y enfocada en captar clientes.",
    deliverables: [
      "Landing page ultrarrápida en Next.js (código propio)",
      "Diseño responsive adaptado a móviles (mobile-first)",
      "Copy persuasivo estructurado para venta",
      "Dominio y hosting profesional conectado",
      "Tracking de Meta Pixel y Google Analytics",
      "Botón de WhatsApp optimizado con mensaje directo",
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
    desc: "La solución completa: atracción constante de prospectos calificados, presentación de alto impacto y embudo de cierre en WhatsApp.",
    deliverables: [
      "Todo lo incluido en el Pack 1 (Web de Alta Conversión)",
      "Configuración y optimización de campañas (Meta / Google Ads)",
      "Estructuración de oferta irresistible y ángulos comerciales",
      "Flujo de captura y cierre ágil en WhatsApp",
      "Segmentación hacia público con alto poder adquisitivo",
      "Reporte semanal de métricas y retorno de inversión",
    ],
    cta: "Cotizar Sistema Completo ($2.2M)",
    waMsg: "Hola Bestall 👋 Quiero cotizar el Pack 2: Sistema Completo de Ventas ($2.200.000 COP)",
  },
  {
    id: "pack-soluciones",
    featured: false,
    badge: "Pack 3",
    title: "Soluciones Digitales & Automatización",
    price: "Desde $3.500.000",
    currency: "COP",
    priceNote: "Según alcance técnico",
    timeframe: "A convenir según módulos",
    desc: "Desarrollo de software y automatizaciones avanzadas para empresas con necesidades operativas, cobros o reservas complejas.",
    deliverables: [
      "Desarrollo de aplicaciones y plataformas web a medida",
      "Integración de pasarelas de pago (Wompi, PSE, tarjetas)",
      "Cotizadores interactivos y sistemas de reserva dinámicos",
      "Automatización de flujos operativos sin fricción manual",
      "Conexión con CRM, bases de datos y notificaciones API",
      "Soporte técnico prioritario y evolución modular",
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
    subtitle: "Landing page técnica para motocicletas con selector de tarifas por año y pasarela Wompi",
    challenge:
      "Filas presenciales sin confirmación, pérdida de conductores por falta de claridad en tarifas según el modelo del vehículo y ausencia de recaudo digital previo.",
    solution:
      "Desarrollo en Next.js con selector dinámico de tarifas por año/cilindraje, pasarela integrada de Wompi para agendamiento pagado y canal prioritario a WhatsApp.",
    result:
      "Proceso de reserva ágil en menos de 60 segundos, reducción de filas en ventanilla y aumento en la confirmación de citas.",
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
    subtitle: "Embudo de conversión directa con tracking de eventos y automatizaciones de contacto",
    challenge:
      "Poco retorno en campañas publicitarias por desconfianza del usuario, carritos abandonados y dificultad para explicar un programa de alto valor de forma simple.",
    solution:
      "Landing de lectura modular con video persuasivo, prueba social dinámica geolocalizada, pasarela de pago internacional y tracking de eventos API sin fugas.",
    result:
      "Incremento en la tasa de conversión sobre tráfico frío de anuncios y flujo automatizado para asesoría médica y formativa.",
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
    q: "¿Cuáles son los tiempos de entrega de cada paquete?",
    a: "La Web de Alta Conversión (Pack 1) se entrega en 7 a 10 días hábiles. El Sistema Completo de Ventas (Pack 2) toma 15 días hábiles incluyendo configuración de campañas. Para Soluciones Digitales y Software a medida (Pack 3), el cronograma se define con base en los módulos acordados.",
  },
  {
    q: "¿El código, hosting y dominio son 100% de mi propiedad?",
    a: "Sí, absolutamente. El 100% del código fuente, accesos a servidores en Vercel, dominios y cuentas publicitarias se configuran a nombre de tu empresa. No retenemos claves ni existen costos ocultos de 'liberación'.",
  },
  {
    q: "¿Qué métodos de pago reciben para la contratación?",
    a: "Aceptamos pagos electrónicos mediante Wompi (tarjetas de crédito, débito, PSE, Nequi y Daviplata) y transferencias bancarias. Trabajamos bajo esquema de anticipo y saldo contra entrega verificada.",
  },
  {
    q: "¿Qué tipo de soporte recibo después del lanzamiento?",
    a: "Todos los proyectos incluyen garantía técnica y soporte pos-lanzamiento para asegurar funcionamiento impecable. También ofrecemos acompañamiento mensual opcional para optimización continua de conversión y soporte.",
  },
] as const;

// Compatibility aliases
export const SERVICES = SERVICE_PACKAGES;
export const PROCESS = METHOD_STEPS;
export const SHOWCASES = CASE_STUDIES;
