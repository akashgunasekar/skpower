"use client";

import React, { useEffect } from "react";
import { X, MessageSquareQuote } from "lucide-react";
import ContactForm from "./ContactForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  productName = "Planetary Mixer Machine – Gas",
}: QuoteModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-orange-700 mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Commercial Quotation Request</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
            Request Equipment Quote
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Submit your facility requirements and our technical team will contact you with machine specifications and commercial pricing.
          </p>
        </div>

        {/* Form Body */}
        <ContactForm
          initialProduct={productName}
          onSuccess={onClose}
          isModal={true}
        />
      </div>
    </div>
  );
}
