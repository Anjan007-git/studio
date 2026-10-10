"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PageTransitionContextValue {
  navigate: (href: string) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  navigate: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(PageTransitionContext);

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const pendingHrefRef = useRef<string | null>(null);
  const currentPathnameRef = useRef(pathname);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const curtainRef = useRef<HTMLDivElement>(null);
  const brandMarkRef = useRef<HTMLDivElement>(null);
  const progressBeamRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Reset scroll and ensure smooth scroller is synchronized
  const resetScroll = useCallback(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    // Safety: ensure no stray overflow lock freezes the page
    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
  }, []);

  // Cleanup helper
  const finishTransition = useCallback(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    timelineRef.current?.kill();
    isTransitioningRef.current = false;
    pendingHrefRef.current = null;
    setIsTransitioning(false);

    // Ensure scroll locks are released and Lenis is active
    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
    window.__lenis?.start();

    // Reset curtain DOM state so it never interferes when idle
    if (curtainRef.current) {
      curtainRef.current.style.display = "none";
      curtainRef.current.style.pointerEvents = "none";
      gsap.set(curtainRef.current, {
        yPercent: 100,
        clearProps: "transform",
      });
    }
    if (brandMarkRef.current) {
      gsap.set(brandMarkRef.current, { opacity: 0 });
    }
    if (progressBeamRef.current) {
      gsap.set(progressBeamRef.current, { scaleX: 0, opacity: 0 });
    }

    // Dispatch global event for components that need to sync with page transition completion
    window.dispatchEvent(new CustomEvent("trifecta-transition-complete"));
    ScrollTrigger.refresh();
  }, []);

  // Step 2: Entrance / Reveal animation (uncovering destination page)
  const playEntranceAnimation = useCallback(() => {
    const curtain = curtainRef.current;
    const brandMark = brandMarkRef.current;
    const progressBeam = progressBeamRef.current;
    const reducedMotion = prefersReducedMotion();

    // Kill any existing timeline
    timelineRef.current?.kill();

    resetScroll();

    if (reducedMotion) {
      finishTransition();
      return;
    }

    if (!curtain) {
      finishTransition();
      return;
    }

    // Ensure curtain is visible and positioned at 0 before sweeping away
    curtain.style.display = "flex";
    gsap.set(curtain, { yPercent: 0, pointerEvents: "auto" });

    const tl = gsap.timeline({
      onComplete: finishTransition,
    });
    timelineRef.current = tl;

    // Progress beam fades out
    if (progressBeam) {
      tl.to(
        progressBeam,
        {
          opacity: 0,
          duration: 0.18,
          ease: "power2.in",
        },
        0
      );
    }

    // Brand mark fades out smoothly
    if (brandMark) {
      tl.to(
        brandMark,
        {
          opacity: 0,
          scale: 0.98,
          duration: 0.2,
          ease: "power2.in",
        },
        0
      );
    }

    // Curtain wipes off toward the top: yPercent: 0 -> -100
    tl.to(
      curtain,
      {
        yPercent: -100,
        duration: 0.44,
        ease: "power3.inOut",
      },
      0.04
    );
  }, [finishTransition, prefersReducedMotion, resetScroll]);

  // Step 1: Exit transition (sweeping dark curtain over outgoing page)
  const navigate = useCallback(
    (targetHref: string) => {
      // Prevent double transitions
      if (isTransitioningRef.current) return;

      // Ignore if targeting identical current pathname and no search/hash
      if (targetHref === window.location.pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.__lenis?.scrollTo(0);
        return;
      }

      const reducedMotion = prefersReducedMotion();
      if (reducedMotion) {
        resetScroll();
        router.push(targetHref);
        return;
      }

      isTransitioningRef.current = true;
      pendingHrefRef.current = targetHref;
      setIsTransitioning(true);

      const curtain = curtainRef.current;
      const brandMark = brandMarkRef.current;

      // Synchronously ensure curtain is visible in DOM before animating
      if (curtain) {
        curtain.style.display = "flex";
        curtain.style.pointerEvents = "auto";
        gsap.set(curtain, { yPercent: 100 });
      }

      // Dispatch global event for components (e.g., closing drawers)
      window.dispatchEvent(
        new CustomEvent("trifecta-transition-start", {
          detail: { href: targetHref },
        })
      );

      // Safety timeout in case navigation stalls or route fails
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = setTimeout(() => {
        finishTransition();
      }, 2000);

      // Kill any running animations
      timelineRef.current?.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          // At peak curtain coverage: perform router navigation and reset scroll
          resetScroll();
          router.push(targetHref);
        },
      });
      timelineRef.current = tl;

      // Curtain sweeps up from bottom: yPercent: 100 -> 0
      if (curtain) {
        tl.fromTo(
          curtain,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.38,
            ease: "power3.inOut",
          },
          0
        );
      }

      // Luminous progress hairline sweeps across top edge
      if (progressBeamRef.current) {
        tl.fromTo(
          progressBeamRef.current,
          { scaleX: 0, opacity: 0.2 },
          {
            scaleX: 1,
            opacity: 0.9,
            duration: 0.36,
            ease: "power2.out",
          },
          0.05
        );
      }

      // Centered studio brand watermark fades in
      if (brandMark) {
        tl.fromTo(
          brandMark,
          { opacity: 0, scale: 0.96, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.28,
            ease: "power2.out",
          },
          0.1
        );
      }
    },
    [finishTransition, prefersReducedMotion, resetScroll, router]
  );

  // Monitor pathname changes to complete navigation transition
  useEffect(() => {
    // If pathname changed while we were waiting for it
    if (isTransitioningRef.current) {
      currentPathnameRef.current = pathname;
      // Route has mounted — trigger the entrance reveal after frame paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          playEntranceAnimation();
        });
      });
    } else {
      currentPathnameRef.current = pathname;
    }
  }, [pathname, playEntranceAnimation]);

  // Handle browser Back / Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      if (isTransitioningRef.current) {
        finishTransition();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [finishTransition]);

  // Global Link interceptor: intercepts all internal links across header, footer, cards, articles, mobile drawer
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Ignore modified clicks (Ctrl, Cmd, Shift, Alt, middle-click)
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Find closest anchor tag
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      // Ignore if marked to ignore transitions
      if (anchor.hasAttribute("data-no-transition")) return;

      // Ignore new tabs or targets
      if (anchor.target && anchor.target !== "_self") return;

      // Ignore downloads
      if (anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      // Ignore protocol links (mailto, tel, javascript)
      if (
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      // Ignore pure hash links on current page (e.g. href="#pricing")
      if (rawHref.startsWith("#")) {
        return;
      }

      try {
        const destUrl = new URL(anchor.href, window.location.href);

        // Ignore external domains
        if (destUrl.origin !== window.location.origin) {
          return;
        }

        // Ignore same page anchor navigation (e.g. /#services when already on /)
        if (
          destUrl.pathname === window.location.pathname &&
          destUrl.search === window.location.search &&
          destUrl.hash
        ) {
          return;
        }

        // If clicking the current exact page without hash: smooth scroll to top
        if (
          destUrl.pathname === window.location.pathname &&
          destUrl.search === window.location.search &&
          !destUrl.hash
        ) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.__lenis?.scrollTo(0);
          return;
        }

        // Valid internal navigation to a different page:
        // Prevent default instantaneous Next.js / browser swap
        e.preventDefault();

        // Target href with pathname, search, and hash
        const targetPath = destUrl.pathname + destUrl.search + destUrl.hash;
        navigate(targetPath);
      } catch {
        // Fallback: let standard browser navigation handle if URL parsing fails
      }
    };

    // Use capture phase so we intercept before Next.js Link default navigation
    window.addEventListener("click", handleClick, { capture: true });

    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
    };
  }, [navigate]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      timelineRef.current?.kill();
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      window.__lenis?.start();
    };
  }, []);

  return (
    <PageTransitionContext.Provider value={{ navigate, isTransitioning }}>
      {/* Clean Page Content Wrapper — free of will-change-transform and containing-block constraints */}
      <div
        ref={contentWrapperRef}
        id="page-transition-content"
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </div>

      {/* MUGEN-Inspired Dark Obsidian Transition Curtain — conditionally displayed during active transitions only */}
      <div
        ref={curtainRef}
        id="page-transition-curtain"
        className="fixed inset-0 select-none overflow-hidden items-center justify-center bg-[#050505]"
        style={{
          display: isTransitioning ? "flex" : "none",
          height: "100dvh",
          width: "100vw",
          zIndex: 99999,
          pointerEvents: isTransitioning ? "auto" : "none",
        }}
        aria-hidden={!isTransitioning}
      >
        {/* Top edge sheen / razor hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Dynamic luminous progress hairline */}
        <div
          ref={progressBeamRef}
          className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none origin-left"
          style={{ transform: "scaleX(0)", opacity: 0 }}
        />

        {/* Ambient radial depth glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035)_0%,transparent_70%)] pointer-events-none" />

        {/* Centered Minimal Brand Signature */}
        <div
          ref={brandMarkRef}
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none opacity-0"
        >
          <div className="flex items-start justify-center gap-1">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.03em] uppercase text-white leading-tight">
              TRIFECTA TRENDS
            </span>
            <span className="font-display text-xs sm:text-sm font-normal text-white/70 mt-0.5">
              ®
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#848484] font-normal tracking-[-0.02em] font-sans mt-1.5">
            A design studio, built different.
          </p>
        </div>

        {/* Bottom edge sheen accent for exit upward sweep */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    </PageTransitionContext.Provider>
  );
}

export default PageTransition;

