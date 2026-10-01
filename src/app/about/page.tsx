import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Factory, Wrench, Layers, Users } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import GroupBrands from "@/components/GroupBrands";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata = constructMetadata({
  title: "About SK Power Cook Machinery | Commercial Mixing Equipment",
  description:
    "Learn about SK Power Cook Machinery, a specialized Maxwell Group brand dedicated to professional commercial mixing machinery for professional food preparation environments.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span>A Maxwell Group Enterprise</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              About SK Power Cook Machinery
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A specialized manufacturer and supplier of commercial mixing machinery, engineered for demanding professional food preparation environments.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Company Introduction & 2. Our Focus */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-800">
                <span>01. Organization Profile</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Focused on Commercial Food Mixing Solutions
              </h2>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  SK Power Cook Machinery focuses on commercial mixing machinery and professional food preparation equipment. Rather than attempting to serve every category of generic industrial manufacturing, our engineering and supply operations are deliberately centered on commercial culinary mixing machinery.
                </p>
                <p>
                  Operating as part of the broader Maxwell Group ecosystem, SK Power Cook Machinery complements group capabilities in commercial kitchen solutions and induction cooking technology by providing dedicated, heavy-duty mixing machinery for commercial kitchens, catering operations, and central food commissaries.
                </p>
                <p>
                  Our equipment is designed around practical culinary realities: repeatable texture, thorough ingredient agitation, hygienic maintenance, and reliable mechanical construction built for daily continuous operational shifts.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  Commercial Culinary Focus
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  Enquiry-Driven B2B Model
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  Collaborative Group Support
                </span>
              </div>
            </div>

            {/* Right Media Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 p-3 shadow-lg">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src="/images/sk_power_cook_machinery.jpg"
                    alt="SK Power Cook Commercial Food Processing Machinery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Engineering Benchmark
                    </p>
                    <p className="text-sm font-bold">
                      Commercial Mixing & Thermal Agitation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Approach & 4. Quality & Reliability */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGINEERING PHILOSOPHY"
            title="Practical Engineering for Commercial Duty"
            description="Our manufacturing and development approach prioritizes mechanical dependability, operator usability, and repeatable kitchen outcomes."
            align="center"
            accentColor="orange"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xs space-y-3">
              <div className="p-3 w-fit rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">
                Practical Mechanics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We avoid unnecessary complexity. Our machines use robust mechanical drives, durable gearings, and accessible servicing points that commercial kitchen technicians can maintain with ease.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xs space-y-3">
              <div className="p-3 w-fit rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">
                Food-Grade Construction
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Vessels and agitation tools are fabricated for rigorous food hygiene, resisting corrosion from recipe ingredients and facilitating routine end-of-shift washdowns.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xs space-y-3">
              <div className="p-3 w-fit rounded-xl bg-slate-100 border border-slate-200 text-slate-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">
                Quality & Shift Reliability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Commercial kitchens operate on strict schedules. Our machines are built to endure repetitive daily batches without performance fade or thermal agitation breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Maxwell Group Connection */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs mb-4">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Maxwell Group Ecosystem</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                The Maxwell Group Heritage
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                SK Power Cook Machinery benefits from the unified infrastructure, technical design standards, and commercial presence of Maxwell Group.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Alongside sister enterprises <span className="font-semibold text-slate-900">Vector Food Equipments</span> (commercial kitchen planning, fabrication, and turnkey equipment) and <span className="font-semibold text-slate-900">Maxwell Induction</span> (commercial induction technology), SK Power Cook Machinery delivers specialized mixing equipment backed by nationwide coordination.
                </p>
                <p>
                  This group integration ensures that our clients receive comprehensive guidance—from kitchen architectural utility planning to post-commissioning maintenance.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors"
                >
                  <span>Connect with Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  <span>Explore Mixing Machines</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Brands Showcase */}
      <GroupBrands />

      {/* CTA */}
      <QuoteCTA />
    </>
  );
}
