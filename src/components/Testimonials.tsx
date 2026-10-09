"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "./icons";
import { Marquee } from "./Marquee";
import { CountUp } from "./CountUp";

const spotlightTestimonials = [
  {
    name: "James Ortiz",
    role: "Director of Communications",
    company: "Solaris Energy",
    avatar: "/images/IxG8JQTe4YCB0OBh5yXZR2y0lk.png",
    quote:
      "From day one, they got what we were trying to do—make solar feel accessible, human, and forward-looking. The rebrand has completely reshaped how we show up in the market and accelerated our Series A round.",
    metric: "$12M",
    metricLabel: "Series A funding closed",
  },
  {
    name: "Renata Moreau",
    role: "Creative Director",
    company: "Clandestine",
    avatar: "/images/ADzzP2ffltBL8xXs0bcwap1FtlM.png",
    quote:
      "They brought extraordinary nuance to the brand—mystery, elegance, and a rich, responsive visual language. It’s rare to find a team that pairs high artistic taste with ruthless speed of execution.",
    metric: "+240%",
    metricLabel: "Social engagement increase",
  },
  {
    name: "Naomi Chen",
    role: "Co-Founder & CEO",
    company: "Flora & Fauna",
    avatar: "/images/2szvKnNjJBBkPsk6yCETyIDktns.png",
    quote:
      "We wanted a brand that felt connected to nature, yet commanded premium luxury shelf appeal. What we ended up with feels authentic in every detail—our customers constantly praise the digital experience.",
    metric: "94%",
    metricLabel: "Customer retention rate",
  },
];

const reviewCards = [
  {
    company: "Boltshift",
    author: "Julian Singh",
    role: "COO",
    avatar: "/images/siKQvG204y5XTlJmEnImPRJ2lc.png",
    quote:
      "After the redesign, sales calls got remarkably easier, and prospects immediately understood our enterprise positioning.",
    metric: "$2.3M",
    metricLabel: "Annual pipeline efficiency",
    projectHref: "/projects/warpspeed",
  },
  {
    company: "Warpspeed",
    author: "Marcus Vance",
    role: "Head of Product",
    avatar: "/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg",
    quote:
      "TRIFECTA TRENDS engineered our design system and front-end architecture with 60fps fluidity. They feel like true in-house partners.",
    metric: "3.4x",
    metricLabel: "Conversion velocity",
    projectHref: "/projects/warpspeed",
  },
  {
    company: "Ephemeral",
    author: "Elena Rostova",
    role: "Managing Partner",
    avatar: "/images/ulbEv91MwUwTk34ixqmyIluLPJY.png",
    quote:
      "Disciplined craft, zero fluff. They delivered a world-class digital presence that sets us apart from every legacy competitor.",
    metric: "99.8%",
    metricLabel: "Client satisfaction score",
    projectHref: "/projects/ephemeral",
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
  const [activeSpotlight, setActiveSpotlight] = useState(0);

  const prevSpotlight = () => {
    setActiveSpotlight((prev) =>
      prev === 0 ? spotlightTestimonials.length - 1 : prev - 1
    );
  };

  const nextSpotlight = () => {
    setActiveSpotlight((prev) =>
      prev === spotlightTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = spotlightTestimonials[activeSpotlight];

  return (
    <section
      id="testimonials"
      className="border-t border-white/10 relative bg-[var(--page-bg)] overflow-hidden"
    >
      {/* Full-bleed client logo marquee */}
      <div className="py-7 border-b border-white/10 overflow-hidden">
        <Marquee speed={30} className="opacity-70 hover:opacity-100 transition-opacity">
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
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 mb-16 sm:mb-20">
          <div className="lg:col-span-3">
            <span className="section-label">
              [06] Testimonials
            </span>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
            <h2 className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-4">
              Trusted by the most innovative teams.
            </h2>
            <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em]">
              Results speak louder than promises. Hear directly from founders, leaders, and product executives who rely on TRIFECTA TRENDS.
            </p>
          </div>
        </div>

        {/* MUGEN Signature Spotlight Testimonial Card with Prev/Next Controls */}
        <div className="mb-14 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Avatar Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Stars, Quote, Metadata & Controls */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-1 text-white mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-sans font-normal leading-snug tracking-[-0.03em] mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-display font-semibold text-white tracking-[-0.03em]">{current.name}</h4>
                  <p className="text-xs font-sans text-[#b8b8b8] mt-0.5 tracking-[-0.01em]">
                    {current.role} • {current.company}
                  </p>
                </div>

                {/* Slider Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSpotlight}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer font-display"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSpotlight}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer font-display"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Highlights Row matching MUGEN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pt-6">
          <div className="p-6 rounded-none bg-[#0a0a0a] border border-white/5">
            <span className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em] block mb-1">
              <CountUp end={12} start={0} prefix="$" suffix="M+" triggerSelector="#testimonials" />
            </span>
            <span className="text-xs font-sans text-[#848484] tracking-[-0.01em]">
              Series A funding closed by featured clients
            </span>
          </div>

          <div className="p-6 rounded-none bg-[#0a0a0a] border border-white/5">
            <span className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em] block mb-1">
              <CountUp end={4.8} start={0.0} decimals={1} suffix="x" triggerSelector="#testimonials" />
            </span>
            <span className="text-xs font-sans text-[#848484] tracking-[-0.01em]">
              Average engagement boost after brand overhaul
            </span>
          </div>

          <div className="p-6 rounded-none bg-[#0a0a0a] border border-white/5">
            <span className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em] block mb-1">
              <CountUp end={94} start={0} suffix="%" triggerSelector="#testimonials" />
            </span>
            <span className="text-xs font-sans text-[#848484] tracking-[-0.01em]">
              Client retention and ongoing retainer extension
            </span>
          </div>
        </div>

        {/* 3 Review Cards Grid below with Case Study Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewCards.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-display font-semibold tracking-[-0.02em] text-[#b8b8b8]">
                    {item.company}
                  </span>
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Metric */}
                <div className="pt-4 pb-4 border-t border-white/5 mb-4 flex items-baseline justify-between">
                  <span className="text-2xl font-display font-semibold text-white tracking-[-0.04em]">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-sans text-[#848484]">
                    {item.metricLabel}
                  </span>
                </div>

                {/* Author Info + Case Study Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-display font-semibold text-white tracking-[-0.02em]">
                        {item.author}
                      </h4>
                      <p className="text-[10px] font-sans text-[#848484]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={item.projectHref}
                    className="text-[#848484] hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-label={`View ${item.company} case study`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
