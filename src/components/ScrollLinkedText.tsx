"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollLinkedTextProps {
  children?: React.ReactNode;
  lines?: string[];
  className?: string;
  scrub?: boolean | number;
  start?: string;
  end?: string;
}

export function ScrollLinkedText({
  children,
  lines,
  className = "",
  scrub = 0.8,
  start = "top 90%",
  end = "top 60%",
}: ScrollLinkedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const items = el.querySelectorAll<HTMLElement>(".scroll-line-inner");
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          yPercent: 105,
          opacity: 0.15,
          rotateX: 10,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: scrub === true ? 0.8 : scrub,
            invalidateOnRefresh: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrub, start, end]);

  if (lines && lines.length > 0) {
    return (
      <div ref={containerRef} className={`select-none ${className}`}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden py-0.5">
            <span className="scroll-line-inner inline-block will-change-transform transform-gpu">
              {line}
            </span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <span className="scroll-line-inner inline-block w-full will-change-transform transform-gpu">
        {children}
      </span>
    </div>
  );
}
