"use client";

import React from "react";
import Image from "next/image";
import { Star } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { Marquee } from "./Marquee";

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

const clientLogos = [
  { name: "GlobalBank", src: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg" },
  { name: "45 Degrees", src: "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg" },
  { name: "AlphaWave", src: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg" },
  { name: "Biosynthesis", src: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg" },
  { name: "Boltshift", src: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg" },
  { name: "Clandestine", src: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg" },
  { name: "Codecraft", src: "/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg" },
  { name: "ommLabs", src: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg" },
];

export function Testimonials() {
  return (
    <section className="border-t border-white/10 relative bg-[#141414]">
      {/* Full-bleed client logo marquee matching reference video frame 58-59 */}
      <div className="py-7 border-b border-white/10 overflow-hidden">
        <Marquee speed={32} className="opacity-70 hover:opacity-100 transition-opacity">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 mx-6 sm:mx-10"
            >
              <div className="relative h-6 w-24 sm:w-28 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={110}
                  height={24}
                  className="max-h-5 w-auto object-contain brightness-200"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14 py-24 sm:py-32">
        {/* Section Header matching frame 59 layout */}
        <MotionReveal variant="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 mb-16 sm:mb-20">
            <div className="lg:col-span-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                [06] Testimonials
              </span>
            </div>
            <div className="lg:col-span-9 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Trusted by the most innovative teams.
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
                Results speak louder than promises. Hear directly from founders, leaders, and product executives who rely on TRIFECTA TRENDS.
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <MotionReveal
              key={idx}
              variant="fade-up"
              delay={idx * 100}
              className="h-full"
            >
              <div
                className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-500 shadow-xl h-full group"
              >
                <div>
                  <div className="flex items-center gap-1 text-white mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed font-light mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div>
                  {/* Metric Highlight */}
                  <div className="pt-4 pb-4 border-t border-white/5 mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block">
                      {item.metric}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {item.metricLabel}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs font-mono text-neutral-400">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
