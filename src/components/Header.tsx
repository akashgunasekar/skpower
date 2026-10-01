"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Mail, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

interface HeaderProps {
  onRequestQuote?: (productName?: string) => void;
}

export default function Header({ onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (onRequestQuote) {
      e.preventDefault();
      onRequestQuote();
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="font-medium text-slate-700 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-600"></span>
              A Maxwell Group Enterprise · Commercial Mixing Machinery
            </span>
            <span className="text-slate-300">|</span>
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="hover:text-orange-600 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hover:text-orange-600 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-orange-600" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">{SITE_CONFIG.contact.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          isScrolled
            ? "py-2.5 shadow-sm border-slate-200"
            : "py-3.5 border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo: Preserving proportions */}
            <Link
              href="/"
              className="relative flex items-center gap-3 shrink-0 focus:outline-none"
              aria-label="SK Power Cook Machinery - Home"
            >
              <div className="relative h-11 w-44 sm:h-12 sm:w-52 transition-transform duration-200">
                <Image
                  src={SITE_CONFIG.logos.primary}
                  alt="SK Power Cook Machinery Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {SITE_CONFIG.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "text-orange-600 bg-orange-50 font-bold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {onRequestQuote ? (
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-orange-500"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 border-l border-slate-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="relative h-10 w-44">
                  <Image
                    src={SITE_CONFIG.logos.primary}
                    alt="SK Power Cook Machinery Logo"
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-1">
                {SITE_CONFIG.nav.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-orange-50 text-orange-700 font-bold"
                          : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              {/* Confirmed Products Quick Links */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-3">
                  Confirmed Machinery Range
                </p>
                <div className="space-y-1">
                  <Link
                    href="/products/planetary-mixer-machine-gas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50/50"
                  >
                    <span>Planetary Mixer Machine – Gas</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                  <Link
                    href="/products/colino-mixer-machine"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50/50"
                  >
                    <span>Colino Mixer Machine</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              {onRequestQuote ? (
                <button
                  type="button"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleQuoteClick(e);
                  }}
                  className="w-full block text-center py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20"
                >
                  Request a Quote
                </button>
              ) : (
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20"
                >
                  Request a Quote
                </Link>
              )}

              <div className="text-center text-xs text-slate-500">
                <p className="font-semibold text-slate-700">A Maxwell Group Enterprise</p>
                <p className="text-[11px] mt-0.5">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
