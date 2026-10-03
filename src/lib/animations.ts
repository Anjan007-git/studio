"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  REDUCED-MOTION DETECTION                                          */
/* ------------------------------------------------------------------ */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ------------------------------------------------------------------ */
/*  TEXT SPLITTING UTILITIES                                           */
/* ------------------------------------------------------------------ */

/** Split text node into individually-animatable line wrappers */
export function splitIntoLines(element: HTMLElement): HTMLElement[] {
  const text = element.textContent || "";
  const words = text.split(/\s+/).filter(Boolean);
  element.innerHTML = "";

  const lineContainer = document.createElement("span");
  lineContainer.style.display = "inline";
  element.appendChild(lineContainer);

  const lines: HTMLElement[] = [];
  let currentLine = document.createElement("span");
  currentLine.className = "split-line";
  currentLine.style.display = "inline-block";
  currentLine.style.overflow = "hidden";
  lineContainer.appendChild(currentLine);

  let lastTop = -1;

  words.forEach((word, i) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "split-word";
    wordSpan.style.display = "inline-block";
    wordSpan.style.willChange = "transform";
    wordSpan.textContent = (i > 0 ? " " : "") + word;
    currentLine.appendChild(wordSpan);

    const rect = wordSpan.getBoundingClientRect();
    if (lastTop >= 0 && rect.top > lastTop + 2) {
      // New line detected — move word to new line wrapper
      currentLine.removeChild(wordSpan);
      currentLine = document.createElement("span");
      currentLine.className = "split-line";
      currentLine.style.display = "inline-block";
      currentLine.style.overflow = "hidden";
      lineContainer.appendChild(currentLine);

      wordSpan.textContent = word; // Remove leading space
      currentLine.appendChild(wordSpan);
      lines.push(currentLine);
    } else if (lastTop < 0) {
      lines.push(currentLine);
    }
    lastTop = rect.top;
  });

  return lines;
}

/** Split text into individual characters */
export function splitIntoChars(element: HTMLElement): HTMLElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";

  const chars: HTMLElement[] = [];
  for (const char of text) {
    const span = document.createElement("span");
    span.className = "split-char";
    span.style.display = "inline-block";
    span.style.willChange = "transform";
    if (char === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }
    element.appendChild(span);
    chars.push(span);
  }

  return chars;
}

/* ------------------------------------------------------------------ */
/*  SCROLL-LINKED TEXT REVEAL                                          */
/* ------------------------------------------------------------------ */

export interface TextRevealOptions {
  trigger: HTMLElement;
  targets: HTMLElement[] | NodeListOf<Element>;
  start?: string;
  end?: string;
  stagger?: number;
  fromY?: number;
  scrub?: number | boolean;
}

export function createScrollTextReveal(opts: TextRevealOptions): ScrollTrigger {
  const {
    trigger,
    targets,
    start = "top 85%",
    end = "top 40%",
    stagger = 0.1,
    fromY = 100,
    scrub = 0.6,
  } = opts;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
    },
  });

  tl.fromTo(
    targets,
    {
      yPercent: fromY,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      stagger,
      ease: "none",
    }
  );

  return tl.scrollTrigger!;
}

/* ------------------------------------------------------------------ */
/*  SCROLL-LINKED PARALLAX                                             */
/* ------------------------------------------------------------------ */

export interface ParallaxOptions {
  trigger: HTMLElement;
  target: HTMLElement;
  speed?: number; // positive = moves slower, negative = moves faster
  start?: string;
  end?: string;
  scrub?: number;
}

export function createParallax(opts: ParallaxOptions): ScrollTrigger {
  const {
    trigger,
    target,
    speed = 0.3,
    start = "top bottom",
    end = "bottom top",
    scrub = 0.5,
  } = opts;

  const yDistance = speed * 100;

  gsap.fromTo(
    target,
    { y: -yDistance },
    {
      y: yDistance,
      ease: "none",
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
      },
    }
  );

  return ScrollTrigger.getAll()[ScrollTrigger.getAll().length - 1];
}

/* ------------------------------------------------------------------ */
/*  NUMBER COUNTER ANIMATION                                           */
/* ------------------------------------------------------------------ */

export interface CounterOptions {
  element: HTMLElement;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trigger?: HTMLElement;
  start?: string;
  useScrollTrigger?: boolean;
}

export function createCounter(opts: CounterOptions): gsap.core.Tween {
  const {
    element,
    end,
    duration = 2,
    prefix = "",
    suffix = "",
    decimals = 0,
    trigger,
    start = "top 80%",
    useScrollTrigger = true,
  } = opts;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: end,
    duration,
    ease: "power2.out",
    scrollTrigger: useScrollTrigger
      ? {
          trigger: trigger || element,
          start,
          toggleActions: "play none none reverse",
        }
      : undefined,
    onUpdate: () => {
      element.textContent = `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
    },
  });
}

/* ------------------------------------------------------------------ */
/*  IMAGE REVEAL ANIMATION                                             */
/* ------------------------------------------------------------------ */

export interface ImageRevealOptions {
  wrapper: HTMLElement;
  image: HTMLElement;
  trigger?: HTMLElement;
  start?: string;
  end?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function createImageReveal(opts: ImageRevealOptions): ScrollTrigger {
  const {
    wrapper,
    image,
    trigger,
    start = "top 80%",
    end = "top 30%",
    direction = "up",
  } = opts;

  const clipFrom =
    direction === "up"
      ? "inset(100% 0% 0% 0%)"
      : direction === "down"
        ? "inset(0% 0% 100% 0%)"
        : direction === "left"
          ? "inset(0% 100% 0% 0%)"
          : "inset(0% 0% 0% 100%)";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger || wrapper,
      start,
      end,
      scrub: 0.6,
    },
  });

  tl.fromTo(
    wrapper,
    { clipPath: clipFrom },
    { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }
  );

  tl.fromTo(
    image,
    { scale: 1.2 },
    { scale: 1, ease: "none" },
    0
  );

  return tl.scrollTrigger!;
}

/* ------------------------------------------------------------------ */
/*  STAGGERED ENTRANCE                                                 */
/* ------------------------------------------------------------------ */

export interface StaggerEntranceOptions {
  targets: HTMLElement[] | NodeListOf<Element>;
  trigger: HTMLElement;
  start?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}

export function createStaggerEntrance(
  opts: StaggerEntranceOptions
): ScrollTrigger {
  const {
    targets,
    trigger,
    start = "top 80%",
    stagger = 0.08,
    y = 40,
    duration = 0.8,
  } = opts;

  gsap.fromTo(
    targets,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger,
      duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none reverse",
      },
    }
  );

  return ScrollTrigger.getAll()[ScrollTrigger.getAll().length - 1];
}
