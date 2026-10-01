"use client";

import React, { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
  speed?: number; // 0.1 to 0.5
}

export function ParallaxImage({
  containerClassName = "",
  imageClassName = "",
  speed = 0.12,
  alt,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const updateParallax = () => {
      if (!el || !inner) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if visible on screen
      if (rect.top < windowHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const diff = (center - screenCenter) * speed;
        inner.style.transform = `translate3d(0, ${diff.toFixed(2)}px, 0)`;
      }
    };

    const loop = () => {
      updateParallax();
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <div
        ref={innerRef}
        className="w-full h-full will-change-transform scale-[1.12]"
        style={{
          transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          alt={alt}
          {...props}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    </div>
  );
}
