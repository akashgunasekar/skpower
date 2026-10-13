import React from "react";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Home, Clock, FileCheck, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import GroupBrands from "@/components/GroupBrands";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SITE_CONFIG } from "@/data/site";

export const metadata = {
  ...constructMetadata({
    title: "Thank You for Your Enquiry | SK Power Cook Machinery",
    description: "Your commercial food processing machinery inquiry has been successfully received. Our engineering specialists will contact you shortly.",
    canonicalPath: "/thank-you",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Banner / Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Enquiry Received", href: "/thank-you" },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-green-200 text-xs font-bold uppercase tracking-wider text-green-700 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Enquiry Submitted Successfully</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Thank You for Your Enquiry
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Your equipment inquiry has been successfully received and logged into our commercial engineering system. Our technical specialists will review your application specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Confirmation Content */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Callout Box */}
          <div className="bg-gradient-to-br from-green-50/80 via-white to-slate-50 border border-green-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm ring-8 ring-green-50">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              We&apos;ve Received Your Equipment Request
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A Maxwell Group technical advisor is reviewing your food processing requirements. We will coordinate with your team to deliver sizing guidance, technical utility specs, and commercial pricing.
            </p>

            {/* Quick Status Badges */}
            <div className="mt-8 pt-8 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Status</span>
                  <span className="text-sm font-bold text-slate-900">Enquiry Confirmed</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Response Window</span>
                  <span className="text-sm font-bold text-slate-900">Within 1 Business Day</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Assurance</span>
                  <span className="text-sm font-bold text-slate-900">Maxwell Group Network</span>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next Section */}
          <div className="mt-14 space-y-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Next Steps</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-1">
                What Happens Next?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  1
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Engineering Assessment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We analyze your recipe batch volumes, food preparation profile, and facility utility lines (Gas / Commercial Induction).
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  2
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Consultation Call / WhatsApp
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our technical advisor contacts you to clarify equipment specifications, motor configurations, and vessel capacities.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  3
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Quotation & Drawing Dispatch
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Receive a detailed commercial quotation alongside layout footprint drawings and expected delivery schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Need Immediate Assistance? */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900">
                Need an Immediate Response?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                For urgent kitchen projects or immediate technical sizing, contact our commercial sales desk directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call {SITE_CONFIG.contact.phone}</span>
              </a>

              <a
                href={SITE_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation CTAs */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white transition-colors shadow-xs"
            >
              <span>Explore Food Processing Machinery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Group Brands */}
      <GroupBrands />
    </>
  );
}
