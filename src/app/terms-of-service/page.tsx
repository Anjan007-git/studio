import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Mugen Design Studio",
  description: "Terms and conditions governing client relationships and design projects with Mugen Studio.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              [Legal]
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-neutral-500">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-10 text-sm text-neutral-300 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">1. Scope Modifications</h2>
              <p>
                Any modifications to the project scope require written approval. We will provide a quote for additional fees before proceeding with scope changes. Timeline adjustments will be communicated promptly, and the original agreement will be amended in writing to reflect any changes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">2. Project Payments</h2>
              <p>
                Projects require a 50% deposit upon agreement signing, with the remaining 50% due before final file delivery. We operate on Net 15 payment terms. Late payments incur 1.5% monthly interest, and work will pause for overdue accounts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">3. Retainer Payments</h2>
              <p>
                Monthly retainer payments are due on the agreed date each month. We strongly recommend setting up auto-payment to avoid service interruptions. Late payments will result in suspension of services. Overage hours are billed monthly, and clients on annual agreements may be eligible for discounts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">4. Project Cancellation</h2>
              <p>
                Clients may cancel projects with written notice. Cancellation fees are based on work completed: 25% of project fee if cancelled before concept presentation, 50% after concept approval, and 100% after final approval. All completed work remains client property upon payment of applicable fees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">5. Retainer Termination</h2>
              <p>
                Retainer agreements require 30-day written notice for termination. We will complete all work for the current month, but no refund will be issued for unused hours. A final invoice will be issued for any overage hours, and we will ensure smooth transition of any ongoing work.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">6. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to maintain confidentiality of all proprietary information shared during the course of our working relationship. We ensure secure handling of all client materials and keep project details private unless specifically authorized to share. A specific mutual NDA is available upon request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">7. Limitation of Liability</h2>
              <p>
                Our liability is limited to the fees paid for the specific project or retainer period in question. We assume no liability for indirect or consequential damages and make no guarantee of specific business outcomes.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
