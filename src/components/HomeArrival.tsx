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

    // If arrival already played in this session, skip immediately
    if (typeof window !== "undefined" && sessionStorage.getItem("trifecta_arrival_done")) {
      setPhase("done");
      window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
      window.dispatchEvent(new CustomEvent("trifecta-arrival-complete"));
      return;
    }

    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // On mobile devices, never lock body scroll to prevent touch hanging or freezing
    let previousBodyOverflow = "";
    let previousHtmlOverflow = "";
    if (!isMobile) {
      previousBodyOverflow = document.body.style.overflow;
      previousHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    const unlockScroll = () => {
      document.body.style.overflow = previousBodyOverflow || "";
      document.documentElement.style.overflow = previousHtmlOverflow || "";
    };

    const finishArrival = () => {
      try {
        sessionStorage.setItem("trifecta_arrival_done", "1");
      } catch {}
      unlockScroll();
      setPhase("done");
      window.dispatchEvent(new CustomEvent("trifecta-arrival-complete"));
    };

    // If on mobile or reduced motion: ultra-fast non-blocking entry
    if (isMobile || prefersReducedMotion) {
      window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
      const timer = setTimeout(() => {
        finishArrival();
      }, isMobile ? 350 : 200);

      return () => {
        clearTimeout(timer);
        unlockScroll();
      };
    }

    // Dismiss early if user scrolls (wheel), touches, or presses a key
    const onUserAction = () => {
      finishArrival();
    };
    window.addEventListener("wheel", onUserAction, { passive: true, once: true });
    window.addEventListener("touchstart", onUserAction, { passive: true, once: true });
    window.addEventListener("keydown", onUserAction, { once: true });

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          finishArrival();
        },
      });

      // Prepare hero immediately
      masterTl.call(
        () => {
          window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
        },
        undefined,
        0.15
      );

      // Snappy progressive build
      const TRIFECTA_COUNT = 8;
      const TRENDS_COUNT = 6;
      const START_TIME = 0.2;
      const STAGGER_STEP = 0.04;

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
            duration: 0.25,
            ease: "power2.out",
          },
          letterTime
        );
      }

      const LINE2_START = START_TIME + TRIFECTA_COUNT * STAGGER_STEP + 0.05;

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
            duration: 0.25,
            ease: "power2.out",
          },
          letterTime
        );
      }

      const RESOLVE_TIME = LINE2_START + TRENDS_COUNT * STAGGER_STEP + 0.02;

      masterTl.to(
        [line1Ref.current, line2Ref.current],
        {
          letterSpacing: "-0.04em",
          duration: 0.25,
          ease: "power2.out",
        },
        RESOLVE_TIME
      );

      masterTl.to(
        badgeRef.current,
        {
          opacity: 0.85,
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        RESOLVE_TIME + 0.05
      );

      masterTl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        RESOLVE_TIME + 0.1
      );

      // Brief hold (~0.35s)
      const HOLD_END = RESOLVE_TIME + 0.45;

      masterTl.to(
        lockupRef.current,
        {
          opacity: 0,
          scale: 0.98,
          duration: 0.22,
          ease: "power2.inOut",
        },
        HOLD_END
      );

      masterTl.to(
        solidBlackRef.current,
        {
          opacity: 0,
          duration: 0.06,
        },
        HOLD_END + 0.15
      );

      const REVEAL_START = HOLD_END + 0.2;

      masterTl.call(
        () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
          unlockScroll();
        },
        undefined,
        REVEAL_START
      );

      masterTl.to(
        leftShutterRef.current,
        {
          xPercent: -100,
          duration: 0.45,
          ease: "power4.out",
        },
        REVEAL_START
      );

      masterTl.to(
        rightShutterRef.current,
        {
          xPercent: 100,
          duration: 0.45,
          ease: "power4.out",
        },
        REVEAL_START
      );
    }, containerRef);

    return () => {
      window.removeEventListener("wheel", onUserAction);
      window.removeEventListener("touchstart", onUserAction);
      window.removeEventListener("keydown", onUserAction);
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
            className="flex items-center justify-center font-display font-bold text-white uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.85] select-none"
            style={{ letterSpacing: "-0.04em" }}
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
            className="flex items-center justify-center font-display font-bold text-[#b8b8b8] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.85] select-none mt-1 sm:mt-2"
            style={{ letterSpacing: "-0.04em" }}
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
              className="inline-block text-xs sm:text-sm md:text-base font-medium text-[#b8b8b8] font-display ml-1.5 sm:ml-2 select-none will-change-transform"
              style={{
                opacity: 0,
                transform: "translate3d(0, -6px, 0) scale(0.85)",
              }}
            >
              ©
            </span>
          </div>

          {/* Supporting Tagline (Mugen Studio style preset 1pvr9s) */}
          <div
            ref={taglineRef}
            className="mt-3.5 sm:mt-5 select-none will-change-transform overflow-hidden"
            style={{
              opacity: 0,
              transform: "translate3d(0, 8px, 0)",
            }}
          >
            <p className="text-xs sm:text-sm text-[#b8b8b8] font-semibold tracking-[-0.02em] font-display select-none">
              A design studio, built different.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
