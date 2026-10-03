"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={SITE_CONFIG.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with SK Power Cook Machinery on WhatsApp at ${SITE_CONFIG.contact.whatsapp}`}
        title={`Chat on WhatsApp (${SITE_CONFIG.contact.whatsapp})`}
        className="group flex items-center gap-2.5 cursor-pointer select-none"
      >
        {/* Desktop floating pill label */}
        <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-slate-800 text-xs font-bold shadow-lg border border-slate-200/80 transition-all duration-300 group-hover:text-[#25D366] group-hover:border-emerald-300 group-hover:shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat on WhatsApp</span>
        </span>

        {/* Real Official WhatsApp Icon Floating Button */}
        <div className="relative">
          {/* Subtle pulse ring behind button */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

          {/* Main WhatsApp Circular Button */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-600/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95">
            <WhatsAppIcon className="w-7 h-7 text-white fill-current" />
          </div>
        </div>
      </a>
    </aside>
  );
}
