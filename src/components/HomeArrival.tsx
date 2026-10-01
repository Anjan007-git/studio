"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const TRIFECTA_CHARS = ["T", "R", "I", "F", "E", "C", "T", "A"];
const TRENDS_CHARS = ["T", "R", "E", "N", "D", "S"];

export function HomeArrival() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"active" | "done">("active");

  const containerRef = useRef<HTMLDivElement>(null);
  const solidBlackRef = useRef<HTMLDivElement>(null);
  const leftShutterRef = useRef<HTMLDivElement>(null);
  const rightShutterRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on homepage route '/'
    if (pathname !== "/") {
      return;
    }

    // Temporarily lock page scrolling during arrival sequence
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const unlockScroll = () => {
      document.body.style.overflow = previousBodyOverflow || "";
      document.documentElement.style.overflow = previousHtmlOverflow || "";
    };

    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Accessibility fallback: direct brand fade without letter stagger
        const tlReduced = gsap.timeline({
          onComplete: () => {
            unlockScroll();
            setPhase("done");
            window.dispatchEvent(new CustomEvent("trifecta-arrival-complete"));
          },
        });

        tlReduced.set(letterRefs.current, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "none",
        });
        tlReduced.set(
          [line1Ref.current, line2Ref.current, badgeRef.current, taglineRef.current],
          {
            opacity: 1,
            filter: "none",
            letterSpacing: "-0.035em",
          }
        );

        tlReduced.fromTo(
          lockupRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.45, ease: "power2.out" },
          0.2
        );

        tlReduced.call(
          () => {
            window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
          },
          undefined,
          0.8
        );

        tlReduced.to(
          lockupRef.current,
          { opacity: 0, duration: 0.35, ease: "power2.inOut" },
          1.5
        );
        tlReduced.to(
          containerRef.current,
          { opacity: 0, duration: 0.4, ease: "power2.out" },
          1.8
        );

        return;
      }

      // =====================================================================
      // MASTER GSAP TIMELINE — EXACT MUGEN-STYLE ARRIVAL FOR TRIFECTA TRENDS
      // =====================================================================
      const masterTl = gsap.timeline({
        onComplete: () => {
          unlockScroll();
          setPhase("done");
          window.dispatchEvent(new CustomEvent("trifecta-arrival-complete"));
        },
      });

      // Prepare hero underneath while covered by pure black
      masterTl.call(
        () => {
          window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
        },
        undefined,
        0.8
      );

      // PHASE 3 — LETTER-BY-LETTER PROGRESSIVE BUILD
      // Line 1: TRIFECTA (8 letters)
      // Line 2: TRENDS (6 letters)
      const TRIFECTA_COUNT = 8;
      const TRENDS_COUNT = 6;
      const START_TIME = 0.75;
      const STAGGER_STEP = 0.115; // smooth editorial pacing

      // Animate each letter of TRIFECTA
      for (let i = 0; i < TRIFECTA_COUNT; i++) {
        const letterEl = letterRefs.current[i];
        if (!letterEl) continue;
        const letterTime = START_TIME + i * STAGGER_STEP;

        masterTl.to(
          letterEl,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.38,
            ease: "power2.out",
          },
          letterTime
        );
      }

      // Short breath between lines (~0.12s)
      const LINE2_START = START_TIME + TRIFECTA_COUNT * STAGGER_STEP + 0.12;

      // Animate each letter of TRENDS
      for (let i = 0; i < TRENDS_COUNT; i++) {
        const letterEl = letterRefs.current[TRIFECTA_COUNT + i];
        if (!letterEl) continue;
        const letterTime = LINE2_START + i * STAGGER_STEP;

        masterTl.to(
          letterEl,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.38,
            ease: "power2.out",
          },
          letterTime
        );
      }

      // PHASE 4 — COMPLETE BRAND RESOLVES
      // Settle typography spacing smoothly into crisp final kerning
      const RESOLVE_TIME = LINE2_START + TRENDS_COUNT * STAGGER_STEP + 0.05;

      masterTl.to(
        [line1Ref.current, line2Ref.current],
        {
          letterSpacing: "-0.035em",
          duration: 0.45,
          ease: "power2.out",
        },
        RESOLVE_TIME
      );

      // Copyright badge appears
      masterTl.to(
        badgeRef.current,
        {
          opacity: 0.85,
          scale: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        RESOLVE_TIME + 0.1
      );

      // Tagline reveals smoothly underneath
      masterTl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        RESOLVE_TIME + 0.25
      );

      // PHASE 5, 6, 7 — CENTERED BRAND LOCKUP SHORT HOLD
      // Holds minimal, luxurious, and quiet against pure black negative space
      const HOLD_END = RESOLVE_TIME + 1.5;

      // PHASE 8 — TRANSITION BACK TO BLACK
      // Centered lockup smoothly recedes into pure black
      masterTl.to(
        lockupRef.current,
        {
          opacity: 0,
          scale: 0.98,
          duration: 0.32,
          ease: "power2.inOut",
        },
        HOLD_END
      );

      // Fade out solid black backing to expose the parting shutters
      masterTl.to(
        solidBlackRef.current,
        {
          opacity: 0,
          duration: 0.08,
        },
        HOLD_END + 0.28
      );

      // Brief pure dark transition hold (~0.18s)
      const REVEAL_START = HOLD_END + 0.42;

      // Allow pointer events to fall through to website as reveal starts
      masterTl.call(
        () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
        },
        undefined,
        REVEAL_START
      );

      // PHASE 9 — CENTER-OUT HOMEPAGE REVEAL
      // The screen opens outward from the center like a cinematic shutter.
      // Left shutter slides left (-100%), Right shutter slides right (+100%).
      masterTl.to(
        leftShutterRef.current,
        {
          xPercent: -100,
          duration: 0.65,
          ease: "power4.out",
        },
        REVEAL_START
      );

      masterTl.to(
        rightShutterRef.current,
        {
          xPercent: 100,
          duration: 0.65,
          ease: "power4.out",
        },
        REVEAL_START
      );
    }, containerRef);

    return () => {
      ctx.revert();
      unlockScroll();
    };
  }, [pathname]);

  if (phase === "done" || pathname !== "/") {
    return null;
  }

  return (
    <div
      ref={containerRef}
      id="home-arrival-overlay"
      className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden"
      style={{ backgroundColor: "transparent" }}
      aria-hidden="true"
    >
      {/* Solid Black Backing: Guarantees 100% pure black during Phases 1–7 with zero seam leaks */}
      <div
        ref={solidBlackRef}
        className="absolute inset-0 bg-[#000000] z-0 pointer-events-none"
      />

      {/* Left Shutter: covers left 50.5% of viewport, opens outward to left (-100%) */}
      <div
        ref={leftShutterRef}
        className="absolute top-0 left-0 bottom-0 w-[50.5%] bg-[#000000] z-[1] pointer-events-none will-change-transform"
        style={{ transformOrigin: "left center" }}
      />

      {/* Right Shutter: covers right 50.5% of viewport, opens outward to right (+100%) */}
      <div
        ref={rightShutterRef}
        className="absolute top-0 right-0 bottom-0 w-[50.5%] bg-[#000000] z-[1] pointer-events-none will-change-transform"
        style={{ transformOrigin: "right center" }}
      />

      {/* Centered Brand Lockup Layer: positioned in front of shutters during assembly and hold */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <div
          ref={lockupRef}
          className="flex flex-col items-center justify-center text-center px-4 sm:px-6 select-none will-change-transform"
        >
          {/* Brand Line 1: TRIFECTA */}
          <div
            ref={line1Ref}
            className="flex items-center justify-center font-sans font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.92] select-none"
            style={{ letterSpacing: "0.06em" }}
          >
            {TRIFECTA_CHARS.map((char, index) => (
              <span
                key={`t-${index}`}
                ref={(el) => {
                  letterRefs.current[index] = el;
                }}
                className="inline-block will-change-transform"
                style={{
                  opacity: 0,
                  transform: "translate3d(14px, 4px, 0) scale(0.95)",
                  filter: "blur(2px)",
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Brand Line 2: TRENDS © */}
          <div
            ref={line2Ref}
            className="flex items-center justify-center font-sans font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.92] select-none mt-1 sm:mt-2"
            style={{ letterSpacing: "0.06em" }}
          >
            {TRENDS_CHARS.map((char, index) => (
              <span
                key={`tr-${index}`}
                ref={(el) => {
                  letterRefs.current[TRIFECTA_CHARS.length + index] = el;
                }}
                className="inline-block will-change-transform"
                style={{
                  opacity: 0,
                  transform: "translate3d(14px, 4px, 0) scale(0.95)",
                  filter: "blur(2px)",
                }}
              >
                {char}
              </span>
            ))}

            {/* Subtle Copyright badge */}
            <span
              ref={badgeRef}
              className="inline-block text-xs sm:text-sm md:text-base font-normal text-white/80 font-mono ml-1.5 sm:ml-2 select-none will-change-transform"
              style={{
                opacity: 0,
                transform: "translate3d(0, -6px, 0) scale(0.85)",
              }}
            >
              ©
            </span>
          </div>

          {/* Supporting Tagline (Existing Website Brand Copy) */}
          <div
            ref={taglineRef}
            className="mt-3.5 sm:mt-5 select-none will-change-transform overflow-hidden"
            style={{
              opacity: 0,
              transform: "translate3d(0, 8px, 0)",
            }}
          >
            <p className="text-[10px] sm:text-xs text-neutral-400 font-light tracking-[0.22em] sm:tracking-[0.25em] uppercase font-mono select-none">
              A design studio, built different.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
