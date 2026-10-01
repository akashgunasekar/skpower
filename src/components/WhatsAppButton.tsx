"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Maxwell Group WhatsApp
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Connect directly with our commercial mixing machinery team for technical specifications and quotation queries.
          </p>

          <a
            href={SITE_CONFIG.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-green-600 hover:bg-green-700 text-white shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <a
          href={SITE_CONFIG.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 shadow-md text-xs font-bold text-slate-800 hover:text-green-700 hover:border-green-300 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Chat on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          aria-label="Chat on WhatsApp with SK Power Cook Machinery"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
