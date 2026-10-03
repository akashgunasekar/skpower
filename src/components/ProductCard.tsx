"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquareQuote, Check, Flame } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onRequestQuote?: (productName: string) => void;
}

export default function ProductCard({ product, onRequestQuote }: ProductCardProps) {
  const isPlanetary = product.schematicType === "planetary";

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (onRequestQuote) {
      e.preventDefault();
      onRequestQuote(product.name);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-slate-300 group">
      {/* Top Media Area: Real Machinery Photograph */}
      <div className="p-4 sm:p-5 pb-0">
        <Link
          href={`/products/${product.slug}`}
          className="block relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/95 border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-2xs backdrop-blur-xs">
              <span className={`w-1.5 h-1.5 rounded-full ${isPlanetary ? "bg-orange-600" : "bg-sky-600"}`} />
              {product.heroBadge}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs">
              <Flame className="w-3 h-3" />
              Gas / Induction
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold tracking-wider opacity-90">
              SK-{isPlanetary ? "PM-GAS" : "CM-B2B"}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded">
              Commercial Build
            </span>
          </div>
        </Link>
      </div>

      {/* Body Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Eyebrow / Category & Heating Type */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span
              className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                isPlanetary
                  ? "bg-orange-50 text-orange-700 border-orange-200"
                  : "bg-sky-50 text-sky-700 border-sky-200"
              }`}
            >
              {product.heatingType}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-amber-50 text-amber-900 border-amber-200">
              <Flame className="w-3 h-3 text-orange-600" />
              Gas / Induction
            </span>
            <span className="text-[11px] font-semibold text-slate-400">
              Commercial Food Processing
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight group-hover:text-orange-600 transition-colors">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
            {product.shortDescription}
          </p>

          {/* Explicit Heating Option Strip */}
          <div className="mt-4 px-3.5 py-2 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-amber-950 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              <span>Thermal Supply:</span>
            </span>
            <span className="font-extrabold text-amber-900 tracking-wide">
              Gas / Induction (Dual Option)
            </span>
          </div>

          {/* Key Product Highlights (Strictly non-invented, operational) */}
          <div className="mt-4 space-y-2 pt-4 border-t border-slate-100">
            {product.keyHighlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: View Product & Request a Quote (NO Add to Cart / Price) */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-xs active:scale-98"
          >
            <span>View Product</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {onRequestQuote ? (
            <button
              type="button"
              onClick={handleQuoteClick}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs shadow-orange-600/20 transition-all active:scale-98 cursor-pointer"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          ) : (
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs shadow-orange-600/20 transition-all active:scale-98"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
