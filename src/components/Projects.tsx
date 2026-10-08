"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "./icons";

const topProjects = [
  {
    num: "[01]",
    title: "Quantum",
    category: "Brand Strategy & Product Design",
    year: "2025",
    image: "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
    logo: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg",
    href: "/projects/quantum",
  },
  {
    num: "[02]",
    title: "Cubekit",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg",
    logo: "/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg",
    href: "/projects/cubekit",
  },
  {
    num: "[03]",
    title: "Ephemeral",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    logo: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg",
    href: "/projects/ephemeral",
  },
];

const bottomProjects = [
  {
    num: "[04]",
    title: "Warpspeed",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
    logo: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg",
    href: "/projects/warpspeed",
  },
  {
    num: "[05]",
    title: "Magnolia",
    category: "Brand Strategy & Web Design",
    year: "2024",
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    logo: "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg",
    href: "/projects/magnolia",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 80%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[var(--page-bg)] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="mb-4">
            <span className="section-label">
              [01] Projects
            </span>
          </div>
          <h2 className="text-heading-1 text-white mb-2 font-display">
            Case studies
          </h2>
          <p className="text-xs font-sans text-[#848484] tracking-[-0.02em]">
            Selected Client Work • 2024 — 2026
          </p>
        </div>

        <div ref={cardsRef}>
          {/* Row 1: 3 Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {topProjects.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="project-card group block select-none rounded-none border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/25 transition-all duration-500"
              >
                {/* Image Frame with Corner Plus, Logo Overlay, and Bottom Blur/Depth */}
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/3] w-full rounded-none overflow-hidden bg-neutral-950">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Cinematic Bottom Blur & Depth Layer (Desktop, Tablet, Mobile) */}
                  {/* Layer 1: Duplicated blurred image layer masked smoothly to the lower portion */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 42%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 42%)",
                    }}
                  >
                    <Image
                      src={study.image}
                      alt=""
                      fill
                      aria-hidden="true"
                      className="object-cover blur-xl scale-110"
                    />
                  </div>

                  {/* Layer 2: Deep smooth dark transition to black background */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Top-Left Number Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-display font-medium text-white/90 backdrop-blur-md bg-black/60 px-2.5 py-1 border border-white/15 tracking-[-0.02em]">
                      {study.num}
                    </span>
                  </div>

                  {/* Centered Client Logo Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-28 sm:w-32 h-10 filter invert brightness-200 drop-shadow-lg">
                      <Image
                        src={study.logo}
                        alt={`${study.title} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom-Right Corner MUGEN Plus Button */}
                  <div className="absolute bottom-4 right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-black/95 group-hover:scale-110 transition-all duration-300">
                    <span className="text-base sm:text-lg font-light leading-none select-none transition-transform duration-300 group-hover:rotate-90 font-display">
                      +
                    </span>
                  </div>
                </div>

                {/* Title & Metadata Below Image */}
                <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e0e0e]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-white tracking-[-0.03em] group-hover:text-[#b8b8b8] transition-colors font-display leading-[1.2]">
                      {study.title}
                    </h3>
                    <span className="text-xs font-display font-medium text-[#848484] tracking-[-0.02em]">
                      {study.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] font-normal font-sans mt-1 tracking-[-0.02em]">
                    {study.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2: 2 Asymmetric Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 sm:mb-16">
            {/* Warpspeed (5 cols) */}
            <div className="lg:col-span-5">
              <Link
                href={bottomProjects[0].href}
                className="project-card group block select-none rounded-none border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/25 transition-all duration-500"
              >
                <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-none overflow-hidden bg-neutral-950">
                  <Image
                    src={bottomProjects[0].image}
                    alt={bottomProjects[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />

                  {/* Cinematic Bottom Blur & Depth Layer */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 42%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 42%)",
                    }}
                  >
                    <Image
                      src={bottomProjects[0].image}
                      alt=""
                      fill
                      aria-hidden="true"
                      className="object-cover blur-xl scale-110"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-display font-medium text-white/90 backdrop-blur-md bg-black/60 px-2.5 py-1 border border-white/15 tracking-[-0.02em]">
                      {bottomProjects[0].num}
                    </span>
                  </div>

                  {/* Centered Client Logo */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-32 h-10 filter invert brightness-200 drop-shadow-lg">
                      <Image
                        src={bottomProjects[0].logo}
                        alt={`${bottomProjects[0].title} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom-Right Corner MUGEN Plus Button */}
                  <div className="absolute bottom-4 right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-black/95 group-hover:scale-110 transition-all duration-300">
                    <span className="text-base sm:text-lg font-light leading-none select-none transition-transform duration-300 group-hover:rotate-90 font-display">
                      +
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e0e0e]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-white tracking-[-0.03em] group-hover:text-[#b8b8b8] transition-colors font-display leading-[1.2]">
                      {bottomProjects[0].title}
                    </h3>
                    <span className="text-xs font-display font-medium text-[#848484] tracking-[-0.02em]">
                      {bottomProjects[0].year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] font-normal font-sans mt-1 tracking-[-0.02em]">
                    {bottomProjects[0].category}
                  </p>
                </div>
              </Link>
            </div>

            {/* Magnolia (7 cols) */}
            <div className="lg:col-span-7">
              <Link
                href={bottomProjects[1].href}
                className="project-card group block select-none rounded-none border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/25 transition-all duration-500"
              >
                <div className="relative aspect-square sm:aspect-[16/10] w-full rounded-none overflow-hidden bg-neutral-950">
                  <Image
                    src={bottomProjects[1].image}
                    alt={bottomProjects[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  />

                  {/* Cinematic Bottom Blur & Depth Layer */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 42%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 42%)",
                    }}
                  >
                    <Image
                      src={bottomProjects[1].image}
                      alt=""
                      fill
                      aria-hidden="true"
                      className="object-cover blur-xl scale-110"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-display font-medium text-white/90 backdrop-blur-md bg-black/60 px-2.5 py-1 border border-white/15 tracking-[-0.02em]">
                      {bottomProjects[1].num}
                    </span>
                  </div>

                  {/* Centered Client Logo */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-36 h-10 filter invert brightness-200 drop-shadow-lg">
                      <Image
                        src={bottomProjects[1].logo}
                        alt={`${bottomProjects[1].title} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom-Right Corner MUGEN Plus Button */}
                  <div className="absolute bottom-4 right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-black/95 group-hover:scale-110 transition-all duration-300">
                    <span className="text-base sm:text-lg font-light leading-none select-none transition-transform duration-300 group-hover:rotate-90 font-display">
                      +
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e0e0e]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-white tracking-[-0.03em] group-hover:text-[#b8b8b8] transition-colors font-display leading-[1.2]">
                      {bottomProjects[1].title}
                    </h3>
                    <span className="text-xs font-display font-medium text-[#848484] tracking-[-0.02em]">
                      {bottomProjects[1].year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] font-normal font-sans mt-1 tracking-[-0.02em]">
                    {bottomProjects[1].category}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right-aligned All Case Studies CTA */}
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black border border-white/10 font-display text-xs font-semibold tracking-[-0.02em] transition-all duration-300 cursor-pointer group"
          >
            <span>[12] All Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
