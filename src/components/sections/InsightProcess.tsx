"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Sparkles, ChevronRight, BarChart, Database, Filter, Target } from "lucide-react";

export function InsightProcess() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      name: "RAW DATA",
      subtitle: "Unstructured & Noisy",
      description: "Thousands of scattered transactional events, unstandardized formats, missing fields, and noisy telemetry.",
      icon: <Database className="w-4 h-4" />,
      metric: "452,190 Records Extracted",
    },
    {
      step: "02",
      name: "CLEAN",
      subtitle: "Sanitized & Normalized",
      description: "Purging duplicate rows, imputing missing values, resolving anomalies, and establishing relational schema integrity.",
      icon: <Filter className="w-4 h-4" />,
      metric: "99.9% Schema Integrity",
    },
    {
      step: "03",
      name: "ANALYZE",
      subtitle: "Clustered & Modeled",
      description: "Running cohort decay models, multivariate regressions, and RFM behavioral clustering to expose latent trends.",
      icon: <Sparkles className="w-4 h-4" />,
      metric: "4 Behavioral Clusters",
    },
    {
      step: "04",
      name: "VISUALIZE",
      subtitle: "Multi-dimensional Views",
      description: "Designing intuitive executive charts, drill-downs, and real-time operational BI telemetry.",
      icon: <BarChart className="w-4 h-4" />,
      metric: "Real-time BI Suite",
    },
    {
      step: "05",
      name: "INSIGHT & ACTION",
      subtitle: "Quantified Business Decision",
      description: "Distilling complex data into one undeniable strategic mandate that unlocks measurable revenue expansion.",
      icon: <Target className="w-4 h-4" />,
      metric: "+27.4% Growth Opportunity",
    },
  ];

  const current = stages[activeStage];

  return (
    <section id="insight-process" className="py-24 md:py-32 border-b border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <SectionBadge number="05" label="INSIGHT / STORYTELLING JOURNEY" />
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span>[STAGE 05 OF 06]</span>
            <span>•</span>
            <span>CHAOS → CLARITY</span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
            FROM CHAOS <br />
            <span className="text-data-green-dark">TO CLARITY.</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mt-4">
            The core philosophy: every dataset undergoes a 5-step metamorphosis from unorganized noise into decisive business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10 font-mono text-xs">
          {stages.map((st, i) => (
            <button
              key={st.step}
              onClick={() => setActiveStage(i)}
              className={`p-3 text-left border transition-all ${
                activeStage === i
                  ? "bg-primary text-background border-primary shadow-md"
                  : "bg-surface text-secondary border-border hover:border-primary hover:text-primary"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={activeStage === i ? "text-data-green font-bold" : "text-muted"}>
                  {st.step}
                </span>
                {activeStage === i && <span className="w-1.5 h-1.5 rounded-full bg-data-green" />}
              </div>
              <div className="font-bold text-[11px] truncate">{st.name}</div>
            </button>
          ))}
        </div>

        <div className="bg-surface border border-border p-6 sm:p-12 relative min-h-[420px] flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-data-green-dark font-bold">
                {current.icon}
                <span>STAGE {current.step} // {current.name}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">{current.subtitle}</h3>
            </div>
            <div className="font-mono text-xs px-3 py-1 bg-background border border-border font-bold text-primary">
              OUTCOME: {current.metric}
            </div>
          </div>

          <div className="my-8 py-6 flex items-center justify-center min-h-[180px]">
            <AnimatePresence mode="wait">
              {activeStage === 0 && (
                <motion.div
                  key="chaos"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-lg grid grid-cols-8 gap-3 p-4 bg-background/50 border border-dashed border-border"
                >
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-none bg-neutral-400/40 transform transition-transform"
                      style={{
                        transform: `rotate(${((i * 37) % 90) - 45}deg) scale(${0.7 + ((i * 13) % 6) / 10})`,
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {activeStage === 1 && (
                <motion.div
                  key="clean"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-lg grid grid-cols-8 gap-3 p-4 bg-background border border-border"
                >
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-primary transition-all duration-300"
                    />
                  ))}
                </motion.div>
              )}

              {activeStage === 2 && (
                <motion.div
                  key="analyze"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-lg grid grid-cols-4 gap-4 p-4 bg-background border border-border"
                >
                  {["Champions", "At Risk", "Loyal", "Dormant"].map((c) => (
                    <div key={c} className="p-3 bg-surface border border-border text-center font-mono text-xs">
                      <div className="w-3 h-3 rounded-full bg-data-green mx-auto mb-1.5" />
                      <div className="font-bold text-primary">{c}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeStage === 3 && (
                <motion.div
                  key="visualize"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-lg flex items-end gap-3 h-28 p-4 bg-background border border-border justify-around"
                >
                  {[35, 55, 45, 80, 65, 95, 100].map((h, i) => (
                    <div
                      key={i}
                      className="w-8 bg-primary hover:bg-data-green transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </motion.div>
              )}

              {activeStage === 4 && (
                <motion.div
                  key="insight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-lg text-center p-8 bg-primary text-background border border-data-green shadow-2xl space-y-3"
                >
                  <div className="font-mono text-xs text-data-green font-bold uppercase tracking-widest">
                    ★ STRATEGIC MANDATE IDENTIFIED
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    +27.4% GROWTH OPPORTUNITY
                  </div>
                  <p className="font-mono text-xs text-neutral-300">
                    Reallocating marketing mix to Day 14-28 cohort automated sequence
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-secondary max-w-xl leading-relaxed">
              {current.description}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                className="px-3 py-1.5 bg-background border border-border font-mono text-xs text-primary hover:border-primary"
              >
                ← PREV
              </button>
              <button
                onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                className="px-4 py-1.5 bg-primary text-background border border-primary font-mono text-xs font-bold hover:bg-secondary flex items-center gap-1.5"
              >
                <span>NEXT STAGE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

