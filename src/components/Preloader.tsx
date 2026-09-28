"use client";

import React, { useEffect, useState } from "react";

export function Preloader() {
  // Phase sequence: "dark" -> "logo" -> "receding" -> "unmounted"
  const [phase, setPhase] = useState<"dark" | "logo" | "receding" | "done">("dark");

  useEffect(() => {
    // 0.0 - 0.7s: Pure black screen
    const t1 = setTimeout(() => {
      setPhase("logo");
    }, 700);

    // 0.7 - 2.2s: Logo appears centrally with subtle breathing scale
    const t2 = setTimeout(() => {
      setPhase("receding");
      // Notify hero and nav to begin their entrance sequence
      window.dispatchEvent(new CustomEvent("mugen-arrival-start"));
    }, 2200);

    // 3.2s: Sequence finished, unmount preloader overlay
    const t3 = setTimeout(() => {
      setPhase("done");
      window.dispatchEvent(new CustomEvent("mugen-arrival-complete"));
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === "receding"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center text-center px-6 transition-all duration-800 ease-out ${
          phase === "logo"
            ? "opacity-100 scale-100 blur-0 translate-y-0"
            : phase === "dark"
            ? "opacity-0 scale-95 blur-xs translate-y-2"
            : "opacity-0 scale-105 blur-xs -translate-y-2"
        }`}
      >
        <div className="flex items-start justify-center gap-1.5 mb-3">
          <span className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase select-none font-sans">
            MUGEN
          </span>
          <span className="text-sm sm:text-base font-normal text-white/80 mt-1 select-none font-mono">
            ©
          </span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-widest uppercase font-mono">
          A design studio, built different.
        </p>
      </div>
    </div>
  );
}
