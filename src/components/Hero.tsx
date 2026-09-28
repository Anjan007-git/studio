"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Star } from "./icons";

const clientLogos = [
  { name: "Clandestine", src: "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg" },
  { name: "Codecraft", src: "/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg" },
  { name: "ommLabs", src: "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg" },
  { name: "GlobalBank", src: "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg" },
  { name: "45 Degrees", src: "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg" },
  { name: "AlphaWave", src: "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg" },
  { name: "Biosynthesis", src: "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg" },
  { name: "Boltshift", src: "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#141414]">
      {/* Background Looping Video from Framer CDN */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          src="/videos/hero.mp4"
          poster="/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/30 via-transparent to-[#141414]" />
      </div>

      {/* Main Hero Container */}
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14 flex-1 flex flex-col justify-between">
        {/* Massive 2-Line Typography */}
        <div className="relative pt-4 sm:pt-8 select-none">
          {/* Line 1: MUGEN */}
          <div className="w-full">
            <h1 className="text-[16.5vw] md:text-[15.5vw] font-bold text-white tracking-[-0.04em] leading-[0.82] uppercase m-0 p-0">
              MUGEN
            </h1>
          </div>

          {/* Line 2: Since 2016 badge + STUDIO */}
          <div className="relative flex items-baseline justify-between w-full">
            {/* Left: Since badge positioned under 'M' */}
            <div className="absolute left-1 top-2 sm:top-4 md:top-6 flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-neutral-400 font-normal">
              <span>©</span>
              <span>Since — 2016</span>
            </div>

            {/* Line 2 Word: STUDIO */}
            <div className="w-full text-right sm:text-left sm:pl-[24vw] md:pl-[28vw]">
              <span className="text-[16.5vw] md:text-[15.5vw] font-bold text-[#888888] tracking-[-0.04em] leading-[0.82] uppercase m-0 p-0 block">
                STUDIO
              </span>
            </div>
          </div>
        </div>

        {/* Central Content Area with Floating Card & Manifesto */}
        <div className="relative mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Bottom Left: Happy Clients & Rating */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex items-center gap-4">
            {/* Overlapping Avatar Stack */}
            <div className="flex items-center -space-x-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/2szvKnNjJBBkPsk6yCETyIDktns.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/siKQvG204y5XTlJmEnImPRJ2lc.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/IxG8JQTe4YCB0OBh5yXZR2y0lk.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-black bg-neutral-800">
                <Image
                  src="/images/ADzzP2ffltBL8xXs0bcwap1FtlM.png"
                  alt="Client avatar"
                  fill
                  className="object-cover"
                />
              </div>
              {/* "You?" dark circle */}
              <div className="w-9 h-9 rounded-full ring-2 ring-black bg-[#1c1c1c] flex items-center justify-center text-[10px] font-semibold text-white">
                You?
              </div>
            </div>

            {/* Stars & Rating Text */}
            <div className="flex flex-col text-xs">
              <div className="flex items-center gap-1.5">
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5</span>
              </div>
              <span className="text-neutral-400 font-normal mt-0.5">
                100+ Happy clients
              </span>
            </div>
          </div>

          {/* Center: Floating Meeting Card (Sarah Park) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center -mt-16 sm:-mt-24 lg:-mt-36 z-20">
            <div className="w-full max-w-[320px] rounded-2xl bg-[#141414] border border-white/10 shadow-2xl p-3 flex flex-col gap-3 backdrop-blur-md">
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900">
                <Image
                  src="/images/ulbEv91MwUwTk34ixqmyIluLPJY.png"
                  alt="Sarah Park - Project Manager"
                  fill
                  priority
                  className="object-cover object-top"
                />

                {/* Availability Badge Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-2 py-1.5 px-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] text-white">
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2.5 bg-white rounded-full" />
                    <span className="w-0.5 h-2.5 bg-white rounded-full" />
                    <span className="w-0.5 h-2.5 bg-neutral-600 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-neutral-600 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-neutral-600 rounded-full" />
                  </div>
                  <span className="font-medium">2 slots open</span>
                  <span className="text-neutral-400 font-mono text-[10px]">
                    March&apos;26
                  </span>
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div className="px-1 pt-1 flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Sarah Park
                  </h3>
                  <p className="text-xs text-neutral-400">Project manager</p>
                </div>

                <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-xs">
                  <span className="text-neutral-300">
                    Plans start at <strong className="text-white font-medium">$7,500 / m</strong>
                  </span>
                  <Link
                    href="#pricing"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* White CTA Button */}
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all font-medium text-xs flex items-center justify-between shadow-sm"
                >
                  <span>Book a 15-Min Call</span>
                  <Calendar className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Right: Editorial Manifesto */}
          <div className="lg:col-span-4 order-3 flex justify-end">
            <p className="max-w-md text-base sm:text-lg md:text-xl leading-snug tracking-tight text-right lg:text-left">
              <strong className="text-white font-semibold block sm:inline">
                We&apos;ve reimagined how great design happens.{" "}
              </strong>
              <span className="text-[#888888] font-normal">
                No pitches. No proposals. No project management theater. Just
                exceptional work from senior designers who become an extension of
                your team.
              </span>
            </p>
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-65 hover:opacity-100 transition-opacity">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="relative h-6 w-24 sm:w-28 flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={110}
                    height={24}
                    className="max-h-5 w-auto object-contain brightness-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
