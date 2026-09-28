"use client";

import React, { useState } from "react";
import { Copy, CheckCheck, ArrowUpRight, Calendar } from "./icons";

export function CtaSection() {
  const [copied, setCopied] = useState(false);
  const email = "contact@mugen.design";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cta" className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-neutral-800/20 to-neutral-700/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="p-8 sm:p-16 md:p-20 rounded-3xl bg-gradient-to-b from-[#141414] to-[#090909] border border-white/[0.12] text-center relative shadow-2xl">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-neutral-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2 slots open for March&apos;26</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Your next project deserves world-class design.
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop settling for mediocre and start working with senior designers who care as much about your product as you do.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto">
            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] text-xs font-mono flex items-center justify-center gap-2.5 transition-all shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>{email}</span>
                </>
              )}
            </button>

            {/* Book Call Button */}
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a 15-Min Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-[11px] font-mono text-neutral-500 mt-8">
            Avg. response time: &lt; 2 hours during EST business hours
          </p>
        </div>
      </div>
    </section>
  );
}
