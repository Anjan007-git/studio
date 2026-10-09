import React from "react";

/**
 * BottomBlur — MUGEN-Style Heavy Cinematic Bottom Blur & Depth Treatment
 *
 * Recreates MUGEN's exact multi-tier progressive backdrop-filter blur and
 * atmospheric deep-black fade along the bottom edge of the viewport.
 * Uses 8 graduated backdrop-filter slices with overlapping transparency masks,
 * ensuring zero hard lines, exponential blur accumulation toward the bottom,
 * and a seamless blend into the deep black (#000000) page background.
 */
export function BottomBlur() {
  return (
    <div className="bottom-depth bottom-blur-container" aria-hidden="true">
      <div className="bottom-blur-layers">
        <div className="bottom-blur-layer bottom-blur-1" />
        <div className="bottom-blur-layer bottom-blur-2" />
        <div className="bottom-blur-layer bottom-blur-3" />
        <div className="bottom-blur-layer bottom-blur-4" />
        <div className="bottom-blur-layer bottom-blur-5" />
        <div className="bottom-blur-layer bottom-blur-6" />
        <div className="bottom-blur-layer bottom-blur-7" />
        <div className="bottom-blur-layer bottom-blur-8" />
      </div>
      <div className="bottom-blur-gradient" />
    </div>
  );
}

export default BottomBlur;
