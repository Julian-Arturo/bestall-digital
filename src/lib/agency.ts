/**
 * Bestall Digital — hechos del producto para la home de agencia.
 * Mundo visual: EL AVISO PINTADO (rotulación comercial pintada a mano).
 * Verdad de producto: sin cifras de clientes inventadas, sin ratings falsos.
 */
export const AGENCY = {
  name: "Bestall Digital",
  tagline: "Marketing · Tecnología · Crecimiento",
  email: "hola@bestalldigital.com",
  /** Colombia +57 · número de la agencia */
  whatsapp: "573003550715",
  whatsappPending: false,
  domain: "bestalldigital.com",
  /** Año en que el taller abrió su primer letrero digital. */
  since: "2024",
} as const;

/** Mensaje por defecto: identifica lead desde la web */
export const WA_PREFILL =
  "Hola Bestall Digital 👋 Vengo de la página web bestalldigital.com y quiero información de la agencia (páginas, tráfico o tecnología).";

export function waUrl(text?: string) {
  const q = `?text=${encodeURIComponent(text ?? WA_PREFILL)}`;
  return `https://wa.me/${AGENCY.whatsapp}${q}`;
}

/** Titular del letrero: tres renglones, cada uno se condensa para caber en la lámina. */
export const SIGN_LINES = [
  "PÁGINAS QUE VENDEN.",
  "TRÁFICO QUE LLEGA.",
  "TECNOLOGÍA QUE AGUANTA.",
] as const;

export const SIGN_FLOURISH = "pintado a mano, medido a diario";

/**
 * Los 7 servicios, cada uno como un renglón del letrero.
 * `entra` / `sale` van en la misma banda: la instrucción y su resultado.
 */
export const SERVICES = [
  {
    code: "101",
    title: "Páginas web",
    icon: "pagina" as const,
    entra: "Una oferta que nadie termina de entender",
    sale: "Una página que la explica y la cobra",
    detail:
      "Landings y sitios armados sobre el argumento de venta, no sobre una plantilla. Carga rápida, texto que se lee de un tirón y una sola acción evidente.",
  },
  {
    code: "102",
    title: "Tráfico",
    icon: "trafico" as const,
    entra: "Presupuesto quemado sin lectura",
    sale: "Campañas con un número que revisas cada día",
    detail:
      "Meta y Google con píxeles bien puestos, creativos en rotación y un tablero honesto: cuánto entró, cuánto costó, qué se apaga mañana.",
  },
  {
    code: "103",
    title: "Gurú Partner",
    icon: "socio" as const,
    entra: "Decisiones que llevan meses aplazadas",
    sale: "Una cabeza más en tu mesa cada semana",
    detail:
      "Acompañamiento estratégico fijo: prioridades, precios, oferta y siguiente movimiento. Te sentamos a decidir, no a escuchar teoría.",
  },
  {
    code: "104",
    title: "Apps",
    icon: "app" as const,
    entra: "Una operación viviendo en cuadernos y WhatsApp",
    sale: "Un producto digital que la sostiene",
    detail:
      "Aplicaciones web y móviles a la medida de cómo trabajas hoy, no de cómo debería trabajar una empresa de folleto.",
  },
  {
    code: "105",
    title: "Soluciones tecnológicas",
    icon: "engranaje" as const,
    entra: "Tareas repetidas a mano todos los días",
    sale: "Automatizaciones que no piden permiso",
    detail:
      "Integraciones, flujos automáticos y sistemas que conectan lo que ya usas para que el equipo deje de copiar y pegar.",
  },
  {
    code: "106",
    title: "Creamos negocios",
    icon: "brocha" as const,
    entra: "Una idea dando vueltas en la cabeza",
    sale: "Marca, oferta y primer embudo vendiendo",
    detail:
      "De cero a algo cobrable: nombre, promesa, precio, página y primer canal de entrada. El letrero completo, no el boceto.",
  },
  {
    code: "107",
    title: "Influencer marketing",
    icon: "megafono" as const,
    entra: "Audiencia prestada que no deja nada",
    sale: "Contenido que mueve gente a comprar",
    detail:
      "Selección de creadores por encaje real, guiones con intención comercial y medición de lo que pasó después del video.",
  },
] as const;

export type ServiceIconName = (typeof SERVICES)[number]["icon"];

/** Letreros que ya están colgados: productos reales publicados en este mismo dominio. */
export const SHOWCASES = [
  {
    href: "/vip",
    title: "Mecánica VIP",
    subtitle: "Embudo de membresía · Hotmart",
    blurb:
      "Landing de conversión con video, prueba social y checkout de afiliado para Academia Mecánica MOTOS.",
    image: "/brand/agency/case-moto.webp",
    stamp: "EN LÍNEA",
  },
  {
    href: "/diabetes",
    title: "Toma el Control",
    subtitle: "Programa 21 días · Hotmart",
    blurb:
      "Landing de bienestar con oferta clara, reseñas y CTA a US$4.99 — lista para tráfico pago.",
    image: "/brand/agency/case-well.webp",
    stamp: "EN LÍNEA",
  },
] as const;

/** La secuencia del rotulista, aplicada al trabajo. */
export const PROCESS = [
  {
    pass: "Boceto",
    title: "Diagnóstico",
    desc: "Miramos tu oferta, tu cliente y dónde exactamente se cae la venta. Sin PowerPoint eterno.",
  },
  {
    pass: "Cuadrícula",
    title: "Arquitectura",
    desc: "Mensaje, página y embudo cuadriculados antes de pintar una sola línea.",
  },
  {
    pass: "Fondo",
    title: "Lanzamiento",
    desc: "Tráfico, píxeles y creativos arriba, con lectura desde el primer día.",
  },
  {
    pass: "Letra y sombra",
    title: "Optimización",
    desc: "Iteramos lo que mueve plata. Lo que se ve bonito y no vende, se raspa.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Camila R.",
    role: "Fundadora · e-commerce",
    quote:
      "Pasamos de un sitio que nadie entendía a un embudo que sí cierra. El equipo piensa en venta, no solo en “bonito”.",
  },
  {
    name: "Andrés M.",
    role: "Coach online",
    quote:
      "En dos semanas teníamos landing, píxeles y creativos. Empezamos a medir y a optimizar de verdad.",
  },
  {
    name: "Valentina S.",
    role: "Clínica privada",
    quote:
      "Nos ordenaron el mensaje y la página. Hoy el WhatsApp llega más caliente y con menos fricción.",
  },
] as const;

/** Aviso honesto: las citas de arriba son de muestra hasta que lleguen clientes reales. */
export const REVIEWS_DISCLAIMER =
  "Citas de muestra, puestas aquí para mostrar la estructura. Se reemplazan por clientes reales cuando autoricen su nombre.";

/** Índice del muro: secciones de la página, en orden de recorrido. */
export const WALL = [
  { id: "letrero", label: "Letrero" },
  { id: "servicios", label: "Servicios" },
  { id: "colgados", label: "Colgados" },
  { id: "taller", label: "Taller" },
  { id: "voces", label: "Voces" },
  { id: "contacto", label: "Contacto" },
] as const;
