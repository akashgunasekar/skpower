import React from "react";
import { HOW_WE_WORK } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMERCIAL CONSULTATION PROCESS"
          title="How We Work"
          description="A straightforward, enquiry-driven process to assess your mixing needs and recommend the appropriate machinery."
          align="center"
          accentColor="orange"
        />

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {HOW_WE_WORK.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-mono font-black text-sm">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Phase 0{index + 1}</span>
                <span className="font-semibold text-slate-600">Technical B2B</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
