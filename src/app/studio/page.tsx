"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";
import { ArrowUpRight } from "@/components/icons";
import ParallaxUnfurlingGallery from "@/components/ui/3d-parallax-unfurling-gallery";

interface SynergyPillar {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullExplanation: string;
  keyOutputs: string[];
  connectionToOthers: string;
}

const synergyPillars: SynergyPillar[] = [
  {
    id: "product",
    name: "Digital Product & UX",
    category: "Foundation",
    shortDesc: "Purposeful interfaces and ergonomic user journeys built for clear problem solving.",
    fullExplanation:
      "A digital product succeeds when it simplifies complex workflows and respects the user's attention. We design intuitive platforms, SaaS products, and customer portals centered on business clarity. We prioritize usable information architecture over decorative excess.",
    keyOutputs: [
      "User journey mapping and workflow ergonomics",
      "Scalable interface systems and design tokens",
      "Interactive prototypes validated against user intent",
      "Accessibility compliance across all viewports",
    ],
    connectionToOthers:
      "Feeds engineering with clean system specifications, and provides marketing with a high-converting destination that delivers on advertising promises.",
  },
  {
    id: "technology",
    name: "Engineering & Technology",
    category: "Execution",
    shortDesc: "Resilient Next.js, full-stack backends, and AI pipelines engineered for speed.",
    fullExplanation:
      "Great ideas fail without dependable execution. Our engineering team writes clean, maintainable code using Next.js, TypeScript, resilient APIs, and practical AI tooling. We build applications that load in milliseconds, stay online through traffic spikes, and scale alongside enterprise growth.",
    keyOutputs: [
      "High-velocity Next.js and React web platforms",
      "Scalable backend APIs and database architectures",
      "Direct server-to-server conversion tracking pipelines",
      "Zero-downtime deployment pipelines on modern cloud infrastructure",
    ],
    connectionToOthers:
      "Powers the product with sub-second responsiveness, and equips marketing with high Quality Scores and reliable first-party data tracking.",
  },
  {
    id: "marketing",
    name: "Performance Marketing",
    category: "Acquisition",
    shortDesc: "Targeted Google Ads and Meta campaigns that attract high-intent customers.",
    fullExplanation:
      "Building a remarkable platform is only half the journey. We manage performance advertising across Google Ads search networks, Performance Max, and Meta social channels. Every campaign is calibrated to direct qualified visitors into tailored digital pathways.",
    keyOutputs: [
      "High-intent commercial search keyword campaigns",
      "Direct-response visual and copy creative testing",
      "Audience segmentation and cohort retargeting",
      "Transparent budget pacing tied to contribution margins",
    ],
    connectionToOthers:
      "Supplies the product with qualified customer demand, and generates live behavioral data to inform technical A/B testing and feature priorities.",
  },
  {
    id: "growth",
    name: "Continuous Growth & CRO",
    category: "Expansion",
    shortDesc: "Scientific conversion rate optimization and ongoing iterative refinement.",
    fullExplanation:
      "Launch is the beginning of the learning cycle. We analyze user sessions, heatmaps, and drop-off points to test headlines, form fields, and onboarding steps. By eliminating conversion friction, we lower client acquisition costs and compound revenue.",
    keyOutputs: [
      "Systematic landing page A/B split-testing",
      "Conversion funnel friction diagnostics",
      "Customer lifetime value and retention analytics",
      "Iterative feature refinement based on real telemetry",
    ],
    connectionToOthers:
      "Continuously improves marketing return on ad spend, and identifies new product capabilities that drive organic retention and expansion.",
  },
];

const studioPrinciples = [
  {
    num: "01",
    title: "Utility over decoration",
    description:
      "Every feature, layout decision, and line of code must serve a defined purpose. We eliminate unnecessary friction, avoid gimmicks, and focus on building digital systems that solve real operational and customer challenges.",
  },
  {
    num: "02",
    title: "Measurable commercial impact",
    description:
      "We judge our work by its contribution to your business. Whether that means faster page loads, lower cost per lead, or higher conversion rates, every sprint is anchored to measurable outcomes rather than subjective opinions.",
  },
  {
    num: "03",
    title: "Code and campaigns united",
    description:
      "Software engineering and digital marketing should never operate in isolation. When engineers understand campaign economics and marketers understand technical architecture, organizations move faster and achieve lower acquisition costs.",
  },
  {
    num: "04",
    title: "Continuous scientific improvement",
    description:
      "Markets and user behaviors evolve continuously. We treat digital products and marketing campaigns as living systems that require regular testing, telemetry monitoring, and disciplined iteration to maintain market leadership.",
  },
];

