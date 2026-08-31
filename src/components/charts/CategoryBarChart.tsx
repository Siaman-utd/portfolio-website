"use client";

import React, { useState } from "react";
import { CATEGORY_DATA } from "@/data/sampleData";
import { formatCurrency } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function CategoryBarChart() {
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);
  const maxSales = Math.max(...CATEGORY_DATA.map((c) => c.sales));

  return (
    <div className="bg-surface border border-border p-6 relative">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted uppercase">
            <span>[03 / BAR MATRIX]</span>
            <span>•</span>
            <span className="text-primary font-semibold">UNIT ECONOMICS & MARGINS</span>
          </div>
          <p className="text-sm font-bold text-primary mt-1">
            Category Contribution Volume vs. Gross Margin %
          </p>
        </div>
        <div className="font-mono text-xs text-data-green-dark bg-background px-3 py-1 border border-border">
          SORT: CONTRIBUTION DESC
        </div>
      </div>

      <div className="space-y-4">
        {CATEGORY_DATA.map((item) => {
          const isHovered = hoverCategory === item.category;
          const percentage = (item.sales / maxSales) * 100;

          return (
            <div
              key={item.category}
              onMouseEnter={() => setHoverCategory(item.category)}
              onMouseLeave={() => setHoverCategory(null)}
              className="cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className={`font-semibold transition-colors ${isHovered ? "text-primary font-bold" : "text-secondary"}`}>
                  {item.category}
                </span>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="text-muted">Margin: <strong className="text-primary">{item.marginPct}%</strong></span>
                  <span className="text-data-green-dark font-bold flex items-center">
                    <ArrowUpRight className="w-3 h-3" /> +{item.growthPct}%
                  </span>
                  <span className="font-bold text-primary w-20 text-right">
                    {formatCurrency(item.sales)}
                  </span>
                </div>
              </div>

              <div className="h-4 bg-background border border-border overflow-hidden relative">
                <div
                  className={`h-full transition-all duration-500 relative ${
                    isHovered ? "bg-data-green" : "bg-primary"
                  }`}
                  style={{ width: `${percentage}%` }}
                >
                  <div className="absolute inset-0 bg-data-grid-dense opacity-20" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-muted border-t border-border pt-3">
        <span>METRIC: GROSS REVENUE (TTM)</span>
        <span>HOVER BARS TO HIGHLIGHT MARGIN VELOCITY</span>
      </div>
    </div>
  );
}

