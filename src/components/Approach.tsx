"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "./icons";

interface WordToken {
  text: string;
  isHighlighted: boolean;
}

const statementWords: WordToken[] = [
  // Segment 1 (soft gray)
  { text: "Traditional", isHighlighted: false },
  { text: "agencies", isHighlighted: false },
  { text: "perfected", isHighlighted: false },
  { text: "the", isHighlighted: false },
  { text: "art", isHighlighted: false },
  { text: "of", isHighlighted: false },
  { text: "the", isHighlighted: false },
  { text: "pitch.", isHighlighted: false },
  // Segment 2 (bright white)
  { text: "We", isHighlighted: true },
  { text: "perfected", isHighlighted: true },
  { text: "the", isHighlighted: true },
  { text: "art", isHighlighted: true },
  { text: "of", isHighlighted: true },
  { text: "the", isHighlighted: true },
  { text: "work.", isHighlighted: true },
  // Segment 3 (soft gray)
  { text: "When", isHighlighted: false },
  { text: "you", isHighlighted: false },
  { text: "need", isHighlighted: false },
  // Segment 4 (bright white)
  { text: "design", isHighlighted: true },
  { text: "that", isHighlighted: true },
  { text: "moves", isHighlighted: true },
  { text: "at", isHighlighted: true },
  { text: "the", isHighlighted: true },
  { text: "speed", isHighlighted: true },
  { text: "of", isHighlighted: true },
  { text: "your", isHighlighted: true },
  { text: "ambition,", isHighlighted: true },
  // Segment 5 (soft gray)
  { text: "you", isHighlighted: false },
  { text: "need", isHighlighted: false },
  { text: "a", isHighlighted: false },
  { text: "different", isHighlighted: false },
  { text: "kind", isHighlighted: false },
  { text: "of", isHighlighted: false },
  { text: "studio.", isHighlighted: false },
];