const studioSpaces = [
  {
    image: "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    caption: "Focus, deep concentration, and dedicated blocks of uninterrupted engineering.",
  },
  {
    image: "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    caption: "Collaborative technical reviews where architecture and campaign strategy align.",
  },
  {
    image: "/images/rNFwtSztVU2xDC3IQXpDMpExC2Y.jpeg",
    caption: "Iterative design sprints refining user interfaces and conversion funnels.",
  },
  {
    image: "/images/T84SzYMU2yp2tyhm3OOShvXWc.jpeg",
    caption: "Direct conversations with client leadership focused on real business goals.",
  },
];

const studioArticles = [
  {
    category: "Strategy",
    date: "Feb 2025",
    readTime: "4 min read",
    title: "Why sub-second load times directly lower customer acquisition costs.",
    summary:
      "How landing page speed impacts Google Quality Scores and Meta conversion rates, and why engineering architecture is your best growth lever.",
    slug: "beyond-minimalism-what-s-next-in-web-design",
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
  },
  {
    category: "Engineering",
    date: "Jan 2025",
    readTime: "5 min read",
    title: "Building server-side tracking pipelines for post-cookie attribution.",
    summary:
      "A technical walkthrough of implementing Meta Conversions API and Google Enhanced Conversions to eliminate lost attribution.",
    slug: "building-brands-that-scale",
    image: "/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg",
  },
  {
    category: "Growth",
    date: "Dec 2024",
    readTime: "4 min read",
    title: "The product-led acquisition loop: from ad click to active user.",
    summary:
      "How to align your paid advertising creative with onboarding UX to reduce early churn and increase customer lifetime value.",
    slug: "designing-for-human-connection",
    image: "/images/AkfwmbbK7reh203E7bgE8GE6w.png",
  },
  {
    category: "Process",
    date: "Nov 2024",
    readTime: "6 min read",
    title: "How developers and performance marketers collaborate effectively.",
    summary:
      "Eliminating the handoff bottleneck between media buyers and software engineers to ship high-converting experiments weekly.",
    slug: "how-designers-and-developers-can-actually-collaborate",
    image: "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
  },
];

