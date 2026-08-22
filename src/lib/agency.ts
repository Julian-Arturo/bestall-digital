/**
 * Bestall Digital — copy and facts for the agency home.
 * Visual world: LA SALA DE CIERRE. WhatsApp real. No invented metrics.
 */
export const AGENCY = {
  name: "Bestall Digital",
  tagline: "Marketing · Tecnología · Crecimiento",
  email: "hola@bestalldigital.com",
  whatsapp: "573003550715",
  whatsappPending: false,
  since: "2024",
  mark: "/brand/agency/mark.webp",
  /** PNG alta para grupos / redes */
  markPng: "/brand/agency/mark.png",
  hero: "/brand/agency/hero.webp",
} as const;

export const WA_PREFILL =
  "Hola Bestall Digital 👋 Vi su página y quiero ayuda para conseguir más clientes. Les cuento qué vendo:";

export function waUrl(text?: string) {
  const q = `?text=${encodeURIComponent(text ?? WA_PREFILL)}`;
  return `https://wa.me/${AGENCY.whatsapp}${q}`;
}

/** Dolores que reconocen al instante quienes nos necesitan */
export const PAINS = [
  {
    title: "Inviertes en anuncios… y el teléfono no suena",
    desc: "El presupuesto se va, las métricas “se ven bien”, pero no llegan personas listas para comprar.",
  },
  {
    title: "Tu página explica poco y confunde mucho",
    desc: "El visitante no entiende qué vendes, a quién le sirve ni qué hacer después. Se va sin escribirte.",
  },
  {
    title: "Sabes que vendes, pero no sabes por dónde empezar",
    desc: "Hay mil ideas y cero orden: sin prioridad, sin mensaje claro y sin un plan que se pueda medir.",
  },
  {
    title: "Tu equipo se ahoga en tareas repetidas",
    desc: "WhatsApp, Excel y copiar-pegar consumen el día. El negocio no escala porque todo depende de personas cansadas.",
  },
] as const;

export const SERVICES = [
  {
    code: "01",
    title: "Páginas web",
    pain: "Tienes presencia online, pero no genera conversaciones.",
    desc: "Diseñamos páginas que explican tu oferta en segundos y empujan a una sola acción: escribirte o comprar.",
  },
  {
    code: "02",
    title: "Tráfico",
    pain: "Pagas por visitas que no se convierten.",
    desc: "Campañas con lectura diaria: qué entra, qué cuesta y qué apagamos mañana. Menos humo, más clientes.",
  },
  {
    code: "03",
    title: "Gurú Partner",
    pain: "Decides solo y todo se atrasa meses.",
    desc: "Una cabeza más en tu mesa cada semana: prioridades, precios, oferta y el siguiente paso concreto.",
  },
  {
    code: "04",
    title: "Apps",
    pain: "Tu operación vive en cuadernos y chats.",
    desc: "Productos digitales a la medida de cómo trabajas hoy, para ordenar ventas, agenda o servicio.",
  },
  {
    code: "05",
    title: "Soluciones tecnológicas",
    pain: "El equipo pierde horas en lo mismo todos los días.",
    desc: "Automatizaciones e integraciones que conectan lo que ya usas y liberan tiempo para vender.",
  },
  {
    code: "06",
    title: "Creamos negocios",
    pain: "Tienes una idea… y sigue en la cabeza.",
    desc: "Te llevamos de idea a oferta vendible: marca, promesa, precio, página y primer canal de clientes.",
  },
  {
    code: "07",
    title: "Influencer marketing",
    pain: "Pagas por “alcance” que no deja ventas.",
    desc: "Creadores con encaje real y contenido pensado para que la gente compre, no solo mire.",
  },
] as const;

export const SHOWCASES = [
  {
    href: "/vip",
    title: "Mecánica VIP",
    subtitle: "Curso / membresía que ya está vendiendo",
    blurb:
      "Una página hecha para que el motero entienda el valor, confíe y pague — con video, prueba social y compra en minutos.",
    image: "/brand/agency/case-moto.webp",
    result: "De la duda al pago, sin rodeos",
  },
  {
    href: "/diabetes",
    title: "Toma el Control",
    subtitle: "Programa de 21 días · oferta clara",
    blurb:
      "Una landing calmada y directa: el problema, el plan y un precio accesible. Lista para que el anuncio traiga gente que sí escribe.",
    image: "/brand/agency/case-well.webp",
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
    title: "Lo ponemos a trabajar",
    desc: "Página, tráfico o sistema en marcha — con números que puedes revisar desde el primer día.",
  },
  {
    title: "Afinamos lo que vende",
    desc: "Cortamos lo que no mueve plata y reforzamos lo que sí. Crecer es iterar, no adivinar.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Camila R.",
    role: "Fundadora · e-commerce",
    quote:
      "Antes mi página era linda y nadie entendía nada. Ahora el WhatsApp llega con gente que ya quiere comprar.",
  },
  {
    name: "Andrés M.",
    role: "Coach online",
    quote:
      "Dejé de quemar plata a ciegas. En semanas teníamos página, anuncios y un tablero que sí entendía.",
  },
  {
    name: "Valentina S.",
    role: "Clínica privada",
    quote:
      "Ordenaron el mensaje. Hoy el paciente llega más claro y nosotros perdemos menos tiempo explicando lo mismo.",
  },
] as const;

export const REVIEWS_DISCLAIMER =
  "Historias de muestra para mostrar el tono. Las cambiamos por clientes reales cuando autoricen su nombre.";
