"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [torontoTime, setTorontoTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTorontoTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);


  const copyEmail = () => {
    navigator.clipboard.writeText("contact@mugen.design");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Top Bar matching Mugen exclusion topbar */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-exclusion text-white pointer-events-auto">
        <div className="w-full px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-start gap-0.5 group focus:outline-none"
            aria-label="Mugen Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight uppercase select-none">
              MUGEN
            </span>
            <span className="text-[11px] font-normal leading-none select-none">
              ®
            </span>
          </Link>

          {/* Center: Live Toronto Time */}
          <div className="hidden md:flex items-center gap-2 text-xs font-normal tracking-wide text-neutral-200 select-none">
            <span>Toronto (CA)</span>
            <span className="tabular-nums font-mono">
              {torontoTime || "10:06 PM"}
            </span>
          </div>

          {/* Right: Our Work link & Hamburger */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/projects"
              className="text-xs sm:text-sm font-medium tracking-tight text-white hover:opacity-75 transition-opacity"
            >
              Our Work <span className="text-[11px] text-neutral-300 font-mono">[12]</span>
            </Link>

            {/* Hamburger Button (animated 2 bars) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 focus:outline-none group cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen
                    ? "w-6 rotate-45 translate-y-[4.5px]"
                    : "w-6 group-hover:w-5"
                }`}
              />
              <span
                className={`h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen
                    ? "w-6 -rotate-45 -translate-y-[3px]"
                    : "w-4 group-hover:w-6"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between p-6 sm:p-12 md:p-16 ${
          menuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Top Spacer to align below Navbar */}
        <div className="h-16" />

        {/* Navigation Links Grid */}
        <div className="max-w-5xl mx-auto w-full py-8 flex flex-col justify-center flex-1">
          <nav className="flex flex-col space-y-4 sm:space-y-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              <span className="group-hover:translate-x-3 transition-transform duration-300">
                Home
              </span>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                01
              </span>
            </Link>

            <Link
              href="/studio"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              <span className="group-hover:translate-x-3 transition-transform duration-300">
                Studio
              </span>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                02
              </span>
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3 group-hover:translate-x-3 transition-transform duration-300">
                <span>Work</span>
                <span className="text-lg sm:text-2xl font-mono text-neutral-500">
                  [12]
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                03
              </span>
            </Link>

            <Link
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              <span className="group-hover:translate-x-3 transition-transform duration-300">
                Pricing
              </span>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                04
              </span>
            </Link>

            <Link
              href="/articles"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3 group-hover:translate-x-3 transition-transform duration-300">
                <span>Articles</span>
                <span className="text-lg sm:text-2xl font-mono text-neutral-500">
                  [10]
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                05
              </span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              <span className="group-hover:translate-x-3 transition-transform duration-300">
                Contact
              </span>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                06
              </span>
            </Link>
          </nav>
        </div>

        {/* Bottom Bar: Email copy & Socials */}
        <div className="max-w-5xl mx-auto w-full pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-neutral-400">
          <div>
            <span className="text-neutral-500 font-mono block mb-1">
              [Mail to]
            </span>
            <button
              onClick={copyEmail}
              className="text-white hover:text-neutral-300 transition-colors flex items-center gap-2 group font-mono"
            >
              <span>contact@mugen.design</span>
              <span className="text-[10px] text-neutral-400 bg-white/[0.08] px-2 py-0.5 rounded group-hover:bg-white/[0.15]">
                {copied ? "email copied" : "click to copy"}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
