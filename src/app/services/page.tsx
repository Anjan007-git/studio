"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ArrowUpRight, Check } from "@/components/icons";

interface TechnicalService {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  image: string;
}

const technicalServices: TechnicalService[] = [
  {
    id: "software-web",
    num: "[01]",
    title: "Software & Web Development",
    subtitle: "High-performance digital products built on modern React & Next.js architectures.",
    description:
      "We design and build bespoke software applications and scalable web platforms. Every line of code is structured for velocity, maintainability, and sub-second load times. From consumer-facing web apps to enterprise portals, our platforms are engineered to perform under heavy production load.",
    deliverables: [
      "Custom Next.js & React Applications",
      "Progressive Web Apps (PWAs)",
      "High-Converting Landing Experiences",
      "Enterprise Portals & Client Dashboards",
      "Modular Headless Web Architecture",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Turbopack"],
    image: "/images/AkfwmbbK7reh203E7bgE8GE6w.png",
  },
  {
    id: "full-stack",
    num: "[02]",
    title: "Full-Stack Applications & Systems",
    subtitle: "Scalable backend architectures, resilient APIs, and data modeling.",
    description:
      "Modern products demand backends that never bottleneck user experience. We build distributed APIs, multi-tenant databases, real-time message streams, and robust business logic that scale smoothly as your user base expands from hundreds to millions.",
    deliverables: [
      "RESTful & GraphQL API Architectures",
      "Relational & Document Database Schema Design",
      "Real-time WebSockets & Event Streaming",
      "Role-Based Access Control (RBAC) & OAuth",
      "Third-party Software & ERP Integrations",
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "Prisma", "Redis", "Docker"],
    image: "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
  },
  {
    id: "ai-integration",
    num: "[03]",
    title: "AI Integration & Intelligent Systems",
    subtitle: "Practical machine learning pipelines and autonomous agentic workflows.",
    description:
      "We move AI beyond novel chat demos into real production utility. By connecting state-of-the-art foundation models with your proprietary business data, we build intelligent copilots, automated document extractors, and agentic workflows that compound organizational output.",
    deliverables: [
      "Retrieval-Augmented Generation (RAG) Pipelines",
      "Vector Database Setup & Semantic Search",
      "Autonomous Multi-Step AI Agents",
      "Structured JSON Output LLM Orchestration",
      "Private Model Deployment & Guardrails",
    ],
    techStack: ["OpenAI API", "Anthropic", "Python", "pgvector", "LangChain", "FastAPI"],
    image: "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
  },
  {
    id: "cloud-solutions",
    num: "[04]",
    title: "Cloud Solutions & DevOps Engineering",
    subtitle: "High-availability cloud infrastructure, zero-downtime CI/CD, and edge computing.",
    description:
      "Reliability is not an afterthought. We orchestrate automated deployments, immutable infrastructure, and multi-region edge caching to ensure your software stays fast, secure, and resilient through unexpected traffic spikes.",
    deliverables: [
      "Multi-Region Edge Infrastructure",
      "Automated CI/CD Deployment Pipelines",
      "Container Orchestration & Dockerizing",
      "Zero-Downtime Migration & Database Backups",
      "Real-Time Telemetry & Error Monitoring",
    ],
    techStack: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare", "Terraform"],
    image: "/images/d0BwZFrtELCoWDdpc1wN5g0q070.jpeg",
  },
  {
    id: "interactive-engineering",
    num: "[05]",
    title: "Interactive Engineering & Design Systems",
    subtitle: "Kinetic motion design, WebGL interactions, and rigorous UI token systems.",
    description:
      "Engineering and design collaborate directly without handoff friction. We craft fluid 60fps micro-interactions, responsive spatial layouts, and comprehensive component libraries that keep your software aesthetically unmatched and effortless to navigate.",
    deliverables: [
      "Living Design Token & UI Component Systems",
      "60fps GSAP & Kinetic Scroll Interactions",
      "Interactive 3D / WebGL Visualizations",
      "WCAG 2.1 AA Accessibility Compliance",
      "Ergonomic Mobile-First Ergonomics",
    ],
    techStack: ["GSAP", "Three.js", "Radix Primitives", "Tailwind CSS", "Figma Tokens"],
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
  },
  {
    id: "performance-security",
    num: "[06]",
    title: "Performance Optimization & Security",
    subtitle: "Sub-second load times, Core Web Vitals excellence, and defensive engineering.",
    description:
      "Slow applications cost conversions and search ranking. We optimize server-side rendering, asset delivery pipelines, and database query latency to achieve optimal Core Web Vitals while enforcing stringent data encryption and security best practices.",
    deliverables: [
      "Sub-100ms TTFB & Core Web Vitals Optimization",
      "Automated Security Headers & CSP Policies",
      "OWASP Security Auditing & Hardening",
      "Edge Caching Strategy & CDN Optimization",
      "Comprehensive Load & Stress Testing",
    ],
    techStack: ["Lighthouse", "Edge Middleware", "Content Security Policy", "Datadog", "SSL/TLS"],
    image: "/images/jMyKum9tkI3nlZlUp5RZLjnTPU.jpg",
  },
];

const architectureLayers = [
  {
    id: "frontend",
    label: "[01] Presentation Layer",
    tech: "Next.js 16 • React 19 • TypeScript • Tailwind",
    highlight: "Sub-second edge rendering with pixel-level responsiveness",
    capabilities: [
      "Server Components for zero-bundle client footprint",
      "Optimistic UI updates for instant perceived latency",
      "Dynamic responsive layouts across phone, tablet, and widescreen",
      "Built-in accessibility with semantic HTML5 standards",
    ],
  },
  {
    id: "backend",
    label: "[02] API & Business Logic",
    tech: "Node.js • Python • GraphQL • REST • WebSockets",
    highlight: "High-throughput services engineered for reliable execution",
    capabilities: [
      "Type-safe end-to-end contracts from schema to frontend",
      "Stateless microservices designed for horizontal autoscaling",
      "Comprehensive rate limiting and defensive payload validation",
      "Real-time event synchronization across distributed clients",
    ],
  },
  {
    id: "intelligence",
    label: "[03] AI & Data Layer",
    tech: "PostgreSQL • Redis • Vector Embeddings • Python",
    highlight: "Structured relational models combined with contextual intelligence",
    capabilities: [
      "ACID-compliant transactional database architectures",
      "Low-latency in-memory caching with automated invalidation",
      "Vector index retrieval for semantic search and AI retrieval",
      "Automated database migrations with zero downtime",
    ],
  },
  {
    id: "cloud",
    label: "[04] Infrastructure & Cloud",
    tech: "AWS • Vercel Edge • Docker • Cloudflare",
    highlight: "Global distribution with multi-region redundancy and DDoS protection",
    capabilities: [
      "Global edge network routing traffic to nearest servers",
      "Automated CI/CD with preview test environments per commit",
      "Automated daily snapshot backups and point-in-time recovery",
      "Continuous server telemetry with automated alert triggers",
    ],
  },
];

export default function ServicesPage() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Header Hero Section */}
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)]">
            <MotionReveal delay={30} variant="fade-up">
              <div className="mb-4">
                <span className="section-label">
                  [Technical Capabilities]
                </span>
              </div>
            </MotionReveal>

            <MotionReveal delay={60} variant="fade-up">
              <ScrollLinkedText
                as="h1"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-[-0.04em] text-white max-w-5xl mb-8 leading-[1.0]"
                text="Engineering software built to scale real businesses."
                highlightWords={["Engineering", "software", "scale", "businesses"]}
                start="top 95%"
                end="top 40%"
                scrub={0.5}
              />
            </MotionReveal>

            <MotionReveal delay={110} variant="fade-up">
              <ScrollLinkedText
                as="p"
                className="text-base sm:text-xl md:text-2xl text-[#b8b8b8] max-w-4xl leading-relaxed font-sans font-normal tracking-[-0.02em]"
                text="From custom full-stack web applications and AI integrations to resilient cloud infrastructure, TRIFECTA TRENDS provides end-to-end technical engineering. We build software that operates reliably, loads instantly, and serves concrete commercial objectives."
                highlightWords={["custom", "full-stack", "AI", "integrations", "cloud", "infrastructure", "reliably", "commercial", "objectives"]}
                start="top 90%"
                end="top 45%"
                scrub={0.5}
              />
            </MotionReveal>
          </div>
        </section>

        {/* Interactive Technical Architecture Explorer */}
        <section className="py-20 sm:py-24 border-t border-white/10 bg-[#060608]">
          <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)]">
            <MotionReveal delay={40} variant="fade-up">
              <div className="mb-10">
                <span className="section-label block mb-2">
                  [System Architecture]
                </span>
                <ScrollLinkedText
                  as="h2"
                  className="text-2xl sm:text-4xl font-display font-semibold tracking-[-0.04em] text-white leading-[1.1]"
                  text="Our full-stack engineering stack."
                  start="top 85%"
                  end="top 45%"
                  scrub={0.6}
                />
                <p className="text-sm font-sans text-[#b8b8b8] mt-2 tracking-[-0.015em] leading-relaxed">
                  Explore how our software systems are layered for stability, security, and performance.
                </p>
              </div>
            </MotionReveal>

            {/* Interactive Layer Switcher */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Layer Navigation Tabs */}
              <div className="lg:col-span-4 flex flex-col space-y-2">
                {architectureLayers.map((layer, idx) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(idx)}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                      activeLayer === idx
                        ? "bg-[#181818] border-white/30 text-white shadow-lg translate-x-1"
                        : "bg-[#0c0c0e] border-white/5 text-[#848484] hover:text-[#b8b8b8] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-display font-semibold tracking-[-0.02em]">
                        {layer.label}
                      </span>
                      {activeLayer === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs font-mono text-[#848484] line-clamp-1">
                      {layer.tech}
                    </p>
                  </button>
                ))}
              </div>

              {/* Layer Details Showcase */}
              <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#101012] border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-1">
                      Layer Focus
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.03em]">
                      {architectureLayers[activeLayer].label.split(" ")[1]} {architectureLayers[activeLayer].label.split(" ")[2] || ""}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#b8b8b8] shrink-0">
                    {architectureLayers[activeLayer].tech.split("•")[0].trim()}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-sans mb-8 leading-relaxed">
                  {architectureLayers[activeLayer].highlight}
                </p>

                <div className="space-y-4">
                  <span className="text-xs font-display font-semibold text-white block uppercase tracking-[-0.02em]">
                    Key Architectural Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {architectureLayers[activeLayer].capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-[#b8b8b8] font-sans leading-relaxed">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Technical Capabilities Grid */}
        <section className="py-24 sm:py-32 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)]">
            <MotionReveal delay={30} variant="fade-up">
              <div className="max-w-3xl mb-16 sm:mb-20">
                <span className="section-label block mb-3">
                  [Core Engineering Services]
                </span>
                <ScrollLinkedText
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4 leading-[1.1]"
                  text="Everything your software requires."
                  start="top 85%"
                  end="top 45%"
                  scrub={0.6}
                />
                <p className="text-base sm:text-lg text-[#b8b8b8] font-sans tracking-[-0.015em] leading-relaxed">
                  From early architectural decisions to multi-region cloud scaling, we deliver full-lifecycle engineering services without unnecessary layers.
                </p>
              </div>
            </MotionReveal>

            {/* 6 Structured Technical Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {technicalServices.map((service, idx) => (
                <MotionReveal key={service.id} delay={(idx % 2) * 80} variant="fade-up">
                  <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0a0c] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Service Header with Visual Preview */}
                      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 mb-8">
                        <ParallaxImage
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          speed={0.1}
                          containerClassName="w-full h-full"
                          imageClassName="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="text-xs font-display font-semibold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            {service.num}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.04em] mb-2 leading-[1.2]">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#848484] font-sans font-medium mb-4 tracking-[-0.015em]">
                        {service.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans mb-8 tracking-[-0.015em]">
                        {service.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="mb-6 pt-6 border-t border-white/10">
                        <span className="text-xs font-display font-semibold text-white block mb-3 uppercase tracking-[-0.02em]">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2.5 text-xs text-[#b8b8b8] font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack Pills & Action Link */}
                    <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-[#848484] bg-white/[0.04] px-2.5 py-1 rounded border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact?service=software"
                        className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-white hover:text-neutral-300 transition-colors shrink-0"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Synergy Callout */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-[#070709]">
          <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)]">
            <div className="p-8 sm:p-14 rounded-3xl bg-[#0f0f12] border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="section-label block mb-2">
                  [Integrated Growth Engine]
                </span>
                <ScrollLinkedText
                  as="h3"
                  className="text-2xl sm:text-4xl font-display font-semibold text-white tracking-[-0.04em] mb-4 leading-[1.15]"
                  text="Great software needs the right audience."
                  highlightWords={["Great", "software", "audience"]}
                  start="top 90%"
                  end="top 48%"
                  scrub={0.5}
                />
                <p className="text-sm sm:text-base text-[#b8b8b8] font-sans leading-relaxed tracking-[-0.015em]">
                  We don&apos;t just build your product—we also help you scale customer acquisition through Google Ads, Meta Ads, and full-funnel performance marketing. Explore our dedicated growth services to see how code and campaigns work together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/growth"
                  className="px-6 py-3.5 rounded-xl bg-white text-black font-display font-semibold text-xs tracking-[-0.02em] hover:bg-neutral-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Growth Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl border border-white/20 text-white font-display font-semibold text-xs tracking-[-0.02em] hover:bg-white/[0.06] transition-all text-center"
                >
                  <span>Start a Technical Project</span>
                </Link>
              </div>
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
