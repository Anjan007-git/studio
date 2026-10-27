"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "./icons";
import { Marquee } from "./Marquee";

const clientLogos = [
  { name: "Clandestine", src: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg" },
  { name: "Codecraft", src: "/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg" },
  { name: "ommLabs", src: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg" },
  { name: "GlobalBank", src: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg" },
  { name: "45 Degrees", src: "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg" },
  { name: "AlphaWave", src: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg" },
  { name: "Biosynthesis", src: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg" },
  { name: "Boltshift", src: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg" },
];

export function Hero() {
  const [arrived, setArrived] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (isMobile) {
      setArrived(true);
      return;
    }

    const onArrival = () => setArrived(true);
    window.addEventListener("trifecta-arrival-start", onArrival);
    const fallbackTimer = setTimeout(() => setArrived(true), 800);

    return () => {
      window.removeEventListener("trifecta-arrival-start", onArrival);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // MUGEN-style scroll-linked parallax and fade
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Headline parallax — moves up and gently fades with buttery scrub
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: 90,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom 35%",
            scrub: 0.8,
          },
        });
      }

      // Background video subtle depth scale and drift
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scale: 1.06,
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      // Manifesto parallax
      if (manifestoRef.current) {
        gsap.to(manifestoRef.current, {
          y: 40,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom 40%",
            scrub: 0.8,
          },
        });
      }

      // Social proof parallax
      if (socialProofRef.current) {
        gsap.to(socialProofRef.current, {
          y: 30,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom 40%",
            scrub: 0.8,
          },
        });
      }

      // Marquee scale and fade
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          y: 30,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "60% top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-10 overflow-hidden bg-[var(--page-bg)]"
    >
      {/* Cinematic Full-Bleed Video Background */}
      <div
        className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          arrived ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-[center_35%] md:object-[center_40%] pointer-events-none"
        />
        {/* Subtle dark overlay preserving metallic details while guaranteeing high text legibility */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {/* Seamless bottom fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-80 sm:h-56 bg-gradient-to-t from-[var(--page-bg)] via-[var(--page-bg)]/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="w-full max-w-[var(--content-max)] mx-auto px-[var(--section-px)] flex-1 flex flex-col justify-between relative z-10">
        {/* Massive 2-Line Editorial Typography with Scroll Parallax */}
        <div
          ref={headlineRef}
          className="relative pt-2 sm:pt-6 md:pt-8 select-none will-change-transform"
        >
          {/* Line 1: TRIFECTA — masked reveal */}
          <div className="reveal-mask">
            <div
              className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                arrived ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
              }`}
            >
              <h1 className="text-display text-white uppercase m-0 p-0">
                TRIFECTA
              </h1>
            </div>
          </div>

          {/* Line 2: Since badge + TRENDS */}
          <div className="relative flex items-baseline justify-between w-full">
            {/* Left: Studio Discipline Badge positioned under 'T' */}
            <div
              className={`absolute left-0.5 top-1.5 sm:top-4 md:top-6 flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-[#b8b8b8] font-medium font-display tracking-[-0.03em] transition-all duration-1000 delay-300 ${
                arrived ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span>©</span>
              <span>Creative Technology</span>
            </div>

            {/* Line 2 Word: TRENDS — masked reveal */}
            <div className="w-full text-right sm:text-left sm:pl-[24vw] md:pl-[28vw] reveal-mask">
              <div
                className={`transition-all duration-[1100ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  arrived ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
                }`}
              >
                <span className="text-display text-[#b8b8b8] uppercase m-0 p-0 block">
                  TRENDS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Content Area with Rating & Editorial Manifesto */}
        <div className="relative mt-6 sm:mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Order 2 on mobile, Order 1 on desktop: Happy Clients & Rating */}
          <div
            ref={socialProofRef}
            className={`lg:col-span-6 order-2 lg:order-1 flex items-center gap-4 will-change-transform transition-all duration-[1100ms] delay-[400ms] ${
              arrived ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Overlapping Avatar Stack */}
            <div className="flex items-center -space-x-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/2szvKnNjJBBkPsk6yCETyIDktns.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/siKQvG204y5XTlJmEnImPRJ2lc.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/IxG8JQTe4YCB0OBh5yXZR2y0lk.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/ADzzP2ffltBL8xXs0bcwap1FtlM.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              {/* "You?" dark circle */}
              <div className="w-9 h-9 rounded-full ring-2 ring-black bg-[#0e0e0e] border border-white/10 flex items-center justify-center text-[10px] font-semibold text-white tracking-[-0.01em] font-display">
                You?
              </div>
            </div>

            {/* Stars & Rating Text */}
            <div className="flex flex-col text-xs font-sans">
              <div className="flex items-center gap-1.5">
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <span className="font-semibold text-white tracking-[-0.03em] font-display text-[15px]">4.9 / 5</span>
              </div>
              <span className="text-[#b8b8b8] font-normal tracking-[-0.02em] mt-0.5 text-xs">
                100+ Happy clients
              </span>
            </div>
          </div>

          {/* Order 1 on mobile, Order 2 on desktop: Editorial Manifesto */}
          <div
            ref={manifestoRef}
            className={`lg:col-span-6 order-1 lg:order-2 flex justify-start lg:justify-end will-change-transform transition-all duration-[1100ms] delay-[350ms] ${
              arrived ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="max-w-md text-[15px] sm:text-base leading-[1.5] tracking-[-0.02em] text-left font-sans">
              <strong className="text-white font-semibold font-display block sm:inline">
                We&apos;ve reimagined how great design happens.{" "}
              </strong>
              <span className="text-[#b8b8b8] font-normal">
                No pitches. No proposals. No project management theater. Just
                exceptional work from senior designers who become an extension of
                your team.
              </span>
            </p>
          </div>
        </div>

        {/* Continuous Seamless Infinite Client Marquee */}
        <div
          ref={marqueeRef}
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] will-change-transform"
        >
          <Marquee speed={35} className="opacity-70 hover:opacity-100 transition-opacity">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="relative h-6 w-24 sm:w-28 flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={110}
                    height={24}
                    className="max-h-5 w-auto object-contain brightness-200"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
