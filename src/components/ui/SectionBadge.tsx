import React from "react";

interface SectionBadgeProps {
  number: string;
  label: string;
  inverted?: boolean;
}

export function SectionBadge({ number, label, inverted = false }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs tracking-wider uppercase border ${
        inverted
          ? "border-neutral-700 bg-neutral-900 text-neutral-300"
          : "border-border bg-surface text-secondary"
      }`}
    >
      <span className="text-data-green font-bold">[{number}]</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}

