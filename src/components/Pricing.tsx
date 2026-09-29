"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { MagneticButton } from "./MagneticButton";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  const isQuarterly = billingCycle === "quarterly";

  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header and Billing Switcher */}
        <MotionReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full">
                  [05] Pricing
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Built to scale
              </h2>
              <p className="text-base text-neutral-400 leading-relaxed font-light">
                Choose the engagement model that works for your business. Start small and grow with confidence, or jump straight into transformative projects. Transparent terms with zero surprises.
              </p>
            </div>

            {/* Billing Cycle Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  !isQuarterly
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  isQuarterly
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>Quarterly</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  -15%
                </span>
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Pricing Tiers 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Tier 1: Growth */}
          <MotionReveal variant="fade-up" delay={100} className="h-full">
            <div
              data-cursor="hover"
              className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-500 h-full shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    Plan // 01
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                <p className="text-xs text-neutral-400 mb-8 min-h-[32px] font-light">
                  Perfect for growing businesses with steady design and iteration needs.
                </p>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                      {isQuarterly ? "$6,375" : "$7,500"}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / month
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono block mt-1">
                    Billed {billingCycle} • Pause or cancel anytime
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-10 text-xs text-neutral-300 font-light">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>One active request at a time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Average 48-hour delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Senior designers only (no juniors)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Unlimited revisions & brand assets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct Slack / Figma communication</span>
                  </li>
                </ul>
              </div>

              <MagneticButton className="w-full">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/[0.1] text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>
          </MotionReveal>

          {/* Tier 2: Scale (Featured) */}
          <MotionReveal variant="fade-up" delay={200} className="h-full">
            <div
              data-cursor="hover"
              className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border-2 border-white/20 relative flex flex-col justify-between hover:border-white/40 transition-all duration-500 shadow-2xl h-full"
            >
              <div className="absolute -top-3.5 right-8 px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                Popular
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    Plan // 02
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
                <p className="text-xs text-neutral-400 mb-8 min-h-[32px] font-light">
                  For teams with high creative velocity needing parallel execution.
                </p>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                      {isQuarterly ? "$10,625" : "$12,500"}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / month
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono block mt-1">
                    Billed {billingCycle} • Priority sprint scheduling
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-10 text-xs text-neutral-200 font-light">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium text-white">Two active requests in parallel</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24–48 hour turnaround on most tasks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated creative lead + full support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Weekly strategic alignment calls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Web & Framer production included</span>
                  </li>
                </ul>
              </div>

              <MagneticButton className="w-full">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-bold text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Choose Scale</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>
          </MotionReveal>

          {/* Tier 3: Custom Project */}
          <MotionReveal variant="fade-up" delay={300} className="h-full">
            <div
              data-cursor="hover"
              className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-500 h-full shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    Plan // 03
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Custom Project</h3>
                <p className="text-xs text-neutral-400 mb-8 min-h-[32px] font-light">
                  Clear scope, fixed timeline, and guaranteed outcomes for single projects.
                </p>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                      $10,000+
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono block mt-1">
                    Fixed scope &amp; milestone delivery
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-10 text-xs text-neutral-300 font-light">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom scope &amp; fixed timeline (2–8 weeks)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated multidisciplinary team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complete source files &amp; design systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full intellectual property ownership</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>30-day post-launch warranty &amp; support</span>
                  </li>
                </ul>
              </div>

              <MagneticButton className="w-full">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/[0.1] text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Get Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>
          </MotionReveal>
        </div>

        {/* Project Manager Advisory Note */}
        <MotionReveal variant="fade-up" delay={200}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                <Image
                  src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                  alt="Sarah Park"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">Sarah Park</h4>
                  <span className="text-[11px] font-mono text-neutral-400">
                    — Project manager
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 max-w-xl font-light">
                  Tell us about your design requirements, team size, and project volume. We&apos;ll help you choose the right model and get you started within 3–5 days.
                </p>
              </div>
            </div>

            <MagneticButton>
              <Link
                href="/contact"
                className="shrink-0 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-white border border-white/[0.1] transition-all cursor-pointer"
              >
                Speak with Sarah →
              </Link>
            </MagneticButton>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
