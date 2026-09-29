"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { MagneticButton } from "./MagneticButton";

const articles = [
  {
    tag: "Trends",
    date: "Feb 3, 2025",
    readTime: "4 min read",
    title: "Beyond minimalism: what's next in web design.",
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
    excerpt:
      "After a decade of stark minimalism, web design is evolving. Discover the emerging trends in typography, color, and depth that define the next era of digital experiences.",
    author: "Emma Wright",
    role: "Senior Designer",
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
    author: "Alex West",
    role: "Creative Director",
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
    author: "Sarah Park",
    role: "Project Manager",
    slug: "designing-for-human-connection",
  },
];

export function Articles() {
  return (
    <section id="articles" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <MotionReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  [08] Articles
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Strategies &amp; insights from the team.
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
                We share what we&apos;ve learned building brands that matter. Deep dives into design thinking, creative process, and the intersection of business and aesthetics.
              </p>
            </div>

            <div className="shrink-0">
              <MagneticButton>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] transition-all cursor-pointer"
                >
                  <span>All Articles [10]</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <MotionReveal
              key={idx}
              variant="fade-up"
              delay={idx * 100}
              className="h-full"
            >
              <Link
                href={`/articles/${art.slug}`}
                data-cursor="hover"
                className="group flex flex-col rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 shadow-xl h-full justify-between"
              >
                <div>
                  {/* Image Thumbnail with zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/10">
                        {art.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 mb-3">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors mb-3 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {art.author}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 block">
                      {art.role}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
