import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { ArrowUpRight } from "@/components/icons";

export const metadata = {
  title: "Articles — Mugen Design Studio",
  description:
    "We share what we've learned building brands that matter. Deep dives into design thinking, creative process, and business.",
};

const articlesList = [
  {
    tag: "Psychology",
    title: "The science behind color perception and conversion rates",
    excerpt:
      "Color drives 90% of snap judgments online. Master digital color psychology, accessibility, and systems that influence user behavior and boost conversions.",
    author: "Sarah Park",
    authorRole: "Project Manager",
    date: "Apr 23, 2025",
    readTime: "3 min read",
  },
  {
    tag: "Process",
    title: "Why faster isn't always better: A critique of 5-day sprints",
    excerpt:
      "Design sprints promised innovation in 5 days. Years later, companies are learning when speed helps and when it hurts. A critical look at the sprint methodology's real impact.",
    author: "David Torres",
    authorRole: "Developer",
    date: "Apr 22, 2025",
    readTime: "4 min read",
  },
  {
    tag: "Strategy",
    title: "Building brands that scale: From seed to $100M ARR",
    excerpt:
      "The brand that gets you to $1M will strangle you at $100M. Learn how to build flexible brand systems that grow with your business, not against it.",
    author: "Alex West",
    authorRole: "Creative Director",
    date: "Apr 16, 2025",
    readTime: "5 min read",
  },
  {
    tag: "Trends",
    title: "Designing for human connection in an automated world",
    excerpt:
      "Learn how emotional design drives 30% higher retention. Explore micro-interactions, animation, and psychology that transform functional interfaces into beloved products.",
    author: "Emma Wright",
    authorRole: "Senior Designer",
    date: "Apr 1, 2025",
    readTime: "4 min read",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 sm:pt-40">
        <section className="pb-24 sm:pb-32">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            {/* Header */}
            <div className="mb-14 sm:mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-4">
                [Articles]
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white mb-6">
                Strategies & insights.
              </h1>
              <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed">
                We share what we&apos;ve learned building brands that matter.
                Deep dives into design thinking, creative process, and the
                intersection of business and aesthetics.
              </p>
            </div>

            {/* Articles List */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {articlesList.map((art, idx) => (
                <div
                  key={idx}
                  className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
                >
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 w-fit mb-4">
                      {art.tag}
                    </span>
                    <div className="text-xs font-mono text-neutral-500">
                      <span>{art.date}</span>
                      <span className="mx-2">•</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                      {art.title}
                    </h2>
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                      {art.excerpt}
                    </p>
                    <div className="pt-2 text-xs font-mono text-neutral-400">
                      By {art.author}, {art.authorRole}
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
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
