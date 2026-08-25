/**
 * Bestall Digital — agency home copy & offers.
 * Visual: dark glass conversion landing (Pixelee-structure, Bestall colors).
 */

export const AGENCY = {
  name: "Bestall Digital",
  tagline: "Marketing · Tecnología · Crecimiento",
  whatsapp: "573003550714",
  whatsappPending: false,
  since: "2024",
  mark: "/brand/agency/mark.webp",
  markPng: "/brand/agency/mark.png",
  hero: "/brand/agency/demo-collage.png",
  demoMoto: "/brand/agency/demo-moto.png",
  demoDiabetes: "/brand/agency/demo-diabetes.png",
  demoCollage: "/brand/agency/demo-collage.png",
  priceFrom: "$2.200.000",
  priceFromNote: "COP · según el servicio",
} as const;

export const WA_PREFILL =
  "Hola Bestall Digital 👋 Vi su página y quiero ayuda con marketing, tecnología o crecimiento. Les cuento mi caso:";

export function waUrl(text?: string) {
  const q = `?text=${encodeURIComponent(text ?? WA_PREFILL)}`;
  return `https://wa.me/${AGENCY.whatsapp}${q}`;
}

export const TRUST = [
  {
    title: "Marketing que vende",
    desc: "Mensaje, oferta y campañas orientadas a clientes, no a vanidad.",
  },
  {
    title: "Tecnología útil",
    desc: "Páginas, apps y automatizaciones al servicio de tu operación.",
  },
  {
    title: "Crecimiento medible",
    desc: "Sabes qué entra, qué cuesta y qué apagamos mañana.",
  },
  {
    title: "WhatsApp al centro",
    desc: "El sistema termina en conversaciones listas para cerrar.",
  },
] as const;

export const PRICE_BULLETS = [
  "Diagnóstico de qué te está frenando",
  "Propuesta clara por servicio o pack",
  "Páginas, tráfico, apps o automatización",
  "Enfoque en clientes, no en humo",
  "Acompañamiento al lanzar",
  "Opcional: gestión de campañas",
] as const;

export const PAINS = [
  {
    title: "Inviertes y el teléfono no suena",
    desc: "El presupuesto se va; las métricas “se ven bien”, pero no hay clientes.",
  },
  {
    title: "Tu presencia digital confunde",
    desc: "Nadie entiende qué vendes ni qué hacer después. Se van sin escribirte.",
  },
  {
    title: "Decides solo y todo se atrasa",
    desc: "Hay mil ideas y cero orden: sin prioridad ni plan que se pueda medir.",
  },
  {
    title: "Tu competencia se ve más profesional",
    desc: "Y se está llevando a quien debería escribirte a ti.",
  },
  {
    title: "El equipo se ahoga en lo repetido",
    desc: "WhatsApp, Excel y copiar-pegar: el negocio no escala.",
  },
] as const;

/** Siete pilares (misma oferta del logo anterior) */
export const SERVICES = [
  {
    code: "01",
    title: "Páginas web",
    desc: "Landings y sitios que explican tu oferta en segundos y empujan a una sola acción: escribirte o comprar.",
    image: "/brand/agency/demo-moto.png",
    href: "/vip",
  },
  {
    code: "02",
    title: "Tráfico",
    desc: "Campañas con lectura diaria: qué entra, qué cuesta y qué apagamos mañana. Menos humo, más clientes.",
    image: "/brand/agency/demo-collage.png",
    href: "#contacto",
  },
  {
    code: "03",
    title: "Gurú Partner",
    desc: "Una cabeza más en tu mesa cada semana: prioridades, precios, oferta y el siguiente paso concreto.",
    image: "/brand/agency/demo-collage.png",
    href: "#contacto",
  },
  {
    code: "04",
    title: "Apps",
    desc: "Productos digitales a la medida de cómo trabajas hoy: ventas, agenda o servicio sin Excel eterno.",
    image: "/brand/agency/demo-diabetes.png",
    href: "#contacto",
  },
  {
    code: "05",
    title: "Soluciones tecnológicas",
    desc: "Automatizaciones e integraciones que conectan lo que ya usas y liberan tiempo para vender.",
    image: "/brand/agency/demo-moto.png",
    href: "#contacto",
  },
  {
    code: "06",
    title: "Creamos negocios",
    desc: "De idea a oferta vendible: marca, promesa, precio, página y primer canal de clientes.",
    image: "/brand/agency/demo-diabetes.png",
    href: "#contacto",
  },
  {
    code: "07",
    title: "Influencer marketing",
    desc: "Creadores con encaje real y contenido pensado para que la gente compre, no solo mire.",
    image: "/brand/agency/demo-collage.png",
    href: "#contacto",
  },
] as const;

export const SERVICE_PERKS = [
  { title: "Estrategia primero", desc: "Antes de diseñar, ordenamos" },
  { title: "Siete frentes", desc: "Marketing + tech + crecimiento" },
  { title: "Medible", desc: "Sabes qué trae clientes" },
  { title: "Acompañamiento", desc: "Soporte cercano" },
] as const;

