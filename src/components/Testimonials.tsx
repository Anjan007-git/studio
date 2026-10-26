"use client";

import React, { useState, useRef, useCallback, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { Marquee } from "./Marquee";
import { CountUp } from "./CountUp";
import { ScrollLinkedText } from "./ScrollLinkedText";
import { MotionReveal } from "./MotionReveal";

const testimonials = [
  {
    name: "James Ortiz",
    role: "Director of Comms",
    company: "Solaris Energy",
    avatar: "/images/siKQvG204y5XTlJmEnImPRJ2lc.png",
    quote:
      "From day one, they got what we were trying to do—make solar feel accessible, human, and forward-looking. The rebrand has completely reshaped how we show up in the market.",
    caseStudyHref: "/projects/warpspeed",
    clientLogo: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
    metricValue: "$12M",
    metricLabel: "Investment funding secured",
  },
  {
    name: "Renata Moreau",
    role: "Creative Director",
    company: "Clandestine",
    avatar: "/images/bKnWf3J4VtvWgBOPjzn93ZePTc.png",
    quote:
      "They brought so much nuance to the brand—mystery, elegance, and a really rich visual language. It’s exactly what we hoped for, and then some.",
    caseStudyHref: "/projects/warpspeed",
    clientLogo: "/images/tRMAF5iMAFlkhMeffZPfOEqJcvo.svg",
    metricValue: "4.8x",
    metricLabel: "Social media engagement boost",
  },
  {
    name: "Naomi Chen",
    role: "Co-founder",
    company: "Flora & Fauna",
    avatar: "/images/zcJcDD7iAjp7cLxZlvaQHqk07Y.png",
    quote:
      "We wanted a brand that felt honest and connected to nature, but still premium. What we ended up with feels like us in every way—our customers even comment on it.",
    caseStudyHref: "/projects/ephemeral",
    clientLogo: "/images/pVF7ZvWUvLbHoGIfXSG2nF8yZa8.svg",
    metricValue: "94%",
    metricLabel: "Customer retention rate",
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

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function Testimonials() {
  const slides = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const isTransitioningRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Compute active tab index from slide index
  const getActiveTabIndex = (idx: number) => {
    if (idx === 0) return testimonials.length - 1;
    if (idx === slides.length - 1) return 0;
    return idx - 1;
  };

  const activeTab = getActiveTabIndex(currentIndex);

  // Pause on visibility change
  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleVisibilityChange = () => {
      setIsPaused(document.visibilityState === "hidden");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Slide navigation
  const next = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToSlide = useCallback((tabIndex: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsAnimating(true);
    setCurrentIndex(tabIndex + 1);
  }, []);

  // Automatic slide timer (every 4.5 seconds)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const timer = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, next, currentIndex]);

  // Handle transition end for seamless infinite loop
  const handleTransitionEnd = useCallback((e?: React.TransitionEvent) => {
    if (e && e.target !== e.currentTarget) return;
    if (!isTransitioningRef.current) return;
    isTransitioningRef.current = false;
    if (currentIndex === slides.length - 1) {
      setIsAnimating(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsAnimating(false);
      setCurrentIndex(testimonials.length);
    }
  }, [currentIndex, slides.length]);

  // Re-enable animation after instant wrap snap
  useEffect(() => {
    if (!isAnimating) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
          isTransitioningRef.current = false;
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isAnimating]);

  // Safety fallback timeout in case browser drops transitionEnd
  useEffect(() => {
    if (isTransitioningRef.current) {
      const fallback = setTimeout(() => {
        if (isTransitioningRef.current) {
          handleTransitionEnd();
        }
      }, 800);
      return () => clearTimeout(fallback);
    }
  }, [currentIndex, handleTransitionEnd]);

  // Touch swiping handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null && touchStartYRef.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 35) {
        if (deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setIsPaused(false);
  };

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

      <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)] py-14 sm:py-20 lg:py-32">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 mb-10 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <MotionReveal variant="fade-up" delay={0}>
              <span className="section-label flex items-center gap-1.5">
                <span className="text-white font-semibold">[06]</span>
                <span className="text-[#b8b8b8]">Testimonials</span>
              </span>
            </MotionReveal>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
            <ScrollLinkedText
              as="h2"
              className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-3 sm:mb-4"
              text="Trusted by the most innovative teams."
              highlightWords={["Trusted", "innovative"]}
              start="top 88%"
              end="top 58%"
              scrub={0.6}
            />
            <MotionReveal variant="fade-up" delay={100}>
              <p className="text-[14px] sm:text-base lg:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em]">
                Results speak louder than promises.
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW (lg:hidden) - Pixel-perfect match to MUGEN    */}
        {/* ========================================================= */}
        <div
          className="relative w-full overflow-hidden block lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client Testimonials Mobile"
        >
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition:
                isAnimating && !prefersReducedMotion
                  ? "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((item, idx) => {
              const slideTabIndex = getActiveTabIndex(idx);
              const isCurrent = activeTab === slideTabIndex;

              return (
                <div
                  key={`mobile-${item.company}-${idx}`}
                  className="w-full shrink-0"
                  aria-hidden={!isCurrent}
                >
                  {/* Quote Symbol (Exact Mugen SVG) */}
                  <div className="mb-6 select-none" aria-hidden="true">
                    <svg
                      viewBox="0 0 25 21"
                      className="w-[25px] h-[21px] text-[#b8b8b8] fill-current"
                      aria-hidden="true"
                    >
                      <path d="M 14.07 21 L 14.07 8.794 L 17.868 0 L 23.295 0 L 21.395 8.794 L 25 8.794 L 25 21 Z M 0 21 L 0 8.794 L 3.799 0 L 9.263 0 L 7.326 8.794 L 10.93 8.794 L 10.93 21 Z" />
                    </svg>
                  </div>

                  {/* Quote text without surrounding quote glyphs */}
                  <blockquote className="text-[16px] sm:text-[17px] font-medium text-white leading-[1.5] tracking-[-0.02em] m-0 p-0 font-sans">
                    {item.quote}
                  </blockquote>

                  {/* Navigation Arrow Buttons */}
                  <div className="flex items-center gap-2 mt-6">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      aria-label="Previous testimonial"
                      className="w-9 h-9 rounded-none border border-[#363636] bg-[#050505] text-white flex items-center justify-center hover:bg-white hover:text-black active:bg-white active:text-black transition-colors cursor-pointer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M 5 12 L 19 12" strokeLinecap="round" />
                        <path d="M 12 5 L 19 12 L 12 19" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      aria-label="Next testimonial"
                      className="w-9 h-9 rounded-none border border-[#363636] bg-[#050505] text-white flex items-center justify-center hover:bg-white hover:text-black active:bg-white active:text-black transition-colors cursor-pointer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M 5 12 L 19 12" strokeLinecap="round" />
                        <path d="M 12 5 L 19 12 L 12 19" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Author row with 50x50 square avatar */}
                  <div className="flex items-center gap-3.5 mt-8">
                    <div className="relative w-[50px] h-[50px] shrink-0 bg-black overflow-hidden border-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <span className="text-[14px] font-semibold text-white tracking-[-0.01em] leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[14px] font-medium tracking-[-0.01em] mt-1 leading-tight">
                        <span className="text-[#b8b8b8]">{item.role}</span>{" "}
                        <span className="text-white font-semibold">{item.company}</span>
                      </span>
                    </div>
                  </div>

                  {/* 1px Hairline Divider */}
                  <div className="border-t border-[#363636] my-7" />

                  {/* Bottom Active Client Brand & Metric */}
                  <div>
                    <div className="relative h-6 w-auto flex items-center mb-6">
                      <Image
                        src={item.clientLogo}
                        alt={item.company}
                        width={160}
                        height={32}
                        className="max-h-5 sm:max-h-6 w-auto object-contain brightness-200"
                      />
                    </div>
                    <div>
                      <span className="text-[32px] sm:text-[36px] font-semibold font-display text-white tracking-[-0.03em] leading-none block mb-1">
                        {item.metricValue}
                      </span>
                      <span className="text-[14px] font-medium text-[#b8b8b8] tracking-[-0.01em]">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW (hidden lg:block) - MUGEN Full Showcase      */}
        {/* ========================================================= */}
        <div className="hidden lg:block">
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client Testimonials Desktop"
          >
            <div
              className="flex w-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition:
                  isAnimating && !prefersReducedMotion
                    ? "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                    : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((item, idx) => {
                const slideTabIndex = getActiveTabIndex(idx);
                const isCurrent = activeTab === slideTabIndex;

                return (
                  <div
                    key={`desktop-${item.company}-${idx}`}
                    className="w-full shrink-0 grid grid-cols-12 gap-16 items-start"
                    aria-hidden={!isCurrent}
                  >
                    {/* Left Column: Author Photo & Bio */}
                    <div className="col-span-4 flex flex-col items-start">
                      <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-none overflow-hidden bg-black border border-white/10">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="320px"
                          className="object-cover"
                          priority={idx === 1}
                        />
                      </div>

                      <div className="mt-4 w-full max-w-[320px] text-left">
                        <h4 className="text-lg font-display font-semibold text-white tracking-[-0.02em]">
                          {item.name}
                        </h4>
                        <p className="text-sm font-sans text-[#b8b8b8] mt-1 tracking-[-0.01em]">
                          {item.role} <span className="text-[#545454]">•</span> {item.company}
                        </p>
                        <Link
                          href={item.caseStudyHref}
                          className="inline-flex items-center gap-1.5 text-xs text-[#848484] hover:text-white transition-colors mt-3 group"
                          aria-label={`Read ${item.company} case study`}
                        >
                          <span>Read case study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Editorial Quote & Navigation */}
                    <div className="col-span-8 flex flex-col justify-between min-h-[300px]">
                      <div>
                        {/* Double quote glyph */}
                        <div
                          className="text-4xl sm:text-5xl text-white/70 font-serif leading-none mb-6 select-none"
                          aria-hidden="true"
                        >
                          “
                        </div>

                        <blockquote className="text-3xl lg:text-4xl font-display font-medium text-white leading-[1.25] tracking-[-0.03em] mb-8">
                          &ldquo;{item.quote}&rdquo;
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
                );
              })}
            </div>
          </div>

          {/* Interactive Client Tabs matching MUGEN */}
          <div className="grid grid-cols-3 gap-0 border-t border-white/10 mt-16">
            {testimonials.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className="text-left py-6 px-4 -mt-[1px] relative cursor-pointer group transition-all focus:outline-none"
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
                    className={`text-base font-display font-medium tracking-[-0.02em] transition-colors block ${
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
          <div className="border-t border-white/10 my-14" />

          {/* 3 Metric Highlights Row with CountUp */}
          <div className="grid grid-cols-3 gap-12">
            <div>
              <span className="text-5xl lg:text-6xl font-display font-semibold text-white tracking-[-0.04em] block mb-2 leading-none">
                <CountUp end={12} start={0} prefix="$" suffix="M" triggerSelector="#testimonials" />
              </span>
              <span className="text-sm font-sans text-[#848484] tracking-[-0.01em]">
                Investment funding secured
              </span>
            </div>

            <div>
              <span className="text-5xl lg:text-6xl font-display font-semibold text-white tracking-[-0.04em] block mb-2 leading-none">
                <CountUp end={4.8} start={0.0} decimals={1} suffix="x" triggerSelector="#testimonials" />
              </span>
              <span className="text-sm font-sans text-[#848484] tracking-[-0.01em]">
                Social media engagement boost
              </span>
            </div>

            <div>
              <span className="text-5xl lg:text-6xl font-display font-semibold text-white tracking-[-0.04em] block mb-2 leading-none">
                <CountUp end={94} start={0} suffix="%" triggerSelector="#testimonials" />
              </span>
              <span className="text-sm font-sans text-[#848484] tracking-[-0.01em]">
                Customer retention rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

