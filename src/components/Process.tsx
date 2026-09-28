"use client";

import React from "react";
import { Clock, Zap } from "./icons";

const steps = [
  {
    step: "01",
    title: "Listen & Learn",
    description:
      "Every engagement starts with understanding. We dive deep into your business, your challenges, and where you want to go. No assumptions, just questions that matter.",
  },
  {
    step: "02",
    title: "Strategy First",
    description:
      "Before any pixels are pushed, we align on direction. Whether it's a brand identity or product redesign, we make sure we're solving the right problem.",
  },
  {
    step: "03",
    title: "Design in Sprints",
    description:
      "We work in focused cycles with regular check-ins. You'll see progress weekly, not monthly. No big reveals, no surprises—just steady momentum.",
  },
  {
    step: "04",
    title: "Refine Until Right",
    description:
      "Your feedback shapes the work. We iterate based on what's working and what isn't, refining until everyone's genuinely excited about the results.",
  },
  {
    step: "05",
    title: "Launch & Learn",
    description:
      "We stick around for implementation and measure what matters. Every project teaches us something that makes the next one better.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Header and Speed Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full">
                [04] Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
              A proven process that delivers results, not surprises.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              We&apos;ve refined our approach over hundreds of projects. Every step is designed to minimize friction and maximize impact. From first call to final delivery, you&apos;ll know exactly where we are and where we&apos;re going.
            </p>
          </div>

          {/* Turnaround highlight pills */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">
                  3–5 Days Kick-off
                </span>
                <span className="text-[11px] text-neutral-400 font-mono block">
                  Straight to work after signing
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">
                  48-Hour Turnaround
                </span>
                <span className="text-[11px] text-neutral-400 font-mono block">
                  On most standard sprint requests
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] flex flex-col justify-between hover:border-white/[0.2] transition-colors relative"
            >
              <div>
                <span className="text-sm font-mono text-neutral-500 block mb-6">
                  /{item.step}
                </span>
                <h3 className="text-lg font-medium text-white mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed border-t border-white/[0.06] pt-4 mt-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
