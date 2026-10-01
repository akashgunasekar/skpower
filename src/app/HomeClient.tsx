"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Cpu, ShieldCheck, Check, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import ApplicationCard from "@/components/ApplicationCard";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import QuoteCTA from "@/components/QuoteCTA";
import GroupBrands from "@/components/GroupBrands";
import { APPLICATIONS } from "@/data/applications";
import { useQuoteModal } from "@/components/ClientShell";

export default function HomeClient() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero onRequestQuote={() => openQuoteModal()} />

      {/* 2. INTRODUCTION */}
      <HomeIntro />

      {/* 3. PRODUCTS SECTION */}
      <section id="products" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="COMMERCIAL EQUIPMENT CATALOGUE"
            title="Our Mixing Machines"
            description="Focused equipment solutions for professional food preparation. Purpose-engineered commercial machinery for high-demand culinary environments."
            align="center"
            accentColor="orange"
          />

          <ProductGrid onRequestQuote={(productName) => openQuoteModal(productName)} />
        </div>
      </section>

      {/* 4. PRODUCT VALUE / OPERATIONAL BENEFITS */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGINEERING ADVANTAGES"
            title="Operational Value in Professional Kitchens"
            description="How our commercial mixing machinery addresses core operational challenges in high-output food preparation."
            align="center"
            accentColor="orange"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                Batch Consistency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Replaces variable manual agitation with reliable motorized mechanics, ensuring uniform density, emulsification, and ingredient distribution.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                Thermal Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Planetary gas mixing merges continuous mechanical agitation with direct heat, essential for culinary preparations requiring concurrent cooking.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                Continuous Shift Durability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Commercial transmission components, stable chassis frames, and robust drives engineered for daily commercial culinary duty.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                Sanitary Accessibility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Food-contact components designed for straightforward washdown and sanitization, meeting strict commercial hygiene protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATIONS */}
      <section id="applications" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TARGET COMMERCIAL SECTORS"
            title="Target Commercial Applications"
            description="Engineered specifically for professional food preparation environments and culinary operations."
            align="center"
            accentColor="orange"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {APPLICATIONS.slice(0, 3).map((app) => (
              <ApplicationCard key={app.id} application={app} showImage={true} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/applications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 transition-colors shadow-2xs"
            >
              <span>View All 5 Target Applications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY SK POWER COOK */}
      <WhyUs />

      {/* 7. HOW WE WORK (PROCESS) */}
      <Process />

      {/* 8. ENQUIRY CTA */}
      <QuoteCTA onRequestQuote={() => openQuoteModal()} />

      {/* 9. MAXWELL GROUP / GROUP BRANDS */}
      <GroupBrands />
    </>
  );
}
