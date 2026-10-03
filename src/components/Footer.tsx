import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, ChevronRight } from "lucide-react";
import { SITE_CONFIG, GROUP_BRANDS } from "@/data/site";
import { PRODUCTS } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative h-12 w-52">
              <Image
                src={SITE_CONFIG.logos.primary}
                alt="SK Power Cook Machinery Logo"
                fill
                sizes="220px"
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pr-4">
              SK Power Cook Machinery focuses on commercial food processing solution machinery engineered for professional food preparation environments, catering commissaries, and commercial kitchens.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Part of Maxwell Group</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-orange-600 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Mixing Machinery (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Food Processing Machinery
            </h4>
            <ul className="space-y-3 text-sm">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-slate-600 hover:text-orange-600 transition-colors block group"
                  >
                    <span className="font-medium text-slate-800 group-hover:text-orange-600 transition-colors flex items-center justify-between">
                      <span>{prod.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" />
                    </span>
                    <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {prod.tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/products"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                <span>View Complete Machinery Range</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Col 4: Contact & Maxwell Group (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              B2B Enquiry Office
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{SITE_CONFIG.contact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href={SITE_CONFIG.contact.phoneHref}
                  className="hover:text-orange-600 transition-colors font-medium text-slate-800"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-orange-600 transition-colors text-slate-800"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white border border-slate-300 text-slate-800 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-all shadow-2xs"
              >
                <span>Submit Technical Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Group Brands Bar */}
      <div className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Maxwell Group Brands:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {GROUP_BRANDS.map((brand) => (
                <div key={brand.id} className="flex items-center gap-2">
                  {brand.isExternal ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-700 hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      <span>{brand.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <Link
                      href={brand.url}
                      className="text-xs font-bold text-orange-600 flex items-center gap-1"
                    >
                      <span>{brand.name} (Active)</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Attribution */}
      <div className="border-t border-slate-200 bg-slate-100/80 py-5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {currentYear} SK Power Cook Machinery. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium text-slate-600">
            <span>Part of</span>
            <span className="font-bold text-slate-900">Maxwell Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
