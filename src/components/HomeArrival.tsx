"use client";

import React, { useEffect, useState } from "react";

interface LetterConfig {
  char: string;
  dx: number;
  dy: number;
  delay: number;
}

const TRIFECTA_LETTERS: LetterConfig[] = [
  { char: "T", dx: -20, dy: -22, delay: 0 },
  { char: "R", dx: -10, dy: 24, delay: 80 },
  { char: "I", dx: 14, dy: -18, delay: 160 },
  { char: "F", dx: -22, dy: 16, delay: 240 },
  { char: "E", dx: 12, dy: 24, delay: 120 },
  { char: "C", dx: -16, dy: -18, delay: 280 },
  { char: "T", dx: 22, dy: 12, delay: 200 },
  { char: "A", dx: 18, dy: -24, delay: 320 },
];

const TRENDS_LETTERS: LetterConfig[] = [
  { char: "T", dx: -20, dy: 20, delay: 140 },
  { char: "R", dx: 12, dy: -24, delay: 260 },
  { char: "E", dx: -16, dy: -14, delay: 100 },
  { char: "N", dx: 22, dy: 18, delay: 220 },
  { char: "D", dx: -10, dy: 24, delay: 300 },
  { char: "S", dx: 24, dy: -18, delay: 180 },
];

type ArrivalPhase =
  | "black"
  | "fragmented"
  | "assembling"
  | "locked"
  | "hold"
  | "revealing"
  | "done";

export function HomeArrival() {
  const [phase, setPhase] = useState<ArrivalPhase>("black");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile screen size to scale travel distance on small viewports
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    // Lock page scrolling during arrival sequence
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Respect reduced motion accessibility setting
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // In reduced-motion mode, immediately show the clean centered brand lockup
      const tLock = setTimeout(() => {
        setPhase("locked");
      }, 100);

      const tStart = setTimeout(() => {
        setPhase("revealing");
        window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
      }, 1400);

      const tDone = setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = previousOverflow || "";
        window.dispatchEvent(new CustomEvent("trifecta-arrival-complete"));
      }, 2100);

      return () => {
        window.removeEventListener("resize", checkMobile);
        document.body.style.overflow = previousOverflow || "";
        clearTimeout(tLock);
        clearTimeout(tStart);
        clearTimeout(tDone);
      };
    }

    // Phase 1 -> 2: 0.0s - 0.70s Empty hold black screen
    // Phase 3: 0.70s - 1.50s Fragmented letters begin appearing
    const t1 = setTimeout(() => {
      setPhase("fragmented");
    }, 700);

    // Phase 4: 1.50s - 2.20s Letters resolve toward center lockup
    const t2 = setTimeout(() => {
      setPhase("assembling");
    }, 1500);

    // Phase 5: 2.20s - 3.70s Clean centered brand lockup + tagline fade
    const t3 = setTimeout(() => {
      setPhase("locked");
    }, 2200);

    // Phase 6: 3.70s - 4.00s Short cinematic anticipation hold
    const t4 = setTimeout(() => {
      setPhase("hold");
    }, 3700);

    // Phase 7: 4.00s - 4.80s Transition into homepage & reveal
    const t5 = setTimeout(() => {
      setPhase("revealing");
      window.dispatchEvent(new CustomEvent("trifecta-arrival-start"));
    }, 4000);

    // Phase 8: 4.80s+ Normal website interaction & unmount overlay
    const t6 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = previousOverflow || "";
      window.dispatchEvent(new CustomEvent("trifecta-arrival-complete"));
    }, 4800);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.overflow = previousOverflow || "";
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  if (phase === "done") return null;

  // Responsive offset multiplier
  const offsetMultiplier = isMobile ? 0.5 : 1.0;

  // Calculate letter transform and opacity per animation phase
  const getLetterStyle = (item: LetterConfig): React.CSSProperties => {
    const targetDx = item.dx * offsetMultiplier;
    const targetDy = item.dy * offsetMultiplier;

    if (phase === "black") {
      return {
        transform: `translate3d(${targetDx}px, ${targetDy}px, 0)`,
        opacity: 0,
        filter: "blur(4px)",
        color: "#ffffff",
        transition: "none",
      };
    }

    if (phase === "fragmented") {
      return {
        transform: `translate3d(${targetDx}px, ${targetDy}px, 0)`,
        opacity: 1,
        filter: "blur(0px)",
        color: "#ffffff",
        transition: `opacity 450ms cubic-bezier(0.16, 1, 0.3, 1) ${item.delay}ms, filter 450ms ease-out ${item.delay}ms`,
      };
    }

    // "assembling", "locked", "hold", "revealing"
    return {
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
      filter: "blur(0px)",
      color: "#ffffff",
      transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease",
    };
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white pointer-events-none select-none transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === "revealing"
          ? "opacity-0 scale-[1.03] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: "#050505", color: "#ffffff" }}
      aria-hidden={phase === "revealing"}
    >
      {/* Centered Brand Lockup */}
      <div
        className={`flex flex-col items-center justify-center text-center px-4 sm:px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === "revealing"
            ? "opacity-0 scale-110 blur-xs -translate-y-2"
            : "opacity-100 scale-100 blur-0 translate-y-0"
        }`}
      >
        {/* Main Brand Line: TRIFECTA TRENDS with Fragmented Assembly */}
        <div className="flex items-start justify-center gap-2 sm:gap-2.5">
          <div className="flex items-center tracking-[-0.03em] font-sans font-bold text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none select-none">
            {/* Word 1: TRIFECTA */}
            <span className="flex items-center">
              {TRIFECTA_LETTERS.map((item, index) => (
                <span
                  key={`t-${index}`}
                  style={getLetterStyle(item)}
                  className="inline-block will-change-transform"
                >
                  {item.char}
                </span>
              ))}
            </span>

            {/* Word Space */}
            <span className="inline-block w-2 sm:w-3 md:w-3.5" />

            {/* Word 2: TRENDS */}
            <span className="flex items-center">
              {TRENDS_LETTERS.map((item, index) => (
                <span
                  key={`tr-${index}`}
                  style={getLetterStyle(item)}
                  className="inline-block will-change-transform"
                >
                  {item.char}
                </span>
              ))}
            </span>
          </div>

          {/* Copyright badge resolving alongside brand */}
          <span
            style={{
              opacity: phase === "black" ? 0 : 1,
              color: "rgba(255, 255, 255, 0.85)",
              transform:
                phase === "black" || phase === "fragmented"
                  ? `translate3d(${12 * offsetMultiplier}px, ${-12 * offsetMultiplier}px, 0)`
                  : "translate3d(0, 0, 0)",
              transition:
                phase === "black"
                  ? "none"
                  : phase === "fragmented"
                  ? "opacity 400ms ease 300ms"
                  : "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="text-xs sm:text-sm font-normal text-white/80 font-mono mt-0.5 select-none will-change-transform"
          >
            ©
          </span>
        </div>

        {/* Supporting Tagline (Existing Website Copy) */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out mt-3 sm:mt-4 ${
            phase === "locked" || phase === "hold" || phase === "revealing"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <p
            style={{ color: "#a3a3a3" }}
            className="text-[10px] sm:text-xs text-neutral-400 font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase font-mono select-none"
          >
            A design studio, built different.
          </p>
        </div>
      </div>
    </div>
  );
}