export const SHOWCASES = [
  {
    href: "/vip",
    title: "Mecánica VIP",
    subtitle: "Landing de membresía que ya está vendiendo",
    blurb:
      "Página hecha para que el motero entienda el valor, confíe y pague — con video, prueba social y compra en minutos.",
    image: "/brand/agency/demo-moto.png",
    result: "De la duda al pago, sin rodeos",
  },
  {
    href: "/diabetes",
    title: "Toma el Control",
    subtitle: "Programa de 21 días · oferta clara",
    blurb:
      "Landing calmada y directa: el problema, el plan y un precio accesible. Lista para que el anuncio traiga gente que sí escribe.",
    image: "/brand/agency/demo-diabetes.png",
    result: "Mensaje simple → decisión rápida",
  },
] as const;

export const PROCESS = [
  {
    title: "Escuchamos el dolor",
    desc: "Qué vendes, a quién y dónde se te caen las ventas. Sin presentaciones eternas.",
  },
  {
    title: "Ordenamos el mensaje",
    desc: "Claridad primero: qué ofreces, por qué tú y qué debe hacer la persona en la página.",
  },
  {
    title: "Diseño y construcción",
    desc: "Interfaz profesional, móvil primero, WhatsApp al centro y lista para campañas.",
  },
  {
    title: "Tráfico y lanzamiento",
    desc: "Publicamos, conectamos medición y —si lo contratas— encendemos anuncios.",
  },
  {
    title: "Afinamos lo que vende",
    desc: "Cortamos lo que no mueve plata y reforzamos lo que sí. Iterar, no adivinar.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Laura Méndez",
    role: "Servicios profesionales",
    quote:
      "La página quedó clara y lista para campañas. Empezamos a recibir más contactos desde la primera semana.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Andrés Rojas",
    role: "Consultoría",
    quote:
      "Necesitábamos explicar mejor la oferta. Ordenaron el mensaje y mejoró mucho la experiencia en celular.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Camila Torres",
    role: "Marca comercial",
    quote:
      "Entregaron una landing con WhatsApp integrado y estructura lista para Google Ads. El proceso fue fácil.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Santiago Pérez",
    role: "Negocio local",
    quote:
      "Antes la web era confusa. Ahora el cliente entiende rápido qué hacemos y nos escribe con más intención.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Valentina López",
    role: "Emprendedora",
    quote:
      "Pasamos de una idea suelta a una página completa, visualmente sólida y enfocada en cotizaciones.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Daniel Medina",
    role: "Tecnología",
    quote:
      "Diseño moderno sin perder claridad. Carga rápido y se ve impecable en el celular, que era la prioridad.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "María Camargo",
    role: "Educación",
    quote:
      "Nos guiaron con textos, estructura y llamados a la acción. Aprovechamos mucho mejor cada visita.",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Javier Acosta",
    role: "Servicios",
    quote:
      "Quedamos con una web profesional y fácil de compartir. WhatsApp nos ayudó a responder más rápido.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80",
  },
] as const;

export const STATS = [
  { value: "+50", label: "negocios acompañados" },
  { value: "2", label: "proyectos live para ver" },
  { value: "7–15", label: "días de entrega típica" },
] as const;

export const FAQS = [
  {
    q: "¿Cuánto tarda una landing?",
    a: "Una landing de conversión suele estar lista entre 7 y 15 días. Sitios con admin o más secciones pueden tomar 2 a 3 semanas.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Landing plana desde $2.200.000 COP. Con panel para editar textos y fotos, desde $3.900.000 COP. El precio final depende del alcance.",
  },
  {
    q: "¿Incluyen campañas de tráfico?",
    a: "Sí, como servicio aparte o en pack. La página convence; los anuncios traen visitas. Juntos cierran el sistema: anuncio → landing → WhatsApp.",
  },
  {
    q: "¿Incluyen dominio y hosting?",
    a: "Te asesoramos y dejamos todo publicado. Dominio y hosting pueden ir a tu nombre o los gestionamos según el acuerdo.",
  },
  {
    q: "¿Queda bien en celular?",
    a: "Sí. Diseñamos primero para móvil: ahí llega la mayoría del tráfico de anuncios.",
  },
  {
    q: "¿Hay soporte después de entregar?",
    a: "Sí. Acompañamos el lanzamiento y ofrecemos mantenimiento mensual para cambios y soporte.",
  },
  {
    q: "¿Puedo editar la página yo?",
    a: "En el plan con admin, sí: textos, fotos, horarios y bloques clave. En el plan plano, los cambios los hacemos nosotros.",
  },
  {
    q: "¿Integran WhatsApp y pagos?",
    a: "WhatsApp va de serie. Pagos, formularios y automatizaciones se agregan según el tipo de negocio.",
  },
] as const;
