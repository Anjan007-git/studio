"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

const topProjects = [
  {
    num: "[01]",
    title: "Quantum",
    category: "Brand Strategy & Product Design",
    year: "2025",
    image: "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
    href: "/projects/quantum",
  },
  {
    num: "[02]",
    title: "Cubekit",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg",
    href: "/projects/cubekit",
  },
  {
    num: "[03]",
    title: "Ephemeral",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
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
    href: "/projects/warpspeed",
  },
  {
    num: "[05]",
    title: "Magnolia",
    category: "Brand Strategy & Web Design",
    year: "2024",
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    href: "/projects/magnolia",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              [01] Projects
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
            Case studies
          </h2>
          <p className="text-xs font-mono text-neutral-500">
            Selected Client Work • 2024 — 2026
          </p>
        </div>

        {/* Row 1: 3 Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {topProjects.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group block"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-mono text-white/90 backdrop-blur-md bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                    {study.num}
                  </span>
                </div>
              </div>

              {/* Title & Metadata Below Image */}
              <div className="flex items-baseline justify-between pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-300 transition-colors">
                  {study.title}
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  {study.year}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
                {study.category}
              </p>
            </Link>
          ))}
        </div>

        {/* Row 2: 2 Asymmetric Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 sm:mb-16">
          {/* Warpspeed (5 cols) */}
          <div className="lg:col-span-5">
            <Link
              href={bottomProjects[0].href}
              className="group block"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                <Image
                  src={bottomProjects[0].image}
                  alt={bottomProjects[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-mono text-white/90 backdrop-blur-md bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                    {bottomProjects[0].num}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-300 transition-colors">
                  {bottomProjects[0].title}
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  {bottomProjects[0].year}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
                {bottomProjects[0].category}
              </p>
            </Link>
          </div>

          {/* Magnolia (7 cols) */}
          <div className="lg:col-span-7">
            <Link
              href={bottomProjects[1].href}
              className="group block"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                <Image
                  src={bottomProjects[1].image}
                  alt={bottomProjects[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-mono text-white/90 backdrop-blur-md bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                    {bottomProjects[1].num}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-300 transition-colors">
                  {bottomProjects[1].title}
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  {bottomProjects[1].year}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
                {bottomProjects[1].category}
              </p>
            </Link>
          </div>
        </div>

        {/* Right-aligned All Case Studies CTA matching Desktop Frame 16 */}
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black border border-white/10 font-mono text-xs font-medium transition-all duration-300 cursor-pointer group"
          >
            <span>[12] All Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
