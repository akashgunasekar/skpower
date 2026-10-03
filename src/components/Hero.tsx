"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquareQuote, ShieldCheck, Flame, Cpu, CheckCircle } from "lucide-react";

interface HeroProps {
  onRequestQuote?: () => void;
}

export default function Hero({ onRequestQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background Subtle Industrial Blueprint Lines */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span>COMMERCIAL FOOD PROCESSING MACHINERY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Commercial Food Processing Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700">
                Professional Kitchens
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Reliable commercial food processing solution machinery designed for professional food preparation environments. Engineered for uniform batch quality, mechanical dependability, and heavy culinary workloads.
            </p>

            {/* Two Confirmed Machine Tags */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                Planetary Mixer Machine – Gas / Induction
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-sky-600" />
                Colino Mixer Machine – Gas / Induction
              </span>
            </div>

            {/* CTAs: CTA 1 "Explore Products", CTA 2 "Request a Quote" */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm active:scale-98"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {onRequestQuote ? (
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all active:scale-98 cursor-pointer"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all active:scale-98"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </Link>
              )}
            </div>

            {/* Trust Footer Indicators */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-medium">Maxwell Group Enterprise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-medium">Commercial Duty Build</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-medium">Direct B2B Supply</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visually Dominant Machinery Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Surrounding Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-100 to-white p-3 sm:p-4 border border-slate-200 shadow-xl">
                {/* Main Machine Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/sk_power_cook_machinery.jpg"
                    alt="SK Power Cook Machinery - Commercial Food Processing and Mixing Machinery"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Machine Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-600">
                        SK Power Cook Machinery
                      </span>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white">
                        Gas / Induction
                      </span>
                    </div>
                    <p className="text-sm font-bold tracking-tight">
                      Commercial Food Processing & Thermal Machinery
                    </p>
                    <p className="text-[11px] text-slate-200 mt-0.5">
                      Professional Machinery for Commercial Food Operations
                    </p>
                  </div>
                </div>

                {/* Floating Technical Badge */}
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-orange-600" />
                    <span>Engineered for Continuous Shifts</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    B2B Enquiry Model
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
