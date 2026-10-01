import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench, Shield, Layers } from "lucide-react";

export default function HomeIntro() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text: Heading and Intro Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>Company Introduction</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Built for Professional Mixing
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
              <p>
                SK Power Cook Machinery focuses on commercial mixing equipment designed for professional food preparation environments. Operating under the Maxwell Group, our purpose is to supply robust, dependable mixing solutions engineered for commercial kitchens, catering facilities, and food preparation operations.
              </p>
              <p>
                Rather than offering an unfocused catalogue, we concentrate strictly on mixing machinery designed to handle demanding culinary tasks—enabling consistent batch uniformity, operational durability, and labor-saving food processing routines.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 group"
              >
                <span>Learn more about our company and Maxwell Group</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Highlights: 3 Clean Architectural Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-100 text-orange-600 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Focused Machinery Range
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Specialized development centered on planetary and commercial mixing solutions for culinary professionals.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Commercial Kitchen Engineering
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Robust mechanics and food-grade construction intended for continuous commercial preparation shifts.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Maxwell Group Association
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Direct synergy with Maxwell Group's commercial kitchen and induction technology engineering ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