export function Approach() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@trifectatrends.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    const headline = headlineRef.current;
    const label = labelRef.current;
    if (!el || !headline) return;

    // Check reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const words = headline.querySelectorAll<HTMLElement>(".approach-word");

      if (prefersReducedMotion) {
        gsap.set(words, { opacity: 1, y: 0 });
        if (label) gsap.set(label, { opacity: 1, y: 0 });
        return;
      }

      // Master scroll-driven illumination & text reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.6,
        },
      });

      if (label) {
        tl.fromTo(
          label,
          { opacity: 0.25, y: 6 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" },
          0
        );
      }

      // Progressive scrubbed activation across all words in reading order
      words.forEach((word) => {
        const isHighlight = word.getAttribute("data-highlight") === "true";
        tl.fromTo(
          word,
          {
            opacity: 0.2,
            y: 8,
            color: "#484848",
          },
          {
            opacity: 1,
            y: 0,
            color: isHighlight ? "#ffffff" : "#b8b8b8",
            duration: 0.35,
            ease: "power1.out",
          },
          "<0.032"
        );
      });

      // Subtle parallax on philosophy card
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 30, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
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
      id="approach"
      className="relative bg-[var(--page-bg)] border-t border-white/[0.08] overflow-hidden pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-24 sm:pb-32 md:pb-40"
    >
      <div className="w-full max-w-[var(--content-max)] mx-auto px-6 sm:px-8 md:px-14 lg:px-16">
        {/* ============================================================ */}
        {/* MUGEN EXACT EDITORIAL STATEMENT WITH FLOATED SECTION LABEL   */}
        {/* ============================================================ */}
        <div className="w-full max-w-[1440px]">
          <h2
            ref={headlineRef}
            className="font-display font-semibold text-[clamp(1.25rem,5vw,1.85rem)] sm:text-[clamp(2.15rem,4.1vw,4.15rem)] leading-[1.14] sm:leading-[1.08] tracking-[-0.03em] sm:tracking-[-0.04em] select-none text-left"
          >
            {/* Upper-Left Editorial Section Label (Block on mobile, Floated on desktop) */}
            <span
              ref={labelRef}
              className="block sm:float-left mr-0 sm:mr-7 md:mr-8 mb-5 sm:mb-0 text-white font-display text-[13px] sm:text-[14px] md:text-[15px] font-semibold tracking-[-0.02em] select-none pt-0 sm:pt-1.5 md:pt-2"
            >
              [Our Approach]
            </span>

            {/* Continuous Natural Flowing Editorial Words with Scrubbed Dual-Tone Reveal */}
            {statementWords.map((word, idx) => (
              <React.Fragment key={idx}>
                <span
                  className={`approach-word inline-block will-change-transform ${
                    word.isHighlighted ? "text-white" : "text-[#b8b8b8]"
                  }`}
                  data-highlight={word.isHighlighted ? "true" : "false"}
                >
                  {word.text}
                </span>
                {idx < statementWords.length - 1 && " "}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* ============================================================ */}
        {/* ============================================================ */}
        {/* STUDIO PHILOSOPHY / FOUNDER CARD & DETAILED STORY            */}
        {/* ============================================================ */}
        <div className="mt-28 sm:mt-36 md:mt-44 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dedicated Studio Philosophy / Founder Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div ref={cardRef} className="w-full max-w-[340px] sm:max-w-[340px] mx-auto lg:mx-0">
              {/* MOBILE ONLY: Sharp rectangular editorial Founder card (Image 1 reference) */}
              <div className="block sm:hidden w-full rounded-none bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl">
                {/* Full-width sharp image frame */}
                <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden bg-neutral-950">
                  <Image
                    src="/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg"
                    alt="Alex West — Founder & Creative Director"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 340px"
                  />

                  {/* Subtle lower depth gradient on image */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Interactive expanded profile detail overlay */}
                  {copied && (
                    <div className="absolute top-3 left-3 right-3 z-30 py-1.5 px-3 bg-white text-black text-center text-[11px] font-display font-medium shadow-lg animate-in fade-in duration-200">
                      Email copied: contact@trifectatrends.com
                    </div>
                  )}

                  {/* MUGEN Signature Circular Plus Button in Bottom-Right Corner */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy founder email / connect"
                    className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/65 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/90 active:scale-90 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-base font-light leading-none select-none font-display">
                      +
                    </span>
                  </button>
                </div>

                {/* Founder Info Section directly underneath with clean dividing border */}
                <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e0e0e] flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white font-display tracking-[-0.03em] leading-tight">
                      Alex West
                    </h3>
                    <p className="text-xs font-display text-[#848484] mt-0.5 tracking-[-0.02em]">
                      Founder &amp; Creative Director
                    </p>
                  </div>
                  <Link
                    href="/studio"
                    className="text-[#848484] hover:text-white transition-colors p-1"
                    aria-label="View Studio Profile"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* DESKTOP / TABLET (sm: and above): Retain rich philosophy card */}
              <div className="hidden sm:flex w-full rounded-3xl bg-[#0e0e0e] border border-white/[0.08] overflow-hidden shadow-2xl p-4 sm:p-5 flex-col justify-between group hover:border-white/20 transition-all duration-500">
                <div>
                  {/* Email Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-display font-medium text-[#b8b8b8] hover:text-white transition-colors cursor-pointer tracking-[-0.02em]"
                    >
                      {copied ? "email copied" : "contact@trifectatrends.com"}
                    </button>
                    <a
                      href="mailto:contact@trifectatrends.com"
                      aria-label="Email TRIFECTA TRENDS"
                      className="text-[#b8b8b8] hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Image Frame with Mask, Zoom, and Signature Corner Plus Button */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-950 mb-5 group/img">
                    <Image
                      src="/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg"
                      alt="TRIFECTA TRENDS — Studio Philosophy"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* MUGEN Signature Circular Plus Badge in Bottom-Right Corner linking to /studio */}
                    <Link
                      href="/studio"
                      aria-label="View Studio Profile"
                      className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-black/80 group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-base font-light leading-none select-none transition-transform duration-300 group-hover:rotate-90">
                        +
                      </span>
                    </Link>
                  </div>

                  {/* Philosophy Statement */}
                  <p className="text-xs text-[#b8b8b8] leading-[1.55] font-sans font-normal mb-5 tracking-[-0.02em]">
                    We believe high-impact digital experiences come from focused craftsmanship, rigorous design systems, and direct collaboration. No pitch theater. No layers of account management.
                  </p>
                </div>

                {/* Studio Meta */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white font-display tracking-[-0.03em]">
                      Studio Philosophy
                    </h3>
                    <p className="text-xs font-display text-[#848484] mt-0.5 tracking-[-0.02em]">
                      Craft &amp; Execution
                    </p>
                  </div>
                  <span className="text-xs font-display text-[#848484] tracking-[-0.02em]">
                    TRIFECTA TRENDS®
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quotes & Two Sub-Columns */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-10">
            {/* Big Opening Quote */}
            <div>
              <span className="text-6xl sm:text-7xl text-neutral-600 font-serif leading-none block mb-2 select-none">
                “
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-normal leading-[1.3] tracking-[-0.03em] font-sans">
                Traditional agencies engineered a process centered on pitch theater,
                bloated hierarchies, and endless status calls. We built TRIFECTA TRENDS
                around a simpler, sharper mandate: senior practitioners building
                exceptional digital experiences directly with ambitious teams.
              </p>
            </div>

            {/* Two Sub-Columns for Philosophy Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.08] text-sm text-[#b8b8b8] leading-[1.55] font-sans font-normal tracking-[-0.02em]">
              <div>
                <p>
                  No bureaucratic layers, no junior handoffs, no bloated overhead.
                  Just disciplined creative direction, rapid prototyping, and
                  high-velocity shipping that moves your business forward.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  We approach digital design as a long-term strategic advantage.
                  Every typography choice, micro-interaction, and layout hierarchy
                  is engineered to convert, captivate, and endure.
                </p>
                <p className="text-white font-medium font-sans tracking-[-0.02em]">
                  That&apos;s the TRIFECTA TRENDS standard: refined, deliberate, and built different.
                </p>
              </div>
            </div>

            {/* Link to /studio */}
            <div className="pt-4">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-sm text-white font-semibold font-display tracking-[-0.02em] hover:text-[#b8b8b8] transition-colors group cursor-pointer"
              >
                <span>The studio</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
