import React, { Suspense } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import GroupBrands from "@/components/GroupBrands";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SITE_CONFIG } from "@/data/site";
import ContactClient from "./ContactClient";

export const metadata = constructMetadata({
  title: "Contact SK Power Cook Machinery | Request a Quote",
  description:
    "Contact SK Power Cook Machinery for commercial food processing machinery quotes, technical sizing advice, and food preparation machinery consultation.",
  canonicalPath: "/contact",
});

export default function ContactPage() {
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
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span>B2B Technical Enquiry</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Talk to Our Team
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tell us what you need and our team can help you identify the right commercial food processing machinery for your application.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-2xs">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Enquiry Form
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
                  Request Equipment Information & Pricing
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Complete the fields below. No online payment or cart involved—our specialists follow up with technical details.
                </p>
              </div>

              <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Loading enquiry form...</div>}>
                <ContactClient />
              </Suspense>
            </div>

            {/* Right Column: Office Details & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Office Details */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>Maxwell Group Corporate Office</span>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Facility & Operations Address
                      </span>
                      <p className="text-slate-600 leading-snug">{SITE_CONFIG.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Phone Enquiries
                      </span>
                      <a
                        href={SITE_CONFIG.contact.phoneHref}
                        className="text-slate-800 hover:text-orange-600 font-semibold"
                      >
                        {SITE_CONFIG.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-slate-800 hover:text-orange-600"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Business Hours
                      </span>
                      <p className="text-slate-600">{SITE_CONFIG.contact.businessHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-green-50 border border-green-200 rounded-3xl p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-green-900">
                    Instant Messaging Channel
                  </span>
                </div>

                <h3 className="text-lg font-bold text-green-950">
                  Connect on WhatsApp
                </h3>

                <p className="text-xs sm:text-sm text-green-800 leading-relaxed font-normal">
                  Need rapid response or wish to send existing kitchen equipment photos? Contact our commercial team directly on WhatsApp.
                </p>

                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-green-600 hover:bg-green-700 text-white shadow-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Brands */}
      <GroupBrands />
    </>
  );
}
