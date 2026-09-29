"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { allProjects } from "@/lib/projects-data";
import { ArrowUpRight, Search } from "@/components/icons";

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
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            {/* Header Tag */}
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                [Our Work]
              </span>
            </div>

            {/* Page Title & Controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3">
                  All Case Studies{" "}
                  <span className="font-mono text-neutral-500 text-3xl sm:text-5xl">
                    [{allProjects.length}]
                  </span>
                </h1>
                <p className="text-sm font-mono text-neutral-400">
                  © 2016 — 2025 Selected client archive
                </p>
              </div>

              {/* Controls: Search + Category Pills */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full sm:w-56 pl-9 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 font-mono transition-colors"
                  />
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 bg-white/[0.04] p-1 rounded-full border border-white/10">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer select-none ${
                        activeCategory === cat
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3-Column Grid of Interactive Projects */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center border border-white/10 rounded-3xl bg-[#1c1c1c]">
                <p className="text-neutral-400 text-sm font-mono mb-2">
                  No projects match your filter.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs font-mono text-white underline underline-offset-4 hover:text-neutral-300 cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filtered.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/projects/${study.slug}`}
                    data-cursor="project"
                    data-cursor-label="View ↗"
                    className="group rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={study.coverImage}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                      {/* Top left number pill */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-mono text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {study.number}
                        </span>
                      </div>

                      {/* Top right year */}
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-mono text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {study.year}
                        </span>
                      </div>

                      {/* Centered Client Logo watermark */}
                      {study.logo && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
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

                      {/* Hover Arrow in Top Right */}
                      <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Content Footer */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                          {study.title}
                        </h3>
                        <span className="text-[11px] font-mono text-neutral-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10 shrink-0">
                          {study.type}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-2">
                        {study.fullTitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
