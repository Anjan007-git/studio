"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";
import { CountUp } from "@/components/CountUp";
import { ArrowUpRight, Star } from "@/components/icons";

const team = [
  {
    name: "Creative Direction & Brand",
    role: "Studio Principal",
    email: "direction@trifectatrends.com",
    bio: "Guiding brand architecture, visual design systems, and creative philosophy across every touchpoint to ensure enduring market distinction.",
    image: "/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg",
  },
  {
    name: "Design Strategy & Advisory",
    role: "Partner",
    email: "advisory@trifectatrends.com",
    bio: "Orchestrating design operations, founder alignment, and high-velocity sprints to keep complex engagements moving with effortless momentum.",
    image: "/images/ulbEv91MwUwTk34ixqmyIluLPJY.png",
  },
  {
    name: "Interactive Engineering",
    role: "Technical Lead",
    email: "engineering@trifectatrends.com",
    bio: "Bridging spatial layout, 60fps motion architecture, and modern full-stack development into seamless, high-performance digital products.",
    image: "/images/siKQvG204y5XTlJmEnImPRJ2lc.png",
  },
  {
    name: "Product & Interface Systems",
    role: "Design Lead",
    email: "systems@trifectatrends.com",
    bio: "Obsessed with editorial typography, ergonomic interactions, and robust design token libraries that scale gracefully with business growth.",
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
    author: "Design Systems",
    role: "Studio Lead",
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
    author: "Creative Direction",
    role: "Studio Principal",
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
    author: "Design Strategy",
    role: "Partner",
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
    author: "Interactive Engineering",
    role: "Technical Lead",
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
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-28 sm:pt-36">
        {/* Header Hero Section */}
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-8">
                <span className="section-label">
                  [The Studio]
                </span>
              </div>
            </MotionReveal>

            <MotionReveal delay={140} yOffset={28}>
              <ScrollLinkedText
                as="h1"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-display font-bold tracking-[-0.04em] text-white max-w-6xl leading-[1.05] mb-12"
                text="TRIFECTA TRENDS is a creative technology and product design studio. We partner with ambitious companies to craft distinctive digital experiences, brand architecture, and high-converting platforms."
                highlightWords={["TRIFECTA", "TRENDS", "creative", "technology", "product", "design", "distinctive", "digital", "experiences", "platforms"]}
                start="top 95%"
                end="top 30%"
                scrub={0.6}
              />
            </MotionReveal>
          </div>
        </section>

        {/* [Who we are] Section with 2 Columns and Bento Stats */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-8">
                <span className="section-label block">
                  [Who we are]
                </span>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
              <ScrollLinkedText
                as="p"
                className="text-lg sm:text-2xl text-white font-sans font-normal leading-relaxed tracking-[-0.02em]"
                text="Built deliberately from day one, we've grown carefully and intentionally. We've avoided the hire-fast agency mentality and said no to engagements that didn't align with our standards. This focused approach allows us to forge lasting partnerships with teams who value world-class craft."
                highlightWords={["deliberately", "carefully", "intentionally", "standards", "world-class", "craft"]}
                start="top 85%"
                end="top 35%"
                scrub={0.6}
              />
              <ScrollLinkedText
                as="p"
                className="text-lg sm:text-2xl text-[#b8b8b8] font-sans font-normal leading-relaxed tracking-[-0.02em]"
                text="We operate as senior practitioners working without intermediaries. Creative direction, strategy, systems architecture, and engineering work in close lockstep. No egos, no drama—just a shared commitment to building work that commands market leadership."
                highlightWords={["senior", "practitioners", "Creative", "direction", "strategy", "architecture", "engineering", "leadership"]}
                start="top 82%"
                end="top 32%"
                scrub={0.6}
              />
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MotionReveal delay={60}>
                <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300 h-full">
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em]">
                    Presence
                  </span>
                  <div className="mt-8">
                    <p className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.03em]">
                      Global Studio
                    </p>
                    <p className="text-xs text-[#b8b8b8] font-sans mt-2 tracking-[-0.01em]">
                      Hubs in New York, San Francisco &amp; Global Remote.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal delay={120}>
                <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300 h-full">
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em]">
                    Experience
                  </span>
                  <div className="mt-8">
                    <p className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-[-0.04em]">
                      <CountUp end={10} start={0} suffix="+" duration={1.6} />
                    </p>
                    <p className="text-xs text-[#b8b8b8] font-sans mt-2 tracking-[-0.01em]">
                      Years combined expertise
                    </p>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal delay={180}>
                <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300 h-full">
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em]">
                    Reputation
                  </span>
                  <div className="mt-8">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-[-0.04em]">
                        <CountUp end={4.9} start={0.0} decimals={1} suffix=" / 5" duration={1.8} />
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-[#b8b8b8] font-sans tracking-[-0.01em]">
                      Average client rating
                    </p>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal delay={240}>
                <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between group hover:border-white/30 transition-all duration-300 h-full">
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em]">
                    Careers
                  </span>
                  <div className="mt-8">
                    <h4 className="text-xl font-display font-semibold text-white mb-2 tracking-[-0.03em]">
                      Join the team
                    </h4>
                    <p className="text-xs text-[#b8b8b8] font-sans mb-6 leading-relaxed tracking-[-0.01em]">
                      If you&apos;re ready to shape the future with us, your journey could start here.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-white group-hover:text-[#b8b8b8] transition-colors tracking-[-0.02em]"
                    >
                      <span>Let&apos;s talk</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Our Studio Section: Studio Spaces & Workplace Photo Grid */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-14">
                <span className="section-label block mb-3">
                  [Space]
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4">
                  Our studio.
                </h2>
                <p className="text-xl sm:text-2xl text-[#b8b8b8] font-sans font-normal max-w-3xl tracking-[-0.02em]">
                  We built this studio to be the kind of place we&apos;d want to work.
                </p>
              </div>
            </MotionReveal>

            {/* 4 Workspace Photo Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {studioMoments.map((moment, idx) => (
                <MotionReveal key={idx} delay={idx * 80}>
                  <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300 h-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={moment.image}
                        alt="Studio workspace"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans text-[#b8b8b8]">
                        {moment.date}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex items-center">
                      <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em]">
                        {moment.caption}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>

            {/* Studio Environment Philosophy Statements */}
            <MotionReveal delay={120}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 rounded-3xl bg-[#1c1c1c] border border-white/10">
                <div>
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-3">
                    Environment
                  </span>
                  <ScrollLinkedText
                    as="p"
                    className="text-base sm:text-lg text-white leading-relaxed font-sans font-normal tracking-[-0.01em]"
                    text="Good work happens in good environments. Our studio spaces and remote workstations are designed for focus, not impressions. Curated physical spaces, natural light, deep asynchronous focus blocks, and high-performance hardware. An environment where great design happens without distraction."
                    highlightWords={["good", "environments", "focus", "natural", "light", "high-performance", "without", "distraction"]}
                    start="top 85%"
                    end="top 40%"
                    scrub={0.6}
                  />
                </div>
                <div>
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-3">
                    Deliberate Scale
                  </span>
                  <ScrollLinkedText
                    as="p"
                    className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em]"
                    text="We keep our team small on purpose. It means everyone has ownership, every voice matters, and every project gets our full attention. We hire slowly and thoughtfully, looking for people who are talented, yes, but more importantly, who share our belief that design should solve real problems for real businesses."
                    highlightWords={["small", "purpose", "ownership", "full", "attention", "solve", "real", "problems"]}
                    start="top 85%"
                    end="top 40%"
                    scrub={0.6}
                  />
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-14">
                <span className="section-label block mb-3">
                  [People]
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4">
                  Disciplines &amp; Leadership.
                </h2>
                <ScrollLinkedText
                  as="p"
                  className="text-lg sm:text-2xl text-[#b8b8b8] font-sans font-normal max-w-4xl leading-relaxed tracking-[-0.02em]"
                  text="A disciplined studio of senior practitioners spanning creative direction, digital product systems, and interactive engineering. No politics. No junior handoffs. Direct collaboration on work that matters."
                  highlightWords={["disciplined", "senior", "practitioners", "creative", "direction", "digital", "product", "systems", "interactive", "engineering", "Direct", "collaboration"]}
                  start="top 85%"
                  end="top 40%"
                  scrub={0.6}
                />
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, idx) => (
                <MotionReveal key={member.name} delay={idx * 80}>
                  <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 h-full">
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

                      <h3 className="text-xl font-display font-semibold text-white mb-1 tracking-[-0.03em]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-sans text-[#b8b8b8] mb-4 tracking-[-0.01em]">
                        {member.role}
                      </p>
                      <p className="text-xs text-[#848484] leading-relaxed font-sans font-normal mb-6 tracking-[-0.01em]">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => handleCopyEmail(member.email)}
                        className="text-xs font-display font-medium text-[#b8b8b8] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer tracking-[-0.02em]"
                      >
                        <span>
                          {copiedEmail === member.email ? "copied!" : member.email}
                        </span>
                      </button>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#848484] hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Favorite Clients Section */}
        <section className="py-20 sm:py-24 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-12">
                <span className="section-label block mb-2">
                  [Trust]
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-semibold tracking-[-0.04em] text-white">
                  Our favorite clients.
                </h2>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
              {clientLogos.map((client, idx) => (
                <MotionReveal key={client.name} delay={(idx % 4) * 60}>
                  <div className="rounded-2xl bg-[#1c1c1c] border border-white/10 h-24 flex items-center justify-center p-4 hover:border-white/30 transition-all duration-300 group">
                    <div className="relative w-full h-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain filter invert"
                      />
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach / Timeline Section (2016 - 2025) */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="max-w-3xl mb-16">
                <span className="section-label block mb-3">
                  [Philosophy]
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4">
                  Our approach.
                </h2>
                <div className="flex items-center gap-3 text-xs font-display font-medium text-[#848484] mb-4 tracking-[-0.02em]">
                  <span>Core Framework</span>
                  <span>•</span>
                  <span>4 Strategic Pillars</span>
                </div>
                <ScrollLinkedText
                  as="p"
                  className="text-base sm:text-xl text-[#b8b8b8] font-sans font-normal tracking-[-0.02em]"
                  text="We've helped over 100 clients achieve their goals and increase revenue."
                  highlightWords={["helped", "100", "clients", "goals", "increase", "revenue"]}
                  start="top 90%"
                  end="top 50%"
                  scrub={0.6}
                />
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {pillars.map((item, idx) => (
                <MotionReveal key={item.num} delay={idx * 80}>
                  <div className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group h-full">
                    <div>
                      <div className="flex items-center justify-between text-xs font-display font-medium text-[#848484] mb-8 tracking-[-0.02em]">
                        <span>/{item.num}</span>
                        <span className="text-white">TRIFECTA TRENDS®</span>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-white mb-4 tracking-[-0.03em]">
                        {item.title}
                      </h3>
                    </div>
                    <ScrollLinkedText
                      as="p"
                      className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal pt-6 border-t border-white/10 mt-6 tracking-[-0.01em]"
                      text={item.description}
                      start="top 90%"
                      end="top 50%"
                      scrub={0.6}
                    />
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies & Insights / Articles Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                <div>
                  <span className="section-label block mb-3">
                    [Articles]
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white">
                    Strategies &amp; insights from the team.
                  </h2>
                </div>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.02em]"
                >
                  <span>All Articles</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {studioArticles.map((article, idx) => (
                <MotionReveal key={idx} delay={idx * 80}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="rounded-3xl bg-[#1c1c1c] border border-white/10 p-5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 h-full"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-6">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-display font-semibold text-white border border-[#363636]">
                          {article.category}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-sans text-[#848484] mb-3">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-base font-display font-semibold text-white mb-3 group-hover:text-neutral-300 transition-colors leading-snug tracking-[-0.03em]">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal line-clamp-3 mb-6 tracking-[-0.01em]">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-display font-semibold text-white block tracking-[-0.02em]">
                          {article.author}
                        </span>
                        <span className="text-[10px] font-sans text-[#848484] block">
                          {article.role}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#848484] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </Link>
                </MotionReveal>
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
