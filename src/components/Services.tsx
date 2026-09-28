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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      services.forEach((service, index) => {
        const el = document.getElementById(service.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

        {/* 2-Column Layout: Left Sticky Nav + Right Scrolling Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Menu */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block">
            <nav className="flex flex-col space-y-4 text-xl sm:text-2xl font-bold tracking-tight">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(idx)}
                  className={`text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    activeTab === idx
                      ? "text-white translate-x-2"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <span
                    className={`text-xs font-mono transition-opacity duration-300 ${
                      activeTab === idx ? "opacity-100 text-white" : "opacity-0"
                    }`}
                  >
                    /{service.num.replace("[", "").replace("]", "")}
                  </span>
                  <span>{service.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Scrolling Cards */}
          <div className="lg:col-span-8 flex flex-col space-y-16 sm:space-y-24">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 flex flex-col space-y-8 rounded-3xl bg-[#1c1c1c] border border-white/10 p-5 sm:p-7 overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                {/* Large Photographic Artwork */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Service Details */}
                <div className="px-1 sm:px-2 pb-2">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-neutral-400">
                      {service.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-2xl">
                    {service.description}
                  </p>

                  {/* Categories Row */}
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-xs font-mono text-neutral-500 block mb-3 uppercase tracking-wider">
                      Categories
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-white/20 transition-colors"
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
