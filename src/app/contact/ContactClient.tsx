"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const applicationParam = searchParams.get("application");

  const initialProduct = productParam
    ? productParam
    : applicationParam
    ? `General Enquiry (${applicationParam})`
    : "Planetary Mixer Machine – Gas";

  return <ContactForm initialProduct={initialProduct} />;
}
