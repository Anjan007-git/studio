"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { MagneticButton } from "./MagneticButton";

const caseStudies = [
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
    logo: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg",
    href: "/projects/cubekit",
  },
  {
    num: "[03]",
    title: "Ephemeral",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    logo: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg",
    href: "/projects/ephemeral",
  },
  {
    num: "[04]",
    title: "Warpspeed",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
    logo: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg",
    href: "/projects/warpspeed",
  },
  {
    num: "[05]",
    title: "Magnolia",
    category: "Brand Strategy & Web Design",
    year: "2024",
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    logo: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
    href: "/projects/magnolia",
  },
  {
    num: "[06]",
    title: "Global Bank",
    category: "Digital Transformation & Design System",
    year: "2024",
    image: "/images/nUz9PQlnVFREjBvNToIeGovBXI.jpeg",
    logo: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg",
    href: "/projects/global-bank",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <MotionReveal variant="fade-up">
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
              © 2016 — 2025
            </p>
          </div>
        </MotionReveal>

        {/* 3-Column Case Studies Grid with Custom Cursor and Parallax Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, idx) => (
            <MotionReveal
              key={study.title}
              variant="fade-up"
              delay={idx * 100}
              className="h-full"
            >
              <Link
                href={study.href}
                data-cursor="project"
                data-cursor-label={`View ${study.title} ↗`}
                className="group block rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 h-full flex flex-col justify-between shadow-xl"
              >
                {/* Image Frame with portrait ratio */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 group-hover:from-black/75 transition-colors duration-500" />

                  {/* Top Bar with Number, Logo & Year */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="text-xs font-mono text-white/80 backdrop-blur-md bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                      {study.num}
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="relative h-4 w-14">
                        <Image
                          src={study.logo}
                          alt={study.title}
                          fill
                          className="object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-xs font-mono text-white/60">
                        {study.year}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info inside the Image Card */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                      {study.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light">
                      {study.category}
                    </p>
                  </div>
                </div>

                {/* Sub-bar below image */}
                <div className="p-4 px-6 flex items-center justify-between border-t border-white/5 bg-[#181818]">
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                    Read Case Study
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>

        {/* View All Case Studies CTA */}
        <MotionReveal variant="fade-up" delay={200} className="mt-16 text-center">
          <MagneticButton>
            <Link
              href="/projects"
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>All Case Studies [12]</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>
        </MotionReveal>
      </div>
    </section>
  );
}
