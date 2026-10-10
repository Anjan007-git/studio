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

const categories = ["All", "Brand Identity", "Product Design", "Web Design"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.type === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fullTitle.toLowerCase().includes(searchQuery.toLowerCase());
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
                  [Our Work]
                </span>
              </div>
            </MotionReveal>

            {/* Page Title & Controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <MotionReveal delay={70} variant="fade-up">
                <div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-semibold tracking-[-0.04em] text-white mb-3">
                    All Case Studies{" "}
                    <span className="font-display font-medium text-[#848484] text-3xl sm:text-5xl">
                      [{allProjects.length}]
                    </span>
                  </h1>
                  <p className="text-sm font-sans text-[#b8b8b8] tracking-[-0.01em]">
                    Selected client archive • 2024 — 2026
                  </p>
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
                      placeholder="Search projects..."
                      className="w-full sm:w-56 pl-9 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#848484] focus:outline-none focus:border-white/30 font-sans transition-colors"
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

            {/* 3-Column Grid of Interactive Projects */}
            {filtered.length === 0 ? (
              <MotionReveal delay={150} variant="fade">
                <div className="py-24 text-center border border-white/10 rounded-3xl bg-[#1c1c1c]">
                  <p className="text-[#b8b8b8] text-sm font-sans mb-2">
                    No projects match your filter.
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
                {filtered.map((study, idx) => (
                  <MotionReveal
                    key={study.slug}
                    delay={Math.min((idx % 6) * 65, 300)}
                    variant="fade-up"
                    className="h-full"
                  >
                    <Link
                      href={`/projects/${study.slug}`}
                      className="group rounded-none bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/30 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col justify-between h-full"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 rounded-none">
                        <Image
                          src={study.coverImage}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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

                        {/* Top right year */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="text-xs font-display font-medium text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/15 group-hover:border-white/30 transition-colors">
                            {study.year}
                          </span>
                        </div>

                        {/* Centered Client Logo watermark */}
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

                        {/* Hover Arrow in Bottom Right */}
                        <div className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-black group-hover:bg-white group-hover:border-white group-hover:scale-110 transition-all duration-300">
                          <span className="text-base font-light leading-none select-none transition-transform duration-300 group-hover:rotate-90 font-display">
                            +
                          </span>
                        </div>
                      </div>

                      {/* Card Content Footer */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-2xl font-display font-semibold text-white tracking-[-0.03em] group-hover:text-neutral-200 transition-colors">
                            {study.title}
                          </h3>
                          <span className="text-[11px] font-display font-semibold tracking-[-0.02em] text-[#b8b8b8] bg-[#181818] px-2.5 py-1 rounded-full border border-[#363636] shrink-0 group-hover:border-white/30 transition-colors">
                            {study.type}
                          </span>
                        </div>
                        <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal line-clamp-2 tracking-[-0.01em]">
                          {study.fullTitle}
                        </p>
                      </div>
                    </Link>
                  </MotionReveal>
                ))}
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
