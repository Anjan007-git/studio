"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

const allProjects = [
  {
    num: "[01]",
    title: "Quantum",
    category: "Brand Strategy & Product Design",
    year: "2025",
    type: "Product Design",
    image: "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
    logo: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg",
  },
  {
    num: "[02]",
    title: "Cubekit",
    category: "Brand Identity & Product Design",
    year: "2024",
    type: "Brand Identity",
    image: "/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg",
    logo: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg",
  },
  {
    num: "[03]",
    title: "Ephemeral",
    category: "Brand Identity & Product Design",
    year: "2024",
    type: "Brand Identity",
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    logo: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg",
  },
  {
    num: "[04]",
    title: "Warpspeed",
    category: "Brand Identity & Product Design",
    year: "2024",
    type: "Product Design",
    image: "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
    logo: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg",
  },
  {
    num: "[05]",
    title: "Magnolia",
    category: "Brand Strategy & Web Design",
    year: "2024",
    type: "Web Design",
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    logo: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
  },
  {
    num: "[06]",
    title: "Global Bank",
    category: "Digital Transformation & Design System",
    year: "2024",
    type: "Product Design",
    image: "/images/nUz9PQlnVFREjBvNToIeGovBXI.jpeg",
    logo: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg",
  },
  {
    num: "[07]",
    title: "Lightspeed",
    category: "High-Frequency Trading Console",
    year: "2024",
    type: "Product Design",
    image: "/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg",
    logo: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg",
  },
  {
    num: "[08]",
    title: "Clandestine",
    category: "Brand Identity & Spatial Experience",
    year: "2024",
    type: "Brand Identity",
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
    logo: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg",
  },
  {
    num: "[09]",
    title: "Flora & Fauna",
    category: "Sustainable Luxury E-Commerce",
    year: "2024",
    type: "Web Design",
    image: "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
    logo: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
  },
  {
    num: "[10]",
    title: "Boltshift",
    category: "Developer Platform & Design Tokens",
    year: "2024",
    type: "Product Design",
    image: "/images/d0BwZFrtELCoWDdpc1wN5g0q070.jpeg",
    logo: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg",
  },
  {
    num: "[11]",
    title: "Solaris Energy",
    category: "Clean Tech Brand & Investor Portal",
    year: "2023",
    type: "Brand Identity",
    image: "/images/jMyKum9tkI3nlZlUp5RZLjnTPU.jpg",
    logo: "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg",
  },
  {
    num: "[12]",
    title: "Codecraft",
    category: "AI IDE Interface & Design System",
    year: "2023",
    type: "Product Design",
    image: "/images/uC3DPDrBdJCZlHMQcaazSdNDaHM.jpg",
    logo: "/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg",
  },
];

const categories = ["All", "Brand Identity", "Product Design", "Web Design"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === activeCategory);

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 sm:pt-40">
        <section className="pb-16 sm:pb-24">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                [Work]
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white mb-2">
                  All Case Studies <span className="font-mono text-neutral-500 text-3xl sm:text-5xl">[12]</span>
                </h1>
                <p className="text-sm font-mono text-neutral-400">
                  © 2016 — 2025 Selected client archive
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-white text-black font-medium shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((study) => (
                <div
                  key={study.title}
                  className="group rounded-2xl bg-[#1c1c1c] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-mono text-white/70">
                        {study.num}
                      </span>
                    </div>

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
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
