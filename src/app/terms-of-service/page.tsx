import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Mugen Design Studio",
  description: "Terms and conditions governing design services, retainers, and client engagements with Mugen Studio.",
};

const termsSections = [
  {
    title: "1. Project-Based Services",
    content: "We provide one-time design projects with clearly defined scope and deliverables. Each project receives a custom quote based on specific requirements, with timeline and milestones agreed upon before project commencement. The number of revision rounds will be specified in each project agreement, and final payment is required before delivery of final files."
  },
  {
    title: "2. Retainer Services",
    content: "Our retainer services provide ongoing design support with allocated monthly hours. Clients on retainer receive priority scheduling and dedicated designer access. The policy for unused hours will be specified in each retainer agreement. We offer both monthly and quarterly billing options, with a minimum 3-month commitment required for all retainer plans."
  },
  {
    title: "3. Scope of Work & Project Terms",
    content: "A written project agreement is required before any work begins. We require a 50% deposit to secure your project slot, and the project timeline begins upon receipt of both the deposit and all required materials. Rush fees apply for projects requiring less than our standard turnaround time. Any additional revisions beyond the agreed scope will be billed at our standard hourly rate."
  },
  {
    title: "4. Retainer Terms & Commitments",
    content: "Retainer agreements require a minimum 3-month initial commitment. Should you wish to terminate the retainer, 30-day written notice is required. Your monthly hours allocation will be specified in your agreement, and unused hours expire at month end with no rollover to subsequent months. Any overage hours will be billed at the agreed hourly rate specified in your retainer agreement."
  },
  {
    title: "5. Included Services",
    content: "Our services encompass brand identity design, marketing materials and collateral, social media graphics and templates, website design (visual only), digital advertising assets, print design and production files, presentation design, and basic motion graphics."
  },
  {
    title: "6. Excluded Services",
    content: "The following services fall outside our standard scope: web development or coding, content writing or copywriting, photography or photo shoots, video production or editing, complex 3D rendering, mobile app development, and strategy consulting (unless specifically included in your agreement)."
  },
  {
    title: "7. Client Responsibilities & Required Materials",
    content: "Clients must provide a comprehensive project brief, existing brand guidelines and assets (if applicable), all content, copy, and messaging, high-resolution images and graphics, and timely feedback and approvals within agreed timeframes."
  },
  {
    title: "8. Communication Protocols",
    content: "We require a designated single point of contact for each project or retainer. Clients must respond to design concepts within 3 business days and provide clear, consolidated feedback and revision requests. Availability for scheduled check-ins and reviews is essential for project success."
  },
  {
    title: "9. Intellectual Property Rights & Ownership",
    content: "Upon receipt of final payment, clients receive full ownership rights to all final deliverables. Preliminary concepts and rejected designs remain the property of the designer. We retain the right to display completed work in our portfolio. Clients warrant ownership of all materials provided to us and are responsible for all trademark and copyright clearances."
  },
  {
    title: "10. File Delivery & Deliverables",
    content: "Final files will be delivered in the formats specified in your agreement. Source files are included as specified in the agreement, with additional file formats available for an additional fee. All files will be delivered via secure transfer method."
  },
  {
    title: "11. Project Revisions & Changes",
    content: "The number of revision rounds will be specified in each project agreement. Minor revisions within the original scope are included in the project fee. Major direction changes constitute a scope change and will be quoted separately. Additional revisions beyond those included will be billed at our standard hourly rate. All revision requests should be consolidated to ensure efficient workflow."
  },
  {
    title: "12. Scope Changes & Modifications",
    content: "Any modifications to the project scope require written approval. We will provide a quote for additional fees before proceeding with scope changes. Timeline adjustments will be communicated promptly, and the original agreement will be amended in writing to reflect any changes."
  },
  {
    title: "13. Payment Terms & Schedules",
    content: "Projects require a 50% deposit upon agreement signing, with the remaining 50% due before final file delivery. We operate on Net 15 payment terms. Late payments incur 1.5% monthly interest, and work will pause for overdue accounts. Monthly retainer payments are due on the agreed date each month. Late payments will result in suspension of services. Overage hours are billed monthly."
  },
  {
    title: "14. Cancellation and Termination",
    content: "Clients may cancel projects with written notice. Cancellation fees are based on work completed: 25% of project fee if cancelled before concept presentation, 50% after concept approval, and 100% after final approval. All completed work remains client property upon payment of applicable fees. Retainer agreements require 30-day written notice for termination."
  },
  {
    title: "15. Confidentiality & Non-Disclosure",
    content: "Both parties agree to maintain confidentiality of all proprietary information shared during the course of our working relationship. We ensure secure handling of all client materials and keep project details private unless specifically authorized to share. This confidentiality obligation survives termination of our agreement. A specific mutual NDA is available upon request."
  },
  {
    title: "16. Liability and Indemnification",
    content: "Our liability is limited to the fees paid for the specific project or retainer period in question. We assume no liability for indirect or consequential damages and make no guarantee of specific business outcomes. Clients agree to indemnify us for any claims arising from content they provide."
  },
  {
    title: "17. Dispute Resolution & General Terms",
    content: "In the event of a dispute, direct negotiation between parties is the first step. If negotiation fails, both parties agree to attempt mediation before pursuing other remedies. As a final resort, disputes will be settled through binding arbitration. This agreement is governed by the laws of Ontario, Canada, and each party bears their own legal costs unless otherwise determined in arbitration."
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
          {/* Header */}
          <div className="mb-14 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              [Legal Document]
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Terms of service.
            </h1>
            <p className="text-xs font-mono text-neutral-400">
              Last updated: February 17, 2026
            </p>
          </div>

          {/* Table of Contents / Overview Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10 mb-14">
            <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
              These Terms of Service govern the engagement and provision of design, brand strategy, and product engineering services by Mugen Studio. Please review these terms carefully prior to commencing work or signing a project statement of work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
              <div>• Service Terms & Scope</div>
              <div>• Intellectual Property Rights</div>
              <div>• Retainer Commitments</div>
              <div>• Cancellation & Termination</div>
              <div>• Payment Schedules</div>
              <div>• Confidentiality & NDAs</div>
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-12">
            {termsSections.map((sec, idx) => (
              <section key={idx} className="pb-10 border-b border-white/10 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {sec.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {sec.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
