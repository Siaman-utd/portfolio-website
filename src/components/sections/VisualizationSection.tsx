"use client";

import React, { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { InteractiveLineChart } from "@/components/charts/InteractiveLineChart";
import { CustomerScatterPlot } from "@/components/charts/CustomerScatterPlot";
import { CategoryBarChart } from "@/components/charts/CategoryBarChart";
import { ActivityHeatmap } from "@/components/charts/ActivityHeatmap";
import { LineChart, ScatterChart, BarChart3, Grid } from "lucide-react";

export function VisualizationSection() {
  const [activeTab, setActiveTab] = useState<"line" | "scatter" | "bar" | "heatmap">("line");

  const tabs = [
    { id: "line", label: "REVENUE TRAJECTORY", icon: <LineChart className="w-4 h-4" /> },
    { id: "scatter", label: "CUSTOMER CLUSTERING", icon: <ScatterChart className="w-4 h-4" /> },
    { id: "bar", label: "UNIT ECONOMICS", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "heatmap", label: "LOAD DENSITY MATRIX", icon: <Grid className="w-4 h-4" /> },
  ];

  return (
    <section id="visualize" className="py-24 md:py-32 border-b border-border bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <SectionBadge number="04" label="VISUALIZE / CHART PLAYGROUND" />
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span>[STAGE 04 OF 06]</span>
            <span>•</span>
            <span className="text-data-green-dark font-semibold">DEMONSTRATION DATA</span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
            NUMBERS, <br />
            <span className="text-data-green-dark">MADE VISIBLE.</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mt-4">
            Interactive chart modules demonstrating multivariate statistical plotting, time-series forecasting, and behavioral risk scoring.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4 font-mono text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 border transition-all duration-200 flex items-center gap-2 font-bold ${
                activeTab === tab.id
                  ? "bg-primary text-background border-primary shadow-sm"
                  : "bg-background text-secondary border-border hover:border-primary hover:text-primary"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="shadow-lg">
          {activeTab === "line" && <InteractiveLineChart />}
          {activeTab === "scatter" && <CustomerScatterPlot />}
          {activeTab === "bar" && <CategoryBarChart />}
          {activeTab === "heatmap" && <ActivityHeatmap />}
        </div>
      </div>
    </section>
  );
}

