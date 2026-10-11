"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { ArrowUpRight, Check } from "@/components/icons";
import { MotionReveal } from "@/components/MotionReveal";
import { ScrollLinkedText } from "@/components/ScrollLinkedText";

const serviceOptions = [
  "Software & Web Development",
  "Digital Marketing & Growth",
  "Combined Software + Growth",
  "Technical Advisory & Audit",
];

const budgetOptions = ["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K +"];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [budget, setBudget] = useState("$25K - $50K");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam === "growth" || serviceParam === "marketing") {
        setTimeout(() => setSelectedService("Digital Marketing & Growth"), 0);
      } else if (serviceParam === "software" || serviceParam === "dev") {
        setTimeout(() => setSelectedService("Software & Web Development"), 0);
      } else if (serviceParam === "combined") {
        setTimeout(() => setSelectedService("Combined Software + Growth"), 0);
      }
    }
  }, []);

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
              <MotionReveal delay={30} variant="fade-up">
                <span className="section-label block mb-4">
                  [Get in touch]
                </span>
              </MotionReveal>
              <MotionReveal delay={70} variant="fade-up">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-[-0.04em] text-white mb-6 leading-[1.05] max-w-5xl">
                  Let&apos;s build and scale together.
                </h1>
                <ScrollLinkedText
                  as="p"
                  className="text-base sm:text-xl text-[#b8b8b8] max-w-3xl leading-relaxed font-sans font-normal tracking-[-0.02em]"
                  text="We partner with ambitious companies across custom software development, digital marketing campaigns, and integrated growth initiatives. Reach out to discuss your technical requirements and growth goals."
                  highlightWords={["partner", "custom", "software", "development", "digital", "marketing", "campaigns", "integrated", "growth"]}
                  start="top 90%"
                  end="top 45%"
                  scrub={0.6}
                />
              </MotionReveal>
            </div>

            {/* 2-Column Grid: Contact Details & Interactive Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-10">
                {/* Email Box */}
                <MotionReveal delay={90} variant="fade-up">
                  <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 space-y-4 hover:border-white/20 transition-colors duration-300">
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
                </MotionReveal>

                {/* Studio Location & Hours */}
                <MotionReveal delay={130} variant="fade-up">
                  <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300">
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
                </MotionReveal>

                {/* Process Steps */}
                <MotionReveal delay={170} variant="fade-up">
                  <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-display font-medium text-[#848484]">[01]</span>
                      <p className="text-xs text-[#b8b8b8] font-sans">
                        Select your project type and share your technical or campaign goals below.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-display font-medium text-[#848484]">[02]</span>
                      <p className="text-xs text-[#b8b8b8] font-sans">
                        Our technical and growth leads review your inquiry within 24 hours.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-display font-medium text-[#848484]">[03]</span>
                      <p className="text-xs text-[#b8b8b8] font-sans">
                        We schedule an introductory scoping session to align on deliverables, timeline, and budget.
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <MotionReveal delay={120} variant="fade-up">
                  <div className="p-8 sm:p-12 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-xl hover:border-white/20 transition-colors duration-500">
                    {submitted ? (
                      <div className="py-16 text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                          <Check className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-semibold text-white tracking-[-0.03em]">
                          Inquiry Received
                        </h3>
                        <p className="text-sm text-[#b8b8b8] font-sans max-w-sm mx-auto">
                          Thank you for reaching out regarding <span className="text-white font-medium">{selectedService}</span>. Our team will review your specifications and get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Service Interest Selection */}
                        <div className="space-y-2">
                          <label className="text-xs font-display font-medium text-[#848484] block">
                            [Service Interest]*
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {serviceOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => setSelectedService(opt)}
                                className={`py-2.5 px-3.5 rounded-xl text-xs font-display transition-all duration-300 text-left flex items-center justify-between cursor-pointer ${
                                  selectedService === opt
                                    ? "bg-white text-black font-semibold shadow-sm"
                                    : "bg-white/[0.04] text-[#b8b8b8] hover:text-white border border-white/10 font-medium hover:bg-white/[0.08]"
                                }`}
                              >
                                <span>{opt}</span>
                                {selectedService === opt && (
                                  <Check className="w-3.5 h-3.5 text-black shrink-0 ml-1.5" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-display font-medium text-[#848484]">
                              [Name]*
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Elena Rostova"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30 transition-colors"
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
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30 transition-colors"
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
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30 transition-colors"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-display font-medium text-[#848484]">
                              [Subject]*
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Software Architecture & Growth Scaling"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30 transition-colors"
                            />
                          </div>
                        </div>

                        {/* Budget Pills */}
                        <div className="space-y-2 pt-2">
                          <label className="text-xs font-display font-medium text-[#848484] block">
                            [Budget Range]*
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {budgetOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => setBudget(opt)}
                                className={`py-2.5 px-3 rounded-xl text-xs font-display transition-all duration-300 cursor-pointer ${
                                  budget === opt
                                    ? "bg-white text-black font-semibold shadow-sm"
                                    : "bg-white/[0.04] text-[#b8b8b8] hover:text-white border border-white/10 font-medium hover:bg-white/[0.08]"
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
                            placeholder="Tell us about your project, current bottlenecks, and target milestones..."
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-sans text-white placeholder-[#848484] focus:outline-none focus:border-white/30 transition-colors"
                          />
                        </div>

                        <p className="text-[11px] font-sans text-[#848484]">
                          By submitting, you agree to our Terms and Privacy Policy.
                        </p>

                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all font-display font-semibold text-xs tracking-[-0.02em] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.99] duration-300"
                        >
                          <span>Send Inquiry</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </form>
                    )}
                  </div>
                </MotionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Answers / FAQ */}
        <MotionReveal delay={50} variant="fade-up">
          <Faq />
        </MotionReveal>
      </main>

      <Footer />
    </div>
  );
}
