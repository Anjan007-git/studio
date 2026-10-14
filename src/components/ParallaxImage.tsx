"use client";

import React, { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
  speed?: number; // 0.1 to 0.5
}

export function ParallaxImage({
  className = "",
  containerClassName = "",
  imageClassName = "",
  speed = 0.14,
  alt,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const combinedContainerClass = `${containerClassName} ${className}`.trim();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(inner, { y: 0, scale: 1 });
      return;
    }

    const yMovement = Math.round(50 * speed);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        {
          y: -yMovement,
        },
        {
          y: yMovement,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${combinedContainerClass}`}
    >
      <div
        ref={innerRef}
        className="w-full h-full will-change-transform scale-[1.12]"
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
