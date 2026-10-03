"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Calendar, Star } from "./icons";
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
  const cardRef = useRef<HTMLDivElement>(null);
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
    // Check if arrival sequence dispatches arrival or safety fallback after 5.5s
    const onArrival = () => setArrived(true);
    window.addEventListener("trifecta-arrival-start", onArrival);
    const fallbackTimer = setTimeout(() => setArrived(true), 5500);

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
      // Headline parallax — moves up and fades as user scrolls
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: 150,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }

      // Card parallax — moves at a different rate
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // Manifesto parallax
      if (manifestoRef.current) {
        gsap.to(manifestoRef.current, {
          y: 50,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      // Social proof parallax
      if (socialProofRef.current) {
        gsap.to(socialProofRef.current, {
          y: 30,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      // Marquee scale and fade
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          y: 40,
          opacity: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "60% top",
            end: "bottom top",
            scrub: 0.3,
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
          preload="auto"
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
              className={`absolute left-0.5 top-1.5 sm:top-4 md:top-6 flex items-center gap-1.5 text-[11px] sm:text-sm md:text-base text-neutral-400 font-normal transition-all duration-1000 delay-300 ${
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
                <span className="text-display text-[var(--text-secondary)] uppercase m-0 p-0 block">
                  TRENDS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Content Area with Floating Card, Rating & Editorial Manifesto */}
        <div className="relative mt-6 sm:mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Order 1 on mobile, Order 2 on desktop: Floating Meeting Card (Studio Advisory) */}
          <div
            ref={cardRef}
            className={`lg:col-span-4 order-1 lg:order-2 flex justify-center mt-4 sm:mt-8 lg:-mt-36 z-20 will-change-transform transition-all duration-[1100ms] delay-200 ${
              arrived ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-full max-w-[320px] rounded-3xl bg-[var(--page-bg)]/90 border border-white/10 shadow-2xl p-3.5 flex flex-col gap-3.5 backdrop-blur-xl group hover:border-white/20 transition-all duration-500">
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900">
                <Image
                  src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                  alt="TRIFECTA TRENDS — Design Advisory"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Availability Badge Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-2 py-1.5 px-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] text-white">
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2.5 bg-white rounded-full" />
                    <span className="w-0.5 h-2.5 bg-white rounded-full" />
                    <span className="w-0.5 h-2.5 bg-neutral-600 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-neutral-600 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-neutral-600 rounded-full" />
                  </div>
                  <span className="font-medium">2 slots open</span>
                  <span className="text-neutral-400 font-mono text-[10px]">
                    This Month
                  </span>
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div className="px-1 pt-1 flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Design Advisory
                  </h3>
                  <p className="text-xs text-neutral-400">Creative Direction &amp; Systems</p>
                </div>

                <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-xs">
                  <span className="text-neutral-300">
                    Plans start at <strong className="text-white font-medium">$7,500 / m</strong>
                  </span>
                  <Link
                    href="#pricing"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* White CTA Button */}
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all font-medium text-xs flex items-center justify-between shadow-sm cursor-pointer group"
                >
                  <span>Book a 15-Min Call</span>
                  <Calendar className="w-4 h-4 text-black group-hover:scale-105 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Order 2 on mobile, Order 3 on desktop: Editorial Manifesto */}
          <div
            ref={manifestoRef}
            className={`lg:col-span-4 order-2 lg:order-3 flex justify-start lg:justify-end will-change-transform transition-all duration-[1100ms] delay-[350ms] ${
              arrived ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="max-w-md text-[var(--text-body-lg)] leading-snug tracking-tight text-left">
              <strong className="text-white font-bold block sm:inline">
                We&apos;ve reimagined how great design happens.{" "}
              </strong>
              <span className="text-[var(--text-secondary)] font-light">
                No pitches. No proposals. No project management theater. Just
                exceptional work from senior designers who become an extension of
                your team.
              </span>
            </p>
          </div>

          {/* Order 3 on mobile, Order 1 on desktop: Happy Clients & Rating */}
          <div
            ref={socialProofRef}
            className={`lg:col-span-4 order-3 lg:order-1 flex items-center gap-4 will-change-transform transition-all duration-[1100ms] delay-[400ms] ${
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
              <div className="w-9 h-9 rounded-full ring-2 ring-black bg-[#1c1c1c] flex items-center justify-center text-[10px] font-semibold text-white">
                You?
              </div>
            </div>

            {/* Stars & Rating Text */}
            <div className="flex flex-col text-xs">
              <div className="flex items-center gap-1.5">
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5</span>
              </div>
              <span className="text-neutral-400 font-normal mt-0.5">
                100+ Happy clients
              </span>
            </div>
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
