import React from "react";
import { WHY_CHOOSE_US } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERED DEPENDABILITY"
          title="Why Choose SK Power Cook Machinery"
          description="Built on practical engineering, focused product specialization, and the collaborative strength of the Maxwell Group ecosystem."
          align="center"
          accentColor="orange"
        />

        {/* 5 Clean B2B Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.number}
              className={`bg-slate-50/80 rounded-2xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black font-mono text-orange-600">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Core Principle
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-950 tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                <span>Verified Commercial Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
