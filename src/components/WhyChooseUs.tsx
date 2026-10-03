"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, ArrowUpRight, Star } from "./icons";

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Staggered reveal for bento cards
      const cards = bentoRef.current?.querySelectorAll(".bento-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bentoRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Staggered reveal for 3 bottom feature columns
      const cols = featuresRef.current?.querySelectorAll(".feature-col");
      if (cols) {
        gsap.fromTo(
          cols,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
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

        {/* 4-Card Bento Grid */}
        <div
          ref={bentoRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16"
        >
          {/* Card 1: 50M+ Revenue with Timeline & Chart Visual */}
          <div className="lg:col-span-4 bento-card">
            <div className="h-full rounded-3xl bg-[#1c1c1c] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/25 transition-all duration-500 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Milestones Timeline */}
                  <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400">
                    <span className="text-neutral-500">Audit</span>
                    <span className="text-neutral-500">→</span>
                    <span className="text-neutral-500">Design</span>
                    <span className="text-neutral-500">→</span>
                    <span className="text-white font-medium">Launch</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Growth Bar Chart Simulation */}
                <div className="flex items-end gap-2 h-20 mb-8 pt-4 border-b border-white/5 pb-2">
                  {[28, 42, 36, 58, 70, 64, 88, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/10 group-hover:bg-white/20 rounded-t transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  50M +
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Revenue generated for our clients across 200+ engagements.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 & 3 Combined Middle Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 2: 3x Faster */}
            <div className="bento-card flex-1">
              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 h-full flex flex-col justify-between group hover:border-white/25 transition-all duration-500 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    Velocity
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    3x
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    Faster time-to-market compared to traditional agencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: 200+ Projects */}
            <div className="bento-card flex-1">
              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 h-full flex flex-col justify-between group hover:border-white/25 transition-all duration-500 relative overflow-hidden shadow-xl">
                {/* Wireframe globe graphic watermark */}
                <div className="absolute -right-4 -bottom-4 w-36 h-36 rounded-full border border-white/[0.06] pointer-events-none opacity-40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/[0.08] flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/[0.1]" />
                  </div>
                </div>

                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    Track Record
                  </span>
                </div>

                <div className="z-10 mt-6">
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    200 +
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    Projects shipped worldwide, helping our clients achieve their goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Dedicated Creative Partner Card */}
          <div className="lg:col-span-4 bento-card">
            <div className="h-full rounded-3xl bg-[#1c1c1c] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-white/25 transition-all duration-500 shadow-xl">
              {/* Top row: Brand & Rating */}
              <div className="flex items-center justify-between mb-4 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                  TRIFECTA TRENDS®
                </span>
                <div className="flex items-center gap-1.5 text-xs text-white">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-300">4.9 / 5</span>
                </div>
              </div>

              {/* Team Partner Photo with Zoom */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden my-4 bg-neutral-900 border border-white/5">
                <Image
                  src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                  alt="TRIFECTA TRENDS — Design Partner"
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
          </div>
        </div>

        {/* 3 Feature Columns Row */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
        >
          <div className="feature-col">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Fast to launch. <br />
              Easy to scale.
            </h3>
          </div>

          <div className="feature-col space-y-3">
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

          <div className="feature-col space-y-3">
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
      </div>
    </section>
  );
}
