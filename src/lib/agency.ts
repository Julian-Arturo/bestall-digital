/**
 * Bestall Digital — product truth for the agency home.
 * Visual world: LA SALA DE CIERRE (conversion-first closing room).
 * Keep WhatsApp real. No invented client counts.
 */
export const AGENCY = {
  name: "Bestall Digital",
  tagline: "Marketing · Tecnología · Crecimiento",
  email: "hola@bestalldigital.com",
  whatsapp: "573003550715",
  whatsappPending: false,
  domain: "bestalldigital.com",
  since: "2024",
  mark: "/brand/agency/mark.webp",
  hero: "/brand/agency/hero.webp",
} as const;

export const WA_PREFILL =
  "Hola Bestall Digital 👋 Vengo de la página web bestalldigital.com y quiero información de la agencia (páginas, tráfico o tecnología).";

export function waUrl(text?: string) {
  const q = `?text=${encodeURIComponent(text ?? WA_PREFILL)}`;
  return `https://wa.me/${AGENCY.whatsapp}${q}`;
}

export const SERVICES = [
  {
    code: "01",
    title: "Páginas web",
    desc: "Landings y sitios pensados para explicar tu oferta y cobrarla.",
  },
  {
    code: "02",
    title: "Tráfico",
    desc: "Ads y embudos con lectura diaria: qué entra, qué cuesta, qué se apaga.",
  },
  {
    code: "03",
    title: "Gurú Partner",
    desc: "Una cabeza más en tu mesa para decidir prioridades y siguiente paso.",
  },
  {
    code: "04",
    title: "Apps",
    desc: "Productos digitales a la medida de cómo opera tu negocio hoy.",
  },
  {
    code: "05",
    title: "Soluciones tecnológicas",
    desc: "Automatizaciones e integraciones que quitan trabajo repetido.",
  },
  {
    code: "06",
    title: "Creamos negocios",
    desc: "De idea a oferta vendible: marca, promesa, página y primer canal.",
  },
  {
    code: "07",
    title: "Influencer marketing",
    desc: "Creadores con encaje real y contenido que mueve a compra.",
  },
] as const;

export const SHOWCASES = [
  {
    href: "/vip",
    title: "Mecánica VIP",
    subtitle: "Embudo de membresía · Hotmart",
    blurb:
      "Landing con video, prueba social y checkout afiliado — publicada y vendiendo en este dominio.",
    image: "/brand/agency/case-moto.webp",
  },
  {
    href: "/diabetes",
    title: "Toma el Control",
    subtitle: "Programa 21 días · Hotmart",
    blurb:
      "Landing de bienestar con oferta clara y CTA a US$4.99, lista para tráfico pago.",
    image: "/brand/agency/case-well.webp",
  },
] as const;

export const PROCESS = [
  {
    title: "Diagnóstico",
    desc: "Oferta, cliente y fricción real. Sin PowerPoint eterno.",
  },
  {
    title: "Arquitectura",
    desc: "Mensaje, página y embudo antes de gastar en ads.",
  },
  {
    title: "Lanzamiento",
    desc: "Tráfico, píxeles y creativos con lectura desde el día uno.",
  },
  {
    title: "Optimización",
    desc: "Iteramos lo que mueve plata. Lo demás se corta.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Camila R.",
    role: "Fundadora · e-commerce",
    quote:
      "Pasamos de un sitio que nadie entendía a un embudo que sí cierra. Piensan en venta, no solo en “bonito”.",
  },
  {
    name: "Andrés M.",
    role: "Coach online",
    quote:
      "En dos semanas: landing, píxeles y creativos. Empezamos a medir y a optimizar de verdad.",
  },
  {
    name: "Valentina S.",
    role: "Clínica privada",
    quote:
      "Ordenaron el mensaje y la página. El WhatsApp llega más caliente y con menos fricción.",
  },
] as const;

export const REVIEWS_DISCLAIMER =
  "Citas de muestra para estructura. Se reemplazan por clientes reales cuando autoricen su nombre.";
