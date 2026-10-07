"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "brand-identity",
    num: "[01]",
    title: "Brand Identity",
    image: "/images/AkfwmbbK7reh203E7bgE8GE6w.png",
    description:
      "Complete brand systems that capture your essence and stand out in market. From strategy to execution, we build identities that resonate and scale.",
    categories: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Positioning",
      "Naming",
      "Brand Strategy",
      "Brand Packages",
    ],
  },
  {
    id: "digital-design",
    num: "[02]",
    title: "Digital Design",
    image: "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
    description:
      "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers.",
    categories: [
      "Web Design",
      "Landing Pages",
      "E-commerce",
      "Email Design",
      "Digital Campaigns",
      "Microsites",
      "Web Apps",
    ],
  },
  {
    id: "product-design",
    num: "[03]",
    title: "Product Design",
    image: "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
    description:
      "UI/UX that makes complex products feel simple. We balance user needs with business goals to create experiences that just work.",
    categories: [
      "User Interface",
      "User Experience",
      "Design Systems",
      "Prototypes",
      "Mobile Apps",
      "SaaS Platforms",
    ],
  },
  {
    id: "marketing-growth",
    num: "[04]",
    title: "Marketing & Growth",
    image: "/images/d0BwZFrtELCoWDdpc1wN5g0q070.jpeg",
    description:
      "Strategic creative that drives results. From campaigns to pitch decks, we design materials that move your audience to action.",
    categories: [
      "Performance Ads",
      "Pitch Decks",
      "Social Assets",
      "Motion Design",
      "Sales Collateral",
    ],
  },
  {
    id: "development",
    num: "[05]",
    title: "Development",
    image: "/images/jMyKum9tkI3nlZlUp5RZLjnTPU.jpg",
    description:
      "Clean code that brings designs to life. Fast, responsive, and pixel-perfect across all devices.",
    categories: [
      "Next.js & React",
      "Framer Engineering",
      "Tailwind CSS",
      "Custom Animation",
      "Performance",
    ],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = services.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) {
              setActiveTab(index);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    services.forEach((service) => {
      const el = document.getElementById(service.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (index: number) => {
    setActiveTab(index);
    const el = document.getElementById(services[index].id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414] overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="mb-4">
            <span className="section-label">
              [03] Services
            </span>
          </div>
          <h2 className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6">
            Services
          </h2>
          <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em] max-w-3xl">
            Full-spectrum design capabilities under one roof. Whether you need a
            complete brand overhaul or ongoing creative support, we have the
            expertise to deliver. No outsourcing, no excuses, just exceptional
            work from our senior team.
          </p>
        </div>

        {/* Mobile Horizontal Category Bar */}
        <div className="lg:hidden mb-8 overflow-x-auto scrollbar-none pb-2 -mx-6 px-6">
          <div className="flex gap-2 min-w-max">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => scrollToService(idx)}
                className={`px-4 py-2 rounded-full text-xs font-display transition-all ${
                  activeTab === idx
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-[#1c1c1c] text-[#b8b8b8] border border-white/10 hover:text-white font-medium"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Layout: Left Sticky Nav + Right Scrolling Showcase */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Sticky Menu (matching desktop MUGEN frame exactly) */}
          <div className="lg:col-span-4 sticky top-32 hidden lg:block">
            <nav className="flex flex-col space-y-6 text-2xl sm:text-3xl font-display font-medium tracking-[-0.04em]">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(idx)}
                  className={`text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    activeTab === idx
                      ? "text-white font-semibold translate-x-1"
                      : "text-[#545454] hover:text-[#b8b8b8]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeTab === idx ? "bg-white scale-125" : "bg-transparent opacity-0"
                    }`}
                  />
                  <span>{service.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:col-span-8 flex flex-col space-y-16 sm:space-y-24">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 flex flex-col space-y-6"
              >
                {/* Large Photographic Artwork with Subtle Zoom */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Service Details in 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  {/* Left Column: Title & Description */}
                  <div className="md:col-span-6">
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-[-0.04em] mb-3">
                      <span className="text-[#b8b8b8] mr-2 font-medium">{service.num}</span>
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em]">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Categories */}
                  <div className="md:col-span-6">
                    <span className="font-display text-xs text-[#b8b8b8] block mb-3 font-medium tracking-[-0.02em]">
                      Categories
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="font-display text-xs sm:text-[13px] font-semibold tracking-[-0.03em] px-3 py-1.5 rounded-lg bg-[#181818] border border-[#363636] text-white hover:border-white/30 transition-colors select-none"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
