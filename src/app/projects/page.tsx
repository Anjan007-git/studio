"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { allProjects } from "@/lib/projects-data";
import { ArrowUpRight, Search } from "@/components/icons";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";
import { ParallaxImage } from "@/components/ParallaxImage";

const projectTechStack: Record<string, { tags: string[]; categoryGroup: string }> = {
  quantum: {
    tags: ["Next.js", "Python / ML", "Neural Data Viz", "TypeScript"],
    categoryGroup: "AI Tools",
  },
  cubekit: {
    tags: ["3D WebGL", "React", "Spatial UI", "Wasm"],
    categoryGroup: "Software & Web Apps",
  },
  ephemeral: {
    tags: ["Mobile App", "React Native", "Encrypted Messaging", "Real-Time"],
    categoryGroup: "Software & Web Apps",
  },
  warpspeed: {
    tags: ["Developer Platform", "SaaS Architecture", "Next.js", "GraphQL"],
    categoryGroup: "Technical Projects",
  },
  magnolia: {
    tags: ["Headless E-Commerce", "Next.js", "Tailwind CSS", "Custom API"],
    categoryGroup: "Websites",
  },
  "global-bank": {
    tags: ["FinTech Systems", "Design Systems", "Enterprise Security", "React"],
    categoryGroup: "Technical Projects",
  },
  lightspeed: {
    tags: ["High-Frequency Console", "Payments API", "Trading UI", "Web Platform"],
    categoryGroup: "Software & Web Apps",
  },
  clandestine: {
    tags: ["Digital Platform", "Interactive Commerce", "Next.js", "Animation"],
    categoryGroup: "Websites",
  },
  "flora-and-fauna": {
    tags: ["Web Architecture", "Headless Commerce", "Next.js", "Tailwind"],
    categoryGroup: "Websites",
  },
  boltshift: {
    tags: ["Supply Chain Platform", "Data Pipelines", "Enterprise Cloud", "TypeScript"],
    categoryGroup: "Technical Projects",
  },
  "solaris-energy": {
    tags: ["CleanTech Portal", "Investor Portal", "Full-Stack Web", "Cloud API"],
    categoryGroup: "Websites",
  },
  codecraft: {
    tags: ["AI IDE Interface", "Developer Tools", "Electron / React", "Design Tokens"],
    categoryGroup: "AI Tools",
  },
};

