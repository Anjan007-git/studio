import React from "react";

/**
 * PageRails — MUGEN-Style Editorial Architectural Rails
 *
 * Renders the vertical framing lines that define MUGEN's editorial aesthetic:
 * - Desktop (>= 1200px): 48px margin from left and right viewport edges (#363636, 1px)
 * - Tablet (768px - 1199px): 24px margin from left and right viewport edges (#363636, 1px)
 * - Mobile (< 768px): Completely hidden (display: none)
 */
export function PageRails() {
  return (
    <div
      className="page-rails pointer-events-none fixed inset-0 z-40 hidden md:flex justify-between px-6 min-[1200px]:px-12"
      aria-hidden="true"
    >
      <div className="w-[1px] h-full bg-[#363636]" />
      <div className="w-[1px] h-full bg-[#363636]" />
    </div>
  );
}

export default PageRails;
