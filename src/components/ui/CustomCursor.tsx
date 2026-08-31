"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("button, a, [data-cursor]");
      if (clickable) {
        const customText = clickable.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else if (clickable.tagName === "A" || clickable.tagName === "BUTTON") {
          setCursorText("OPEN →");
        } else {
          setCursorText("");
        }
      } else {
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.15,
        }}
      >
        {cursorText ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex items-center justify-center px-3 py-1 bg-primary text-background border border-data-green shadow-xl font-mono text-[10px] uppercase font-bold tracking-widest"
          >
            {cursorText}
          </motion.div>
        ) : (
          <div className="relative flex items-center justify-center w-6 h-6">
            <div className="absolute w-[1px] h-4 bg-primary" />
            <div className="absolute w-4 h-[1px] bg-primary" />
            <div className="w-2.5 h-2.5 rounded-full bg-data-green border border-primary/40" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