const categories = ["All", "Software & Web Apps", "Websites", "AI Tools", "Technical Projects"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const tech = projectTechStack[p.slug];
      const matchesCategory =
        activeCategory === "All" ||
        (tech && tech.categoryGroup === activeCategory);

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.client.toLowerCase().includes(query) ||
        p.fullTitle.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (tech && tech.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            {/* Header Tag */}
            <MotionReveal delay={30} variant="fade-up">
              <div className="mb-4">
                <span className="section-label">
                  [Projects]
                </span>
              </div>
            </MotionReveal>

            {/* Page Title & Controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <MotionReveal delay={60} variant="fade-up">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <ScrollLinkedText
                      as="h1"
                      className="text-4xl sm:text-6xl md:text-7xl font-display font-semibold tracking-[-0.04em] text-white leading-[1.05]"
                      text="Engineering & Digital Portfolio"
                      highlightWords={["Engineering", "Digital", "Portfolio"]}
                      start="top 95%"
                      end="top 40%"
                      scrub={0.5}
                    />
                    <span className="font-display font-medium text-[#848484] text-2xl sm:text-4xl shrink-0">
                      [{allProjects.length}]
                    </span>
                  </div>
                  <ScrollLinkedText
                    as="p"
                    className="text-sm font-sans text-[#b8b8b8] tracking-[-0.01em]"
                    text="Software products, web applications, AI tools, and technical architectures • 2024 — 2026"
                    highlightWords={["Software", "products", "applications", "AI", "tools", "architectures"]}
                    start="top 90%"
                    end="top 45%"
                    scrub={0.5}
                  />
                </div>
              </MotionReveal>

              {/* Controls: Search + Category Pills */}
              <MotionReveal delay={120} variant="fade-up">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Search Input */}
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search software & tech..."
                      className="w-full sm:w-60 pl-9 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#848484] focus:outline-none focus:border-white/30 font-sans transition-colors"
                    />
                    <Search className="w-3.5 h-3.5 text-[#848484] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 bg-white/[0.04] p-1 rounded-2xl sm:rounded-full border border-white/10">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer select-none font-display ${
                          activeCategory === cat
                            ? "bg-white text-black font-semibold shadow-sm"
                            : "text-[#b8b8b8] hover:text-white font-medium hover:bg-white/[0.04]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Editorial Grid of Interactive Projects */}
            {filtered.length === 0 ? (
              <MotionReveal delay={150} variant="fade">
                <div className="py-24 text-center border border-white/10 rounded-3xl bg-[#1c1c1c]">
                  <p className="text-[#b8b8b8] text-sm font-sans mb-2">
                    No technical projects match your search or filter.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    className="text-xs font-display font-medium text-white underline underline-offset-4 hover:text-[#b8b8b8] cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              </MotionReveal>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filtered.map((study, idx) => {
                  const techInfo = projectTechStack[study.slug];

                  return (
                    <MotionReveal
                      key={study.slug}
                      delay={Math.min((idx % 6) * 65, 300)}
                      variant="fade-up"
                      className="h-full"
                    >
                      <Link
                        href={`/projects/${study.slug}`}
                        className="group rounded-none bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/30 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col justify-between h-full relative"
                      >
                        {/* Large Image Preview with Interactive Reveal */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 rounded-none">
                          <ParallaxImage
                            src={study.coverImage}
                            alt={study.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            speed={0.08}
                            containerClassName="w-full h-full"
                            imageClassName="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />

                          {/* Cinematic Depth Gradient Mask */}
                          <div
                            className="absolute inset-0 pointer-events-none overflow-hidden"
                            style={{
                              maskImage:
                                "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 45%)",
                              WebkitMaskImage:
                                "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0) 45%)",
                            }}
                          >
                            <Image
                              src={study.coverImage}
                              alt=""
                              fill
                              aria-hidden="true"
                              className="object-cover blur-xl scale-110"
                            />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" />

                          {/* Top left number pill */}
                          <div className="absolute top-4 left-4 z-20">
                            <span className="text-xs font-display font-medium text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/15 group-hover:border-white/30 transition-colors">
                              {study.number}
                            </span>
                          </div>

                          {/* Top right classification */}
                          <div className="absolute top-4 right-4 z-20">
                            <span className="text-xs font-display font-medium text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/15 group-hover:border-white/30 transition-colors">
                              {techInfo ? techInfo.categoryGroup : study.year}
                            </span>
                          </div>

                          {/* Centered Client Logo Watermark */}
                          {study.logo && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="relative w-32 h-10 flex items-center justify-center">
                                <Image
                                  src={study.logo}
                                  alt={`${study.title} logo`}
                                  width={120}
                                  height={36}
                                  className="max-h-7 w-auto object-contain brightness-200"
                                />
                              </div>
                            </div>
                          )}

                          {/* Interactive Hover Arrow Indicator */}
                          <div className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-black group-hover:bg-white group-hover:border-white group-hover:scale-110 transition-all duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>

                        {/* Card Content & Technology Labels */}
                        <div className="p-6 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-2xl font-display font-semibold text-white tracking-[-0.03em] group-hover:text-neutral-200 transition-colors">
                                {study.title}
                              </h3>
                              <span className="text-[11px] font-display font-semibold tracking-[-0.02em] text-[#b8b8b8] bg-[#181818] px-2.5 py-1 rounded-full border border-[#363636] shrink-0 group-hover:border-white/30 transition-colors">
                                {study.industry}
                              </span>
                            </div>

                            {/* Concise Description */}
                            <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal line-clamp-2 tracking-[-0.01em] mb-4">
                              {study.description || study.fullTitle}
                            </p>
                          </div>

                          {/* Technology Labels */}
                          {techInfo && (
                            <div className="pt-4 border-t border-white/10 mt-auto">
                              <div className="flex flex-wrap gap-1.5">
                                {techInfo.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] font-mono tracking-tight text-[#848484] bg-white/[0.04] px-2 py-0.5 rounded border border-white/5 group-hover:border-white/15 group-hover:text-[#b8b8b8] transition-colors"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    </MotionReveal>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <MotionReveal delay={80} variant="fade-up">
          <CtaSection />
        </MotionReveal>
      </main>

      <Footer />
    </div>
  );
}
