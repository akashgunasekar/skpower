import React from "react";
import { Sparkles, FileText, CheckCircle2 } from "lucide-react";

interface ProductSchematicVisualProps {
  type: "planetary" | "colino";
  title: string;
  badge?: string;
  interactive?: boolean;
}

export default function ProductSchematicVisual({
  type,
  title,
  badge = "ENGINEERED COMMERCIAL SPECIFICATION",
}: ProductSchematicVisualProps) {
  const isPlanetary = type === "planetary";

  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-6 flex flex-col justify-between overflow-hidden group">
      {/* Background CAD / Technical Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/90 border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
          <span className={`w-1.5 h-1.5 rounded-full ${isPlanetary ? "bg-orange-600" : "bg-sky-600"}`} />
          {badge}
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          SK-{isPlanetary ? "PM-GAS" : "CM-B2B"}
        </span>
      </div>

      {/* Center Technical Schematic Graphic */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-2">
        {isPlanetary ? (
          // Technical vector schematic for Planetary Mixer - Gas
          <svg
            viewBox="0 0 240 180"
            className="w-full h-full max-h-48 text-slate-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Base platform */}
            <rect x="40" y="150" width="160" height="14" rx="2" fill="#e2e8f0" stroke="#0b2545" strokeWidth="2" />
            <line x1="50" y1="164" x2="60" y2="170" stroke="#0b2545" strokeWidth="2" />
            <line x1="190" y1="164" x2="180" y2="170" stroke="#0b2545" strokeWidth="2" />

            {/* Vertical column / main frame */}
            <path d="M140 150 V45 Q140 30 120 30 H80 Q60 30 60 45 V150" fill="#f8fafc" stroke="#0b2545" strokeWidth="2" />

            {/* Overhead planetary motor head */}
            <rect x="50" y="24" width="110" height="26" rx="4" fill="#0b2545" stroke="#0b2545" strokeWidth="2" />
            <circle cx="130" cy="37" r="6" fill="#f97316" stroke="#ea580c" />
            <line x1="55" y1="37" x2="110" y2="37" stroke="#94a3b8" strokeDasharray="3 2" />

            {/* Mixing Bowl / Vessel */}
            <path
              d="M75 90 C75 140 165 140 165 90 Z"
              fill="#ffffff"
              stroke="#0b2545"
              strokeWidth="2.5"
            />
            {/* Bowl handles */}
            <path d="M70 95 C62 95 62 110 72 110" stroke="#0b2545" strokeWidth="2" />
            <path d="M170 95 C178 95 178 110 168 110" stroke="#0b2545" strokeWidth="2" />

            {/* Gas Thermal Burner Sub-chamber */}
            <rect x="90" y="138" width="60" height="12" rx="2" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
            <path d="M98 144 C100 141 102 141 104 144" stroke="#f97316" strokeWidth="1.5" />
            <path d="M118 144 C120 141 122 141 124 144" stroke="#ea580c" strokeWidth="1.5" />
            <path d="M138 144 C140 141 142 141 144 144" stroke="#f97316" strokeWidth="1.5" />

            {/* Planetary Mixing Shaft & Agitator Blade */}
            <line x1="120" y1="50" x2="110" y2="85" stroke="#0b2545" strokeWidth="3" />
            {/* Orbital path indicator */}
            <ellipse cx="120" cy="88" rx="28" ry="8" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Beater wire/paddle tool */}
            <path
              d="M105 85 C95 100 100 120 110 125 C120 120 125 100 115 85 Z"
              fill="rgba(2, 132, 199, 0.08)"
              stroke="#0284c7"
              strokeWidth="2"
            />

            {/* Rotation arrows */}
            <path d="M142 84 L146 88 L142 92" stroke="#ea580c" strokeWidth="1.5" fill="none" />
            <path d="M98 92 L94 88 L98 84" stroke="#0284c7" strokeWidth="1.5" fill="none" />
          </svg>
        ) : (
          // Technical vector schematic for Colino Mixer Machine
          <svg
            viewBox="0 0 240 180"
            className="w-full h-full max-h-48 text-slate-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Heavy-duty Base Frame */}
            <rect x="35" y="146" width="170" height="18" rx="2" fill="#0b2545" stroke="#0b2545" strokeWidth="2" />
            <circle cx="55" cy="155" r="3" fill="#cbd5e1" />
            <circle cx="185" cy="155" r="3" fill="#cbd5e1" />

            {/* Mixer Chamber Body */}
            <rect x="55" y="60" width="130" height="86" rx="6" fill="#ffffff" stroke="#0b2545" strokeWidth="2.5" />
            
            {/* Commercial Agitator Central Axis */}
            <line x1="60" y1="102" x2="180" y2="102" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="4 2" />
            
            {/* Agitation Blades / Colino Mixer Paddles */}
            <path d="M85 80 L95 102 L85 124" stroke="#0284c7" strokeWidth="3" />
            <path d="M120 124 L130 102 L120 80" stroke="#ea580c" strokeWidth="3" />
            <path d="M155 80 L165 102 L155 124" stroke="#0284c7" strokeWidth="3" />

            {/* Top Feeding & Inspection Hatch */}
            <path d="M75 60 L85 38 H155 L165 60 Z" fill="#f8fafc" stroke="#0b2545" strokeWidth="2" />
            <rect x="100" y="32" width="40" height="6" rx="2" fill="#0b2545" stroke="#0b2545" />

            {/* Motor Drive Enclosure */}
            <rect x="185" y="75" width="28" height="54" rx="3" fill="#f1f5f9" stroke="#0b2545" strokeWidth="2" />
            <line x1="188" y1="86" x2="208" y2="86" stroke="#94a3b8" />
            <line x1="188" y1="94" x2="208" y2="94" stroke="#94a3b8" />
            <line x1="188" y1="102" x2="208" y2="102" stroke="#94a3b8" />
            <circle cx="199" cy="116" r="4" fill="#0284c7" />

            {/* Safety Grid Marker */}
            <line x1="90" y1="46" x2="150" y2="46" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        )}
      </div>

      {/* Bottom Technical Status Indicator */}
      <div className="relative z-10 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
        <span className="text-slate-600 font-semibold text-[11px] truncate mr-2">
          {title}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-700 shrink-0">
          <CheckCircle2 className="w-3 h-3 text-orange-600" />
          <span>B2B Commercial Unit</span>
        </span>
      </div>
    </div>
  );
}
