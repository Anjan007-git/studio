"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { allArticles } from "@/lib/articles-data";
import { ArrowUpRight, Search } from "@/components/icons";

const categories = ["All", "Strategy", "Trends", "Psychology", "Process"];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allArticles.filter((art) => {
      const matchesCategory =
        activeCategory === "All" || art.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        <section className="pb-24 sm:pb-32">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            {/* Header Tag */}
            <div className="mb-4">
              <span className="section-label">
                [Editorial]
              </span>
            </div>

            {/* Header & Controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-semibold tracking-[-0.04em] text-white mb-4">
                  Strategies &amp; insights.
                </h1>
                <p className="text-base sm:text-xl text-[#b8b8b8] max-w-2xl font-sans font-normal leading-relaxed tracking-[-0.02em]">
                  We share what we&apos;ve learned building brands that scale. Deep dives into design thinking, creative process, and the intersection of business and aesthetics.
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full sm:w-56 pl-9 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#848484] focus:outline-none focus:border-white/30 font-sans transition-colors"
                  />
                  <Search className="w-3.5 h-3.5 text-[#848484] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <div className="flex flex-wrap items-center gap-1.5 bg-white/[0.04] p-1 rounded-full border border-white/10">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer select-none font-display ${
                        activeCategory === cat
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "text-[#b8b8b8] hover:text-white font-medium"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles List */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center border border-white/10 rounded-3xl bg-[#1c1c1c]">
                <p className="text-[#b8b8b8] text-sm font-sans mb-2">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs font-display font-medium text-white underline underline-offset-4 hover:text-[#b8b8b8] cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="divide-y divide-white/10 border-y border-white/10">
                {filtered.map((art) => (
                  <Link
                    key={art.slug}
                    href={`/articles/${art.slug}`}
                    className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group cursor-pointer hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl transition-colors duration-300"
                  >
                    {/* Meta info */}
                    <div className="lg:col-span-3 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-display font-semibold tracking-[-0.02em] px-3 py-1 rounded-full bg-[#181818] border border-[#363636] text-[#b8b8b8] w-fit">
                          {art.category}
                        </span>
                        <span className="text-xs font-display font-medium text-[#848484]">
                          {art.number}
                        </span>
                      </div>
                      <div className="text-xs font-sans text-[#848484]">
                        <span>{art.date}</span>
                        <span className="mx-2">•</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>

                    {/* Middle: Title & Excerpt */}
                    <div className="lg:col-span-6 space-y-3">
                      <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-[-0.03em] text-white group-hover:text-neutral-300 transition-colors leading-snug">
                        {art.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal line-clamp-2 max-w-xl tracking-[-0.01em]">
                        {art.description}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#848484]">
                        <div className="relative w-5 h-5 rounded-full overflow-hidden bg-neutral-800">
                          <Image
                            src={art.authorAvatar}
                            alt={art.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span>
                          {art.author} — {art.authorRole}
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail & Arrow */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6">
                      <div className="relative w-28 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shrink-0">
                        <Image
                          src={art.coverImage}
                          alt={art.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#848484] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
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
