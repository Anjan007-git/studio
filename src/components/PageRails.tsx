import React from "react";

/**
 * PageRails — MUGEN-Style Editorial Architectural Rails
 *
 * Renders the vertical framing lines that define MUGEN's editorial aesthetic:
 * - Desktop (>= 1200px): 48px margin from left and right viewport edges (#363636, 1px)
 * - Tablet (768px - 1199px): 24px margin from left and right viewport edges (#363636, 1px)
 * - Mobile (< 768px): 12px margin from left and right viewport edges (#363636, 1px)
 */
export function PageRails() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
      {/* Left Rail */}
      <div className="page-rail-left absolute top-0 bottom-0 left-[12px] md:left-[24px] xl:left-[48px] min-[1200px]:left-[48px] w-[1px] bg-[#363636]" />
      {/* Right Rail */}
      <div className="page-rail-right absolute top-0 bottom-0 right-[12px] md:right-[24px] xl:right-[48px] min-[1200px]:right-[48px] w-[1px] bg-[#363636]" />
    </div>
  );
}

export default PageRails;
