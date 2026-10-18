"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollLinkedText } from "./ScrollLinkedText";
import { MotionReveal } from "./MotionReveal";

const services = [
  {
    id: "service1",
    num: "[01]",
    title: "Brand Identity",
    image: "/images/uC3DPDrBdJCZlHMQcaazSdNDaHM.jpg",
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
    id: "service2",
    num: "[02]",
    title: "Digital Design",
    image: "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
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
    id: "service3",
    num: "[03]",
    title: "Product Design",
    image: "/images/nUz9PQlnVFREjBvNToIeGovBXI.jpeg",
    description:
      "UI/UX that makes complex products feel simple. We balance user needs with business goals to create experiences that just work.",
    categories: [
      "User Interface",
      "User Experience",
      "Design Systems",
      "Prototypes",
      "Mobile Apps",
      "SaaS Platforms",
      "Dashboards",
    ],
  },
  {
    id: "service4",
    num: "[04]",
    title: "Marketing & Growth",
    image: "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
    description:
      "Strategic creative that drives results. From campaigns to pitch decks, we design materials that move your audience to action.",
    categories: [
      "Campaign Creative",
      "Performance Ads",
      "Pitch Decks",
      "Social Media",
      "Motion Design",
      "Sales Collateral",
    ],
  },
  {
    id: "service5",
    num: "[05]",
    title: "Development",
    image: "/images/e2v2lPYF5BZiZDeiEFptTSeZC1c.jpg",
    description:
      "Clean code that brings designs to life. Fast, responsive, and pixel-perfect across all devices.",
    categories: [
      "Next.js & React",
      "Framer Engineering",
      "Tailwind CSS",
      "Custom Animation",
      "Performance",
      "Front-end",
    ],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);

  // Synchronize active tab with scroll position like Mugen Studio
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickingRef.current) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const focalY = window.innerHeight * 0.38; // Focal scanning line ~38% from top of viewport
          let bestIdx = 0;
          let minDistance = Infinity;

          services.forEach((service, index) => {
            const el = document.getElementById(service.id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            // If focal line intersects this card, it is the active one
            if (rect.top <= focalY && rect.bottom >= focalY) {
              bestIdx = index;
              minDistance = -1;
            } else if (minDistance !== -1) {
              const dist = Math.abs(rect.top - focalY);
              if (dist < minDistance) {
                minDistance = dist;
                bestIdx = index;
              }
            }
          });

          setActiveTab(bestIdx);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("lenis-scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis-scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToService = (index: number) => {
    setActiveTab(index);
    isClickingRef.current = true;

    const el = document.getElementById(services[index].id);
    if (el) {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.scrollTo(el, {
          offset: -100,
          duration: 1.1,
          onComplete: () => {
            isClickingRef.current = false;
          },
        });
      } else {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setTimeout(() => {
          isClickingRef.current = false;
        }, 800);
      }
    } else {
      isClickingRef.current = false;
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[var(--page-bg)] overflow-visible"
    >
      <div className="w-full max-w-[1560px] mx-auto px-[var(--section-px)]">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <MotionReveal variant="fade-up" delay={0}>
            <div className="mb-4">
              <span className="section-label">
                [03] Services
              </span>
            </div>
          </MotionReveal>
          <ScrollLinkedText
            as="h2"
            className="text-heading-1 font-display font-semibold tracking-[-0.04em] text-white mb-6"
            text="Services"
            start="top 90%"
            end="top 65%"
            scrub={0.5}
          />
          <ScrollLinkedText
            as="p"
            className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed font-normal tracking-[-0.02em] max-w-3xl"
            text="Full-spectrum design capabilities under one roof. Whether you need a complete brand overhaul or ongoing creative support, we have the expertise to deliver. No outsourcing, no excuses, just exceptional work from our senior team."
            highlightWords={["Full-spectrum", "expertise", "exceptional", "senior"]}
            start="top 85%"
            end="top 50%"
            scrub={0.6}
          />
        </div>

        {/* 2-Column Layout: Left Sticky Navigation + Right Scrolling Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Sticky Column (Full grid height so sticky nav stays pinned for all cards) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div
              className="sticky z-10"
              style={{ position: "sticky", top: "120px" }}
            >
              <nav className="flex flex-col space-y-4 lg:space-y-6">
                {services.map((service, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(idx)}
                      className={`text-left text-2xl lg:text-3xl xl:text-[34px] font-display tracking-[-0.03em] transition-colors duration-300 cursor-pointer block select-none ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#545454] hover:text-[#b8b8b8] font-medium"
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Scrolling Content (Mugen Card Topology) */}
          <div className="lg:col-span-8 flex flex-col space-y-20 sm:space-y-28 lg:space-y-36">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 flex flex-col space-y-6 pt-2 pb-12 sm:pb-16 border-b border-white/10 last:border-b-0"
              >
                {/* Large Photographic Artwork with Subtle Zoom */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/10 group shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1200px) 960px, (min-width: 768px) 720px, 100vw"
                    priority={idx === 0}
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Service Details: 2 columns on desktop/tablet, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-3">
                  {/* Left Column: Title & Description */}
                  <div className="md:col-span-6 lg:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-[-0.03em] mb-3 flex items-baseline gap-2.5">
                      <span className="text-[#828282] font-normal text-xl sm:text-2xl shrink-0">
                        {service.num}
                      </span>
                      <span>{service.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed font-sans font-normal tracking-[-0.01em]">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Categories */}
                  <div className="md:col-span-6 lg:col-span-5">
                    <span className="font-display text-xs text-[#828282] uppercase tracking-wider block mb-3 font-medium">
                      Categories
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="font-display text-xs sm:text-[13px] font-semibold tracking-[-0.02em] px-3.5 py-1.5 rounded-lg bg-black border border-[#363636] text-white hover:border-white/40 transition-colors select-none"
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
