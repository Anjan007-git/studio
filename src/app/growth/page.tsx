"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";
import { ArrowUpRight, Check } from "@/components/icons";

interface CampaignPreset {
  id: string;
  name: string;
  channel: string;
  budgetOptions: number[];
  ctrMultiplier: number;
  cvrMultiplier: number;
  cpaBase: number;
  description: string;
  tactics: string[];
}

const campaignPresets: CampaignPreset[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    channel: "High-Intent Search & Performance Max",
    budgetOptions: [5000, 15000, 30000, 60000],
    ctrMultiplier: 0.052,
    cvrMultiplier: 0.065,
    cpaBase: 26,
    description:
      "Capturing ready-to-buy demand when prospective clients actively search for your software, products, or services. Precise negative keyword hygiene, automated bidding strategies, and high Quality Score alignment.",
    tactics: [
      "Targeted Exact & Phrase Match Search Campaigns",
      "Performance Max (PMax) Asset Optimization",
      "Competitor Converted-Intent Interception",
      "Dynamic Search Ads (DSA) for Catalog Coverage",
      "First-Party Offline Conversion Tracking Sync",
    ],
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    channel: "Instagram & Facebook Performance Creative",
    budgetOptions: [5000, 15000, 30000, 60000],
    ctrMultiplier: 0.038,
    cvrMultiplier: 0.048,
    cpaBase: 32,
    description:
      "Creating net-new demand through creative testing and audience clustering on Instagram and Facebook. We craft motion graphics, product showcases, and high-converting hooks that stop thumbs and generate qualified leads.",
    tactics: [
      "Rigorous Creative Testing Matrices (Hook & Angle)",
      "Broad Advantage+ Audience Clustering",
      "High-Converting Short-Form Video & Carousel Ads",
      "Server-Side Meta Conversions API (CAPI) Integration",
      "Retargeting Funnels for Consideration Drop-offs",
    ],
  },
  {
    id: "omnichannel",
    name: "Omnichannel Engine",
    channel: "Unified Search + Social Acquisition",
    budgetOptions: [10000, 25000, 50000, 100000],
    ctrMultiplier: 0.045,
    cvrMultiplier: 0.058,
    cpaBase: 28,
    description:
      "A complete acquisition flywheel combining Meta demand generation with Google intent capture. Traffic stimulated on social is harvested on search, backed by cross-channel attribution modeling and unified budget pacing.",
    tactics: [
      "Cross-Platform Retargeting & Brand Uplift",
      "Blended Return on Ad Spend (ROAS) Modeling",
      "Unified Creative Asset Production & Refresh",
      "Multi-Touch Attribution & Clean CRM Matching",
      "Dedicated High-Velocity A/B Landing Page Sprints",
    ],
  },
];

const growthCapabilities = [
  {
    num: "[01]",
    title: "Google Ads Management",
    tagline: "Search, Performance Max, Display & YouTube",
    description:
      "We architect Google Ads accounts that capture high-intent commercial searches. From negative keyword sculpturing to responsive search ads and value-based bidding, every dollar is tied to qualified opportunities.",
    highlights: [
      "Search keyword research & negative hygiene",
      "Performance Max campaigns with verified creative",
      "Google Merchant Center & shopping feeds",
      "Quality Score optimization via landing page speed",
    ],
  },
  {
    num: "[02]",
    title: "Meta Ads Performance",
    tagline: "Instagram & Facebook Paid Social",
    description:
      "We scale Meta Ads by combining strategic creative direction with systematic audience targeting. We identify winning angles through weekly creative testing sprints that continually lower client acquisition costs.",
    highlights: [
      "Modular creative testing frameworks",
      "Direct-response visual & copy development",
      "Server-Side Conversions API (CAPI) setup",
      "Advantage+ campaign architecture & scaling",
    ],
  },
  {
    num: "[03]",
    title: "Performance Marketing Strategy",
    tagline: "Holistic Media Planning & Attribution",
    description:
      "Data-driven budget allocation across paid channels. We monitor blended CAC, customer lifetime value (LTV), and contribution margin so your business scales profitably instead of burning ad capital on vanity clicks.",
    highlights: [
      "Multi-channel budget pacing & forecasting",
      "First-party attribution data modeling",
      "Channel incrementality testing",
      "Executive dashboard reporting with live metrics",
    ],
  },
  {
    num: "[04]",
    title: "Lead Generation & Funnels",
    tagline: "High-Intent B2B & High-Value B2C Pipelines",
    description:
      "Traffic means nothing without qualified conversion. We design frictionless intake flows, multi-step qualification forms, and instant routing pipelines that feed sales teams primed, high-value leads.",
    highlights: [
      "Multi-step lead qualification forms",
      "CRM integrations (HubSpot, Salesforce, webhook)",
      "Instant email & SMS lead notification pipelines",
      "Spam mitigation & verify-before-submit flows",
    ],
  },
  {
    num: "[05]",
    title: "Conversion Rate Optimization (CRO)",
    tagline: "Scientific Friction Removal & Testing",
    description:
      "Double your conversion rate and you cut customer acquisition cost in half. We analyze user session recordings, scroll maps, and drop-off points to test messaging, CTA positioning, and checkout micro-copy.",
    highlights: [
      "Heuristic UX audits & heatmapping analysis",
      "Statistically valid A/B split-testing",
      "Copywriting refinement & value proposition clarity",
      "Checkout and signup friction elimination",
    ],
  },
  {
    num: "[06]",
    title: "Scalable Customer Acquisition",
    tagline: "Sustainable, Compounding Growth Loops",
    description:
      "Scaling isn't just spending more on the same ads—it's developing new audience segments, localized campaigns, and retention cohorts that compound your market share over quarters and years.",
    highlights: [
      "Lookalike & custom audience segmentation",
      "Geographic & international market expansion",
      "Customer reactivation & win-back campaigns",
      "Full unit economics audits (CAC:LTV ratio)",
    ],
  },
];

