import React from "react";
import { CheckCircle2, Info, FileSpreadsheet } from "lucide-react";
import { ProductSpecification as SpecType } from "@/data/products";

interface ProductSpecificationProps {
  specifications: SpecType[];
  productName: string;
}

export default function ProductSpecification({
  specifications,
  productName,
}: ProductSpecificationProps) {
  // Separate confirmed specs from unconfirmed / custom enquiry specs
  const confirmedSpecs = specifications.filter((s) => s.isConfirmed);
  const enquirySpecs = specifications.filter((s) => !s.isConfirmed);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-orange-600" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Technical & Engineering Profile
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-slate-500">
          Commercial B2B Specification
        </span>
      </div>

      {/* Confirmed Technical Attributes Table */}
      <div className="divide-y divide-slate-100">
        {confirmedSpecs.map((spec, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 hover:bg-slate-50/50 transition-colors text-sm"
          >
            <div className="sm:col-span-5 font-semibold text-slate-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
              <span>{spec.label}</span>
            </div>
            <div className="sm:col-span-7 font-medium text-slate-900 mt-1 sm:mt-0 flex items-center gap-1.5">
              <span>{spec.value}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 inline-block ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Structured Engineering Consultation Notice for Dimension / Capacity Sizing */}
      {enquirySpecs.length > 0 && (
        <div className="bg-orange-50/40 border-t border-orange-100 p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-950">
                Application-Specific Technical Engineering:
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                Parameters such as batch volume capacity, motor power rating, gas burner sizing, and footprint dimensions are calibrated to your kitchen&apos;s specific menu throughput, utility supply lines (LPG/PNG or 3-phase electric), and facility floor plans.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px] text-slate-600">
                {enquirySpecs.map((spec, idx) => (
                  <div key={idx} className="bg-white/80 border border-orange-200/60 rounded px-2.5 py-1.5 font-medium">
                    <span className="font-semibold text-slate-800">{spec.label}:</span>{" "}
                    <span className="text-orange-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
