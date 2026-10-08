"use client";

import React, { useState, useRef } from "react";
import { Clock, Calendar } from "./icons";
import SmoothScrollSlider from "./SmoothScrollSlider";

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
  const [activeStep, setActiveStep] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);

  return (
    // Outer: tall container that creates the scroll budget on desktop, natural height on mobile
    <div ref={outerRef} className="relative lg:h-[250vh] h-auto">
      {/* Inner: pinned on desktop, natural flow on mobile */}
      <section
        id="process"
        className="relative lg:sticky lg:top-0 py-16 sm:py-24 lg:py-32 border-t border-white/10 bg-[var(--page-bg)] overflow-visible lg:overflow-hidden lg:h-screen"
      >
      {/* Originkit Smooth Scroll Slider — driven by page scroll on desktop, touch/scroll on mobile */}
      <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] mb-12 sm:mb-16 lg:mb-20">
        <SmoothScrollSlider
          slideWidth={340}
          slideHeight={420}
          spacing={2}
          smoothness={8}
          dim={7}
          sensitivity={5}
          radius={20}
          background="var(--page-bg)"
          loop
          scrollSectionRef={outerRef}
        />
      </div>

      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="mb-4">
            <span className="section-label">
              [04] Process
            </span>
          </div>
          <h2 className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6">
            A proven process that delivers results, not surprises.
          </h2>
          <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em]">
            We&apos;ve refined our approach over hundreds of projects. Every step is designed to minimize friction and maximize impact. From first call to final delivery, you&apos;ll know exactly where we are and where we&apos;re going.
          </p>
        </div>

        {/* 2-Column: Left Stats + Right Horizontal Expanding Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Stats Column */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
            <div>
              <div className="w-7 h-7 mb-4 text-white/80">
                <Calendar className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold tracking-[-0.04em] text-white mb-2">
                3-5 Days
              </h3>
              <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] max-w-xs">
                To kick off after signing. No lengthy onboarding, just straight to work.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="w-7 h-7 mb-4 text-white/80">
                <Clock className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold tracking-[-0.04em] text-white mb-2">
                48 Hour
              </h3>
              <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] max-w-xs">
                turnaround on most requests. Complex projects broken into manageable sprints.
              </p>
            </div>
          </div>

          {/* Right Column: Desktop Horizontal Expanding Accordion / Mobile Stack */}
          <div className="lg:col-span-8">
            {/* Desktop Horizontal Accordion */}
            <div className="hidden lg:flex gap-3 h-[480px]">
              {steps.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`cursor-pointer rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none ${
                      isActive
                        ? "flex-[3.5] bg-[#1a1a1a] border border-white/20 shadow-2xl"
                        : "flex-1 bg-[#161616] border border-white/5 hover:border-white/10"
                    }`}
                  >
                    {/* Top Number */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-2xl font-display font-semibold tracking-[-0.04em] transition-colors ${
                          isActive ? "text-white" : "text-[#545454]"
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Bottom Details (Shown with clean transition when active) */}
                    {isActive ? (
                      <div className="transition-all duration-300 opacity-100 transform translate-y-0">
                        <h4 className="text-2xl font-display font-semibold tracking-[-0.03em] text-white mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em]">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <div className="opacity-0 h-0 overflow-hidden transform translate-y-4" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Stacked Accordion */}
            <div className="flex lg:hidden flex-col space-y-4">
              {steps.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={item.step}
                    onClick={() => setActiveStep(isActive ? -1 : idx)}
                    className="rounded-2xl bg-[#1a1a1a] border border-white/10 p-5 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-base font-display font-semibold tracking-[-0.03em] text-[#b8b8b8]">
                          {item.step}
                        </span>
                        <h4 className="text-lg font-display font-semibold tracking-[-0.03em] text-white">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-base text-[#b8b8b8] font-mono">
                        {isActive ? "−" : "+"}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] pt-4 mt-3 border-t border-white/5">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
