"use client";

import React, { useState } from "react";
import { CUSTOMER_SCATTER_DATA, CustomerScatterPoint } from "@/data/sampleData";

export function CustomerScatterPlot() {
  const [selectedCluster, setSelectedCluster] = useState<string>("all");
  const [hoveredPoint, setHoveredPoint] = useState<CustomerScatterPoint | null>(null);

  const width = 600;
  const height = 240;
  const padding = 35;

  const getX = (usage: number) => padding + (usage / 100) * (width - padding * 2);
  const getY = (tickets: number) => height - padding - (tickets / 12) * (height - padding * 2);

  const filteredPoints =
    selectedCluster === "all"
      ? CUSTOMER_SCATTER_DATA
      : CUSTOMER_SCATTER_DATA.filter((p) => p.cluster === selectedCluster);

  const getClusterColor = (cluster: string) => {
    switch (cluster) {
      case "high_risk":
        return "#FF4A4A";
      case "healthy":
        return "#78A52B";
      case "power_user":
        return "#111111";
      case "moderate":
        return "#8A8A84";
      default:
        return "#111111";
    }
  };

  return (
    <div className="bg-surface border border-border p-6 relative">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted uppercase">
            <span>[02 / SCATTER CLUSTER]</span>
            <span>•</span>
            <span className="text-primary font-semibold">RETENTION HAZARD MATRIX</span>
          </div>
          <p className="text-sm font-bold text-primary mt-1">
            Usage Frequency vs. Support Ticket Velocity
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          {[
            { id: "all", label: "ALL" },
            { id: "high_risk", label: "HIGH RISK (18.3%)", color: "text-red-600" },
            { id: "healthy", label: "HEALTHY", color: "text-data-green-dark" },
            { id: "power_user", label: "POWER USERS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCluster(tab.id)}
              className={`px-2.5 py-1 border transition-colors ${
                selectedCluster === tab.id
                  ? "bg-primary text-background border-primary font-bold"
                  : "bg-background text-secondary border-border hover:border-primary"
              }`}
            >
              <span className={tab.color}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-10 flex items-center justify-between px-3 bg-background border border-border font-mono text-xs mb-3">
        {hoveredPoint ? (
          <div className="flex items-center gap-4 text-primary">
            <span className="font-bold text-data-green-dark">[{hoveredPoint.id}]</span>
            <span>Usage: {hoveredPoint.usageScore}%</span>
            <span>Tickets: {hoveredPoint.supportTickets}</span>
            <span>ARR: ${hoveredPoint.arrValue}k</span>
            <span className="uppercase text-[10px] px-1.5 py-0.5 bg-surface border border-border">
              {hoveredPoint.cluster.replace("_", " ")}
            </span>
          </div>
        ) : (
          <span className="text-muted text-[11px]">
            Hover any data point node to inspect account telemetry & risk weighting
          </span>
        )}
      </div>

      <div className="relative w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none overflow-visible">
          <rect
            x={padding}
            y={getY(12)}
            width={(width - padding * 2) * 0.4}
            height={(height - padding * 2) * 0.5}
            fill="#FF4A4A"
            fillOpacity="0.06"
          />
          <text
            x={padding + 8}
            y={getY(12) + 16}
            fill="#FF4A4A"
            className="font-mono text-[9px] font-bold tracking-wider"
          >
            CRITICAL CHURN ZONE (LOW USAGE / HIGH TICKETS)
          </text>

          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#111111" strokeWidth="1.5" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#111111" strokeWidth="1.5" />

          <text x={width / 2} y={height - 8} textAnchor="middle" fill="#444444" className="font-mono text-[10px] uppercase">
            Feature Adoption / Usage Score (0% → 100%)
          </text>
          <text
            x={-height / 2}
            y={12}
            textAnchor="middle"
            transform="rotate(-90)"
            fill="#444444"
            className="font-mono text-[10px] uppercase"
          >
            Support Tickets (30D)
          </text>

          {filteredPoints.map((point) => {
            const cx = getX(point.usageScore);
            const cy = getY(point.supportTickets);
            const isHovered = hoveredPoint?.id === point.id;
            const color = getClusterColor(point.cluster);

            return (
              <g
                key={point.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(point)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {isHovered && (
                  <circle cx={cx} cy={cy} r={9} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
                )}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 5.5 : 4}
                  fill={color}
                  stroke="#111111"
                  strokeWidth="1.5"
                  className="transition-all duration-150"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-muted border-t border-border pt-2">
        <span>N = 128,400 ACCOUNT TELEMETRY EVENTS</span>
        <span>K-MEANS CLUSTERS EVALUATED (K=4)</span>
      </div>
    </div>
  );
}

