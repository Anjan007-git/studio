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
interface BlurSlice {
  blur: string;
  mask: string;
  zIndex: number;
}

const BLUR_SLICES: BlurSlice[] = [
  {
    blur: "1.5px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
    zIndex: 1,
  },
  {
    blur: "3px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
    zIndex: 2,
  },
  {
    blur: "7px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
    zIndex: 3,
  },
  {
    blur: "14px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 1) 50%, rgba(0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
    zIndex: 4,
  },
  {
    blur: "26px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 1) 62.5%, rgba(0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
    zIndex: 5,
  },
  {
    blur: "46px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 1) 75%, rgba(0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
    zIndex: 6,
  },
  {
    blur: "72px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 1) 87.5%, rgba(0, 0, 1) 100%)",
    zIndex: 7,
  },
  {
    blur: "100px",
    mask: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 1) 100%)",
    zIndex: 8,
  },
];

export function BottomBlur() {
  return (
    <div className="bottom-depth bottom-blur-container" aria-hidden="true">
      <div className="bottom-blur-layers">
        {BLUR_SLICES.map((slice, idx) => (
          <div
            key={idx}
            className={`bottom-blur-layer bottom-blur-${idx + 1}`}
            style={{
              zIndex: slice.zIndex,
              backdropFilter: `blur(${slice.blur})`,
              WebkitBackdropFilter: `blur(${slice.blur})`,
              maskImage: slice.mask,
              WebkitMaskImage: slice.mask,
            }}
          />
        ))}
      </div>
      <div className="bottom-blur-gradient" />
    </div>
  );
}

export default BottomBlur;
