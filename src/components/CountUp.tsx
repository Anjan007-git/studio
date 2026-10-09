"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  triggerSelector?: string;
}

export function CountUp({
  end,
  start = 0,
  duration = 1.8,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  triggerSelector,
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    // Check reduced-motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const formatValue = (n: number) => {
      const fixed = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
      return `${prefix}${fixed}${suffix}`;
    };

    if (prefersReducedMotion) {
      el.textContent = formatValue(end);
      return;
    }

    // Set initial display to starting value
    el.textContent = formatValue(start);

    gsap.registerPlugin(ScrollTrigger);

    let trigger: Element | null = null;
    if (triggerSelector) {
      trigger = el.closest(triggerSelector) || document.querySelector(triggerSelector);
    }
    if (!trigger) {
      trigger = el.closest("section") || el;
    }

    const state = { value: start };

    const st = ScrollTrigger.create({
      trigger,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (animatedRef.current) return;
        animatedRef.current = true;

        gsap.to(state, {
          value: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            if (el) {
              el.textContent = formatValue(state.value);
            }
          },
          onComplete: () => {
            if (el) {
              el.textContent = formatValue(end);
            }
          },
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [end, start, duration, decimals, prefix, suffix, triggerSelector]);

  const fallback = `${prefix}${decimals > 0 ? end.toFixed(decimals) : end}${suffix}`;

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {fallback}
    </span>
  );
}

export default CountUp;
