"use client";

import React, { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PROJECTS, CaseStudy } from "@/data/projects";
import { CaseStudyModal } from "@/components/modals/CaseStudyModal";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);

  return (
    <section id="analyze-projects" className="py-24 md:py-32 border-b border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <SectionBadge number="03" label="ANALYZE / SELECTED PROJECTS" />
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span>[STAGE 03 OF 06]</span>
            <span>•</span>
            <span>QUANTIFIED IMPACT</span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
            SELECTED <br />
            <span className="text-data-green-dark">ANALYSES.</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mt-4">
            In-depth exploratory, predictive, and business intelligence case studies. Each project highlights real business context, technical pipelines, and measurable outcomes.
          </p>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-surface border border-border hover:border-primary transition-all duration-300 p-6 sm:p-10 relative overflow-hidden shadow-sm hover:shadow-md"
              data-cursor="VIEW"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-data-green transition-colors" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                    <span className="font-bold text-primary px-2 py-0.5 bg-background border border-border">
                      PROJECT {project.number}
                    </span>
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight group-hover:text-data-green-dark transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 bg-background border border-border font-mono text-[11px] font-semibold text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8 space-y-6">
                  <div className="p-5 bg-background border border-border font-mono space-y-2 group-hover:border-primary transition-colors">
                    <span className="text-[10px] text-muted uppercase block">
                      {project.keyMetric.label}
                    </span>
                    <div className="text-3xl sm:text-4xl font-bold text-primary group-hover:text-data-green-dark transition-colors">
                      {project.keyMetric.value}
                    </div>
                    <span className="text-xs text-secondary block font-sans">
                      {project.keyMetric.sublabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                    <span>VIEW FULL CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 text-data-green-dark" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

