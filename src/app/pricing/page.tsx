"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";
import { ArrowUpRight, Check } from "@/components/icons";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-16 sm:pt-24">
        {/* Software Development Engagements (Preserved Exactly) */}
        <div className="relative">
          <MotionReveal delay={30} variant="fade-up">
            <Pricing />
          </MotionReveal>
        </div>

        {/* Dedicated Growth & Performance Marketing Pricing & Engagement Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#060608]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={40} variant="fade-up">
              <div className="max-w-3xl mb-12">
                <div className="mb-4">
                  <span className="section-label">
                    [Growth &amp; Marketing Engagements]
                  </span>
                </div>
                <ScrollLinkedText
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4"
                  text="Performance Marketing & Ad Management"
                  highlightWords={["Performance", "Marketing", "Ad", "Management"]}
                  start="top 90%"
                  end="top 45%"
                  scrub={0.5}
                />
                <ScrollLinkedText
                  as="p"
                  className="text-base text-[#b8b8b8] leading-relaxed font-sans"
                  text="Unlike software development sprints with fixed design and engineering hours, our performance marketing and growth services are custom-scoped around your monthly ad spend volume, target acquisition velocity, and required channel mix."
                  highlightWords={["custom-scoped", "monthly", "ad", "spend", "acquisition", "velocity"]}
                  start="top 90%"
                  end="top 50%"
                  scrub={0.5}
                />
              </div>
            </MotionReveal>

            {/* Growth Engagement Distinguishing Card */}
            <MotionReveal delay={80} variant="fade-up">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c0e] border border-white/15 relative overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono">
                      <span>✓ Tailored Media &amp; Campaign Engagements</span>
                    </div>

                    <ScrollLinkedText
                      as="h3"
                      className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.03em]"
                      text="Custom Growth Retainers & Channel Management"
                      highlightWords={["Custom", "Growth", "Retainers", "Channel", "Management"]}
                      start="top 90%"
                      end="top 50%"
                      scrub={0.5}
                    />

                    <p className="text-sm text-[#b8b8b8] leading-relaxed font-sans">
                      Whether you are launching initial Google Ads search campaigns, scaling Meta Ads creative velocity, or optimizing full-funnel customer acquisition, we structure our growth advisory to align directly with your commercial milestones.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start gap-2.5 text-xs text-[#b8b8b8] font-sans">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>Google Search &amp; PMax Campaign Management</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#b8b8b8] font-sans">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>Meta (Instagram/FB) Creative Testing Sprints</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#b8b8b8] font-sans">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>Server-Side Conversions API (CAPI) Integration</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#b8b8b8] font-sans">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>Next.js High-Speed Landing Page CRO</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#b8b8b8] font-sans">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>Multi-Touch Attribution &amp; Live Reporting Dashboards</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#b8b8b8] font-sans">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>Zero Lock-In: Transparent Monthly Retainer Terms</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                        Engagement Process
                      </span>
                      <h4 className="text-lg font-display font-semibold text-white mb-2">
                        Account &amp; Media Plan Audit
                      </h4>
                      <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans">
                        We start with a thorough review of your existing ad accounts, unit economics, conversion tracking, and landing page latency. From there, we formulate a custom proposal with clear milestones.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <Link
                        href="/contact?service=growth"
                        className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-display font-semibold tracking-[-0.02em] text-center transition-all flex items-center justify-between cursor-pointer shadow-md group"
                      >
                        <span>Request Growth Consultation</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>

                      <Link
                        href="/growth"
                        className="w-full py-3 px-5 rounded-xl border border-white/15 hover:border-white/30 text-[#b8b8b8] hover:text-white text-xs font-display font-medium tracking-[-0.02em] text-center transition-all block"
                      >
                        View Interactive Growth Model
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

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
