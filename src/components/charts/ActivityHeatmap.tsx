"use client";

import React, { useState } from "react";

export function ActivityHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<{ day: string; hour: number; val: number } | null>(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 12 }, (_, i) => i * 2);

  const getDensity = (dayIdx: number, hour: number) => {
    const isWeekend = dayIdx >= 5;
    let base = Math.sin((hour / 24) * Math.PI) * 70;
    if (dayIdx === 1 || dayIdx === 2 || dayIdx === 3) base += 25;
    if (isWeekend && hour >= 12 && hour <= 20) base += 20;
    const noise = ((dayIdx * 17 + hour * 31) % 20) - 10;
    return Math.max(5, Math.min(99, Math.round(base + noise)));
  };

  const getColor = (val: number) => {
    if (val > 80) return "bg-primary text-background";
    if (val > 60) return "bg-data-green text-primary";
    if (val > 40) return "bg-surface-subtle text-primary";
    if (val > 20) return "bg-surface text-secondary";
    return "bg-background text-muted";
  };

  return (
    <div className="bg-surface border border-border p-6 relative">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted uppercase">
            <span>[04 / DENSITY MATRIX]</span>
            <span>•</span>
            <span className="text-primary font-semibold">PEAK TRANSACTION HOURS</span>
          </div>
          <p className="text-sm font-bold text-primary mt-1">
            Day-of-Week vs. Hourly Ingestion Load
          </p>
        </div>

        <div className="font-mono text-xs px-3 py-1 bg-background border border-border min-w-[200px] text-right">
          {hoveredCell ? (
            <span>
              {hoveredCell.day} @ {hoveredCell.hour}:00 — <strong className="text-primary">{hoveredCell.val}%</strong> Density
            </span>
          ) : (
            <span className="text-muted text-[11px]">Hover cells to inspect load</span>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-13 gap-1 mb-2 font-mono text-[9px] text-muted text-center">
            <div className="text-left">DAY</div>
            {hours.map((h) => (
              <div key={h}>{h}h</div>
            ))}
          </div>

          <div className="space-y-1.5">
            {days.map((day, dayIdx) => (
              <div key={day} className="grid grid-cols-13 gap-1.5 items-center">
                <span className="font-mono text-[10px] text-secondary font-bold">{day}</span>
                {hours.map((h) => {
                  const val = getDensity(dayIdx, h);
                  const isHovered = hoveredCell?.day === day && hoveredCell?.hour === h;

                  return (
                    <div
                      key={h}
                      onMouseEnter={() => setHoveredCell({ day, hour: h, val })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`h-7 border border-border/80 flex items-center justify-center font-mono text-[9px] transition-all cursor-pointer ${getColor(
                        val
                      )} ${isHovered ? "ring-2 ring-primary scale-105 z-10" : ""}`}
                    >
                      {val > 65 ? `${val}` : ""}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted border-t border-border pt-2">
        <div className="flex items-center gap-2">
          <span>LOW</span>
          <div className="w-3 h-3 bg-background border border-border" />
          <div className="w-3 h-3 bg-surface border border-border" />
          <div className="w-3 h-3 bg-surface-subtle border border-border" />
          <div className="w-3 h-3 bg-data-green border border-border" />
          <div className="w-3 h-3 bg-primary border border-border" />
          <span>MAX LOAD</span>
        </div>
        <span>SAMPLING: 2.4M SERVER REQUEST LOGS</span>
      </div>
    </div>
  );
}

