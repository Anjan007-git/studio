"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "project">("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");

  const posRef = useRef({ targetX: -100, targetY: -100, currentX: -100, currentY: -100 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion preference
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='project']");
      const interactiveEl = target.closest("button, a, input, [role='button'], [data-cursor='hover']");

      if (projectCard) {
        setCursorState("project");
        setCursorLabel(projectCard.getAttribute("data-cursor-label") || "View ↗");
      } else if (interactiveEl) {
        setCursorState("hover");
        setCursorLabel("");
      } else {
        setCursorState("default");
        setCursorLabel("");
      }
    };

    const onMouseLeave = () => {
      posRef.current.targetX = -100;
      posRef.current.targetY = -100;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Continuous smooth animation loop using lerp
    const updateCursor = () => {
      const p = posRef.current;
      p.currentX += (p.targetX - p.currentX) * 0.16;
      p.currentY += (p.targetY - p.currentY) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(updateCursor);
    };

    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      {cursorState === "project" ? (
        <div className="px-4 py-2 rounded-full bg-white text-black font-mono text-[11px] font-semibold tracking-wider flex items-center gap-1.5 shadow-2xl scale-100 transition-all duration-300 ease-out select-none">
          <span>{cursorLabel}</span>
        </div>
      ) : cursorState === "hover" ? (
        <div className="w-10 h-10 -ml-5 -mt-5 rounded-full border border-white/60 bg-white/10 backdrop-blur-xs scale-100 transition-all duration-300 ease-out select-none" />
      ) : (
        <div className="w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-white/80 shadow-xs transition-all duration-200 select-none" />
      )}
    </div>
  );
}
