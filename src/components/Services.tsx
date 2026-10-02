"use client";

import React, { useState, useEffect } from "react";
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
        rootMargin: "-20% 0px -50% 0px",
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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-white/10 relative bg-[#141414]">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              [03] Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light max-w-3xl">
            Full-spectrum design capabilities under one roof. Whether you need a
            complete brand overhaul or ongoing creative support, we have the
            expertise to deliver. No outsourcing, no excuses, just exceptional
            work from our senior team.
          </p>
        </div>

        {/* 2-Column Layout: Left Sticky Nav + Right Scrolling Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Menu (matching desktop frame 24 exactly) */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block">
            <nav className="flex flex-col space-y-5 text-2xl sm:text-3xl font-medium tracking-tight">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(idx)}
                  className={`text-left transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "text-white font-semibold"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {service.title}
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
                className="scroll-mt-28 flex flex-col space-y-6 overflow-hidden"
              >
                {/* Large Photographic Artwork */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Service Details in 2 columns (matching desktop frame 24) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  {/* Left Column: Title & Description */}
                  <div className="md:col-span-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                      {service.num} {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Categories */}
                  <div className="md:col-span-6">
                    <span className="text-xs text-neutral-400 block mb-3 font-normal">
                      Categories
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-white font-normal"
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
