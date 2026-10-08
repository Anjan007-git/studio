"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Detect touch / mobile devices: native touch momentum is already 120Hz/60Hz hardware accelerated.
    // Hijacking touch scroll with Lenis causes severe stuttering, lag, and touch fights on mobile.
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768);

    // Use GSAP recommended lag smoothing to prevent stuttering/jumps on frame drops
    gsap.ticker.lagSmoothing(500, 33);

    if (prefersReducedMotion || isTouchDevice) {
      // On mobile / touch devices: keep native touch scroll completely untouched
      const handleNativeScroll = () => {
        window.dispatchEvent(
          new CustomEvent("lenis-scroll", {
            detail: {
              scroll: window.scrollY,
              velocity: 0,
              direction: 1,
            },
          })
        );
      };

      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleNativeScroll);
      };
    }

    // Configure Lenis for desktop wheel scrolling only
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.0,
    });

    window.__lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    lenis.on(
      "scroll",
      (e: { scroll: number; limit: number; velocity: number; direction: number }) => {
        window.dispatchEvent(
          new CustomEvent("lenis-scroll", {
            detail: {
              scroll: e.scroll,
              velocity: e.velocity,
              direction: e.direction,
            },
          })
        );
      }
    );

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}

