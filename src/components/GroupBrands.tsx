import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { GROUP_BRANDS } from "@/data/site";

export default function GroupBrands() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span>Maxwell Group Ecosystem</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Part of Maxwell Group
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            SK Power Cook Machinery is part of the Maxwell Group, alongside specialized brands serving commercial kitchen and equipment requirements.
          </p>

          <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 tracking-wide uppercase">
            Specialized Brands · Shared Engineering Heritage · One Group
          </p>
        </div>

        {/* 3 Brand Cards Grid: Displaying all three brands in original identities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {GROUP_BRANDS.map((brand) => {
            const isCurrent = brand.isCurrentBrand;

            return (
              <div
                key={brand.id}
                className={`relative bg-white rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-lg ${
                  isCurrent
                    ? "border-orange-400 ring-2 ring-orange-100 shadow-sm"
                    : "border-slate-200"
                } ${brand.accentHover}`}
              >
                {/* Visual Highlight indicator for current brand */}
                {isCurrent && (
                  <div className="absolute -top-3 left-6 sm:left-8 bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                    Current Website
                  </div>
                )}

                <div>
                  {/* Category Badge & Active Status */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${brand.badgeStyle}`}
                    >
                      {brand.badgeText}
                    </span>

                    {isCurrent && (
                      <span className="text-xs font-semibold text-orange-600 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Active Portal</span>
                      </span>
                    )}
                  </div>

                  {/* Clean White Logo Container (Preserves original brand colors without alterations) */}
                  <div className="h-24 sm:h-28 w-full bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-center p-4 mb-6">
                    <div className="relative h-14 w-full max-w-[220px]">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        fill
                        sizes="(max-width: 1024px) 80vw, 30vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Brand Typography */}
                  <h3 className="text-lg font-extrabold text-slate-950 tracking-tight">
                    {brand.name}
                  </h3>

                  <p className="text-xs font-bold text-slate-700 mt-1">
                    &ldquo;{brand.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                    {brand.description}
                  </p>
                </div>

                {/* Card CTA Footer */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  {brand.isExternal ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-98 ${brand.buttonStyle}`}
                    >
                      <span>{brand.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={brand.url}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-98 ${brand.buttonStyle}`}
                    >
                      <span>{brand.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Group Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          <p>
            Operating collaboratively under <span className="font-semibold text-slate-800">Maxwell Group</span>, each specialized enterprise maintains dedicated manufacturing standards, technical design, and pan-India after-sales infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
