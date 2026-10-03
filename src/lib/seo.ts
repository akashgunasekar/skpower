import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";
import { Product } from "@/data/products";

interface PageSeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  ogImage = "/brands/sk-powercook-original.png",
}: PageSeoProps): Metadata {
  const url = `${SITE_CONFIG.domain}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 421,
          alt: "SK Power Cook Machinery",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: "SK Power Cook Machinery",
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}${SITE_CONFIG.logos.primary}`,
    parentOrganization: {
      "@type": "Organization",
      name: "Maxwell Group",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "PKM Industrial Complex, Mel Ayanambakkam",
      addressLocality: "Chennai",
      postalCode: "600095",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-75500-16607",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.description,
  };
}

export function generateProductSchema(product: Product) {
  // Strictly avoid fake ratings, reviews, availability, or prices as requested
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    category: "Commercial Food Processing Machinery",
    url: `${SITE_CONFIG.domain}/products/${product.slug}`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}
