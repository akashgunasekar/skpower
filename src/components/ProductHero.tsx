"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MessageSquareQuote,
  Phone,
  ShieldCheck,
  Check,
  Camera,
  FileCode2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Product } from "@/data/products";
import ProductSchematicVisual from "./ProductSchematicVisual";
import Breadcrumbs from "./Breadcrumbs";
import { SITE_CONFIG } from "@/data/site";

interface ProductHeroProps {
  product: Product;
  onRequestQuote?: (productName: string) => void;
}

export default function ProductHero({ product, onRequestQuote }: ProductHeroProps) {
  const [activeMedia, setActiveMedia] = useState<"schematic" | "photo">("schematic");
  const isPlanetary = product.schematicType === "planetary";

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onRequestQuote) {
      onRequestQuote(product.name);
    }
  };

  return (
    <section className="bg-white border-b border-slate-200 pt-6 pb-12 sm:pt-8 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name, href: `/products/${product.slug}` },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Visual CAD Schematic & Machinery Media (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Media Container */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Media Mode Switcher Tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5 text-xs">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  {isPlanetary ? "MODEL // SK-PM-GAS" : "MODEL // SK-CM-B2B"}
                </span>

                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveMedia("schematic")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activeMedia === "schematic"
                        ? "bg-orange-50 text-orange-700 shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>CAD Schematic</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMedia("photo")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activeMedia === "photo"
                        ? "bg-orange-50 text-orange-700 shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Machinery Photo</span>
                  </button>
                </div>
              </div>

              {/* Viewport: Schematic or Photo */}
              <div className="p-3 sm:p-4 bg-white">
                {activeMedia === "schematic" ? (
                  <ProductSchematicVisual
                    type={product.schematicType}
                    title={product.name}
                    badge={product.heroBadge}
                  />
                ) : (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                    <Image
                      src="/images/sk_power_cook_machinery.jpg"
                      alt={`${product.name} - SK Power Cook Machinery Commercial Food Preparation`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-600 mb-1">
                        Commercial Heavy-Duty Build
                      </span>
                      <p className="text-xs font-bold">
                        {product.name}
                      </p>
                      <p className="text-[11px] text-slate-300">
                        SK Power Cook Machinery · Maxwell Group
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnail Quick Selector */}
              <div className="grid grid-cols-2 gap-2 border-t border-slate-200 bg-slate-50 p-2.5">
                <button
                  type="button"
                  onClick={() => setActiveMedia("schematic")}
                  className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    activeMedia === "schematic"
                      ? "border-orange-500 bg-white shadow-2xs ring-1 ring-orange-200"
                      : "border-slate-200 bg-slate-100/60 hover:bg-white"
                  }`}
                >
                  <FileCode2 className={`w-4 h-4 ${activeMedia === "schematic" ? "text-orange-600" : "text-slate-500"}`} />
                  <div>
                    <span className="block text-[11px] font-bold text-slate-800">
                      Technical Blueprint
                    </span>
                    <span className="block text-[10px] text-slate-500">
                      CAD mechanism schematic
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMedia("photo")}
                  className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    activeMedia === "photo"
                      ? "border-orange-500 bg-white shadow-2xs ring-1 ring-orange-200"
                      : "border-slate-200 bg-slate-100/60 hover:bg-white"
                  }`}
                >
                  <Camera className={`w-4 h-4 ${activeMedia === "photo" ? "text-orange-600" : "text-slate-500"}`} />
                  <div>
                    <span className="block text-[11px] font-bold text-slate-800">
                      Machinery Showcase
                    </span>
                    <span className="block text-[10px] text-slate-500">
                      Commercial production unit
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Quality & Group Guarantee Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-semibold text-slate-800">
                  Direct Maxwell Group Supply & Technical Guidance
                </span>
              </div>
              <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">
                B2B COMMERCIAL ONLY
              </span>
            </div>
          </div>

          {/* Right Column: Titles, Copy, Highlights & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Dynamic Badge for Planetary vs Colino */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${
                  isPlanetary
                    ? "bg-orange-50 text-orange-700 border-orange-200"
                    : "bg-sky-50 text-sky-700 border-sky-200"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isPlanetary ? "bg-orange-600" : "bg-sky-600"
                  }`}
                />
                <span>{product.heroBadge}</span>
              </div>

              {/* H1 Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="mt-2 text-base sm:text-lg font-semibold text-slate-700">
                {product.tagline}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {product.shortDescription}
            </p>

            {/* Key Engineering Highlights */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Engineering Highlights
              </h4>
              <div className="space-y-2">
                {product.keyHighlights.slice(0, 4).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs: Request a Quote & Direct Call (No Buy Now / Cart) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {onRequestQuote ? (
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all active:scale-98 cursor-pointer"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>
              ) : (
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all active:scale-98"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </Link>
              )}

              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 transition-all active:scale-98 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Back to Products Navigation Link */}
            <div className="pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Mixing Machinery</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
