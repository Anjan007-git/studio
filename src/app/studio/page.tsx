"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { ArrowUpRight, Star } from "@/components/icons";

const team = [
  {
    name: "Alex West",
    role: "Founder & Creative Director",
    email: "alex@mugen.design",
    bio: "With over 15 years in digital design, Alex founded MUGEN° to create a studio where craft comes first. He believes great design happens through process, not heroics.",
    image: "/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg",
  },
  {
    name: "Sarah Park",
    role: "Project Manager",
    email: "sarah@mugen.design",
    bio: "Sarah keeps projects flowing and clients happy. With a background in design ops, she's mastered the art of making complex timelines feel effortless.",
    image: "/images/ulbEv91MwUwTk34ixqmyIluLPJY.png",
  },
  {
    name: "David Torres",
    role: "Developer",
    email: "david@mugen.design",
    bio: "David bridges design and development, turning ambitious concepts into seamless experiences. His background in architecture informs his approach to building digital products.",
    image: "/images/siKQvG204y5XTlJmEnImPRJ2lc.png",
  },
  {
    name: "Emma Wright",
    role: "Senior Designer",
    email: "emma@mugen.design",
    bio: "Brings 8+ years of brand and digital expertise from agencies in Seoul and Toronto. She's passionate about typography and building design systems that actually work.",
    image: "/images/2szvKnNjJBBkPsk6yCETyIDktns.png",
  },
];

const studioMoments = [
  {
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    caption:
      "Natural light and exposed beams create an inspiring workspace where creativity flows as freely as the conversation.",
    date: "1/15/25",
  },
  {
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    caption:
      "Impromptu discussions happen everywhere in our space. The best ideas often emerge between formal meetings, fueled by curiosity and coffee.",
    date: "1/28/25",
  },
  {
    image: "/images/rNFwtSztVU2xDC3IQXpDMpExC2Y.jpeg",
    caption:
      "Our kitchen is where ideas percolate alongside the coffee. A space designed for both quick breaks and spontaneous brainstorming sessions.",
    date: "3/5/25",
  },
  {
    image: "/images/T84SzYMU2yp2tyhm3OOShvXWc.jpeg",
    caption:
      "Every project starts with a conversation. Our meeting rooms are designed for collaboration, where laughter is just as important as strategy.",
    date: "1/9/18",
  },
];

const pillars = [
  {
    num: "01",
    title: "Why we do this",
    description:
      "We spent years in traditional agencies watching the same problems repeat. Three-month projects that should take three weeks. Revision loops that never end. Invoices that surprise everyone. Talented designers spending more time in meetings than designing. Meanwhile, businesses needed design more than ever but couldn't afford the agency circus or the hiring lottery.",
  },
  {
    num: "02",
    title: "How we think",
    description:
      "We approach every project with three simple questions: What problem are we solving? Who are we solving it for? What's the simplest solution that actually works? Good design isn't about following trends or winning awards. It's about creating something that serves its purpose beautifully. Whether that's a logo that captures a brand's essence or a website that converts visitors into customers, we focus on outcomes, not outputs.",
  },
  {
    num: "03",
    title: "Our philosophy",
    description:
      "Good design solves problems. Great design prevents them. We focus on creating digital experiences that work seamlessly and look beautiful doing it. We believe in the power of simplicity. In saying no to feature creep. In launching something good today rather than something perfect never.",
  },
  {
    num: "04",
    title: "Our process",
    description:
      "Every project starts with listening. We dig deep to understand your business, your challenges, and where you want to go. Then we move fast—strategy in week one, concepts in week two, refinements until it's right. We work in focused sprints with regular check-ins. No black boxes or big reveals. You'll see progress weekly and have input throughout. Because the best work happens when everyone's aligned from day one.",
  },
];

const studioArticles = [
  {
    category: "Trends",
    date: "Feb 3, 2025",
    readTime: "4 min read",
    title: "Beyond minimalism: what's next in web design.",
    summary:
      "After a decade of stark minimalism, web design is evolving. Discover the emerging trends in typography, color, and depth that define the next era of digital experiences.",
    author: "Emma Wright",
    role: "Senior Designer",
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
    slug: "beyond-minimalism-what-s-next-in-web-design",
  },
  {
    category: "Strategy",
    date: "Apr 16, 2025",
    readTime: "5 min read",
    title: "Building brands that scale.",
    summary:
      "The brand that gets you to $1M will strangle you at $100M. Learn how to build flexible brand systems that grow with your business, not against it.",
    author: "Alex West",
    role: "Creative Director",
    image: "/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg",
    slug: "building-brands-that-scale",
  },
  {
    category: "Design",
    date: "Apr 1, 2025",
    readTime: "4 min read",
    title: "Designing for human connection.",
    summary:
      "Learn how emotional design drives 30% higher retention. Explore micro-interactions, animation, and psychology that transform functional interfaces into beloved products.",
    author: "Sarah Park",
    role: "Project Manager",
    image: "/images/AkfwmbbK7reh203E7bgE8GE6w.png",
    slug: "designing-for-human-connection",
  },
  {
    category: "Process",
    date: "Mar 6, 2025",
    readTime: "6 min read",
    title: "How designers and developers can actually collaborate.",
    summary:
      "Discover proven strategies to bridge the designer-developer gap. Learn how top teams eliminate handoff friction and ship better products faster through true collaboration.",
    author: "David Torres",
    role: "Developer",
    image: "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
    slug: "how-designers-and-developers-can-actually-collaborate",
  },
];

