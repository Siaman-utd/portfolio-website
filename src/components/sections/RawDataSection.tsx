"use client";

import React, { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SAMPLE_RAW_DATA } from "@/data/sampleData";
import { Sparkles, Check, AlertTriangle } from "lucide-react";

export function RawDataSection() {
  const [isCleaned, setIsCleaned] = useState(false);
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);

  return (
    <section id="raw-about" className="py-24 md:py-32 border-b border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <SectionBadge number="01" label="RAW DATA & FOUNDATION" />
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span>[STAGE 01 OF 06]</span>
            <span>•</span>
            <span>MESSY → STRUCTURED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.02]">
              DATA IS ONLY <br />
              USEFUL WHEN IT <br />
              <span className="text-data-green-dark">TELLS A STORY.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed">
              <p>
                I&apos;m <strong>Siam Azad</strong>, a Data Analyst obsessed with translating messy, unstructured data into clear, <strong>actionable business strategies.</strong>
              </p>
              <p>
                Real-world data rarely arrives in clean rows and perfect schemas. It arrives with missing keys, currency inconsistencies, duplicate webhooks, and noisy anomalies.
              </p>
              <p>
                My craft begins by stripping away the noise, establishing statistical integrity, and transforming chaotic transactional data into clear business intelligence.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "DATA CLEANING & WRANGLING",
                "EXPLORATORY DATA ANALYSIS (EDA)",
                "BUSINESS INTELLIGENCE (BI)",
                "COHORT RETENTION MODELING",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-surface border border-border font-mono text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-border pt-6 font-mono text-xs">
              <div>
                <span className="text-muted block text-[10px]">RECORD SCALE</span>
                <strong className="text-primary text-base">5M+ Rows</strong>
              </div>
              <div>
                <span className="text-muted block text-[10px]">CLEANING EFFICIENCY</span>
                <strong className="text-data-green-dark text-base">&gt;99.8%</strong>
              </div>
              <div>
                <span className="text-muted block text-[10px]">AUTOMATION</span>
                <strong className="text-primary text-base">SQL Views</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface border border-border p-6 shadow-sm relative">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
                    <span className="w-2.5 h-2.5 bg-primary" />
                    <span>RAW_TRANSACTION_FEED.CSV</span>
                  </div>
                  <p className="font-mono text-xs text-muted mt-0.5">
                    Live interactive transformation simulator
                  </p>
                </div>

                <button
                  onClick={() => setIsCleaned(!isCleaned)}
                  className={`px-4 py-2 font-mono text-xs font-bold border transition-all flex items-center gap-2 ${
                    isCleaned
                      ? "bg-data-green text-primary border-primary shadow-sm"
                      : "bg-primary text-background border-primary hover:bg-secondary"
                  }`}
                  data-cursor="TRIGGER"
                >
                  {isCleaned ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>CLEANED PIPELINE ACTIVE</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>CLICK TO CLEAN DATA</span>
                    </>
                  )}
                </button>
              </div>

              <div
                className={`p-3 font-mono text-xs border mb-4 flex items-center justify-between transition-colors ${
                  isCleaned
                    ? "bg-background border-data-green-dark text-primary"
                    : "bg-amber-50 border-amber-300 text-amber-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isCleaned ? (
                    <Check className="w-4 h-4 text-data-green-dark" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  )}
                  <span>
                    {isCleaned
                      ? "STATUS: PIPELINE NORMALIZED (0 nulls, 0 duplicate records, schema validated)"
                      : "STATUS: UNCLEANED STREAM (Detected: 1 NULL, 1 N/A, 1 negative anomaly, 1 duplicate)"}
                  </span>
                </div>
                <span className="font-bold hidden sm:inline">
                  {isCleaned ? "6 ROWS → 5 CLEAN ROWS" : "6 DIRTY RECORDS"}
                </span>
              </div>

              <div className="overflow-x-auto border border-border bg-background">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-surface border-b border-border text-muted uppercase text-[10px]">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">ORDER_DATE</th>
                      <th className="p-3">REGION</th>
                      <th className="p-3">PRODUCT</th>
                      <th className="p-3 text-right">AMOUNT</th>
                      <th className="p-3">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {SAMPLE_RAW_DATA.map((row) => {
                      if (isCleaned && row.id === "TRX-8904_DUP") return null;

                      const isSelected = highlightedRow === row.id;

                      return (
                        <tr
                          key={row.id}
                          onMouseEnter={() => setHighlightedRow(row.id)}
                          onMouseLeave={() => setHighlightedRow(null)}
                          className={`transition-colors cursor-pointer ${
                            isSelected ? "bg-surface-subtle" : "hover:bg-surface/60"
                          } ${
                            !isCleaned && !row.isClean
                              ? "bg-red-50/40 text-red-950"
                              : ""
                          }`}
                        >
                          <td className="p-3 font-semibold text-primary">
                            {row.id}
                          </td>
                          <td className="p-3">
                            {isCleaned ? (
                              <span className="text-primary font-medium">{row.cleanOrderDate}</span>
                            ) : (
                              <span className={row.orderDate.includes("/") ? "text-amber-700 bg-amber-100 px-1 font-bold" : "text-secondary"}>
                                {row.orderDate}
                              </span>
                            )}
                          </td>
                          <td className="p-3">
                            {isCleaned ? (
                              <span className="text-primary font-medium">{row.cleanRegion}</span>
                            ) : (
                              <span className={row.region.includes("NULL") ? "text-red-600 bg-red-100 px-1 font-bold" : "text-secondary"}>
                                {row.region}
                              </span>
                            )}
                          </td>
                          <td className="p-3">
                            {isCleaned ? (
                              <span className="text-primary font-medium">{row.cleanProductSku}</span>
                            ) : (
                              <span className={row.productSku === "N/A" ? "text-red-600 bg-red-100 px-1 font-bold" : "text-secondary"}>
                                {row.productSku}
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-right font-semibold">
                            {isCleaned ? (
                              <span className="text-primary">
                                ${row.cleanGrossAmount.toLocaleString()}
                              </span>
                            ) : (
                              <span className={row.grossAmount.includes("NULL") || row.grossAmount.includes("-") ? "text-red-600 bg-red-100 px-1" : "text-secondary"}>
                                {row.grossAmount}
                              </span>
                            )}
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 text-[10px] font-bold uppercase border ${
                                isCleaned
                                  ? "bg-surface border-border text-primary"
                                  : row.status === "COMPLETED"
                                  ? "bg-surface border-border text-secondary"
                                  : "bg-red-100 border-red-300 text-red-800"
                              }`}
                            >
                              {isCleaned ? row.cleanStatus : row.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-background border border-border font-mono text-[11px] flex items-center justify-between text-secondary">
                <div>
                  <span className="text-muted mr-2">TRANSFORMATION ENGINE:</span>
                  <span className="text-primary font-bold">
                    {isCleaned
                      ? "Python Pandas / Regex normalizer applied (ISO-8601 & currency parsed)"
                      : "Awaiting cleaning execution trigger..."}
                  </span>
                </div>
                <button
                  onClick={() => setIsCleaned(!isCleaned)}
                  className="text-data-green-dark hover:underline font-bold"
                >
                  {isCleaned ? "[RESET TO RAW]" : "[SCRUB DATA]"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

