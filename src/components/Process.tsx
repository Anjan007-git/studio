"use client";

import React, { useState, useRef } from "react";
import { Clock, Calendar } from "./icons";
import SmoothScrollSlider from "./SmoothScrollSlider";
import { ScrollLinkedText } from "./ScrollLinkedText";
import { MotionReveal } from "./MotionReveal";

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
    // Outer: tall container that creates the scroll budget on desktop, natural flow on mobile
    <div ref={outerRef} className="relative lg:h-[250vh] h-auto">
      {/* Inner: pinned on desktop, natural flow on mobile */}
      <section
        id="process"
        className="relative lg:sticky lg:top-0 py-16 sm:py-24 lg:py-32 border-t border-white/10 bg-[var(--page-bg)] overflow-visible lg:overflow-hidden lg:h-screen flex flex-col justify-between"
      >
        {/* Smooth Scroll Slider — driven by page scroll on desktop, fluid momentum on mobile */}
        <div className="w-full h-[260px] sm:h-[340px] lg:h-[460px] mb-10 sm:mb-14 lg:mb-16">
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

        <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)]">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
            <MotionReveal variant="fade-up" delay={0}>
              <div className="mb-4">
                <span className="section-label">
                  [04] Process
                </span>
              </div>
            </MotionReveal>
            <ScrollLinkedText
              as="h2"
              className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6"
              text="A proven process that delivers results, not surprises."
              highlightWords={["proven", "delivers", "results"]}
              start="top 88%"
              end="top 55%"
              scrub={0.6}
            />
            <ScrollLinkedText
              as="p"
              className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em]"
              text="We've refined our approach over hundreds of projects. Every step is designed to minimize friction and maximize impact. From first call to final delivery, you'll know exactly where we are and where we're going."
              highlightWords={["refined", "minimize", "friction", "maximize", "impact"]}
              start="top 85%"
              end="top 48%"
              scrub={0.6}
            />
          </div>

          {/* 2-Column: Left Stats + Right Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Stats Column: 2-column grid on mobile, vertical stack on desktop */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-12">
                <div className="p-4 sm:p-5 lg:p-0 rounded-2xl bg-[#0a0a0a] lg:bg-transparent border border-white/10 lg:border-none">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 mb-3 lg:mb-4 text-white/80">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold tracking-[-0.04em] text-white mb-1.5 lg:mb-2">
                    3-5 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] max-w-xs">
                    To kick off after signing. No lengthy onboarding, just straight to work.
                  </p>
                </div>

                <div className="p-4 sm:p-5 lg:p-0 rounded-2xl bg-[#0a0a0a] lg:bg-transparent border border-white/10 lg:border-t lg:border-white/5 lg:pt-8">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 mb-3 lg:mb-4 text-white/80">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold tracking-[-0.04em] text-white mb-1.5 lg:mb-2">
                    48 Hour
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] max-w-xs">
                    turnaround on most requests. Complex projects broken into manageable sprints.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop Horizontal Expanding Accordion / Mobile Fluid Accordion */}
            <div className="lg:col-span-8">
              {/* Desktop Horizontal Accordion (Working perfectly) */}
              <div className="hidden lg:flex gap-3 h-[460px]">
                {steps.map((item, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={item.step}
                      onClick={() => setActiveStep(idx)}
                      onMouseEnter={() => setActiveStep(idx)}
                      className={`cursor-pointer rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none ${
                        isActive
                          ? "flex-[3.5] bg-[#0e0e0e] border border-white/20 shadow-2xl"
                          : "flex-1 bg-[#080808] border border-white/5 hover:border-white/10"
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

              {/* Mobile Smooth Accordion & Sprint Tracker */}
              <div className="flex lg:hidden flex-col space-y-3">
                {/* Mobile Sprint Step Selector Bar */}
                <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 -mx-2 px-2">
                  {steps.map((item, idx) => (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 shrink-0 ${
                        activeStep === idx
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "bg-[#0d0d0d] text-[#707070] border border-white/10 hover:text-white"
                      }`}
                    >
                      Step {item.step}
                    </button>
                  ))}
                </div>

                {/* Mobile Accordion Items with smooth CSS Grid height animation */}
                {steps.map((item, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={item.step}
                      onClick={() => setActiveStep(isActive ? -1 : idx)}
                      className={`rounded-2xl border p-4 sm:p-5 cursor-pointer transition-all duration-300 select-none active:scale-[0.99] ${
                        isActive
                          ? "bg-[#101010] border-white/25 shadow-lg"
                          : "bg-[#090909] border-white/10 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-sm sm:text-base font-mono font-semibold transition-colors duration-200 ${
                              isActive ? "text-white" : "text-[#666666]"
                            }`}
                          >
                            {item.step}
                          </span>
                          <h4
                            className={`text-base sm:text-lg font-display font-semibold tracking-[-0.03em] transition-colors duration-200 ${
                              isActive ? "text-white" : "text-[#b8b8b8]"
                            }`}
                          >
                            {item.title}
                          </h4>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                            isActive
                              ? "bg-white text-black border-white rotate-45"
                              : "border-white/15 text-[#888888]"
                          }`}
                        >
                          <span className="text-sm font-medium leading-none mb-0.5">
                            +
                          </span>
                        </div>
                      </div>

                      {/* Smooth CSS Grid open/close */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] pt-3 mt-3 border-t border-white/5">
                            {item.description}
                          </p>
                        </div>
                      </div>
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