const clientLogos = [
  { name: "Solaris", logo: "/images/Lg8L1fwLV5df0Osj8gRmX64aU.svg" },
  { name: "Clandestine", logo: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg" },
  { name: "Flora & Fauna", logo: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg" },
  { name: "Boltshift", logo: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg" },
  { name: "Quantum", logo: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg" },
  { name: "Warpspeed", logo: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg" },
  { name: "Magnolia", logo: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg" },
  { name: "Global Bank", logo: "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg" },
];

export default function StudioPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Header Hero Section */}
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                [The Studio]
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-[-0.035em] text-white max-w-6xl leading-[1.08] mb-12">
              Mugen is a full service design team based in Toronto, Canada. We&apos;re a small team doing what we love: creating great design for businesses that need to move fast.
            </h1>
          </div>
        </section>

        {/* [Who we are] Section with 2 Columns and Bento Stats */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                [Who we are]
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
              <p className="text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed">
                Founded in 2016, we&apos;ve grown carefully and intentionally. We&apos;ve turned down venture capital, avoided the hire-fast mentality, and said no to projects that didn&apos;t align with our values. This deliberate approach has allowed us to build lasting relationships with clients who value craft as much as we do.
              </p>
              <p className="text-lg sm:text-2xl text-neutral-400 font-light leading-relaxed">
                We&apos;re four people who genuinely enjoy working together. Alex leads creative direction, Sarah handles strategy, David owns development, and Emma manages operations. No egos, no drama—just a shared commitment to doing work we&apos;re proud of. When you work with us, you work directly with us.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Location
                </span>
                <div className="mt-8">
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Toronto, CA
                  </p>
                  <p className="text-xs text-neutral-400 mt-2">
                    Founded in Toronto, Canada.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Experience
                </span>
                <div className="mt-8">
                  <p className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    15+
                  </p>
                  <p className="text-xs text-neutral-400 mt-2">
                    Years combined experience
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Reputation
                </span>
                <div className="mt-8">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      4.9
                    </span>
                    <span className="text-xl text-neutral-500">/ 5</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-400">
                    Average client rating
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between group hover:border-white/30 transition-all">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Careers
                </span>
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Join the team
                  </h4>
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    If you&apos;re ready to shape the future with us, your journey could start here.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-white group-hover:text-neutral-300 transition-colors"
                  >
                    <span>Let&apos;s talk</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Studio Section: Studio Spaces & Workplace Photo Grid */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                [Space]
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Our studio.
              </h2>
              <p className="text-xl sm:text-2xl text-neutral-400 font-light max-w-3xl">
                We built this studio to be the kind of place we&apos;d want to work.
              </p>
            </div>

            {/* 4 Workspace Photo Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {studioMoments.map((moment, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden flex flex-col group hover:border-white/20 transition-all"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={moment.image}
                      alt="Studio workspace"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-300">
                      {moment.date}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex items-center">
                    <p className="text-xs text-neutral-300 leading-relaxed font-light">
                      {moment.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Studio Environment Philosophy Statements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 rounded-3xl bg-[#1c1c1c] border border-white/10">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                  Environment
                </span>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
                  Good work happens in good spaces. Our studio in Toronto&apos;s west end is designed for focus, not impressions. Natural light, open workspace, and all the coffee we can drink. No ping pong tables or nap pods—just an environment where great design can happen without distractions.
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                  Deliberate Scale
                </span>
                <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
                  We keep our team small on purpose. It means everyone has ownership, every voice matters, and every project gets our full attention. We hire slowly and thoughtfully, looking for people who are talented, yes, but more importantly, who share our belief that design should solve real problems for real businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                [People]
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Meet the team.
              </h2>
              <p className="text-lg sm:text-2xl text-neutral-400 font-light max-w-4xl leading-relaxed">
                We&apos;re four people who happen to be really good at what we do. More importantly, we actually enjoy working together. No politics. No drama. Just a shared commitment to doing work we&apos;re proud of.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    {/* Portrait Photo with Smooth Masking & Zoom */}
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mb-4">
                      {member.role}
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleCopyEmail(member.email)}
                      className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>
                        {copiedEmail === member.email ? "copied!" : member.email}
                      </span>
                    </button>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-neutral-400 hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Favorite Clients Section */}
        <section className="py-20 sm:py-24 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                [Trust]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Our favorite clients.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="rounded-2xl bg-[#1c1c1c] border border-white/10 h-24 flex items-center justify-center p-4 hover:border-white/30 transition-all group"
                >
                  <div className="relative w-full h-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach / Timeline Section (2016 - 2025) */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                [Philosophy]
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Our approach.
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-4">
                <span>2016 — 2025</span>
                <span>•</span>
                <span>4 Core Pillars</span>
              </div>
              <p className="text-base sm:text-xl text-neutral-400 font-light">
                We&apos;ve helped over 100 clients achieve their goals and increase revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {pillars.map((item) => (
                <div
                  key={item.num}
                  className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8">
                      <span className="text-neutral-500">/{item.num}</span>
                      <span className="text-white font-medium">MUGEN®</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light pt-6 border-t border-white/10 mt-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies & Insights / Articles Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#141414]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  [Articles]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Strategies &amp; insights from the team.
                </h2>
              </div>
              <Link
                href="/articles"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <span>All Articles</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {studioArticles.map((article, idx) => (
                <Link
                  key={idx}
                  href={`/articles/${article.slug}`}
                  className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-5 flex flex-col justify-between group hover:border-white/20 transition-all"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-6">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-300">
                        {article.category}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-3 mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-white block">
                        {article.author}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 block">
                        {article.role}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
