"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { ArrowUpRight, Check } from "@/components/icons";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [budget, setBudget] = useState("$25K - $50K");
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = ["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K +"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@trifectatrends.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 sm:pt-40">
        <section className="pb-24 sm:pb-32">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            {/* Header */}
            <div className="mb-14 sm:mb-20">
              <span className="section-label block mb-4">
                [Get in touch]
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-[-0.04em] text-white mb-6 leading-[1.05] max-w-5xl">
                Let&apos;s build incredible work together.
              </h1>
              <p className="text-base sm:text-xl text-[#b8b8b8] max-w-3xl leading-relaxed font-sans font-normal tracking-[-0.02em]">
                We&apos;re always open to new collaborations and would love to
                hear about your projects. Please reach out through any of the
                channels below.
              </p>
            </div>

            {/* 2-Column Grid: Contact Details & Interactive Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-10">
                {/* Email Box */}
                <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 space-y-4">
                  <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block">
                    [Mail to]
                  </span>
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <span className="text-xs sm:text-base md:text-xl font-sans text-white break-all sm:break-normal">
                      contact@trifectatrends.com
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-display font-semibold tracking-[-0.02em] text-[#b8b8b8] hover:text-white px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-all cursor-pointer shrink-0"
                    >
                      {copied ? "copied!" : "copy"}
                    </button>
                  </div>
                </div>

                {/* Studio Location & Hours */}
                <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 space-y-6">
                  <div>
                    <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-1">
                      Studio Hubs
                    </span>
                    <p className="text-sm text-[#b8b8b8] font-sans">
                      New York • San Francisco • Global Remote
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-1">
                      Office hours
                    </span>
                    <p className="text-sm text-[#b8b8b8] font-sans">
                      Monday to Friday: 9:00 AM – 6:00 PM EST
                    </p>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-display font-medium text-[#848484]">[01]</span>
                    <p className="text-xs text-[#b8b8b8] font-sans">
                      Either book a call or send a message below.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-display font-medium text-[#848484]">[02]</span>
                    <p className="text-xs text-[#b8b8b8] font-sans">
                      Share your vision, scope, and technical requirements.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-display font-medium text-[#848484]">[03]</span>
                    <p className="text-xs text-[#b8b8b8] font-sans">
                      We&apos;ll evaluate within 24–48 hours whether your project is the right mutual fit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-xl">
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-white tracking-[-0.03em]">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#b8b8b8] font-sans max-w-sm mx-auto">
                      Thank you for reaching out. A senior partner will review your inquiry and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-display font-medium text-[#848484]">
                          [Name]*
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Elena Rostova"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-display font-medium text-[#848484]">
                          [Email]*
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="elena@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-display font-medium text-[#848484]">
                          [Phone]
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (416) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-display font-medium text-[#848484]">
                          [Subject]*
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Brand Rebrand & Web Platform"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30"
                        />
                      </div>
                    </div>

                    {/* Budget Pills */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-display font-medium text-[#848484] block">
                        [Budget]*
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setBudget(opt)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-display transition-all cursor-pointer ${
                              budget === opt
                                ? "bg-white text-black font-semibold shadow-sm"
                                : "bg-white/[0.04] text-[#b8b8b8] hover:text-white border border-white/10 font-medium"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-display font-medium text-[#848484]">
                        [Message]*
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your business, current bottlenecks, and what you aim to achieve..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30"
                      />
                    </div>

                    <p className="text-[11px] font-sans text-[#848484]">
                      By submitting, you agree to our Terms and Privacy Policy.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all font-display font-semibold text-xs tracking-[-0.02em] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Answers / FAQ */}
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
