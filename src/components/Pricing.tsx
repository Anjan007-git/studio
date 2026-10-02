"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "./icons";

export function Pricing() {
  const [growthCycle, setGrowthCycle] = useState<"monthly" | "quarterly">("monthly");
  const [scaleCycle, setScaleCycle] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              [05] Pricing
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Built to scale
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-light">
            Choose the engagement model that works for your business. Start small and grow with confidence, or jump straight into transformative projects. Transparent terms with zero surprises.
          </p>
        </div>

        {/* Pricing Tiers 3-Column Grid matching Desktop Frame 38 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Growth */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#161616] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Growth</h3>
              <p className="text-xs text-neutral-400 mb-6 font-light">
                Perfect for growing businesses with steady design needs.
              </p>

              {/* Segmented Pill Switch */}
              <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-white/10 mb-6">
                <button
                  onClick={() => setGrowthCycle("monthly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    growthCycle === "monthly"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setGrowthCycle("quarterly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    growthCycle === "quarterly"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Quarterly
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {growthCycle === "quarterly" ? "$6,750" : "$7,500"}
                  </span>
                  <span className="text-xs text-neutral-400 font-normal">
                    / month
                  </span>
                </div>
                <span className="text-xs text-neutral-400 block mt-1">
                  For ongoing requests.
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white hover:bg-white hover:text-black text-xs font-semibold text-center transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Start Now</span>
                  <span className="text-sm">+</span>
                </Link>
              </div>

              {/* Features List */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-normal text-white block mb-4">
                  What&apos;s included.
                </span>
                <ul className="space-y-3 text-xs text-neutral-300 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>45 hours of dedicated design time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Two active projects at a time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Twice-weekly syncs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Unused hours roll over (up to 10)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>15% discount on additional projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Scale (Popular) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#181818] border-2 border-white/25 relative flex flex-col justify-between hover:border-white/40 transition-all duration-300 shadow-2xl">
            <div className="absolute top-7 right-7 px-3 py-1 rounded-full bg-white text-black text-[11px] font-semibold tracking-wide shadow-sm">
              Popular
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Scale</h3>
              <p className="text-xs text-neutral-400 mb-6 font-light">
                For teams that need to move fast and ship often.
              </p>

              {/* Segmented Pill Switch */}
              <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-white/10 mb-6">
                <button
                  onClick={() => setScaleCycle("monthly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    scaleCycle === "monthly"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setScaleCycle("quarterly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    scaleCycle === "quarterly"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Quarterly
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {scaleCycle === "quarterly" ? "$13,500" : "$15,000"}
                  </span>
                  <span className="text-xs text-neutral-400 font-normal">
                    / month
                  </span>
                </div>
                <span className="text-xs text-neutral-400 block mt-1">
                  For ongoing requests.
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-bold text-center transition-all flex items-center justify-between cursor-pointer shadow-md"
                >
                  <span>Start Now</span>
                  <span className="text-sm">+</span>
                </Link>
              </div>

              {/* Features List */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-normal text-white block mb-4">
                  What&apos;s included.
                </span>
                <ul className="space-y-3 text-xs text-neutral-300 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>100 hours of dedicated design time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Unlimited active projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Daily syncs available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Same-day response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>Unused hours roll over (up to 20)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono">+</span>
                    <span>20% discount on additional projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Project with nested Studio Advisory card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#161616] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Custom Project</h3>
              <p className="text-xs text-neutral-400 mb-6 font-light">
                Clear scope, fixed timeline, no surprises.
              </p>

              {/* Starts at */}
              <div className="mb-6">
                <span className="text-xs text-neutral-400 block mb-1">
                  Starts at
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    $10,000
                  </span>
                </div>
              </div>

              {/* Get Quote Button */}
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white hover:bg-white hover:text-black text-xs font-semibold text-center transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Get Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Nested Advisory Card (Desktop Frame 38) */}
              <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-800 shrink-0">
                    <Image
                      src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                      alt="Studio Advisory"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Studio Advisory</h4>
                    <p className="text-[11px] text-neutral-400">Design Partnerships</p>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-300 leading-relaxed font-light">
                  Tell us about your design needs, team size, and project volume. We&apos;ll help you choose the right plan and get you started within 3-5 days.
                </p>

                {/* Slots open badge */}
                <div className="flex items-center gap-2 py-1 px-2.5 rounded-full bg-black/60 border border-white/10 text-[10px] text-white w-fit">
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2 bg-white rounded-full" />
                    <span className="w-0.5 h-2 bg-white rounded-full" />
                    <span className="w-0.5 h-2 bg-neutral-600 rounded-full" />
                    <span className="w-0.5 h-2 bg-neutral-600 rounded-full" />
                  </div>
                  <span>2 slots open March&apos;26</span>
                </div>

                {/* Book Call button */}
                <Link
                  href="/contact"
                  className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white hover:text-black text-white text-xs font-medium transition-all flex items-center justify-between"
                >
                  <span>Book a 15-Min Call</span>
                  <Calendar className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
