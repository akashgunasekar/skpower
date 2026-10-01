"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, MessageSquareQuote, Layers, HelpCircle, Utensils } from "lucide-react";
import { Product } from "@/data/products";
import ProductHero from "./ProductHero";
import ProductSpecification from "./ProductSpecification";
import SectionHeading from "./SectionHeading";
import QuoteCTA from "./QuoteCTA";
import GroupBrands from "./GroupBrands";
import { useQuoteModal } from "./ClientShell";

interface ProductDetailViewProps {
  product: Product;
  otherProduct: Product;
}

export default function ProductDetailView({ product, otherProduct }: ProductDetailViewProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* 1. Breadcrumb + Product Hero */}
      <ProductHero
        product={product}
        onRequestQuote={(productName) => openQuoteModal(productName)}
      />

      {/* 2. Product Overview & In-Depth Conceptual Explanation */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-800">
                <span>Equipment Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Engineered for Commercial Food Preparation
              </h2>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                {product.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Operational Benefits Grid */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.operationalBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                      <span>{benefit.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Applications Scope & Sizing Guidance (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <Utensils className="w-4 h-4 text-orange-600" />
                  <span>Suitable Operational Sectors</span>
                </div>

                <h3 className="text-lg font-bold text-slate-950">
                  Target Commercial Environments
                </h3>

                <ul className="space-y-2.5">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{app}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    href="/applications"
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Explore All Commercial Applications</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>Enquiry-Driven Supply Policy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All SK Power Cook commercial machines are supplied with dedicated consultation to verify utility requirements, kitchen ergonomics, and batch sizing.
                </p>
                <button
                  type="button"
                  onClick={() => openQuoteModal(product.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquareQuote className="w-3.5 h-3.5" />
                  <span>Request Product Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical Specifications Table */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TECHNICAL SPECIFICATIONS"
            title={`Specifications: ${product.name}`}
            description="Verified engineering parameters. Dimensional and electrical specifications are aligned to project requirements upon consultation."
            align="center"
            accentColor="orange"
          />

          <div className="max-w-4xl mx-auto">
            <ProductSpecification
              specifications={product.specifications}
              productName={product.name}
            />
          </div>
        </div>
      </section>

      {/* 4. Cross-Reference to the Other Confirmed Product */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Alternative Mixing Solution
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                Explore Our Other Confirmed Mixer
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>View Both Machines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-300 transition-colors">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200">
                {otherProduct.heroBadge}
              </span>
              <h4 className="text-xl font-extrabold text-slate-950">
                {otherProduct.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {otherProduct.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={`/products/${otherProduct.slug}`}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              >
                View Machine Details
              </Link>
              <button
                type="button"
                onClick={() => openQuoteModal(otherProduct.name)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white transition-colors cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Group Brands */}
      <GroupBrands />

      {/* 6. Quote CTA */}
      <QuoteCTA
        title={`Request a Quote for ${product.name}`}
        description="Our technical team will provide commercial pricing, utility requirements, and delivery schedules tailored to your facility."
        onRequestQuote={() => openQuoteModal(product.name)}
      />
    </>
  );
}
