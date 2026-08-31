"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  showArrow?: boolean;
  className?: string;
  dataCursor?: string;
}

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  dataCursor,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "group relative inline-flex items-center justify-between gap-4 px-6 py-3.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 font-semibold border";

  const variants = {
    primary:
      "bg-primary text-background border-primary hover:bg-transparent hover:text-primary hover:border-primary shadow-sm",
    secondary:
      "bg-surface text-primary border-border hover:bg-primary hover:text-background hover:border-primary",
    outline:
      "bg-transparent text-primary border-border hover:border-primary hover:bg-surface",
    dark:
      "bg-data-green text-primary border-data-green hover:bg-white hover:border-white hover:text-primary",
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      data-cursor={dataCursor}
    >
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}

