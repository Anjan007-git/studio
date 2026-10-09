"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

const faqs = [
  {
    q: "How do retainers actually work?",
    a: "Think of it as having a dedicated senior design partner on your team for a flat monthly rate. You get a set allocation of hours each month to use however you need—whether that's one major platform sprint or rapid daily requests. We sync directly via Slack and Figma with zero agency bureaucracy.",
  },
  {
    q: "What if I don't use all my hours in a month?",
    a: "Unused hours roll over to the next month (up to 25% of your plan allowance). This provides peace of mind during quieter development or holiday periods. Rollover hours remain valid for 90 days to keep projects moving with active momentum.",
  },
  {
    q: "How fast can you kick off?",
    a: "For monthly retainers, we typically kick off within 3–5 business days after contract signing. Dedicated custom projects usually start within 1–2 weeks based on pipeline availability. Rush scoping is available when urgent launch deadlines demand it.",
  },
  {
    q: "Who actually works on my account?",
    a: "Every engagement is directly led by a senior design principal with 10+ years of hands-on agency and tech experience. We do not pass work off to junior trainees. For deep specialized needs (WebGL, custom 3D, complex code), we bring in our vetted senior specialists.",
  },
  {
    q: "Can we switch between retainers and fixed projects?",
    a: "Yes. Many partners begin with a fixed-scope project to launch their core brand or product MVP, then seamlessly transition to a monthly retainer to maintain continuous shipping velocity. Retainer partners also enjoy a 15–20% discount on dedicated custom sprints.",
  },
  {
    q: "How do revisions and feedback work?",
    a: "We work in short, highly transparent cycles with continuous Figma visibility. Feedback is incorporated continuously rather than through artificial 'rounds' of review. We refine until the outcome genuinely exceeds expectations.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[var(--page-bg)] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Advisory box */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="mb-4">
              <span className="section-label">
                [07] Answers
              </span>
            </div>
            <h2 className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6">
              Everything else you&apos;re wondering.
            </h2>
            <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em] mb-8">
              We believe in radical clarity from day one. Here are the answers to the questions we hear most often from prospective partners.
            </p>

            {/* Studio Advisory Support Box */}
            <div className="p-7 rounded-3xl bg-[#050505] border border-white/10 shadow-xl">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-black shrink-0">
                  <Image
                    src="/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg"
                    alt="Creative Direction Advisory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-display font-semibold text-white tracking-[-0.02em]">Client Advisory</h4>
                  <span className="text-[11px] font-sans text-[#848484]">
                    Direct Studio Strategy
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em] mb-6">
                Have a unique question about your timeline, stack, or budget? Reach out directly. We&apos;re always happy to talk through details.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-[-0.02em] text-white hover:text-[#b8b8b8] group cursor-pointer"
              >
                <span>Ask a question</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg ${
                    isOpen
                      ? "bg-[#080808] border-white/20"
                      : "bg-[#050505] border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-display font-semibold text-white tracking-[-0.03em]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#b8b8b8] shrink-0 transform transition-all duration-300 text-lg font-display select-none ${
                        isOpen
                          ? "rotate-45 text-white bg-white/10 border-white/20"
                          : "bg-white/5"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-6 text-xs sm:text-sm text-[#b8b8b8] font-sans font-normal leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
