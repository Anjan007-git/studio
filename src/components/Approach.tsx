"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { MagneticButton } from "./MagneticButton";

export function Approach() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alex@trifectatrends.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="approach" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Tag */}
        <MotionReveal variant="fade-up">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              [Our Approach]
            </span>
          </div>
        </MotionReveal>

        {/* Massive Two-Tone Manifesto Headline */}
        <MotionReveal variant="clip-up" duration={900}>
          <div className="max-w-6xl mb-20 sm:mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.18]">
              <span className="text-[#888888]">
                Traditional agencies perfected the art of the pitch.{" "}
              </span>
              <strong className="text-white font-bold">
                We perfected the art of the work.{" "}
              </strong>
              <span className="text-[#888888]">When you need </span>
              <strong className="text-white font-bold">
                design that moves at the speed of your ambition
              </strong>
              <span className="text-[#888888]">
                , you need a different kind of studio.
              </span>
            </h2>
          </div>
        </MotionReveal>

        {/* 2-Column Layout: Alex West Card & Detailed Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dedicated Alex West Portrait Card */}
          <div className="lg:col-span-4 flex justify-start">
            <MotionReveal variant="fade-up" delay={150} className="w-full max-w-[340px]">
              <div
                data-cursor="hover"
                className="w-full rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col justify-between group hover:border-white/20 transition-all duration-500"
              >
                <div>
                  {/* Email Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? "email copied" : "alex@trifectatrends.com"}
                    </button>
                    <a
                      href="mailto:alex@trifectatrends.com"
                      aria-label="Email Alex West"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Image Frame with Mask & Zoom */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-5">
                    <Image
                      src="/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg"
                      alt="Alex West - Founder & Creative Director"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Founder Bio */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mb-5">
                    With over 15 years in digital design, Alex founded TRIFECTA TRENDS to create a studio where craft comes first. He believes great design happens through process, not heroics.
                  </p>
                </div>

                {/* Founder Meta */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Alex West</h3>
                    <p className="text-xs font-mono text-neutral-500 mt-0.5">
                      Founder &amp; Creative Director
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">TRIFECTA TRENDS©</span>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Quotes & Two Sub-Columns */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-10">
            {/* Big Opening Quote */}
            <MotionReveal variant="fade-up" delay={200}>
              <div>
                <span className="text-6xl sm:text-7xl text-neutral-500 font-serif leading-none block mb-2">
                  “
                </span>
                <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed tracking-tight">
                  After 15 years in traditional agencies, I saw the same problems
                  repeatedly. Talented designers spending more time in meetings than
                  creating. Clients paying for process instead of progress. Great
                  ideas dying in revision purgatory.
                </p>
              </div>
            </MotionReveal>

            {/* Two Sub-Columns for Philosophy Details */}
            <MotionReveal variant="fade-up" delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 text-sm text-neutral-400 leading-relaxed font-light">
                <div>
                  <p>
                    So I built TRIFECTA TRENDS differently. No endless meetings, no office
                    politics, no pitches that promise everything. Just talented
                    designers doing what they do best.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    We create design that actually solves problems. We&apos;re
                    obsessive about the details because that&apos;s what our
                    clients pay us for. To care as much as they do.
                  </p>
                  <p className="text-neutral-200 font-medium font-sans">
                    That&apos;s the TRIFECTA TRENDS way. Simple, but not easy.
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Link to /studio with Magnetic Pull */}
            <MotionReveal variant="fade-up" delay={350}>
              <div className="pt-4">
                <MagneticButton>
                  <Link
                    href="/studio"
                    className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-neutral-300 transition-colors group cursor-pointer"
                  >
                    <span>The studio</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
