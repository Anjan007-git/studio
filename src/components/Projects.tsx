"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

const caseStudies = [
  {
    num: "[01]",
    title: "Quantum",
    category: "Brand Strategy & Product Design",
    year: "2025",
    image: "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
    logo: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg",
    href: "/projects",
  },
  {
    num: "[02]",
    title: "Cubekit",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg",
    logo: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg",
    href: "/projects",
  },
  {
    num: "[03]",
    title: "Ephemeral",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    logo: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg",
    href: "/projects",
  },
  {
    num: "[04]",
    title: "Warpspeed",
    category: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
    logo: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg",
    href: "/projects",
  },
  {
    num: "[05]",
    title: "Magnolia",
    category: "Brand Strategy & Web Design",
    year: "2024",
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    logo: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
    href: "/projects",
  },
  {
    num: "[06]",
    title: "Global Bank",
    category: "Digital Transformation & Design System",
    year: "2024",
    image: "/images/nUz9PQlnVFREjBvNToIeGovBXI.jpeg",
    logo: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg",
    href: "/projects",
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-2">
            Case studies
          </h2>
          <p className="text-xs font-mono text-neutral-500">
            © 2016 — 2025
          </p>
        </div>

        {/* 3-Column Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group block rounded-2xl bg-[#1c1c1c] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image Frame with portrait ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

                {/* Top Number Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono text-white/70">
                    {study.num}
                  </span>
                </div>

                {/* Center / Ambient Logo Overlay */}
                {study.logo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                    <div className="relative w-28 h-8 flex items-center justify-center">
                      <Image
                        src={study.logo}
                        alt={`${study.title} logo`}
                        width={112}
                        height={32}
                        className="max-h-6 w-auto object-contain brightness-200"
                      />
                    </div>
                  </div>
                )}

                {/* Bottom Metadata inside Card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-0.5">
                      {study.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-normal">
                      {study.category}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    {study.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Right Link: [12] All Case Studies */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-white hover:text-neutral-300 transition-colors group"
          >
            <span>[12] All Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
