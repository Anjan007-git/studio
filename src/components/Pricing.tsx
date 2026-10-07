"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function Pricing() {
  const [growthCycle, setGrowthCycle] = useState<"monthly" | "quarterly">("monthly");
  const [scaleCycle, setScaleCycle] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="mb-4">
            <span className="section-label">
              [05] Pricing
            </span>
          </div>
          <h2 className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6">
            Built to scale
          </h2>
          <p className="text-base text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em]">
            Choose the engagement model that works for your business. Start small and grow with confidence, or jump straight into transformative projects. Transparent terms with zero surprises.
          </p>
        </div>

        {/* Pricing Tiers 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Growth */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.04em] mb-2">Growth</h3>
              <p className="text-xs text-[#b8b8b8] mb-6 font-sans font-normal tracking-[-0.01em]">
                Perfect for growing businesses with steady design needs.
              </p>

              {/* Segmented Pill Switch */}
              <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-white/10 mb-6">
                <button
                  onClick={() => setGrowthCycle("monthly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-display transition-all cursor-pointer ${
                    growthCycle === "monthly"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-[#b8b8b8] hover:text-white font-medium"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setGrowthCycle("quarterly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-display transition-all cursor-pointer ${
                    growthCycle === "quarterly"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-[#b8b8b8] hover:text-white font-medium"
                  }`}
                >
                  Quarterly (-10%)
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em]">
                    {growthCycle === "quarterly" ? "$6,750" : "$7,500"}
                  </span>
                  <span className="text-xs text-[#b8b8b8] font-sans font-normal">
                    / month
                  </span>
                </div>
                <span className="text-xs text-[#848484] font-sans block mt-1">
                  For ongoing requests. Pause or cancel anytime.
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white hover:bg-white hover:text-black text-xs font-display font-semibold tracking-[-0.02em] text-center transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>Start Now</span>
                  <span className="text-sm group-hover:rotate-90 transition-transform font-mono">+</span>
                </Link>
              </div>

              {/* Features List */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-display font-semibold text-white block mb-4 tracking-[-0.02em]">
                  What&apos;s included.
                </span>
                <ul className="space-y-3 text-xs text-[#b8b8b8] font-sans font-normal tracking-[-0.01em]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>45 hours of dedicated design time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Two active projects at a time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Twice-weekly syncs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Unused hours roll over (up to 10)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>15% discount on additional projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Scale (Popular) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#1e1e1e] border-2 border-white/30 relative flex flex-col justify-between hover:border-white/50 transition-all duration-300 shadow-2xl">
            <div className="absolute top-7 right-7 px-3 py-1 rounded-full bg-white text-black text-[11px] font-display font-semibold tracking-[-0.02em] shadow-sm">
              Popular
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.04em] mb-2">Scale</h3>
              <p className="text-xs text-[#b8b8b8] mb-6 font-sans font-normal tracking-[-0.01em]">
                For teams that need to move fast and ship often.
              </p>

              {/* Segmented Pill Switch */}
              <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-white/10 mb-6">
                <button
                  onClick={() => setScaleCycle("monthly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-display transition-all cursor-pointer ${
                    scaleCycle === "monthly"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-[#b8b8b8] hover:text-white font-medium"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setScaleCycle("quarterly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-display transition-all cursor-pointer ${
                    scaleCycle === "quarterly"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-[#b8b8b8] hover:text-white font-medium"
                  }`}
                >
                  Quarterly (-10%)
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em]">
                    {scaleCycle === "quarterly" ? "$13,500" : "$15,000"}
                  </span>
                  <span className="text-xs text-[#b8b8b8] font-sans font-normal">
                    / month
                  </span>
                </div>
                <span className="text-xs text-[#848484] font-sans block mt-1">
                  For ongoing requests. Pause or cancel anytime.
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-display font-semibold tracking-[-0.02em] text-center transition-all flex items-center justify-between cursor-pointer shadow-md group"
                >
                  <span>Start Now</span>
                  <span className="text-sm group-hover:rotate-90 transition-transform font-mono">+</span>
                </Link>
              </div>

              {/* Features List */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-display font-semibold text-white block mb-4 tracking-[-0.02em]">
                  What&apos;s included.
                </span>
                <ul className="space-y-3 text-xs text-[#b8b8b8] font-sans font-normal tracking-[-0.01em]">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>100 hours of dedicated design time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>Unlimited active projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>Daily Slack communication &amp; syncs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>12-hour response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>Unused hours roll over (up to 25)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>20% discount on additional custom work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-display font-medium">+</span>
                    <span>Dedicated Principal Creative Director</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Project */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.04em]">Custom Project</h3>
                <span className="text-[11px] font-display font-semibold tracking-[-0.02em] text-[#b8b8b8] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  Tailored
                </span>
              </div>
              <p className="text-xs text-[#b8b8b8] mb-6 font-sans font-normal tracking-[-0.01em]">
                For specific, high-stakes initiatives that need focused attention.
              </p>

              {/* Price */}
              <div className="mb-6 pt-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em]">
                    Starts at $10k
                  </span>
                </div>
                <span className="text-xs text-[#848484] font-sans block mt-1">
                  Fixed scope, milestone-based pricing.
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white hover:bg-white hover:text-black text-xs font-display font-semibold tracking-[-0.02em] text-center transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>Book Scoping Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Advisory Portrait Callout */}
              <div className="p-4 rounded-2xl bg-neutral-900 border border-white/5 mb-6 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg"
                    alt="Creative Direction Advisory"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] text-[#b8b8b8] leading-tight font-sans font-normal">
                  Talk directly with a studio principal, not a salesperson. We scope in 48h.
                </p>
              </div>

              {/* Features List */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-display font-semibold text-white block mb-4 tracking-[-0.02em]">
                  What&apos;s included.
                </span>
                <ul className="space-y-3 text-xs text-[#b8b8b8] font-sans font-normal tracking-[-0.01em]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Full brand or platform design sprints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Dedicated interactive engineering &amp; code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Design token system &amp; Figma library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>Full intellectual property ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#848484] font-display font-medium">+</span>
                    <span>30-day post-launch optimization support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