export default function StudioPage() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = synergyPillars[activePillarIndex];

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

            <MotionReveal delay={120}>
              <ScrollLinkedText
                as="h1"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-bold tracking-[-0.04em] text-white max-w-6xl leading-[1.08] mb-10"
                text="TRIFECTA TRENDS brings software development and digital growth together. We build digital products and experiences, then help businesses reach the right audiences through thoughtful marketing, measurable campaigns, and continuous improvement."
                highlightWords={[
                  "TRIFECTA",
                  "TRENDS",
                  "software",
                  "development",
                  "digital",
                  "growth",
                  "together",
                  "products",
                  "experiences",
                  "marketing",
                  "measurable",
                  "campaigns",
                  "improvement",
                ]}
                start="top 95%"
                end="top 30%"
                scrub={0.6}
              />
            </MotionReveal>
          </div>
        </section>

        {/* Company Purpose & Approach Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-8">
                <span className="section-label block">
                  [Purpose &amp; Philosophy]
                </span>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
              <ScrollLinkedText
                as="p"
                className="text-lg sm:text-2xl text-white font-sans font-normal leading-relaxed tracking-[-0.02em]"
                text="Most companies struggle because their technology and marketing operate as two disconnected islands. Developers build products without understanding acquisition economics, while marketers run campaigns to slow, generic landing pages. We founded TRIFECTA TRENDS to eliminate that divide."
                highlightWords={["technology", "marketing", "disconnected", "economics", "eliminate", "divide"]}
                start="top 85%"
                end="top 35%"
                scrub={0.6}
              />
              <ScrollLinkedText
                as="p"
                className="text-lg sm:text-2xl text-[#b8b8b8] font-sans font-normal leading-relaxed tracking-[-0.02em]"
                text="We approach every engagement with a simple, disciplined standard: building technology that directly serves commercial goals. By managing modern web engineering, custom application design, and paid digital acquisition under one roof, we help businesses grow with speed, clarity, and accountability."
                highlightWords={["disciplined", "commercial", "goals", "engineering", "acquisition", "accountability"]}
                start="top 82%"
                end="top 32%"
                scrub={0.6}
              />
            </div>

            {/* Strategic Pillars Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioPrinciples.map((principle, idx) => (
                <MotionReveal key={principle.num} delay={idx * 60}>
                  <div className="rounded-3xl bg-[#0c0c0e] border border-white/10 p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 h-full">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#848484] mb-6">
                        <span>/{principle.num}</span>
                        <span className="text-white">TRIFECTA</span>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-[-0.03em]">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans pt-4 border-t border-white/10 mt-4">
                      {principle.description}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Visual: Relationship Between Product, Technology, Marketing & Growth */}
        <section className="py-24 sm:py-32 border-t border-white/10 bg-[#060608]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={40} variant="fade-up">
              <div className="max-w-3xl mb-14">
                <span className="section-label block mb-3">
                  [Interactive System Synergy]
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4">
                  The relationship between product, technology, marketing, and growth.
                </h2>
                <p className="text-base sm:text-lg text-[#b8b8b8] font-sans">
                  Select each discipline below to see how our integrated model turns software development and customer acquisition into a compounding flywheel.
                </p>
              </div>
            </MotionReveal>

            {/* Interactive Visual Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 4 Clickable Quadrant Buttons */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {synergyPillars.map((pillar, idx) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                      activePillarIndex === idx
                        ? "bg-[#18181b] border-white/35 text-white shadow-xl translate-x-1"
                        : "bg-[#0d0d0f] border-white/5 text-[#848484] hover:text-[#b8b8b8] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        {pillar.category}
                      </span>
                      {activePillarIndex === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" />
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white mb-1.5 tracking-[-0.03em]">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-[#848484] font-sans leading-relaxed line-clamp-2">
                      {pillar.shortDesc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Dynamic Interactive Detail Display */}
              <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0f0f12] border border-white/15 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block mb-1">
                      Active Discipline: {activePillar.category}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-semibold text-white tracking-[-0.03em]">
                      {activePillar.name}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-[#848484] bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/5 shrink-0">
                    Step {activePillarIndex + 1} of 4
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed mb-8">
                  {activePillar.fullExplanation}
                </p>

                {/* Concrete Deliverables */}
                <div className="mb-8">
                  <span className="text-xs font-display font-semibold text-white block uppercase tracking-[-0.02em] mb-3">
                    Core Technical Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePillar.keyOutputs.map((output, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#b8b8b8] font-sans"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Synergy Connection to the Rest of the Engine */}
                <div className="p-5 rounded-2xl bg-black/60 border border-white/10">
                  <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                    [How This Connects to the Rest of the Flywheel]
                  </span>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] font-sans leading-relaxed">
                    {activePillar.connectionToOthers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Spaces & Working Rhythm */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="mb-14">
                <span className="section-label block mb-3">
                  [Work Environment]
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4">
                  Where craft and strategy meet.
                </h2>
                <p className="text-xl sm:text-2xl text-[#b8b8b8] font-sans font-normal max-w-3xl tracking-[-0.02em]">
                  Designed for quiet focus, deliberate engineering, and honest collaboration.
                </p>
              </div>
            </MotionReveal>

            {/* 4 Workspace Photo Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {studioSpaces.map((space, idx) => (
                <MotionReveal key={idx} delay={idx * 70}>
                  <div className="rounded-3xl bg-[#0c0c0e] border border-white/10 overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300 h-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={space.image}
                        alt="Studio workspace"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-5 flex-1 flex items-center">
                      <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal">
                        {space.caption}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3D Parallax Unfurling Gallery (from 21st.dev) */}
        <ParallaxUnfurlingGallery />

        {/* Insights & Articles Section (Preserved) */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#060608]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={50}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                <div>
                  <span className="section-label block mb-3">
                    [Insights]
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white">
                    Technical thinking and campaign strategy.
                  </h2>
                </div>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.02em]"
                >
                  <span>All Insights</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {studioArticles.map((article, idx) => (
                <MotionReveal key={idx} delay={idx * 70}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="rounded-3xl bg-[#0c0c0e] border border-white/10 p-5 flex flex-col justify-between group hover:border-white/25 transition-all duration-300 h-full"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-6">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-display font-semibold text-white border border-[#363636]">
                          {article.category}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-[#848484] mb-3">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-base font-display font-semibold text-white mb-3 group-hover:text-neutral-300 transition-colors leading-snug tracking-[-0.03em]">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans line-clamp-3 mb-6">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#848484] group-hover:text-white">
                      <span>Read article</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <MotionReveal delay={50} variant="fade-up">
          <CtaSection />
        </MotionReveal>
      </main>

      <Footer />
    </div>
  );
}
