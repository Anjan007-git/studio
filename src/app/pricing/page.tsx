"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { MotionReveal } from "@/components/MotionReveal";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-16 sm:pt-24">
        <MotionReveal delay={30} variant="fade-up">
          <Pricing />
        </MotionReveal>
        <MotionReveal delay={50} variant="fade-up">
          <Faq />
        </MotionReveal>
        <MotionReveal delay={50} variant="fade-up">
          <CtaSection />
        </MotionReveal>
      </main>
      <Footer />
    </div>
  );
}