export default function GrowthPage() {
  const [selectedPresetId, setSelectedPresetId] = useState("google-ads");
  const [budgetIndex, setBudgetIndex] = useState(1);

  const activePreset =
    campaignPresets.find((p) => p.id === selectedPresetId) || campaignPresets[0];
  const activeBudget = activePreset.budgetOptions[budgetIndex] || activePreset.budgetOptions[1];

  // Dynamic illustrative calculation
  const illustrativeImpressions = Math.round(activeBudget * 28);
  const illustrativeClicks = Math.round(illustrativeImpressions * activePreset.ctrMultiplier);
  const illustrativeConversions = Math.round(illustrativeClicks * activePreset.cvrMultiplier);
  const illustrativeCpa = Math.max(12, Math.round(activeBudget / (illustrativeConversions || 1)));
  const illustrativeRoas = (3.2 + (activeBudget > 25000 ? 0.6 : 0.2)).toFixed(1);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Header Hero Section */}
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={30} variant="fade-up">
              <div className="mb-4">
                <span className="section-label">
                  [Growth &amp; Acquisition]
                </span>
              </div>
            </MotionReveal>

            <MotionReveal delay={60} variant="fade-up">
              <ScrollLinkedText
                as="h1"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-[-0.04em] text-white max-w-5xl mb-8 leading-[1.05]"
                text="Measurable customer acquisition through performance marketing."
                highlightWords={["Measurable", "customer", "acquisition", "performance", "marketing"]}
                start="top 95%"
                end="top 40%"
                scrub={0.5}
              />
            </MotionReveal>

            <MotionReveal delay={110} variant="fade-up">
              <ScrollLinkedText
                as="p"
                className="text-lg sm:text-2xl text-[#b8b8b8] max-w-4xl leading-relaxed font-sans font-normal tracking-[-0.02em]"
                text="TRIFECTA TRENDS scales businesses by connecting paid media to engineering execution. We manage Google Ads, Meta Ads, and full-funnel customer acquisition campaigns backed by sub-second landing pages and server-side tracking."
                highlightWords={["scales", "businesses", "paid", "media", "Google", "Ads", "Meta", "customer", "acquisition", "sub-second", "server-side"]}
                start="top 90%"
                end="top 45%"
                scrub={0.5}
              />
            </MotionReveal>
          </div>
        </section>

        {/* Interactive Campaign-Performance Visualizer */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#060608]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={40} variant="fade-up">
              <div className="max-w-3xl mb-12">
                <span className="section-label block mb-3">
                  [Campaign Model Simulator]
                </span>
                <ScrollLinkedText
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.03em] text-white mb-4"
                  text="Interactive performance visualization."
                  start="top 85%"
                  end="top 45%"
                  scrub={0.6}
                />
                <p className="text-sm sm:text-base font-sans text-[#b8b8b8]">
                  Select an acquisition channel and monthly media budget to examine an illustrative campaign funnel with simulated impressions, clicks, conversions, and target acquisition costs.
                </p>
              </div>
            </MotionReveal>

            {/* Simulator Controls & Metric Cards */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c0e] border border-white/10 shadow-2xl">
              {/* Channel Selector */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
                <div>
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                    Step 1: Choose Acquisition Channel
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {campaignPresets.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => {
                          setSelectedPresetId(preset.id);
                          setBudgetIndex(1);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-display font-semibold tracking-[-0.02em] transition-all cursor-pointer ${
                          selectedPresetId === preset.id
                            ? "bg-white text-black shadow-md"
                            : "bg-white/[0.04] text-[#b8b8b8] hover:text-white border border-white/10"
                        }`}
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Buttons */}
                <div>
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                    Step 2: Monthly Ad Spend
                  </span>
                  <div className="flex flex-wrap gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10">
                    {activePreset.budgetOptions.map((budgetVal, bIdx) => (
                      <button
                        key={budgetVal}
                        onClick={() => setBudgetIndex(bIdx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                          budgetIndex === bIdx
                            ? "bg-white text-black font-bold shadow-sm"
                            : "text-[#848484] hover:text-white"
                        }`}
                      >
                        ${(budgetVal / 1000).toFixed(0)}k/mo
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Channel Subtitle */}
              <div className="mb-8">
                <span className="text-xs font-mono text-neutral-400 block mb-1">
                  {activePreset.channel}
                </span>
                <p className="text-xs sm:text-sm text-[#b8b8b8] font-sans max-w-3xl">
                  {activePreset.description}
                </p>
              </div>

              {/* 4 Illustrative Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
                {/* Metric 1: Impressions */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-display font-medium text-[#848484] block mb-2">
                    Illustrative Impressions
                  </span>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.03em]">
                    {illustrativeImpressions.toLocaleString()}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-2">
                    Target audience reach
                  </p>
                </div>

                {/* Metric 2: Clicks */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-display font-medium text-[#848484] block mb-2">
                    Illustrative Qualified Clicks
                  </span>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.03em]">
                    {illustrativeClicks.toLocaleString()}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-2">
                    ~{(activePreset.ctrMultiplier * 100).toFixed(1)}% simulated CTR
                  </p>
                </div>

                {/* Metric 3: Conversions */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-display font-medium text-[#848484] block mb-2">
                    Illustrative Conversions
                  </span>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.03em]">
                    {illustrativeConversions.toLocaleString()}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-2">
                    ~{(activePreset.cvrMultiplier * 100).toFixed(1)}% landing page CVR
                  </p>
                </div>

                {/* Metric 4: Cost per Acquisition */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-display font-medium text-[#848484] block mb-2">
                    Illustrative Target CPA
                  </span>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.03em]">
                    ${illustrativeCpa}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-2">
                    Target {illustrativeRoas}x ROAS tier
                  </p>
                </div>
              </div>

              {/* Visual Funnel Diagram */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-display font-semibold text-white block uppercase tracking-[-0.02em] mb-4">
                  Visual Conversion Funnel Stages
                </span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                      [01] Top of Funnel
                    </span>
                    <h4 className="text-sm font-display font-semibold text-white mb-1">
                      High-Intent Placements
                    </h4>
                    <p className="text-xs text-[#848484] font-sans">
                      Targeted search keywords and segmented social creatives.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                      [02] Engagement
                    </span>
                    <h4 className="text-sm font-display font-semibold text-white mb-1">
                      High-Speed Next.js Page
                    </h4>
                    <p className="text-xs text-[#848484] font-sans">
                      Sub-second load times that keep visitors engaged and lower ad bounce rates.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                      [03] Conversion
                    </span>
                    <h4 className="text-sm font-display font-semibold text-white mb-1">
                      Frictionless Lead Intake
                    </h4>
                    <p className="text-xs text-[#848484] font-sans">
                      Structured forms, instant verification, and automatic CRM routing.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                      [04] Compounding
                    </span>
                    <h4 className="text-sm font-display font-semibold text-white mb-1">
                      Attribution &amp; Scale
                    </h4>
                    <p className="text-xs text-[#848484] font-sans">
                      Server-side conversion feedback to ad algorithms to suppress CAC.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explicit Mandatory Illustrative Notice */}
              <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-neutral-400 text-xs font-sans leading-relaxed">
                <span className="text-white font-semibold font-mono mr-1.5">[Illustrative Notice]</span>
                All metrics, figures, conversion rates, and acquisition costs presented in this simulator are purely sample illustrative data for demonstration and architectural understanding. They do not represent real historical performance, specific client case results, or guaranteed commercial outcomes. Actual campaign performance varies by market, product offer, unit economics, and competitive dynamics.
              </div>
            </div>
          </div>
        </section>

        {/* Development & Marketing Synergy: Code + Conversion */}
        <section className="py-24 sm:py-32 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={30} variant="fade-up">
              <div className="max-w-3xl mb-16 sm:mb-20">
                <span className="section-label block mb-3">
                  [The Growth Advantage]
                </span>
                <ScrollLinkedText
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4"
                  text="Why software development and marketing belong together."
                  start="top 85%"
                  end="top 45%"
                  scrub={0.6}
                />
                <p className="text-base sm:text-lg text-[#b8b8b8] font-sans">
                  Traditional agencies separate developers from media buyers. TRIFECTA TRENDS combines them under one roof so your technology and ad campaigns amplify each other.
                </p>
              </div>
            </MotionReveal>

            {/* 4 Synergy Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d0f] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-neutral-400 block mb-2">[01] Quality Score &amp; Load Speed</span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3">
                    Faster pages reduce ad costs.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans mb-4">
                    Both Google Ads and Meta reward landing pages that load instantly with higher Quality Scores and lower Cost-Per-Click (CPC). When we build your pages on Next.js with sub-second TTFB, ad platforms favor your bids and direct more impression share your way for less spend.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#848484]">
                  Result: Higher ad auction win rate without inflating bids.
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d0f] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-neutral-400 block mb-2">[02] Server-Side Tracking &amp; CAPI</span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3">
                    First-party data bypasses ad blockers.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans mb-4">
                    Browser pixel tracking loses up to 35% of conversion events due to privacy extensions and cookie restrictions. As software engineers, we integrate direct server-to-server Conversions API (CAPI) pipelines that deliver 100% clean data back to Google and Meta.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#848484]">
                  Result: Accurate algorithm optimization and zero lost attribution.
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d0f] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-neutral-400 block mb-2">[03] Programmatic Landing Pages</span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3">
                    Hyper-personalized conversion journeys.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans mb-4">
                    Instead of sending all traffic to one generic homepage, we build dynamic landing page templates that tailor headlines, value points, and social proof to specific search terms or ad creative angles. Visitors see exactly what they clicked for.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#848484]">
                  Result: Significantly higher conversion rates from first visit.
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d0f] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-neutral-400 block mb-2">[04] Rapid Technical A/B Sprints</span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3">
                    Continuous hypothesis experimentation.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans mb-4">
                    Marketing insights mean nothing if developers take weeks to update a form or headline. Our engineering team tests variations in high velocity sprints—testing button layouts, questionnaire friction, and checkout pathways to turn clicks into pipeline.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#848484]">
                  Result: Scientific conversion improvements that compound over time.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Growth Capabilities Grid */}
        <section className="py-24 sm:py-32 border-t border-white/10 bg-[#060608]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <MotionReveal delay={30} variant="fade-up">
              <div className="max-w-3xl mb-16 sm:mb-20">
                <span className="section-label block mb-3">
                  [Capabilities]
                </span>
                <ScrollLinkedText
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white mb-4"
                  text="Full-spectrum digital marketing services."
                  start="top 85%"
                  end="top 45%"
                  scrub={0.6}
                />
                <p className="text-base sm:text-lg text-[#b8b8b8] font-sans">
                  From paid search campaigns to multi-step B2B qualification funnels, our capabilities are built to scale predictable acquisition.
                </p>
              </div>
            </MotionReveal>

            {/* 6 Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {growthCapabilities.map((cap, idx) => (
                <MotionReveal key={cap.num} delay={(idx % 3) * 60} variant="fade-up">
                  <div className="p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-[#848484]">{cap.num}</span>
                        <span className="text-xs font-mono text-neutral-400 font-medium">TRIFECTA</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-[-0.03em] mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-xs font-sans text-neutral-400 mb-4">
                        {cap.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans mb-6">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-2">
                      {cap.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#848484] font-sans">
                          <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Call to Action Banner */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="p-8 sm:p-14 rounded-3xl bg-[#0e0e11] border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="section-label block mb-2">
                  [Schedule Consultation]
                </span>
                <ScrollLinkedText
                  as="h3"
                  className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-[-0.03em] mb-4"
                  text="Ready to scale your customer acquisition?"
                  highlightWords={["Ready", "scale", "customer", "acquisition"]}
                  start="top 90%"
                  end="top 48%"
                  scrub={0.5}
                />
                <p className="text-sm sm:text-base text-[#b8b8b8] font-sans leading-relaxed">
                  We audit your existing ad accounts, unit economics, and landing page conversion bottlenecks. Let&apos;s map out a measurable growth strategy tailored to your business goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/contact?service=growth"
                  className="px-6 py-3.5 rounded-xl bg-white text-black font-display font-semibold text-xs tracking-[-0.02em] hover:bg-neutral-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Request Growth Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3.5 rounded-xl border border-white/20 text-white font-display font-semibold text-xs tracking-[-0.02em] hover:bg-white/[0.06] transition-all text-center"
                >
                  <span>View Technical Services</span>
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
