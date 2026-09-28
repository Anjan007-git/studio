"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if visible on screen
      if (rect.top < windowHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const diff = (center - screenCenter) * speed;
        setOffsetY(diff);
      }
    };

    const loop = () => {
      onScroll();
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
        className="w-full h-full will-change-transform scale-[1.12]"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
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
