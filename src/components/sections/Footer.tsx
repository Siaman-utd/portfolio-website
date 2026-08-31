"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border font-mono text-xs text-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <span className="w-2 h-2 bg-primary" />
              <span>SIAM AZAD</span>
            </div>
            <p className="text-[11px] text-muted leading-relaxed">
              Data Analyst & BI Strategist specializing in exploratory modeling, revenue optimization, and interactive intelligence.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-muted text-[10px] uppercase">OPERATIONAL STATUS</div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
              <span>SYSTEM ONLINE [200 OK]</span>
            </div>
            <div className="text-[11px] text-muted">
              LIVE CLOCK: {timeString || "00:00:00 UTC"}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-muted text-[10px] uppercase">BUILT WITH</div>
            <div className="text-primary text-[11px] space-y-0.5">
              <div>React · Next.js · TypeScript</div>
              <div>Three.js · Framer Motion · Tailwind</div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="group px-4 py-2.5 bg-surface border border-border hover:border-primary text-primary font-bold flex items-center gap-2 transition-colors w-fit"
              data-cursor="TOP"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-muted">
          <div>
            © 2026 SIAM AZAD. BUILT WITH DATA, LOGIC & CURIOSITY.
          </div>
          <div>
            RAW DATA → CLEAN DATA → INSIGHT → DECISION
          </div>
        </div>
      </div>
    </footer>
  );
}

