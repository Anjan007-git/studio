"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ArrowUpRight,
  XIcon,
  InstagramIcon,
  DribbbleIcon,
  LinkedInIcon,
} from "./icons";
import { RibbonGlow } from "./RibbonGlow";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@trifectatrends.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#070709] border-t border-white/10 pt-20 pb-16 text-neutral-400">
      {/* Layer 0: Ribbon Glow WebGL Background (Preserved Exactly) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <RibbonGlow
          background="#070709"
          color1="#1eb8e8"
          color2="#7b61ff"
          speed={28}
          size={115}
          hover={50}
          reach={240}
        />
      </div>

      {/* Layer 1: Dark Readability Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#070709]/85 via-[#070709]/45 to-[#070709]/75 backdrop-blur-[0.5px]"
        aria-hidden="true"
      />

      {/* Layer 2: Footer Foreground Content */}
      <div className="relative z-[2] w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Upper Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-start gap-0.5 text-2xl sm:text-3xl font-display font-bold tracking-[-0.03em] text-white uppercase hover:opacity-80 transition-opacity"
            >
              <span>TRIFECTA TRENDS</span>
              <span className="text-xs font-normal">©</span>
            </Link>
            <p className="text-sm sm:text-[15px] text-[#b8b8b8] max-w-sm leading-relaxed font-sans font-normal tracking-[-0.01em]">
              Your next project deserves world-class design. Stop settling for mediocre and start working with designers who care as much as you do.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <span className="text-xs font-display font-semibold tracking-[-0.02em] text-white block mb-2">
                Subscribe to our newsletter.
              </span>
              <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#848484] focus:outline-none focus:border-white/30 font-sans"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-display font-semibold tracking-[-0.02em] transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Email direct copy */}
            <div className="pt-2">
              <span className="text-xs font-display font-medium tracking-[-0.02em] text-[#848484] block mb-1">
                [Mail to]
              </span>
              <button
                onClick={copyEmail}
                className="text-white hover:text-neutral-300 font-sans text-sm sm:text-[15px] font-normal flex items-center gap-2 cursor-pointer tracking-[-0.01em]"
              >
                <span>contact@trifectatrends.com</span>
                <span className="text-[11px] font-display font-medium text-[#848484] bg-white/[0.08] px-2 py-0.5 rounded">
                  {copied ? "email copied" : "click to copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs sm:text-sm font-semibold tracking-[-0.02em] text-white">
              Studio
            </h4>
            <ul className="space-y-3 font-normal text-sm sm:text-[15px] font-sans">
              <li>
                <Link href="/" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#b8b8b8] hover:text-white transition-colors flex items-center justify-between tracking-[-0.01em]"
                >
                  <span>Work</span>
                  <span className="text-xs font-display font-medium text-[#848484]">[12]</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-[#b8b8b8] hover:text-white transition-colors flex items-center justify-between tracking-[-0.01em]"
                >
                  <span>Articles</span>
                  <span className="text-xs font-display font-medium text-[#848484]">[10]</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs sm:text-sm font-semibold tracking-[-0.02em] text-white">
              Capabilities
            </h4>
            <ul className="space-y-3 font-normal text-sm sm:text-[15px] font-sans">
              <li>
                <Link href="/#services" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Brand Identity & Systems
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Web Design & Digital Platforms
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Product Design & UI/UX
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Marketing & Growth Creative
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]">
                  Engineering & Framer Code
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs sm:text-sm font-semibold tracking-[-0.02em] text-white">
              Connect
            </h4>
            <ul className="space-y-3 font-normal text-sm sm:text-[15px] font-sans">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.01em]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Reference-Styled Utility Row: Terms & Privacy on Left, Social Icons on Right */}
        <div className="pt-12 sm:pt-16 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          {/* Left: Terms of Service & Privacy Policy */}
          <div className="flex items-center gap-8 sm:gap-10 md:gap-14">
            <Link
              href="/terms"
              className="group inline-flex items-center gap-1 text-sm sm:text-base md:text-lg font-display font-medium text-white hover:text-white/80 transition-all duration-300 tracking-[-0.02em]"
            >
              <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white transition-colors">
                Terms of Service
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>

            <Link
              href="/privacy"
              className="group inline-flex items-center gap-1 text-sm sm:text-base md:text-lg font-display font-medium text-white hover:text-white/80 transition-all duration-300 tracking-[-0.02em]"
            >
              <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white transition-colors">
                Privacy Policy
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right: Four Social Icons (X, Instagram, Dribbble, LinkedIn) */}
          <div className="flex items-center gap-5 sm:gap-6 text-white/80">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="p-1 -m-1 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <XIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1 -m-1 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <InstagramIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="p-1 -m-1 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <DribbbleIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1 -m-1 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <LinkedInIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </a>
          </div>
        </div>

        {/* Giant Editorial Wordmark: TRIFECTA (White) & TRENDS (Soft Gray) */}
        <div className="pt-8 sm:pt-12 pb-12 sm:pb-16 select-none overflow-hidden">
          <div className="flex flex-col leading-[0.82] tracking-[-0.04em] font-display font-bold uppercase text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] xl:text-[16.5vw] max-w-full">
            <span className="text-white block whitespace-nowrap">
              TRIFECTA
            </span>
            <span className="text-[#b8b8b8] block whitespace-nowrap pl-[6vw] sm:pl-[12vw] md:pl-[18vw] lg:pl-[22vw]">
              TRENDS
            </span>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#848484] font-sans text-[11px] sm:text-xs tracking-[-0.01em]">
          <div>
            <span>Creative Technology Studio. © 2026 TRIFECTA TRENDS® All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Q2/Q3 2026 Partnerships</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
