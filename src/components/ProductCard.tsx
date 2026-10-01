"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquareQuote, Check } from "lucide-react";
import { Product } from "@/data/products";
import ProductSchematicVisual from "./ProductSchematicVisual";

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
      {/* Top Media Area */}
      <div className="p-4 sm:p-5 pb-0">
        <ProductSchematicVisual
          type={product.schematicType}
          title={product.name}
          badge={product.heroBadge}
        />
      </div>

      {/* Body Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Eyebrow / Category */}
          <div className="flex items-center gap-2 mb-2.5">
            <span
              className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                isPlanetary
                  ? "bg-orange-50 text-orange-700 border-orange-200"
                  : "bg-sky-50 text-sky-700 border-sky-200"
              }`}
            >
              {isPlanetary ? "Gas Heated Mixing" : "Commercial Agitation"}
            </span>
            <span className="text-[11px] font-semibold text-slate-400">
              Commercial Food Preparation
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

          {/* Key Product Highlights (Strictly non-invented, operational) */}
          <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
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
