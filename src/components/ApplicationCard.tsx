import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, ChefHat, Building2, Factory, Hotel, ArrowRight, Check } from "lucide-react";
import { Application } from "@/data/applications";

interface ApplicationCardProps {
  application: Application;
  showImage?: boolean;
}

export default function ApplicationCard({ application, showImage = false }: ApplicationCardProps) {
  const getIcon = () => {
    switch (application.iconName) {
      case "Utensils":
        return <Utensils className="w-5 h-5 text-orange-600" />;
      case "ChefHat":
        return <ChefHat className="w-5 h-5 text-orange-600" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-orange-600" />;
      case "Factory":
        return <Factory className="w-5 h-5 text-orange-600" />;
      case "Hotel":
        return <Hotel className="w-5 h-5 text-orange-600" />;
      default:
        return <Utensils className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-slate-300">
      {showImage && application.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={application.image}
            alt={application.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </div>
      )}

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-3.5 mb-3.5">
            <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 shrink-0">
              {getIcon()}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              {application.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {application.shortDescription}
          </p>

          {/* Application Mixing Use Cases */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Typical Mixing Scope:
            </p>
            {application.mixingUseCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Contact for Application Enquiry */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link
            href={`/contact?application=${encodeURIComponent(application.title)}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Discuss Equipment for this Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
