"use client";

import React, { useEffect, useRef, useState } from "react";

export interface MotionRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade" | "clip-up" | "scale";
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  yOffset?: number; // px
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  as?: React.ElementType;
}

export function MotionReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.08,
  yOffset,
  className = "",
  style = {},
  once = true,
  as: Component = "div",
}: MotionRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSettled, setHasSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference instantly
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Clear will-change after transition completes to save GPU memory
  useEffect(() => {
    if (isVisible && !hasSettled) {
      const timer = setTimeout(() => {
        setHasSettled(true);
      }, duration + delay + 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasSettled, duration, delay]);

  const defaultY = yOffset ?? (variant === "fade-down" ? -20 : 24);
  const bezier = "cubic-bezier(0.16, 1, 0.3, 1)";
  const baseTransition = `opacity ${duration}ms ${bezier} ${delay}ms, transform ${duration}ms ${bezier} ${delay}ms, clip-path ${duration}ms ${bezier} ${delay}ms`;

  const getVariantStyles = (): React.CSSProperties => {
    if (variant === "clip-up") {
      return {
        clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        transform: isVisible ? "translateY(0)" : `translateY(${defaultY}px)`,
        opacity: isVisible ? 1 : 0,
        transition: baseTransition,
        willChange: hasSettled ? "auto" : "transform, opacity, clip-path",
      };
    }

    if (variant === "scale") {
      return {
        transform: isVisible ? "scale(1)" : "scale(0.96)",
        opacity: isVisible ? 1 : 0,
        transition: baseTransition,
        willChange: hasSettled ? "auto" : "transform, opacity",
      };
    }

    if (variant === "fade") {
      return {
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ${bezier} ${delay}ms`,
        willChange: hasSettled ? "auto" : "opacity",
      };
    }

    // Default "fade-up" or "fade-down"
    return {
      transform: isVisible ? "translateY(0)" : `translateY(${defaultY}px)`,
      opacity: isVisible ? 1 : 0,
      transition: baseTransition,
      willChange: hasSettled ? "auto" : "transform, opacity",
    };
  };

  return (
    <Component
      ref={ref}
      style={{
        ...getVariantStyles(),
        ...style,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

export default MotionReveal;
