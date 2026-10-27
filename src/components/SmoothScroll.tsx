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
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    // Detect small-screen mobile touch devices (< 768px with touch)
    // On desktop / laptops with touchscreen monitors or digitizers, we KEEP Lenis enabled
    // because wheel/trackpad scrolling on desktop should always be buttery smooth.
    const isMobileTouch =
      typeof window !== "undefined" &&
      window.innerWidth < 768 &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 1);

    if (isMobileTouch) {
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

    // Official Lenis + GSAP integration:
    // lagSmoothing(0) is essential so GSAP never skips or clamps frames when driving Lenis
    gsap.ticker.lagSmoothing(0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false,
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

    // Smooth anchor link click interceptor for lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, {
            offset: -80,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}

