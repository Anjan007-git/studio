"use client";

import React from "react";
import Image from "next/image";
import { Star } from "./icons";

const testimonials = [
  {
    name: "James Ortiz",
    role: "Director of Comms",
    company: "Solaris Energy",
    avatar: "/images/IxG8JQTe4YCB0OBh5yXZR2y0lk.png",
    quote:
      "From day one, they got what we were trying to do—make solar feel accessible, human, and forward-looking. The rebrand has completely reshaped how we show up in the market.",
    metric: "Series A",
    metricLabel: "Investment funding secured",
  },
  {
    name: "Renata Moreau",
    role: "Creative Director",
    company: "Clandestine",
    avatar: "/images/ADzzP2ffltBL8xXs0bcwap1FtlM.png",
    quote:
      "They brought so much nuance to the brand—mystery, elegance, and a really rich visual language. It’s exactly what we hoped for, and then some.",
    metric: "+240%",
    metricLabel: "Social engagement boost",
  },
  {
    name: "Naomi Chen",
    role: "Co-founder",
    company: "Flora & Fauna",
    avatar: "/images/2szvKnNjJBBkPsk6yCETyIDktns.png",
    quote:
      "We wanted a brand that felt honest and connected to nature, but still premium. What we ended up with feels like us in every way—our customers even comment on it.",
    metric: "94%",
    metricLabel: "Customer retention rate",
  },
  {
    name: "Julian Singh",
    role: "COO",
    company: "Boltshift",
    avatar: "/images/siKQvG204y5XTlJmEnImPRJ2lc.png",
    quote:
      "We knew our tech was solid, but the brand didn’t reflect that. After the redesign, everything just clicked—sales calls got easier, and people finally ‘got’ what we do.",
    metric: "$2.3M",
    metricLabel: "Annual efficiency savings",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              [06] Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Results speak louder than promises.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Hear directly from founders, leaders, and product executives who rely on Mugen for their highest-stakes creative endeavors.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-white mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-400 block">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-sm font-semibold text-white block">
                    {item.metric}
                  </span>
                  <span className="text-[10px] text-neutral-500 block">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
