"use client";

import React, { useState, createContext, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import QuoteModal from "./QuoteModal";

interface QuoteContextType {
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export const useQuoteModal = () => useContext(QuoteContext);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Planetary Mixer Machine – Gas / Induction");

  const openQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    }
    setModalOpen(true);
  };

  const closeQuoteModal = () => {
    setModalOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header onRequestQuote={() => openQuoteModal()} />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <QuoteModal
          isOpen={modalOpen}
          onClose={closeQuoteModal}
          productName={selectedProduct}
        />
      </div>
    </QuoteContext.Provider>
  );
}
