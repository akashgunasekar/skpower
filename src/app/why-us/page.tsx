import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Wrench, Layers, Users, Building, Shield } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import GroupBrands from "@/components/GroupBrands";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata = constructMetadata({
  title: "Why SK Power Cook Machinery | Commercial Food Processing Machinery",
  description:
    "Discover why commercial kitchens and food preparation facilities rely on SK Power Cook Machinery. Commercial focus, practical engineering, dedicated B2B support, and Maxwell Group backing.",
  canonicalPath: "/why-us",
});

export default function WhyUsPage() {
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
                { label: "Why SK Power Cook", href: "/why-us" },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span>B2B Trust & Engineering Standard</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Why SK Power Cook Machinery
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A deliberate focus on commercial food processing solution machinery, practical engineering principles, and the collaborative strength of the Maxwell Group ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Cards Section */}
      <WhyUs />

      {/* Additional B2B Commitments */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs">
                <span>Straightforward B2B Integrity</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                No Exaggerations. Just Dependable Machinery.
              </h2>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  In the commercial equipment market, buyers are often inundated with inflated marketing claims. At SK Power Cook Machinery, we believe commercial kitchen professionals value transparency over generic superlatives.
                </p>
                <p>
                  We focus strictly on the physical durability of our mixer mechanisms, the practical suitability for culinary batches, and transparent technical consultation to ensure the machinery fits your electrical and space constraints.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors"
                >
                  <span>Discuss Your Kitchen Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                <h3 className="text-base font-bold text-slate-900">Application Accuracy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify recipe viscosity and batch frequency before recommending equipment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">Group Coordination</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless synergy with Maxwell Induction and Vector Food Equipments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <CheckCircle2 className="w-5 h-5 text-slate-900" />
                <h3 className="text-base font-bold text-slate-900">Robust Spares Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Essential mechanical wear parts maintained within the Maxwell network.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h3 className="text-base font-bold text-slate-900">Direct Consultation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Speak directly with technical personnel who understand food machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <Process />

      {/* Group Brands */}
      <GroupBrands />

      {/* Quote CTA */}
      <QuoteCTA />
    </>
  );
}
