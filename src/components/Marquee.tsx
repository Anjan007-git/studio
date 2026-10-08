"use client";

import React, { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // pixels per second
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({
  children,
  speed = 45,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const scrollVelocityMultiplier = useRef(1);

  useEffect(() => {
    let rafId: number;
    let isVisible = true;
    const halfWidthRef = { current: 0 };

    const updateWidth = () => {
      const track = trackRef.current;
      if (track) {
        halfWidthRef.current = track.scrollWidth / 2;
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth, { passive: true });

    // Pause animation when marquee is scrolled out of viewport
    const container = containerRef.current;
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined" && container) {
      observer = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0]?.isIntersecting ?? true;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);
    }

    const onScroll = () => {
      if (isVisible) {
        scrollVelocityMultiplier.current = 1.6;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = (timestamp: number) => {
      if (!isVisible) {
        lastTimeRef.current = timestamp;
        rafId = requestAnimationFrame(animate);
        return;
      }

      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = Math.min((timestamp - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = timestamp;

      // Smoothly decay scroll velocity boost back to 1
      scrollVelocityMultiplier.current +=
        (1 - scrollVelocityMultiplier.current) * 0.05;

      const currentSpeed = speed * scrollVelocityMultiplier.current;
      const track = trackRef.current;

      if (track) {
        let halfWidth = halfWidthRef.current;
        if (halfWidth <= 0) {
          halfWidth = track.scrollWidth / 2;
          halfWidthRef.current = halfWidth;
        }

        if (halfWidth > 0) {
          if (direction === "left") {
            offsetRef.current -= currentSpeed * deltaTime;
            if (offsetRef.current <= -halfWidth) {
              offsetRef.current += halfWidth;
            }
          } else {
            offsetRef.current += currentSpeed * deltaTime;
            if (offsetRef.current >= 0) {
              offsetRef.current -= halfWidth;
            }
          }

          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none w-full relative ${className}`}
    >
      <div
        ref={trackRef}
        className="flex shrink-0 w-max will-change-transform items-center"
      >
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
          {children}
        </div>
        <div
          className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
