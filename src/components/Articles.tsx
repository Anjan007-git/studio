"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

const articles = [
  {
    tag: "Trends",
    date: "Feb 3, 2025",
    readTime: "6 min read",
    title: "Beyond minimalism: what's next in web design.",
    image: "/images/T84SzYMU2yp2tyhm3OOShvXWc.jpeg",
    excerpt:
      "Why brutalist typography, tactile textures, and kinetic interactions are replacing the sterile white-space templates of the last decade.",
  },
  {
    tag: "Strategy",
    date: "Apr 16, 2025",
    readTime: "8 min read",
    title: "Building brands that scale.",
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    excerpt:
      "A framework for early-stage and growth founders to build visual systems that survive multiple funding rounds and product pivots.",
  },
  {
    tag: "Trends",
    date: "Apr 1, 2025",
    readTime: "5 min read",
    title: "Designing for human connection.",
    image: "/images/rNFwtSztVU2xDC3IQXpDMpExC2Y.jpeg",
    excerpt:
      "How intentional micro-copy, personality, and sensory feedback build software experiences that customers genuinely remember.",
  },
];

export function Articles() {
  return (
    <section id="articles" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full">
                [Articles]
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
              Strategies & insights from the team.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              We share what we&apos;ve learned building brands that matter. Deep dives into design thinking, creative process, and the intersection of business and aesthetics.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] transition-all"
            >
              <span>All Articles [10]</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-3xl bg-[#0c0c0c] border border-white/[0.08] overflow-hidden hover:border-white/[0.2] transition-all"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {art.tag}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 mb-3">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>Read full perspective</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
