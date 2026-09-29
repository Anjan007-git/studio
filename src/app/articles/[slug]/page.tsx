import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { allArticles, getArticleBySlug, getNextArticle } from "@/lib/articles-data";
import { ArrowLeft, ArrowRight } from "@/components/icons";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found — TRIFECTA TRENDS",
    };
  }

  return {
    title: `${article.title} — TRIFECTA TRENDS`,
    description: article.description,
    openGraph: {
      title: `${article.title} — TRIFECTA TRENDS`,
      description: article.description,
      images: [article.coverImage],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const nextArticle = getNextArticle(slug);
  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Breadcrumb Back Link */}
        <section className="pb-6">
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to articles</span>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-12 sm:pb-16">
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
            {/* Meta Tags */}
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white font-medium">
                {article.category}
              </span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.12]">
              {article.title}
            </h1>

            {/* Lead Description */}
            <p className="text-lg sm:text-2xl text-neutral-400 font-light leading-relaxed mb-10">
              {article.description}
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-900 border border-white/10 shrink-0">
                <Image
                  src={article.authorAvatar}
                  alt={article.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{article.author}</p>
                <p className="text-xs font-mono text-neutral-400">
                  {article.authorRole}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Cover Image */}
        <section className="pb-16 sm:pb-24">
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                className="object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </section>

        {/* Editorial Body Content */}
        <section className="pb-24 sm:pb-32">
          <div className="w-full max-w-3xl mx-auto px-6 sm:px-10">
            <article className="space-y-8 text-neutral-300 font-light text-base sm:text-lg leading-[1.8]">
              {article.sections.map((sec, idx) => {
                if (sec.type === "h2") {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl sm:text-4xl font-bold tracking-tight text-white pt-8 pb-2"
                    >
                      {sec.text}
                    </h2>
                  );
                } else if (sec.type === "h3") {
                  return (
                    <h3
                      key={idx}
                      className="text-xl sm:text-2xl font-bold tracking-tight text-white pt-6 pb-1"
                    >
                      {sec.text}
                    </h3>
                  );
                } else if (sec.type === "quote") {
                  return (
                    <div
                      key={idx}
                      className="my-10 p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border-l-4 border-white border border-white/10"
                    >
                      <blockquote className="text-xl sm:text-2xl font-medium text-white italic leading-relaxed mb-4">
                        {sec.text}
                      </blockquote>
                      {sec.author && (
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                          {sec.author}
                        </p>
                      )}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {sec.text}
                  </p>
                );
              })}
            </article>

            {/* Newsletter Inline Callout */}
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                [Stay Connected]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Subscribe to our newsletter.
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                Deep dives into design thinking, creative process, and the intersection of business and aesthetics. Delivered monthly.
              </p>
              <form
                action="#"
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Next Article Navigation */}
            {nextArticle && (
              <div className="mt-12">
                <Link
                  href={`/articles/${nextArticle.slug}`}
                  className="group block p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                    <span className="uppercase tracking-widest">[Next Article]</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-white">
                      Read next <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                    {nextArticle.title}
                  </h3>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* More Insights / Related Articles */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  [Read Next]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  More insights.
                </h2>
              </div>
              <Link
                href="/articles"
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                All Articles ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-6">
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-300">
                        {rel.category}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-3">
                      <span>{rel.date}</span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug mb-3">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light line-clamp-3 leading-relaxed mb-6">
                      {rel.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">
                      By {rel.author}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
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
