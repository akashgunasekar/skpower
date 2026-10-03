import React from "react";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/data/products";
import ProductDetailView from "@/components/ProductDetailView";
import { constructMetadata, generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";

const PRODUCT_SLUG = "colino-mixer-machine";

export const metadata = constructMetadata({
  title: "Colino Mixer Machine Gas / Induction | SK Power Cook Machinery",
  description:
    "Colino Mixer Machine – Gas / Induction by SK Power Cook Machinery. Commercial food processing machinery with Gas / Induction heating designed for professional food preparation environments and commercial kitchens.",
  canonicalPath: `/products/${PRODUCT_SLUG}`,
});

export default function ColinoMixerPage() {
  const product = getProductBySlug(PRODUCT_SLUG);
  const otherProduct = PRODUCTS.find((p) => p.slug !== PRODUCT_SLUG);

  if (!product || !otherProduct) {
    notFound();
  }

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailView product={product} otherProduct={otherProduct} />
    </>
  );
}
