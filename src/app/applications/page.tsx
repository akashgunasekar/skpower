import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ApplicationCard from "@/components/ApplicationCard";
import { APPLICATIONS } from "@/data/applications";
import GroupBrands from "@/components/GroupBrands";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata = constructMetadata({
  title: "Commercial Food Processing Machinery Applications | SK Power Cook Machinery",
  description:
    "Explore practical commercial applications for SK Power Cook food processing machinery, including commercial kitchens, food preparation units, catering operations, and professional culinary production.",
  canonicalPath: "/applications",
});

export default function ApplicationsPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Applications", href: "/applications" },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span>Target Commercial Environments</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Commercial Food Processing Machinery Applications
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Purpose-engineered food processing machinery tailored for professional food preparation environments, centralized kitchens, and commercial culinary operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Applications Grid: Strictly the 5 relevant categories */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHERE OUR MACHINES OPERATE"
            title="Suitable Food Preparation Environments"
            description="Our machines are focused on professional culinary and food preparation workflows. We do not manufacture for pharmaceutical, chemical, or heavy industrial non-food sectors."
            align="center"
            accentColor="orange"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {APPLICATIONS.map((app) => (
              <ApplicationCard key={app.id} application={app} showImage={true} />
            ))}
          </div>

          {/* Operational Boundaries Notice */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  Focus on Food Preparation Standards
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  SK Power Cook Machinery concentrates solely on commercial food preparation equipment. We ensure each machine meets the hygiene, contact-safety, and mechanical demands of commercial kitchens and food-processing businesses.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    <span>Check suitability for your recipe or facility layout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Brands */}
      <GroupBrands />

      {/* Quote CTA */}
      <QuoteCTA />
    </>
  );
}
