"use client";

import React from "react";
import Link from "next/link";
import { MessageSquareQuote, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

interface QuoteCTAProps {
  onRequestQuote?: () => void;
  title?: string;
  description?: string;
}

export default function QuoteCTA({
  onRequestQuote,
  title = "Ready to Discuss Commercial Food Processing Machinery?",
  description = "Connect with our technical team to discuss machine sizing, batch requirements, and commercial details for your kitchen operation.",
}: QuoteCTAProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          {/* Subtle Industrial Accent Lines */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-orange-400 mb-4 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>B2B Commercial Enquiry</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {onRequestQuote ? (
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </Link>
              )}

              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call: {SITE_CONFIG.contact.phone.split("/")[0].trim()}</span>
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Maxwell Group Engineering</span>
              </span>
              <span>•</span>
              <span>Enquiry-driven direct supply</span>
              <span>•</span>
              <span>Pan-India service coordination</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
