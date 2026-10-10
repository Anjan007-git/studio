"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ScrollLinkedTextProps {
  /** The text string to split into scroll-illuminated words */
  text?: string;
  /** Optional array of paragraphs, each split and illuminated in continuous reading sequence */
  paragraphs?: string[];
  /** Optional array of line strings */
  lines?: string[];
  /** Fallback children (string or React nodes) */
  children?: React.ReactNode;
  /** HTML wrapper element tag */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "div" | "span";
  /** Custom wrapper CSS classes */
  className?: string;
  /** GSAP scrub intensity (e.g. 0.6 for silky responsive tracking) */
  scrub?: boolean | number;
  /** ScrollTrigger start viewport position */
  start?: string;
  /** ScrollTrigger end viewport position */
  end?: string;
  /** Stagger time increment between consecutive words in scrub sequence */
  stagger?: number;
  /** Optional list of words to highlight in bright white */
  highlightWords?: string[];
  /** Resting dim color (default: #484848 matching reference video) */
  dimColor?: string;
  /** Fully illuminated active color (default: #ffffff) */
  activeColor?: string;
  /** Highlight color for highlighted words (default: #ffffff) */
  highlightColor?: string;
  /** Resting dim opacity (default: 0.22) */
  dimOpacity?: number;
  /** Illuminated active opacity (default: 1.0) */
  activeOpacity?: number;
  /** Vertical resting displacement in pixels */
  yOffset?: number;
  /** Animation mode: "scrub" (tracks scrollbar) or "reveal" (triggered entrance) */
  mode?: "scrub" | "reveal";
}

export function ScrollLinkedText({
  text,
  paragraphs,
  lines,
  children,
  as: Component = "div",
  className = "",
  scrub = 0.6,
  start,
  end,
  stagger = 0.024,
  highlightWords,
  dimColor = "#484848",
  activeColor = "#ffffff",
  highlightColor = "#ffffff",
  dimOpacity = 0.22,
  activeOpacity = 1.0,
  yOffset = 6,
  mode = "scrub",
}: ScrollLinkedTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    // Respect reduced motion preference instantly
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const words = el.querySelectorAll<HTMLElement>(".scroll-word");
    if (!words.length) return;

    if (prefersReducedMotion) {
      gsap.set(words, {
        opacity: 1,
        y: 0,
        color: "inherit",
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Responsive trigger boundaries: start earlier on mobile viewports for fluid touch tracking
      const isMobile = window.innerWidth < 768;
      const computedStart = start || (isMobile ? "top 88%" : "top 82%");
      const computedEnd = end || (isMobile ? "top 42%" : "top 28%");

      if (mode === "scrub") {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: computedStart,
            end: computedEnd,
            scrub: typeof scrub === "number" ? scrub : scrub ? 0.6 : false,
            invalidateOnRefresh: true,
          },
        });

        words.forEach((word) => {
          const isHighlight = word.getAttribute("data-highlight") === "true";
          const targetColor = isHighlight
            ? highlightColor
            : highlightWords && highlightWords.length > 0
            ? "#b8b8b8"
            : activeColor;

          tl.fromTo(
            word,
            {
              opacity: dimOpacity,
              y: yOffset,
              color: dimColor,
            },
            {
              opacity: activeOpacity,
              y: 0,
              color: targetColor,
              duration: 0.35,
              ease: "power1.out",
            },
            `<${stagger}`
          );
        });
      } else {
        // Triggered smooth reveal entrance
        gsap.fromTo(
          words,
          {
            opacity: dimOpacity,
            y: yOffset,
            color: dimColor,
          },
          {
            opacity: activeOpacity,
            y: 0,
            color: (idx, target) => {
              const isHighlight = target.getAttribute("data-highlight") === "true";
              return isHighlight ? highlightColor : activeColor;
            },
            stagger,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: computedStart,
              once: true,
            },
          }
        );
      }
    }, el);

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("trifecta-transition-complete", handleRefresh);

    return () => {
      ctx.revert();
      window.removeEventListener("trifecta-transition-complete", handleRefresh);
    };
  }, [
    text,
    paragraphs,
    lines,
    children,
    scrub,
    start,
    end,
    stagger,
    highlightWords,
    dimColor,
    activeColor,
    highlightColor,
    dimOpacity,
    activeOpacity,
    yOffset,
    mode,
  ]);

  // Helper to test if a word matches highlight keywords
  const isWordHighlighted = (w: string) => {
    if (!highlightWords || highlightWords.length === 0) return false;
    const clean = w.toLowerCase().replace(/[^a-z0-9]/g, "");
    return highlightWords.some(
      (hw) => clean === hw.toLowerCase().replace(/[^a-z0-9]/g, "")
    );
  };

  // 1. Rendering paragraphs
  if (paragraphs && paragraphs.length > 0) {
    return (
      // @ts-expect-error Component dynamic tag
      <Component ref={containerRef} className={className}>
        {paragraphs.map((p, pIdx) => {
          const pWords = p.split(/\s+/).filter(Boolean);
          return (
            <p key={pIdx} className="mb-6 last:mb-0">
              {pWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="scroll-word inline-block mr-[0.28em] will-change-transform transform-gpu select-none"
                  data-highlight={isWordHighlighted(word) ? "true" : "false"}
                >
                  {word}
                </span>
              ))}
            </p>
          );
        })}
      </Component>
    );
  }

  // 2. Rendering lines
  if (lines && lines.length > 0) {
    return (
      // @ts-expect-error Component dynamic tag
      <Component ref={containerRef} className={className}>
        {lines.map((line, lIdx) => {
          const lineWords = line.split(/\s+/).filter(Boolean);
          return (
            <span key={lIdx} className="block leading-snug">
              {lineWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="scroll-word inline-block mr-[0.28em] will-change-transform transform-gpu select-none"
                  data-highlight={isWordHighlighted(word) ? "true" : "false"}
                >
                  {word}
                </span>
              ))}
            </span>
          );
        })}
      </Component>
    );
  }

  // 3. Rendering text string or string children
  const rawText = text || (typeof children === "string" ? children : null);
  if (rawText) {
    const words = rawText.split(/\s+/).filter(Boolean);
    return (
      // @ts-expect-error Component dynamic tag
      <Component ref={containerRef} className={className}>
        {words.map((word, idx) => (
          <span
            key={idx}
            className="scroll-word inline-block mr-[0.28em] will-change-transform transform-gpu select-none"
            data-highlight={isWordHighlighted(word) ? "true" : "false"}
          >
            {word}
          </span>
        ))}
      </Component>
    );
  }

  // 4. Fallback rendering for rich children
  return (
    // @ts-expect-error Component dynamic tag
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}

export default ScrollLinkedText;
