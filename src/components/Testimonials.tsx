"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { Marquee } from "./Marquee";
import { CountUp } from "./CountUp";

const testimonials = [
  {
    name: "James Ortiz",
    role: "Director of Communications",
    company: "Solaris Energy",
    avatar: "/images/IxG8JQTe4YCB0OBh5yXZR2y0lk.png",
    quote:
      "From day one, they got what we were trying to do—make solar feel accessible, human, and forward-looking. The rebrand has completely reshaped how we show up in the market and accelerated our Series A round.",
    caseStudyHref: "/projects/warpspeed",
  },
  {
    name: "Renata Moreau",
    role: "Creative Director",
    company: "Clandestine",
    avatar: "/images/ADzzP2ffltBL8xXs0bcwap1FtlM.png",
    quote:
      "They brought extraordinary nuance to the brand—mystery, elegance, and a really rich visual language. It's rare to find a team that pairs high artistic taste with ruthless speed of execution.",
    caseStudyHref: "/projects/warpspeed",
  },
  {
    name: "Naomi Chen",
    role: "Co-Founder & CEO",
    company: "Flora & Fauna",
    avatar: "/images/2szvKnNjJBBkPsk6yCETyIDktns.png",
    quote:
      "We wanted a brand that felt connected to nature, yet commanded premium luxury shelf appeal. What we ended up with feels authentic in every detail—our customers constantly praise the digital experience.",
    caseStudyHref: "/projects/ephemeral",
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
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIdx) =>
      prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIdx) =>
      prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = testimonials[activeIndex];

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

      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14 py-20 sm:py-28 lg:py-32">
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
              Results speak louder than promises.
            </p>
          </div>
        </div>

        {/* MUGEN Signature Testimonial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Author Photo & Bio */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-none overflow-hidden bg-black border border-white/10">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>

            <div className="mt-4">
              <h4 className="text-base sm:text-lg font-display font-semibold text-white tracking-[-0.02em]">
                {current.name}
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#b8b8b8] mt-1 tracking-[-0.01em]">
                {current.role} <span className="text-[#545454]">•</span> {current.company}
              </p>
              <Link
                href={current.caseStudyHref}
                className="inline-flex items-center gap-1.5 text-xs text-[#848484] hover:text-white transition-colors mt-3 group"
                aria-label={`Read ${current.company} case study`}
              >
                <span>Read case study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Editorial Quote & Navigation */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[260px] sm:min-h-[300px]">
            <div>
              {/* Double quote glyph */}
              <div className="text-4xl sm:text-5xl text-white/70 font-serif leading-none mb-6 select-none" aria-hidden="true">
                “
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white leading-[1.25] tracking-[-0.03em] mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Navigation Arrow Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-none border border-white/10 bg-white/[0.03] hover:bg-white text-white hover:text-black transition-all flex items-center justify-center cursor-pointer font-display text-base"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-none border border-white/10 bg-white/[0.03] hover:bg-white text-white hover:text-black transition-all flex items-center justify-center cursor-pointer font-display text-base"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Client Tabs matching MUGEN */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-white/10 mt-12 sm:mt-16">
          {testimonials.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.company}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="text-left py-5 sm:py-6 px-3 sm:px-4 -mt-[1px] relative cursor-pointer group transition-all focus:outline-none"
              >
                {/* Active Indicator Top Line */}
                <div
                  className={`absolute top-0 left-0 right-0 transition-all duration-300 ${
                    isActive
                      ? "h-[2px] bg-white"
                      : "h-[1px] bg-white/10 group-hover:bg-white/30"
                  }`}
                />

                <span
                  className={`text-sm sm:text-base font-display font-medium tracking-[-0.02em] transition-colors block ${
                    isActive ? "text-white font-semibold" : "text-[#848484] group-hover:text-white"
                  }`}
                >
                  {item.company}
                </span>
              </button>
            );
          })}
        </div>

        {/* 1px Hairline Divider */}
        <div className="border-t border-white/10 my-10 sm:my-14" />

        {/* 3 Metric Highlights Row with CountUp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-[-0.04em] block mb-2 leading-none">
              <CountUp end={12} start={0} prefix="$" suffix="M" triggerSelector="#testimonials" />
            </span>
            <span className="text-xs sm:text-sm font-sans text-[#848484] tracking-[-0.01em]">
              Series A funding closed
            </span>
          </div>

          <div>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-[-0.04em] block mb-2 leading-none">
              <CountUp end={4.8} start={0.0} decimals={1} suffix="x" triggerSelector="#testimonials" />
            </span>
            <span className="text-xs sm:text-sm font-sans text-[#848484] tracking-[-0.01em]">
              Social media engagement boost
            </span>
          </div>

          <div>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-[-0.04em] block mb-2 leading-none">
              <CountUp end={94} start={0} suffix="%" triggerSelector="#testimonials" />
            </span>
            <span className="text-xs sm:text-sm font-sans text-[#848484] tracking-[-0.01em]">
              Customer retention rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
