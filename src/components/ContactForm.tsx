"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageSquare, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { SITE_CONFIG } from "@/data/site";

interface ContactFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export default function ContactForm({
  initialProduct = "",
  onSuccess,
  isModal = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    productInterest: initialProduct || "Planetary Mixer Machine – Gas / Induction",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState<"whatsapp" | "email">("whatsapp");

  const [prevProduct, setPrevProduct] = useState(initialProduct);
  if (initialProduct !== prevProduct) {
    setPrevProduct(initialProduct);
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, productInterest: initialProduct }));
    }
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+() -]{7,18}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.productInterest) {
      newErrors.productInterest = "Please select a product of interest.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare message body
    const enquiryDetails = `Commercial Food Processing Machinery Enquiry:
- Name: ${formData.name}
- Company: ${formData.companyName || "Not specified"}
- Phone: ${formData.phone}
- Email: ${formData.email || "Not specified"}
- Location: ${formData.location || "Not specified"}
- Product Interest: ${formData.productInterest}
- Message / Scope: ${formData.message || "Requesting technical specifications and quote."}`;

    if (submissionType === "whatsapp") {
      const waDigits = SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, "");
      const waUrl = `https://wa.me/${waDigits}?text=${encodeURIComponent(enquiryDetails)}`;
      window.open(waUrl, "_blank");
    } else {
      const mailtoUrl = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
        `Enquiry: ${formData.productInterest} - ${formData.name}`
      )}&body=${encodeURIComponent(enquiryDetails)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
    if (onSuccess) {
      setTimeout(onSuccess, 1500);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      companyName: "",
      phone: "",
      email: "",
      location: "",
      productInterest: "Planetary Mixer Machine – Gas / Induction",
      message: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4">
        <div className="w-14 h-14 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-950">
          Enquiry Initiated Successfully
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your enquiry for <span className="font-bold text-slate-900">{formData.productInterest}</span> has been formatted and opened via your chosen channel. Our technical team will review your application requirements.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Name <span className="text-orange-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-colors ${
              errors.name ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-orange-500"
            }`}
            required
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Company / Kitchen Name
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Annapoorna Central Commissary"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-colors"
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-orange-600">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-colors ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-orange-500"
            }`}
            required
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. kitchen@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-colors ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-orange-500"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Location & Product Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            City / Location
          </label>
          <input
            id="contact-location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Chennai / Bengaluru / Hyderabad"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-product" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Product Interest <span className="text-orange-600">*</span>
          </label>
          <select
            id="contact-product"
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 text-sm text-slate-900 bg-white transition-colors cursor-pointer"
            required
          >
            <option value="Planetary Mixer Machine – Gas / Induction">Planetary Mixer Machine – Gas / Induction</option>
            <option value="Colino Mixer Machine – Gas / Induction">Colino Mixer Machine – Gas / Induction</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
          {errors.productInterest && (
            <p className="mt-1 text-xs text-red-600">{errors.productInterest}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Requirement Details / Message
        </label>
        <textarea
          id="contact-message"
          rows={isModal ? 3 : 4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your food preparation application, desired capacity or kitchen setup..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-colors resize-none"
        />
      </div>

      {/* Channel selector */}
      <div className="pt-1">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Preferred Enquiry Submission Channel:
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSubmissionType("whatsapp")}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              submissionType === "whatsapp"
                ? "bg-green-50 border-green-500 text-green-800 shadow-2xs"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-current" />
            <span>Direct WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => setSubmissionType("email")}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              submissionType === "email"
                ? "bg-orange-50 border-orange-500 text-orange-800 shadow-2xs"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Mail className="w-4 h-4 text-orange-600" />
            <span>Official Email</span>
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Request a Quote</span>
        </button>

        <p className="mt-2.5 text-[11px] text-center text-slate-500">
          Direct B2B enquiry • No online payment or cart required • Maxwell Group Network
        </p>
      </div>
    </form>
  );
}
