import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — TRIFECTA TRENDS",
  description: "Privacy policy explaining how TRIFECTA TRENDS collects, protects, and handles personal and project information.",
};

const privacySections = [
  {
    title: "1. Information You Provide",
    content: "When you engage our services, we collect personal information including your name, contact details, email address, phone number, billing address, payment details, and company information. Throughout our working relationship, we also collect project-related information including brand assets, design guidelines, project briefs, creative feedback, and all client-supplied materials."
  },
  {
    title: "2. Information Automatically Collected",
    content: "When you visit our website, we automatically collect device information including your IP address, browser type, operating system, pages visited, time spent on pages, referring URLs, and timestamps. This information helps us optimize user experience and monitor site performance."
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: "We use essential cookies for website functionality, analytics cookies to measure performance and traffic patterns, and preference cookies to remember your choices. You can manage or disable cookie preferences directly through your browser settings."
  },
  {
    title: "4. How We Use Your Information",
    content: "We use your information primarily to deliver contracted design and development services, manage subscription accounts, process payments, communicate project milestones, and provide ongoing client support. We also analyze aggregated usage trends to refine our capabilities and services."
  },
  {
    title: "5. Data Storage and Security",
    content: "Your data is stored using secure cloud infrastructure with industry-standard TLS encryption in transit and AES-256 encryption at rest. We implement access control policies restricting data access solely to authorized personnel with a legitimate business need."
  },
  {
    title: "6. Data Retention Policies",
    content: "We retain active client data for the duration of the contractual engagement. Archived project files are retained for 10 years for reference and legal compliance. You have the right to request deletion of your project and personal data at any time, subject to legal and statutory recordkeeping requirements."
  },
  {
    title: "7. Information Sharing with Third Parties",
    content: "We do not sell, rent, or trade your personal data. We share information only with trusted third-party service providers (such as cloud hosting, payment processors, and communication platforms) bound by strict confidentiality and data protection agreements."
  },
  {
    title: "8. European Users (GDPR Compliance)",
    content: "If you reside within the European Economic Area, you hold statutory rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, port, or erase your personal data, and to restrict or object to specific processing activities."
  },
  {
    title: "9. California Privacy Rights (CCPA/CPRA)",
    content: "California residents have the right under the California Consumer Privacy Act to request disclosures regarding personal information collected, request deletion of personal information, and opt out of any sale or sharing of personal data without discrimination."
  },
  {
    title: "10. Children's Privacy",
    content: "Our services are directed exclusively to businesses and professionals. We do not knowingly collect personal information from individuals under the age of 16. If we discover inadvertent collection of minor data, we will take immediate steps to delete it."
  },
  {
    title: "11. Policy Modifications and Notifications",
    content: "We may update this Privacy Policy periodically to reflect technological, operational, or legal developments. Active clients will receive 30 days prior written notice of material revisions via email."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
          {/* Header */}
          <div className="mb-14 sm:mb-20">
            <MotionReveal delay={30} variant="fade-up">
              <span className="section-label block mb-3">
                [Privacy & Transparency]
              </span>
            </MotionReveal>
            <MotionReveal delay={60} variant="fade-up">
              <h1 className="text-4xl sm:text-6xl font-display font-semibold tracking-[-0.04em] text-white mb-4">
                Privacy policy.
              </h1>
              <p className="text-xs font-sans text-[#848484]">
                Last updated: February 17, 2026
              </p>
            </MotionReveal>
          </div>

          {/* Overview */}
          <MotionReveal delay={80} variant="fade-up">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10 mb-14 hover:border-white/20 transition-colors duration-300">
              <h2 className="text-xl font-display font-semibold text-white mb-4 tracking-[-0.03em]">Introduction</h2>
              <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal mb-6">
                This Privacy Policy explains how TRIFECTA TRENDS collects, uses, processes, and safeguards personal information and project data across our design services and digital platforms. We are committed to transparency and honoring your privacy rights under global regulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#b8b8b8]">
                <div>• GDPR & CCPA Compliance</div>
                <div>• TLS & AES-256 Encryption</div>
                <div>• Zero Data Reselling</div>
                <div>• 10-Year Safe Archival</div>
              </div>
            </div>
          </MotionReveal>

          {/* Sections List */}
          <div className="space-y-12">
            {privacySections.map((sec, idx) => (
              <MotionReveal key={idx} delay={Math.min((idx % 6) * 35, 150)} variant="fade-up">
                <section className="pb-10 border-b border-white/10 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-[-0.03em]">
                    {sec.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed font-sans font-normal">
                    {sec.content}
                  </p>
                </section>
              </MotionReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
