"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [scrambleText, setScrambleText] = useState("00101101");

  const steps = [
    "INITIALIZING DATA SYSTEM...",
    "EXTRACTING RAW LOGS: [82.4, 19.7, REV_2024, $124,820, CUST_024]",
    "ORGANIZING MULTIDIMENSIONAL VECTORS...",
    "CONSTRUCTING 3D DATA CUBE...",
    "FIND THE SIGNAL IN THE NOISE.",
    "READY.",
  ];

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      const fragments = ["82.4", "REV_2024", "00101101", "$124,820", "CUSTOMER_024", "p < 0.001", "+24.8%"];
      setScrambleText(fragments[Math.floor(Math.random() * fragments.length)]);
    }, 120);

    const startTime = Date.now();
    const duration = 2200;

    const updateTimer = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 20) setCurrentStep(0);
      else if (pct < 45) setCurrentStep(1);
      else if (pct < 70) setCurrentStep(2);
      else if (pct < 90) setCurrentStep(3);
      else if (pct < 100) setCurrentStep(4);
      else setCurrentStep(5);

      if (pct < 100) {
        requestAnimationFrame(updateTimer);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    const animId = requestAnimationFrame(updateTimer);

    return () => {
      clearInterval(scrambleInterval);
      cancelAnimationFrame(animId);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[10000] bg-background flex flex-col justify-between p-8 md:p-16 select-none bg-data-grid"
      >
        <div className="flex items-center justify-between font-mono text-xs text-secondary border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
            <span className="font-bold text-primary">SIAM AZAD</span>
            <span>/</span>
            <span>PORTFOLIO DATA SYSTEM v2.4</span>
          </div>
          <button
            onClick={onComplete}
            className="hover:text-primary transition-colors underline cursor-pointer"
          >
            [SKIP INTRO →]
          </button>
        </div>

        <div className="max-w-xl mx-auto w-full my-auto text-center space-y-6">
          <div className="font-mono text-sm uppercase tracking-widest text-secondary h-6">
            {steps[currentStep]}
          </div>

          <div className="inline-block px-4 py-2 bg-surface border border-border font-mono text-lg text-primary font-bold shadow-sm">
            <span className="text-data-green-dark mr-2">&gt;</span>
            {scrambleText}
          </div>

          <div className="w-full bg-surface border border-border h-2 relative overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-xs text-muted">
            <span>MEM_BUFFER: OK</span>
            <span className="font-bold text-primary">{progress}%</span>
            <span>CLUSTERS: 4/4</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between font-mono text-[11px] text-muted border-t border-border pt-4">
          <div>RAW DATA → CLEAN DATA → INSIGHT</div>
          <div>ESTABLISHED 2026</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

