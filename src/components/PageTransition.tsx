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
  }, []);

  // Cleanup helper
  const finishTransition = useCallback(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    isTransitioningRef.current = false;
    pendingHrefRef.current = null;
    setIsTransitioning(false);

    // Ensure scroll lock is released and Lenis is active
    document.body.style.overflow = "unset";
    window.__lenis?.start();

    // Reset curtain position instantly below viewport for next transition
    if (curtainRef.current) {
      gsap.set(curtainRef.current, {
        yPercent: 100,
        pointerEvents: "none",
      });
    }
    if (brandMarkRef.current) {
      gsap.set(brandMarkRef.current, { opacity: 0 });
    }
    if (contentWrapperRef.current) {
      gsap.set(contentWrapperRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        clearProps: "transform,opacity",
      });
    }

    // Dispatch global event for components that need to sync with page transition completion
    window.dispatchEvent(new CustomEvent("trifecta-transition-complete"));
  }, []);

  // Step 2: Entrance / Reveal animation (uncovering destination page)
  const playEntranceAnimation = useCallback(() => {
    const curtain = curtainRef.current;
    const brandMark = brandMarkRef.current;
    const content = contentWrapperRef.current;
    const reducedMotion = prefersReducedMotion();

    // Kill any existing timeline
    timelineRef.current?.kill();

    resetScroll();

    if (reducedMotion) {
      if (curtain) gsap.set(curtain, { yPercent: 100, pointerEvents: "none" });
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0.3 },
          {
            opacity: 1,
            duration: 0.18,
            ease: "power2.out",
            onComplete: finishTransition,
          }
        );
      } else {
        finishTransition();
      }
      return;
    }

    const tl = gsap.timeline({
      onComplete: finishTransition,
    });
    timelineRef.current = tl;

    // Brand mark fades out smoothly
    if (brandMark) {
      tl.to(brandMark, {
        opacity: 0,
        duration: 0.18,
        ease: "power2.in",
      }, 0);
    }

    // Curtain wipes off toward the top: yPercent: 0 -> -100
    if (curtain) {
      tl.to(
        curtain,
        {
          yPercent: -100,
          duration: 0.42,
          ease: "power3.inOut",
        },
        0.05
      );
    }

    // Destination page content gently glides in
    if (content) {
      tl.fromTo(
        content,
        {
          y: 24,
          opacity: 0.8,
          scale: 0.995,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        },
        0.1
      );
    }
  }, [finishTransition, prefersReducedMotion, resetScroll]);

  // Step 1: Exit transition (sweeping dark curtain over outgoing page)
  const navigate = useCallback(
    (targetHref: string) => {
      // Prevent double transitions
      if (isTransitioningRef.current) return;

      const reducedMotion = prefersReducedMotion();
      isTransitioningRef.current = true;
      pendingHrefRef.current = targetHref;
      setIsTransitioning(true);

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
      }, 1500);

      const curtain = curtainRef.current;
      const brandMark = brandMarkRef.current;
      const content = contentWrapperRef.current;

      // Kill any running animations
      timelineRef.current?.kill();

      if (reducedMotion) {
        if (content) {
          gsap.to(content, {
            opacity: 0.3,
            duration: 0.15,
            ease: "power2.in",
            onComplete: () => {
              router.push(targetHref);
            },
          });
        } else {
          router.push(targetHref);
        }
        return;
      }

      // Ensure curtain is interactive during transit to prevent rapid spam clicking
      if (curtain) {
        gsap.set(curtain, { pointerEvents: "auto" });
      }

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

      // Outgoing page content subtly dips and scales
      if (content) {
        tl.to(
          content,
          {
            y: -18,
            opacity: 0.5,
            scale: 0.99,
            duration: 0.36,
            ease: "power2.inOut",
          },
          0
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
      // Route has mounted — trigger the entrance reveal!
      requestAnimationFrame(() => {
        playEntranceAnimation();
      });
    } else {
      currentPathnameRef.current = pathname;
    }
  }, [pathname, playEntranceAnimation]);

  // Handle browser Back / Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      // If we weren't already in a custom transition, play a smooth reveal for Back/Forward
      if (!isTransitioningRef.current) {
        resetScroll();
        const content = contentWrapperRef.current;
        if (content && !prefersReducedMotion()) {
          gsap.fromTo(
            content,
            { opacity: 0.7, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.36,
              ease: "power2.out",
              clearProps: "transform,opacity",
            }
          );
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [prefersReducedMotion, resetScroll]);

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
      window.__lenis?.start();
    };
  }, []);

  return (
    <PageTransitionContext.Provider value={{ navigate, isTransitioning }}>
      {/* Dynamic Page Content Wrapper */}
      <div
        ref={contentWrapperRef}
        id="page-transition-content"
        className="w-full flex-1 flex flex-col will-change-transform"
      >
        {children}
      </div>

      {/* MUGEN-Inspired Dark Obsidian Transition Curtain */}
      <div
        ref={curtainRef}
        id="page-transition-curtain"
        className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-[#050505] overflow-hidden select-none"
        style={{
          height: "100dvh",
          width: "100vw",
          transform: "translateY(100%)",
          willChange: "transform",
        }}
        aria-hidden="true"
      >
        {/* Top edge sheen / razor hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

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
