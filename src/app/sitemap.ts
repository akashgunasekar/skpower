import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { PRODUCTS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/applications",
    "/why-us",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
