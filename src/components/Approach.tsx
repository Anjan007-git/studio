"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "./icons";

export function Approach() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
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
    if (!el || !headline) return;

    const ctx = gsap.context(() => {
      const revealSpans = headline.querySelectorAll(".reveal-text");

      // Scrubbed dual-tone text brightness reveal on scroll
      gsap.fromTo(
        revealSpans,
        { opacity: 0.25, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headline,
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );

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
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Tag */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            [Our Approach]
          </span>
        </div>

        {/* Massive Two-Tone Manifesto Headline with Continuous Scroll Mask Reveal */}
        <div className="max-w-6xl mb-16 sm:mb-24">
          <h2
            ref={headlineRef}
            className="text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold tracking-[-0.03em] leading-[1.18] select-none"
          >
            <span className="block overflow-hidden py-1">
              <span className="reveal-text inline-block will-change-transform">
                <span className="text-neutral-400 font-normal">
                  Traditional agencies perfected the art of the pitch.{" "}
                </span>
                <strong className="text-white font-bold">
                  We perfected the art of the work.
                </strong>
              </span>
            </span>

            <span className="block overflow-hidden py-1 mt-1 sm:mt-2">
              <span className="reveal-text inline-block will-change-transform">
                <span className="text-neutral-400 font-normal">When you need </span>
                <strong className="text-white font-bold">
                  design that moves at the speed of your ambition
                </strong>
                <span className="text-neutral-400 font-normal">
                  , you need a different kind of studio.
                </span>
              </span>
            </span>
          </h2>
        </div>

        {/* 2-Column Layout: Studio Philosophy Card & Detailed Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dedicated Studio Philosophy Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div ref={cardRef} className="w-full max-w-[340px] mx-auto lg:mx-0">
              <div className="w-full rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col justify-between group hover:border-white/25 transition-all duration-500">
                <div>
                  {/* Email Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? "email copied" : "contact@trifectatrends.com"}
                    </button>
                    <a
                      href="mailto:contact@trifectatrends.com"
                      aria-label="Email TRIFECTA TRENDS"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Image Frame with Mask, Zoom, and Signature Corner Plus Button */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-5 group/img">
                    <Image
                      src="/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg"
                      alt="TRIFECTA TRENDS — Studio Philosophy"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* MUGEN Signature Circular Plus Badge in Bottom-Right Corner */}
                    <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-black/80 group-hover:scale-110 transition-all duration-300">
                      <span className="text-base font-light leading-none select-none transition-transform duration-300 group-hover:rotate-90">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Philosophy Statement */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mb-5">
                    We believe high-impact digital experiences come from focused craftsmanship, rigorous design systems, and direct collaboration. No pitch theater. No layers of account management.
                  </p>
                </div>

                {/* Studio Meta */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Studio Philosophy</h3>
                    <p className="text-xs font-mono text-neutral-500 mt-0.5">
                      Craft &amp; Execution
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">TRIFECTA TRENDS®</span>
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
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed tracking-tight">
                Traditional agencies engineered a process centered on pitch theater,
                bloated hierarchies, and endless status calls. We built TRIFECTA TRENDS
                around a simpler, sharper mandate: senior practitioners building
                exceptional digital experiences directly with ambitious teams.
              </p>
            </div>

            {/* Two Sub-Columns for Philosophy Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 text-sm text-neutral-400 leading-relaxed font-light">
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
                <p className="text-neutral-200 font-medium font-sans">
                  That&apos;s the TRIFECTA TRENDS standard: refined, deliberate, and built different.
                </p>
              </div>
            </div>

            {/* Link to /studio */}
            <div className="pt-4">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-neutral-300 transition-colors group cursor-pointer"
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
