"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown, Terminal, Sparkles, User } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 md:pt-32 pb-16 flex items-center justify-center bg-data-grid overflow-hidden border-b border-border">
      {/* Structural Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full border-x border-border/50 relative">
          <div className="absolute top-1/4 left-0 right-0 border-t border-border/40" />
          <div className="absolute top-2/3 left-0 right-0 border-t border-border/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column — Editorial Hero Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border font-mono text-xs text-secondary mb-6 w-fit"
            >
              <Terminal className="w-3.5 h-3.5 text-data-green-dark" />
              <span className="font-bold text-primary">00 // PORTFOLIO</span>
              <span className="text-muted">•</span>
              <span>DATA ANALYST & STRATEGIST</span>
            </motion.div>

            {/* Headline with 'Help your "DATA" make sense.' */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary leading-[0.95] mb-8"
            >
              Help your <br />
              <span className="relative inline-block text-primary">
                <span className="relative z-10">&ldquo;DATA&rdquo;</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-data-green -z-0 opacity-80" />
              </span>{" "}
              <br />
              make sense.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary max-w-xl leading-relaxed mb-8"
            >
              I transform complex, messy datasets into clear insights, high-impact visualizations, and smarter business decisions.
            </motion.p>

            {/* Technical Metadata Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs border border-border bg-surface/80 p-3 mb-10"
            >
              <div>
                <span className="text-muted block text-[10px]">ANALYST</span>
                <strong className="text-primary">SIAM AZAD</strong>
              </div>
              <div>
                <span className="text-muted block text-[10px]">CORE STACK</span>
                <span className="text-primary font-medium">SQL · PYTHON</span>
              </div>
              <div>
                <span className="text-muted block text-[10px]">BI ENGINES</span>
                <span className="text-primary font-medium">POWER BI · EXCEL</span>
              </div>
              <div>
                <span className="text-muted block text-[10px]">SPECIALTY</span>
                <span className="text-data-green-dark font-bold">REVENUE & RETENTION</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#analyze-projects" variant="primary" dataCursor="EXPLORE">
                VIEW MY WORK
              </MagneticButton>

              <MagneticButton href="#raw-about" variant="outline" showArrow={false}>
                EXPLORE STORY
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column — Professional Editorial Profile Photo / Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full relative bg-surface border border-border p-4 shadow-sm">
              {/* Technical Photo Header */}
              <div className="flex items-center justify-between font-mono text-[11px] text-muted border-b border-border pb-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-data-green-dark" />
                  <span className="text-primary font-bold">SIAM_AZAD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
                  <span className="text-[10px] text-secondary">ACTIVE</span>
                </div>
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-surface-subtle border border-border overflow-hidden group">
                <Image
                  src="/picsite.jpeg"
                  alt="Siam Azad — Data Analyst"
                  fill
                  priority
                  className="object-cover contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Technical Overlay Lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Dimension Tag on Photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white z-10">
                  <div className="bg-primary/90 backdrop-blur-sm border border-border-dark px-3 py-1.5">
                    <span className="text-data-green font-bold">[BIO]</span> SIAM AZAD
                  </div>
                  <div className="bg-primary/90 backdrop-blur-sm border border-border-dark px-2.5 py-1.5 text-[11px] text-neutral-300">
                    DATA ANALYST
                  </div>
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="grid grid-cols-3 gap-1 text-center font-mono text-[10px] text-muted border-t border-border pt-3 mt-3">
                <div>[ROLE: ANALYST]</div>
                <div>[EXP: 3+ YEARS]</div>
                <div>[STATUS: OPEN]</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <a
        href="#raw-about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-muted hover:text-primary flex items-center gap-2 py-2 px-3 bg-surface/80 border border-border transition-colors select-none"
      >
        <span>SCROLL TO BEGIN JOURNEY</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
