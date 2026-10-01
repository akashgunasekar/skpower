"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  onRequestQuote?: (productName: string) => void;
}

export default function ProductGrid({ onRequestQuote }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRequestQuote={onRequestQuote}
        />
      ))}
    </div>
  );
}
