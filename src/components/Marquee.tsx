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

    const onScroll = () => {
      // Temporarily bump speed on scroll, then decay
      scrollVelocityMultiplier.current = 1.8;
      };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Smoothly decay scroll velocity boost back to 1
      scrollVelocityMultiplier.current +=
        (1 - scrollVelocityMultiplier.current) * 0.05;

      const currentSpeed = speed * scrollVelocityMultiplier.current;
      const track = trackRef.current;

      if (track) {
        const halfWidth = track.scrollWidth / 2;

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

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
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
