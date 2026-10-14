import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { AgencyLanding } from "@/components/agency/AgencyLanding";
import { JsonLd } from "@/components/JsonLd";
import { AGENCY, FAQS, SERVICE_PACKAGES } from "@/lib/agency";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const display = Bricolage_Grotesque({
  variable: "--font-close-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-close-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ORG_ID = `${SITE_URL}/#organization`;

/** Precio mínimo en COP a partir del texto del paquete ("$1.200.000", "Desde $3.500.000"). */
function copAmount(price: string) {
  return Number(price.replace(/D/g, ""));
}

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      slogan: AGENCY.tagline,
      areaServed: { "@type": "Country", name: "Colombia" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${AGENCY.whatsapp}`,
        contactType: "sales",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-CO",
      publisher: { "@id": ORG_ID },
    },
    ...SERVICE_PACKAGES.map((pkg) => ({
      "@type": "Service",
      name: pkg.title,
      description: pkg.desc,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Colombia" },
      offers: {
        "@type": "Offer",
        priceCurrency: pkg.currency,
        ...(pkg.price.startsWith("Desde")
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: copAmount(pkg.price),
                priceCurrency: pkg.currency,
              },
            }
          : { price: copAmount(pkg.price) }),
      },
    })),
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className={`${display.variable} ${body.variable} w-full max-w-full overflow-x-hidden`}>
      <JsonLd data={homeJsonLd} />
      <AgencyLanding />
    </div>
  );
}
