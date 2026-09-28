"use client";

import React, { useEffect, useRef, useState } from "react";

interface MotionRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "clip-up" | "scale" | "stagger";
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
}

export function MotionReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  className = "",
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getStyles = (): React.CSSProperties => {
    const baseTransition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (variant === "clip-up") {
      return {
        clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        opacity: isVisible ? 1 : 0,
        transition: baseTransition,
      };
    }

    if (variant === "scale") {
      return {
        transform: isVisible ? "scale(1)" : "scale(0.94)",
        opacity: isVisible ? 1 : 0,
        transition: baseTransition,
      };
    }

    // Default "fade-up"
    return {
      transform: isVisible ? "translateY(0)" : "translateY(28px)",
      opacity: isVisible ? 1 : 0,
      transition: baseTransition,
    };
  };

  return (
    <div ref={ref} style={getStyles()} className={className}>
      {children}
    </div>
  );
}
