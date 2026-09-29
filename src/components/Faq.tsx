"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { MagneticButton } from "./MagneticButton";

const faqs = [
  {
    q: "How do retainers actually work?",
    a: "Think of it as having a dedicated senior designer on your team for a flat monthly rate. You get a set number of hours each month to use however you need—whether that's one big project or lots of small sprint requests. We sync regularly and work through your priorities systematically via Slack and Figma.",
  },
  {
    q: "What if I don't use all my hours?",
    a: "Unused hours roll over to the next month (up to 25% of your plan). This gives you flexibility during slower periods without losing value. Hours expire after 90 days to keep projects moving forward with momentum.",
  },
  {
    q: "How fast can you start?",
    a: "For retainers, we can typically kick off within 3–5 business days. Project work usually begins within 1–2 weeks depending on our current pipeline capacity. Rush delivery is available when deadlines demand it.",
  },
  {
    q: "Who will be working on my account?",
    a: "Every account is led by a senior designer with 10+ years of hands-on agency and tech experience. For larger retainers and projects, we bring in specialists (motion, 3D, code), but your lead designer remains your direct, consistent point of contact.",
  },
  {
    q: "Can I switch between retainers and projects?",
    a: "Absolutely. Many clients start on a project to launch a core version, then transition into a monthly retainer to maintain velocity. Retainer clients also receive a 15–20% discount on dedicated custom project engagements.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Contact info */}
          <div className="lg:col-span-5">
            <MotionReveal variant="fade-up">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  [07] Answers
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Everything else you&apos;re wondering.
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light mb-8">
                We believe in radical clarity from day one. Here are the answers to the questions we hear most often from prospective clients.
              </p>

              {/* PM Support Box */}
              <div className="p-7 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                    <Image
                      src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                      alt="Sarah Park"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sarah Park</h4>
                    <span className="text-[11px] font-mono text-neutral-400">
                      Project manager
                    </span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-5">
                  Have a unique question about your timeline or tech stack? Reach out directly. We&apos;re always happy to talk through details.
                </p>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex text-xs font-mono text-white hover:text-neutral-300 underline underline-offset-4 cursor-pointer"
                  >
                    Book a quick question call →
                  </Link>
                </MagneticButton>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <MotionReveal key={idx} variant="fade-up" delay={idx * 60}>
                  <div
                    data-cursor="hover"
                    className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-lg ${
                      isOpen
                        ? "bg-[#1c1c1c] border-white/25"
                        : "bg-[#181818] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {faq.q}
                      </span>
                      <span className="text-neutral-400 shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-7 pb-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
