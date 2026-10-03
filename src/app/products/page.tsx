import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import GroupBrands from "@/components/GroupBrands";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata = constructMetadata({
  title: "Commercial Food Processing Machinery | SK Power Cook Machinery",
  description:
    "Explore commercial food processing machinery by SK Power Cook Machinery. Focused equipment including Planetary Mixer Machine – Gas / Induction and Colino Mixer Machine – Gas / Induction for professional food preparation environments.",
  canonicalPath: "/products",
});

export default function ProductsPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span>Confirmed Machinery Catalogue</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Commercial Food Processing Machinery
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Focused equipment solutions for professional food operations. Purpose-engineered food processing machinery for commercial kitchens, catering commissaries, and food preparation units.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogue Section (Strictly the 2 confirmed products) */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EQUIPMENT SELECTION"
            title="Food Processing & Mixing Machinery"
            description="Focused equipment solutions for professional food preparation. Each unit is supplied via commercial consultation to match facility batch volumes."
            align="center"
            accentColor="orange"
          />

          <ProductGrid />

          {/* Consultation Note */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-orange-700">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Need Technical Sizing Advice?</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Application-Specific Configuration & Sizing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Our engineering team will assess your batch volume, utility supply lines, and recipe viscosity to specify the appropriate machine configuration and commercial quote.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors shrink-0"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Group Brands */}
      <GroupBrands />

      {/* Quote CTA */}
      <QuoteCTA />
    </>
  );
}
