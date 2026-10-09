"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "./icons";

const articles = [
  {
    tag: "Trends",
    date: "Feb 3, 2025",
    readTime: "4 min read",
    title: "Beyond minimalism: what's next in web design.",
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
    excerpt:
      "After a decade of stark minimalism, web design is evolving. Discover the emerging trends in typography, color, and depth that define the next era of digital experiences.",
    author: "Design Systems",
    role: "Studio Lead",
    slug: "beyond-minimalism-what-s-next-in-web-design",
  },
  {
    tag: "Strategy",
    date: "Apr 16, 2025",
    readTime: "5 min read",
    title: "Building brands that scale.",
    image: "/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg",
    excerpt:
      "The brand that gets you to $1M will strangle you at $100M. Learn how to build flexible brand systems that grow with your business, not against it.",
    author: "Creative Direction",
    role: "Studio Principal",
    slug: "building-brands-that-scale",
  },
  {
    tag: "Design",
    date: "Apr 1, 2025",
    readTime: "4 min read",
    title: "Designing for human connection.",
    image: "/images/AkfwmbbK7reh203E7bgE8GE6w.png",
    excerpt:
      "Learn how emotional design drives 30% higher retention. Explore micro-interactions, animation, and psychology that transform functional interfaces into beloved products.",
    author: "Design Strategy",
    role: "Partner",
    slug: "designing-for-human-connection",
  },
];

export function Articles() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".article-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="articles"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[var(--page-bg)] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="section-label">
                [08] Articles
              </span>
            </div>
            <h2 className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6">
              Strategies &amp; insights from the team.
            </h2>
            <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em]">
              We share what we&apos;ve learned building brands that matter. Deep dives into design thinking, creative process, and the intersection of business and aesthetics.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-[-0.02em] text-[#b8b8b8] hover:text-white px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] transition-all cursor-pointer group"
            >
              <span className="text-[#848484]">[10]</span>
              <span>All Articles</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid with Sharp-Edged Images */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <Link
              key={idx}
              href={`/articles/${art.slug}`}
              className="article-card group flex flex-col rounded-none bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 shadow-xl h-full justify-between"
            >
              <div>
                {/* Image Thumbnail with zoom — Perfectly Sharp Square Corners (0px radius) */}
                <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-black border-b border-white/10">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-none group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-display font-semibold tracking-[-0.02em] px-2.5 py-1 rounded-none bg-black/80 backdrop-blur-md text-white border border-white/15">
                      {art.tag}
                    </span>
                  </div>
                  {/* MUGEN Signature + Indicator in Bottom-Right Corner */}
                  <div className="absolute bottom-3 right-3 z-10 w-6 h-6 rounded-none bg-black/75 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/90 text-xs font-mono select-none">
                    +
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-[11px] font-sans text-[#848484] mb-3">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-neutral-300 transition-colors mb-3 leading-snug tracking-[-0.03em]">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] font-sans font-normal leading-relaxed line-clamp-3 tracking-[-0.01em]">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs font-display font-semibold text-white tracking-[-0.02em] block">
                    {art.author}
                  </span>
                  <span className="text-[10px] font-sans text-[#848484] block">
                    {art.role}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#848484] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
