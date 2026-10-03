"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { XIcon, InstagramIcon, DribbbleIcon, LinkedInIcon, X } from "./icons";

export function Navbar() {
  const [studioTime, setStudioTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);
  const menuMetaRef = useRef<HTMLDivElement>(null);
  const menuFooterRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setStudioTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // GSAP-powered mobile menu choreography
  const openMenu = useCallback(() => {
    const menu = menuRef.current;
    if (!menu) return;

    setMenuOpen(true);
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();

    // Kill any previous timeline
    tlRef.current?.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    // Panel slides in
    tl.fromTo(
      menu,
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.5,
        ease: "power3.inOut",
      }
    );

    // Menu items stagger in
    tl.fromTo(
      menuItemsRef.current.filter(Boolean),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.2"
    );

    // Meta section
    if (menuMetaRef.current) {
      tl.fromTo(
        menuMetaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Footer
    if (menuFooterRef.current) {
      tl.fromTo(
        menuFooterRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
    }
  }, []);

  const closeMenu = useCallback(() => {
    const menu = menuRef.current;
    if (!menu) return;

    tlRef.current?.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        setMenuOpen(false);
        document.body.style.overflow = "unset";
        window.__lenis?.start();
      },
    });
    tlRef.current = tl;

    // Reverse: items fade out
    tl.to(menuItemsRef.current.filter(Boolean), {
      y: -20,
      opacity: 0,
      stagger: 0.03,
      duration: 0.25,
      ease: "power2.in",
    });

    // Panel slides out
    tl.to(
      menu,
      {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.1"
    );
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
      window.__lenis?.start();
      tlRef.current?.kill();
    };
  }, []);

  const handleToggle = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleNavClick = () => {
    closeMenu();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@trifectatrends.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/studio", label: "Studio" },
    { href: "/projects", label: "Work", count: "[12]" },
    { href: "/articles", label: "Articles", count: "[10]" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar — mix-blend-exclusion for text visibility on any bg */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-exclusion text-white pointer-events-auto">
        <div className="w-full px-5 sm:px-10 md:px-14 py-4 sm:py-5 pt-[max(1.25rem,env(safe-area-inset-top))] flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-start gap-0.5 group focus:outline-none"
            aria-label="TRIFECTA TRENDS Home"
          >
            <span className="text-base sm:text-xl md:text-2xl font-bold tracking-tight uppercase select-none">
              TRIFECTA TRENDS
            </span>
            <span className="text-[10px] sm:text-[11px] font-normal leading-none select-none">
              ®
            </span>
          </Link>

          {/* Center: Live Studio Time */}
          <div className="hidden md:flex items-center gap-2 text-xs font-normal tracking-wide text-neutral-200 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>New York (EST)</span>
            <span className="tabular-nums font-mono text-white">
              {studioTime || "03:39 PM"}
            </span>
          </div>

          {/* Right: Our Work link (tablet/desktop) & Minimal Hamburger */}
          <div className="flex items-center gap-4 sm:gap-8">
            <Link
              href="/projects"
              className="hidden sm:inline-flex text-xs sm:text-sm font-medium tracking-tight text-white hover:opacity-75 transition-opacity"
            >
              Our Work <span className="text-[11px] text-neutral-300 font-mono ml-1">[12]</span>
            </Link>

            {/* Hamburger Button (animated 2 bars) */}
            <button
              onClick={handleToggle}
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
                    : "w-6 group-hover:w-4"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu — GSAP-powered choreography */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 bg-[#0a0a0a] text-white overflow-y-auto overscroll-contain flex flex-col justify-between ${
          menuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
        style={{ clipPath: menuOpen ? undefined : "inset(0 0 100% 0)" }}
      >
        {/* Mobile Menu Header */}
        <div className="w-full px-6 sm:px-10 md:px-14 py-5 pt-[max(1.25rem,env(safe-area-inset-top))] flex items-center justify-between border-b border-white/[0.08]">
          <span className="text-sm font-normal text-neutral-400 select-none">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className="p-1 text-white hover:text-neutral-400 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="w-full px-6 sm:px-10 md:px-14 py-8 sm:py-12 flex-1 flex flex-col justify-center max-w-4xl">
          <nav className="flex flex-col space-y-3 sm:space-y-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                ref={(el) => {
                  menuItemsRef.current[i] = el!;
                }}
                href={link.href}
                onClick={handleNavClick}
                className="inline-flex items-baseline gap-2 text-3xl sm:text-5xl font-medium tracking-tight text-white hover:text-neutral-400 transition-colors"
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className="text-lg sm:text-2xl font-normal text-neutral-500 font-mono">
                    {link.count}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mid Section: Let's Talk + Email + Live Studio Time + Socials */}
        <div
          ref={menuMetaRef}
          className="w-full px-6 sm:px-10 md:px-14 py-8 border-t border-white/[0.08] max-w-4xl flex flex-col gap-6"
        >
          <div>
            <span className="text-xs text-neutral-400 block mb-2">Let&apos;s Talk</span>
            <div className="inline-block border-b border-neutral-700 pb-1">
              <button
                onClick={copyEmail}
                className="text-lg sm:text-2xl font-bold text-white hover:text-neutral-300 transition-colors flex items-center gap-2 text-left"
                title="Click to copy email"
              >
                <span>contact@trifectatrends.com</span>
                <span className="text-neutral-400 font-normal">{copied ? "✓ copied" : "+"}</span>
              </button>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-neutral-400 font-normal flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>New York (EST)</span>
            <span className="tabular-nums font-mono text-white">{studioTime || "03:39 PM"}</span>
          </div>

          <div className="pt-2">
            <span className="text-xs text-neutral-400 block mb-3">Socials</span>
            <div className="flex items-center gap-5 text-white">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <DribbbleIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Footer */}
        <div
          ref={menuFooterRef}
          className="w-full px-6 sm:px-10 md:px-14 py-6 border-t border-white/[0.08] pb-[max(1.5rem,calc(env(safe-area-inset-bottom)+1rem))] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400"
        >
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              onClick={handleNavClick}
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Privacy Policy <span className="text-[10px]">↗</span>
            </Link>
            <Link
              href="/terms"
              onClick={handleNavClick}
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Terms of Service <span className="text-[10px]">↗</span>
            </Link>
          </div>
          <div className="text-[11px] text-neutral-500">
            © 2026 TRIFECTA TRENDS® All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
