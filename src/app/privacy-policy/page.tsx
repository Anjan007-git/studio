import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Mugen Design Studio",
  description: "Privacy policy and data collection terms for Mugen Studio clients and visitors.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              [Privacy]
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-neutral-500">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-10 text-sm text-neutral-300 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">1. Information We Collect</h2>
              <p>
                We collect personal information that you provide to us directly through contact forms, email inquiries, or project intake questionnaires. This may include your name, email address, company name, phone number, and project details.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">2. How We Use Information</h2>
              <p>
                We use the information collected exclusively to deliver creative design services, evaluate project inquiries, communicate updates regarding sprints and milestones, and manage retainer agreements. We never sell, rent, or trade client information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">3. Data Security & Storage</h2>
              <p>
                We implement industry-standard technical and organizational security measures to protect your materials and design assets against unauthorized access, loss, or disclosure. All design files and client deliverables are stored on encrypted cloud infrastructure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">4. Your Rights</h2>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your information from our records upon termination of our working relationship. Contact us anytime at contact@mugen.design.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
