import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { allProjects, getProjectBySlug, getNextProject } from "@/lib/projects-data";
import { ArrowLeft, ArrowRight, ExternalLink } from "@/components/icons";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — TRIFECTA TRENDS",
    };
  }

  return {
    title: `${project.title} — ${project.fullTitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — TRIFECTA TRENDS`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);
  const otherProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Back Link & Navigation Bar */}
        <section className="pb-6">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-[-0.02em] text-[#b8b8b8] hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </section>

        {/* Hero Header */}
        <section className="pb-12 sm:pb-16">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="flex items-center gap-3 text-xs font-display font-medium text-[#848484] mb-6 tracking-[-0.02em]">
              <span className="text-white font-medium">{project.number}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-semibold tracking-[-0.04em] text-white leading-[1.05] max-w-5xl">
                {project.fullTitle}
              </h1>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-display font-semibold text-xs tracking-[-0.02em] hover:bg-neutral-200 transition-all shrink-0 cursor-pointer shadow-lg"
                >
                  <span>View live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-8 rounded-3xl bg-[#1c1c1c] border border-white/10">
              <div>
                <span className="text-[11px] font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                  Client
                </span>
                <p className="text-base font-display font-semibold text-white tracking-[-0.02em]">
                  {project.client}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                  Industry
                </span>
                <p className="text-base font-display font-semibold text-white tracking-[-0.02em]">
                  {project.industry}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                  Date
                </span>
                <p className="text-base font-display font-semibold text-white tracking-[-0.02em]">
                  {project.date}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                  Timeline
                </span>
                <p className="text-base font-display font-semibold text-white tracking-[-0.02em]">
                  {project.timeline}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-2">
                  Services
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-display font-semibold tracking-[-0.02em] px-2.5 py-0.5 rounded bg-[#181818] text-[#b8b8b8] border border-[#363636]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Cover Image */}
        <section className="pb-20 sm:pb-28">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                className="object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
              />
              {project.logo && (
                <div className="absolute top-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={90}
                    height={28}
                    className="max-h-6 w-auto object-contain brightness-200"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        {project.challenge.subtitle && (
          <section className="py-20 sm:py-28 border-t border-white/10">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="section-label block mb-3">
                    [01 — The Challenge]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-[-0.03em] text-white leading-tight">
                    {project.challenge.subtitle}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6 text-base sm:text-xl text-[#b8b8b8] font-sans font-normal leading-relaxed">
                  {project.challenge.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Visual Gallery 1 (2 Images Side-by-Side) */}
        {project.galleryImages.length >= 2 && (
          <section className="pb-20 sm:pb-28">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {project.galleryImages.slice(0, 2).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} showcase ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* The Solution Section */}
        {project.solution.subtitle && (
          <section className="py-20 sm:py-28 border-t border-white/10">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="section-label block mb-3">
                    [02 — The Solution]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-[-0.03em] text-white leading-tight">
                    {project.solution.subtitle}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6 text-base sm:text-xl text-[#b8b8b8] font-sans font-normal leading-relaxed">
                  {project.solution.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Visual Gallery 2 (Full Width Feature Image) */}
        {project.galleryImages.length >= 3 && (
          <section className="pb-20 sm:pb-28">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group">
                <Image
                  src={project.galleryImages[2]}
                  alt={`${project.title} full showcase`}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </section>
        )}

        {/* The Process Section */}
        {project.process.subtitle && (
          <section className="py-20 sm:py-28 border-t border-white/10">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="section-label block mb-3">
                    [03 — The Process]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-[-0.03em] text-white leading-tight">
                    {project.process.subtitle}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6 text-base sm:text-xl text-[#b8b8b8] font-sans font-normal leading-relaxed">
                  {project.process.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* By the Numbers (Stats Grid) */}
        {project.stats && project.stats.length > 0 && (
          <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="mb-12">
                <span className="section-label block mb-2">
                  [Impact]
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-[-0.04em] text-white">
                  By the numbers.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {project.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between"
                  >
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-5xl sm:text-7xl font-display font-semibold text-white tracking-[-0.04em]">
                        {stat.value}
                      </span>
                      <span className="text-2xl sm:text-4xl font-display font-medium text-[#848484]">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#b8b8b8] font-sans font-normal pt-6 border-t border-white/10">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Quote */}
        {project.testimonial && (
          <section className="py-20 sm:py-28 border-t border-white/10 bg-[var(--page-bg)]">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
              <div className="p-10 sm:p-16 rounded-3xl bg-[#1c1c1c] border border-white/10 relative overflow-hidden">
                <span className="text-xs font-display font-medium text-[#848484] uppercase tracking-[-0.02em] block mb-8">
                  Client Perspective
                </span>

                <blockquote className="text-2xl sm:text-4xl md:text-5xl font-sans font-normal tracking-[-0.03em] text-white leading-tight mb-12 max-w-5xl">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <div>
                    <p className="text-lg font-display font-semibold text-white tracking-[-0.02em]">
                      {project.testimonial.author}
                    </p>
                    <p className="text-xs font-sans text-[#848484] mt-0.5">
                      {project.testimonial.role}
                    </p>
                  </div>

                  {project.logo && (
                    <div className="relative w-28 h-8 opacity-70">
                      <Image
                        src={project.logo}
                        alt={project.client}
                        fill
                        className="object-contain filter invert"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next Project Card Banner */}
        <section className="py-16 sm:py-24 border-t border-white/10">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="flex items-center justify-between mb-8">
              <span className="section-label">
                [Next Project]
              </span>
              <Link
                href="/projects"
                className="text-xs font-display font-medium text-[#b8b8b8] hover:text-white transition-colors tracking-[-0.02em]"
              >
                View all projects
              </Link>
            </div>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-8 sm:p-12 rounded-3xl bg-[#1c1c1c] border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={nextProject.coverImage}
                    alt={nextProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-xs font-display font-medium text-[#848484] block mb-1 tracking-[-0.02em]">
                    {nextProject.number} • {nextProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-semibold text-white group-hover:text-neutral-200 transition-colors tracking-[-0.03em]">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs text-[#b8b8b8] font-sans font-normal mt-1">
                    {nextProject.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-display font-semibold text-white group-hover:text-neutral-300 tracking-[-0.02em]">
                <span>Explore Case Study</span>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Projects Grid */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-[var(--page-bg)]">
          <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14">
            <div className="mb-10">
              <span className="section-label block mb-2">
                [Archive]
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-semibold tracking-[-0.04em] text-white">
                More selected work.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group rounded-3xl bg-[#1c1c1c] border border-white/10 overflow-hidden hover:border-white/30 transition-all p-5 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs font-display font-medium text-[#848484] mb-1 tracking-[-0.02em]">
                      <span>{p.number}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-neutral-200 transition-colors tracking-[-0.03em]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#b8b8b8] font-sans font-normal mt-1">
                      {p.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
