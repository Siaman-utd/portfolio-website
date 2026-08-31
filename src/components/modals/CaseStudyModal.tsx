"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudy } from "@/data/projects";
import { X, ArrowRight, Database, TrendingUp, CheckCircle, Clock, FileText, Layers } from "lucide-react";
import { InteractiveLineChart } from "@/components/charts/InteractiveLineChart";
import { CustomerScatterPlot } from "@/components/charts/CustomerScatterPlot";
import { CategoryBarChart } from "@/components/charts/CategoryBarChart";
import { ActivityHeatmap } from "@/components/charts/ActivityHeatmap";

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderProjectVisual = () => {
    switch (project.demonstrationType) {
      case "revenue":
        return <InteractiveLineChart />;
      case "churn":
        return <CustomerScatterPlot />;
      case "dashboard":
        return <CategoryBarChart />;
      case "market":
        return <ActivityHeatmap />;
      default:
        return <InteractiveLineChart />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-primary/70 backdrop-blur-sm">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-background border border-border shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-border bg-surface shrink-0">
            <div className="flex items-center gap-3 font-mono text-xs text-secondary">
              <span className="px-2.5 py-1 bg-primary text-background font-bold">
                PROJECT {project.number}
              </span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-border bg-background hover:bg-primary hover:text-background transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 sm:p-10 space-y-12 divide-y divide-border">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
                {project.title}
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                {project.tagline}
              </p>

              <div className="p-4 bg-data-green/20 border border-data-green-dark/40 flex flex-wrap items-center justify-between gap-4 font-mono">
                <div>
                  <span className="text-[10px] text-muted uppercase block">PRIMARY QUANTIFIED OUTCOME</span>
                  <span className="text-primary font-bold text-lg">{project.keyResult}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-background text-primary border border-border text-xs font-bold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 space-y-3">
                <div className="font-mono text-xs text-data-green-dark font-bold uppercase">
                  01 // THE BUSINESS PROBLEM
                </div>
                <h3 className="text-xl font-bold text-primary">Context & Diagnostic Challenge</h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {project.problem}
                </p>
              </div>

              <div className="md:col-span-6 space-y-3">
                <div className="font-mono text-xs text-secondary font-bold uppercase">
                  02 // DATASET ARCHITECTURE
                </div>
                <div className="grid grid-cols-2 gap-3 bg-surface p-4 border border-border font-mono text-xs">
                  <div>
                    <span className="text-muted block text-[10px]">RECORD VOLUME</span>
                    <strong className="text-primary">{project.datasetInfo.records}</strong>
                  </div>
                  <div>
                    <span className="text-muted block text-[10px]">DIMENSIONS</span>
                    <strong className="text-primary">{project.datasetInfo.columns}</strong>
                  </div>
                  <div>
                    <span className="text-muted block text-[10px]">TIME WINDOW</span>
                    <strong className="text-primary">{project.datasetInfo.timePeriod}</strong>
                  </div>
                  <div>
                    <span className="text-muted block text-[10px]">SOURCES</span>
                    <strong className="text-primary">{project.datasetInfo.sources}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 space-y-6">
              <div className="font-mono text-xs text-data-green-dark font-bold uppercase">
                03 // THE ANALYTICAL PIPELINE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.pipeline.map((step, i) => (
                  <div key={i} className="p-4 bg-surface border border-border space-y-2">
                    <div className="font-mono text-[10px] text-muted font-bold">{step.stage}</div>
                    <h4 className="font-bold text-sm text-primary">{step.label}</h4>
                    <p className="text-xs text-secondary leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-data-green-dark font-bold uppercase">
                  04 // INTERACTIVE VISUALIZATION & FINDINGS
                </div>
                <span className="font-mono text-xs text-muted">[LIVE SIMULATOR]</span>
              </div>
              {renderProjectVisual()}
            </div>

            <div className="pt-10 space-y-6">
              <div className="font-mono text-xs text-data-green-dark font-bold uppercase">
                05 // KEY FINDINGS & STRATEGIC DISCOVERIES
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.analysisHighlights.map((item, i) => (
                  <div key={i} className="p-5 bg-surface border border-border space-y-2">
                    <h4 className="font-bold text-base text-primary flex items-center gap-2">
                      <span className="w-2 h-2 bg-data-green" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 space-y-6">
              <div className="font-mono text-xs text-data-green-dark font-bold uppercase">
                06 // MEASURED BUSINESS IMPACT
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                {project.businessImpact.map((item, i) => (
                  <div key={i} className="p-5 bg-primary text-background border border-primary space-y-2">
                    <div className="text-2xl font-bold text-data-green">{item.metric}</div>
                    <div className="text-xs font-semibold text-white uppercase">{item.impact}</div>
                    <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border bg-surface flex items-center justify-between font-mono text-xs shrink-0">
            <span className="text-muted">PRESS ESC TO CLOSE CASE STUDY</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary text-background font-bold hover:bg-secondary transition-colors"
            >
              CLOSE WINDOW [×]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

