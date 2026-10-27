"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0.1 to 0.5 (default: 0.28)
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.28,
  onClick,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef<number | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    // Lerp towards target position
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.18;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.18;

    setPosition({
      x: currentPos.current.x,
      y: currentPos.current.y,
    });

    const diff =
      Math.abs(targetPos.current.x - currentPos.current.x) +
      Math.abs(targetPos.current.y - currentPos.current.y);

    if (diff > 0.05 || isHovered) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      setPosition({ x: 0, y: 0 });
      currentPos.current = { x: 0, y: 0 };
      targetPos.current = { x: 0, y: 0 };
      rafId.current = null;
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    // Check reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    targetPos.current = {
      x: distX * strength,
      y: distY * strength,
    };

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    targetPos.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? "transform 0.05s linear"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: isHovered ? "transform" : "auto",
      }}
    >
      {children}
    </div>
  );
}

export default MagneticButton;
