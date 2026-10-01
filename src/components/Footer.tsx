"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "./icons";

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
    <footer className="bg-[#0e0e0e] border-t border-white/10 pt-20 pb-16 text-neutral-400 text-xs">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-start gap-0.5 text-2xl font-bold tracking-tight text-white uppercase hover:opacity-80 transition-opacity"
            >
              <span>TRIFECTA TRENDS</span>
              <span className="text-xs font-normal">©</span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Your next project deserves world-class design. Stop settling for mediocre and start working with designers who care as much as you do.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <span className="text-xs font-mono text-neutral-300 block mb-2">
                Subscribe to our newsletter.
              </span>
              <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Email direct copy */}
            <div className="pt-2">
              <span className="text-xs font-mono text-neutral-500 block mb-1">
                [Mail to]
              </span>
              <button
                onClick={copyEmail}
                className="text-white hover:text-neutral-300 font-mono text-xs flex items-center gap-2 cursor-pointer"
              >
                <span>contact@trifectatrends.com</span>
                <span className="text-[10px] text-neutral-400 bg-white/[0.08] px-2 py-0.5 rounded">
                  {copied ? "email copied" : "click to copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white">
              Studio
            </h4>
            <ul className="space-y-2.5 font-normal">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-white transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Work</span>
                  <span className="text-[10px] font-mono text-neutral-500">[12]</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Articles</span>
                  <span className="text-[10px] font-mono text-neutral-500">[10]</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 font-normal">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Brand Identity & Systems
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Web Design & Digital Platforms
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Product Design & UI/UX
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Marketing & Growth Creative
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Engineering & Framer Code
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-2.5 font-normal">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Giant Brand Wordmark */}
        <div className="pt-16 pb-8 select-none">
          <span className="text-[12vw] sm:text-[13vw] font-bold text-white/[0.12] sm:text-white/[0.15] leading-none tracking-tight block text-center uppercase">
            TRIFECTA TRENDS
          </span>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 font-mono text-[11px]">
          <div>
            <span>Based in Toronto (CA). © 2016 — 2026 TRIFECTA TRENDS.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
