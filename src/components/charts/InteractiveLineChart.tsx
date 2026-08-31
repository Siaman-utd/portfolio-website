"use client";

import React, { useState } from "react";
import { REVENUE_DATA } from "@/data/sampleData";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp, Layers } from "lucide-react";

export function InteractiveLineChart() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(REVENUE_DATA.length - 1);
  const [showOptimized, setShowOptimized] = useState(true);

  const maxVal = 200000;
  const height = 240;
  const width = 600;
  const paddingX = 40;
  const paddingY = 30;

  const getX = (index: number) =>
    paddingX + (index / (REVENUE_DATA.length - 1)) * (width - paddingX * 2);

  const getY = (val: number) =>
    height - paddingY - (val / maxVal) * (height - paddingY * 2);

  const baselinePoints = REVENUE_DATA.map((d, i) => `${getX(i)},${getY(d.baseline)}`).join(" ");
  const optimizedPoints = REVENUE_DATA.map((d, i) => `${getX(i)},${getY(d.optimized)}`).join(" ");

  const activeData = hoverIndex !== null ? REVENUE_DATA[hoverIndex] : REVENUE_DATA[REVENUE_DATA.length - 1];
  const delta = activeData.optimized - activeData.baseline;
  const deltaPct = ((delta / activeData.baseline) * 100).toFixed(1);

  return (
    <div className="bg-surface border border-border p-6 relative">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted uppercase">
            <span>[01 / LINE MODEL]</span>
            <span>•</span>
            <span className="text-primary font-semibold">REVENUE TRAJECTORY</span>
          </div>
          <p className="text-sm font-bold text-primary mt-1">
            Historical Baseline vs. Cohort Intervention Model
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowOptimized(!showOptimized)}
            className={`px-3 py-1 font-mono text-xs border transition-colors flex items-center gap-2 ${
              showOptimized
                ? "border-primary bg-primary text-background"
                : "border-border bg-background text-secondary"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>MODEL: {showOptimized ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 font-mono text-xs bg-background/60 p-3 border border-border">
        <div>
          <div className="text-muted text-[10px] uppercase">Selected Month</div>
          <div className="text-primary font-bold text-sm">{activeData.month} 2024</div>
        </div>
        <div>
          <div className="text-muted text-[10px] uppercase">Baseline Revenue</div>
          <div className="text-secondary font-bold text-sm">{formatCurrency(activeData.baseline)}</div>
        </div>
        <div>
          <div className="text-muted text-[10px] uppercase">Optimized Run-Rate</div>
          <div className="text-primary font-bold text-sm">{formatCurrency(activeData.optimized)}</div>
        </div>
        <div>
          <div className="text-muted text-[10px] uppercase">Identified Delta</div>
          <div className="text-data-green-dark font-bold text-sm flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+{deltaPct}%</span>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible select-none"
        >
          {[0.25, 0.5, 0.75, 1].map((p, i) => {
            const y = getY(maxVal * p);
            return (
              <g key={i}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#D7D6D0"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                />
                <text
                  x={paddingX - 6}
                  y={y + 3}
                  textAnchor="end"
                  fill="#8A8A84"
                  className="font-mono text-[9px]"
                >
                  ${(maxVal * p) / 1000}k
                </text>
              </g>
            );
          })}

          <polyline
            fill="none"
            stroke="#8A8A84"
            strokeWidth="2"
            strokeDasharray="4 4"
            points={baselinePoints}
          />

          {showOptimized && (
            <>
              <polyline
                fill="none"
                stroke="#111111"
                strokeWidth="3"
                points={optimizedPoints}
              />
              <polygon
                fill="#B6FF4A"
                fillOpacity="0.15"
                points={`${optimizedPoints} ${REVENUE_DATA.slice()
                  .reverse()
                  .map((d, i) => `${getX(REVENUE_DATA.length - 1 - i)},${getY(d.baseline)}`)
                  .join(" ")}`}
              />
            </>
          )}

          {REVENUE_DATA.map((d, i) => {
            const x = getX(i);
            const yOpt = getY(d.optimized);
            const isHovered = hoverIndex === i;

            return (
              <g
                key={i}
                className="cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
              >
                {isHovered && (
                  <line
                    x1={x}
                    y1={paddingY}
                    x2={x}
                    y2={height - paddingY}
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                )}

                <circle
                  cx={x}
                  cy={yOpt}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? "#B6FF4A" : "#111111"}
                  stroke="#111111"
                  strokeWidth="2"
                  className="transition-all duration-150"
                />

                <text
                  x={x}
                  y={height - 10}
                  textAnchor="middle"
                  fill={isHovered ? "#111111" : "#8A8A84"}
                  className={`font-mono text-[10px] ${isHovered ? "font-bold" : ""}`}
                >
                  {d.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted border-t border-border pt-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-muted" /> BASELINE MODEL
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-primary" /> OPTIMIZED COHORT INTERVENTION
          </span>
        </div>
        <span>HOVER DATA POINTS TO SCRUB</span>
      </div>
    </div>
  );
}

