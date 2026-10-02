"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-16 sm:pt-24">
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
