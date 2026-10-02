"use client";

import React from "react";
import Image from "next/image";
import { Zap, ArrowUpRight, Star } from "./icons";
import { MotionReveal } from "./MotionReveal";

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <MotionReveal variant="fade-up">
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                [02] Why choose us
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              We deliver more than design. We deliver momentum.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light max-w-3xl">
              Great design accelerates everything. It shortens sales cycles, increases
              conversions, and builds trust before you say a word. We&apos;re not
              just making things pretty — we&apos;re creating competitive advantages
              that compound over time.
            </p>
          </div>
        </MotionReveal>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          {/* Card 1: 50M+ Revenue with Timeline */}
          <div className="lg:col-span-4">
            <MotionReveal variant="fade-up" delay={100} className="h-full">
              <div className="h-full rounded-3xl bg-[#1c1c1c] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/30 transition-all duration-500 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  {/* Year Timeline */}
                  <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
                    <span>2016</span>
                    <span>2018</span>
                    <span>2022</span>
                    <span className="text-white font-medium">2026</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    50M +
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    Revenue generated for our clients.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Card 2 & 3 Combined Middle Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 2: 3x Faster */}
            <MotionReveal variant="fade-up" delay={200} className="flex-1">
              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 h-full flex flex-col justify-between group hover:border-white/30 transition-all duration-500 shadow-xl">
                <div className="flex items-center justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    3x
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    Faster than other agencies.
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Card 3: 200+ Projects */}
            <MotionReveal variant="fade-up" delay={250} className="flex-1">
              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 h-full flex flex-col justify-between group hover:border-white/30 transition-all duration-500 relative overflow-hidden shadow-xl">
                {/* Wireframe globe watermark / graphic */}
                <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full border border-white/[0.08] pointer-events-none opacity-40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/[0.08]" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  200 +
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Projects shipped worldwide, helping our clients achieve their goals.
                </p>
              </div>
            </MotionReveal>
          </div>

          {/* Card 4: Person Image Card - Sarah Park */}
          <div className="lg:col-span-4">
            <MotionReveal variant="fade-up" delay={300} className="h-full">
              <div
                className="h-full rounded-3xl bg-[#1c1c1c] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-white/30 transition-all duration-500 shadow-xl"
              >
                {/* Top row: Brand & Rating */}
                <div className="flex items-center justify-between mb-4 z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    TRIFECTA TRENDS®
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-white text-white" />
                      ))}
                    </div>
                    <span className="font-semibold">4.9 / 5</span>
                  </div>
                </div>

                {/* Sarah Park Photo with Zoom */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden my-4 bg-neutral-900">
                  <Image
                    src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                    alt="Sarah Park smiling"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Bottom Stat: 100+ Happy Clients */}
                <div className="z-10">
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                    100 +
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    Happy clients and counting
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* 3 Feature Columns Row */}
        <MotionReveal variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Fast to launch. <br />
                Easy to scale.
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <h4>Speed without sacrifice</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                Our streamlined process cuts through the typical agency theater
                while maintaining the craft and attention to detail your brand
                deserves.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <h4>Flexible engagement</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                Choose monthly retainers for ongoing work or project-based
                engagements for specific needs. Scale up or down as your business
                evolves.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
