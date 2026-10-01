import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accentColor?: "orange" | "blue" | "navy";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accentColor = "orange",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const dotColorClass =
    accentColor === "orange"
      ? "bg-orange-600"
      : accentColor === "blue"
      ? "bg-sky-600"
      : "bg-slate-900";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-12 sm:mb-16`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 shadow-2xs ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${dotColorClass}`} />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
