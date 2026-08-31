"use client";

import React, { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SKILL_CATEGORIES, SkillItem } from "@/data/skills";
import { Code, Database, BarChart3, FileSpreadsheet, Terminal, Cpu, Play } from "lucide-react";

export function SkillsSection() {
  const [selectedTool, setSelectedTool] = useState<SkillItem>(SKILL_CATEGORIES[0].tools[0]);
  const [isRunningSnippet, setIsRunningSnippet] = useState(false);
  const [executedOutput, setExecutedOutput] = useState<string | null>(null);

  const handleRunCode = (tool: SkillItem) => {
    setIsRunningSnippet(true);
    setExecutedOutput(null);
    setTimeout(() => {
      setIsRunningSnippet(false);
      setExecutedOutput(tool.sampleOutput || "Query execution completed successfully.");
    }, 450);
  };

  const getToolIcon = (previewType: string) => {
    switch (previewType) {
      case "sql":
        return <Database className="w-4 h-4 text-primary" />;
      case "python":
        return <Terminal className="w-4 h-4 text-primary" />;
      case "powerbi":
        return <BarChart3 className="w-4 h-4 text-primary" />;
      case "excel":
        return <FileSpreadsheet className="w-4 h-4 text-primary" />;
      default:
        return <Code className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section id="clean-skills" className="py-24 md:py-32 border-b border-border bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <SectionBadge number="02" label="CLEAN / ANALYTICAL TOOLKIT" />
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span>[STAGE 02 OF 06]</span>
            <span>•</span>
            <span>MODULAR DATA BLOCKS</span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
            MY TOOLKIT FOR <br />
            <span className="text-data-green-dark">FINDING CLARITY.</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mt-4">
            I don&apos;t rely on superficial percentage bars. Here is the operational code, architecture, and querying frameworks I use daily to solve business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.id} className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-muted border-b border-border pb-1">
                  <span>{category.tag}</span>
                  <span className="text-primary font-semibold">{category.name}</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {category.tools.map((tool) => {
                    const isSelected = selectedTool.name === tool.name;

                    return (
                      <button
                        key={tool.name}
                        onClick={() => {
                          setSelectedTool(tool);
                          setExecutedOutput(null);
                        }}
                        className={`w-full text-left p-4 border transition-all duration-200 ${
                          isSelected
                            ? "bg-primary text-background border-primary shadow-md"
                            : "bg-background text-primary border-border hover:border-primary hover:bg-surface-subtle"
                        }`}
                        data-cursor="SELECT"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2 font-mono text-xs font-bold">
                            <span className={isSelected ? "text-data-green" : "text-primary"}>
                              {getToolIcon(tool.previewType)}
                            </span>
                            <span>{tool.name}</span>
                          </div>
                          <span
                            className={`font-mono text-[10px] uppercase px-2 py-0.5 border ${
                              isSelected
                                ? "bg-white/10 border-white/20 text-data-green"
                                : "bg-surface border-border text-secondary"
                            }`}
                          >
                            {tool.proficiency.split("·")[0]}
                          </span>
                        </div>

                        <p
                          className={`text-xs line-clamp-2 leading-relaxed ${
                            isSelected ? "text-neutral-300" : "text-secondary"
                          }`}
                        >
                          {tool.summary}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-primary text-background border border-border p-6 shadow-xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-data-green rounded-full" />
                  <span className="text-white font-bold">{selectedTool.name}</span>
                  <span className="text-neutral-500 hidden sm:inline">• INTERACTIVE WORKBENCH</span>
                </div>

                <button
                  onClick={() => handleRunCode(selectedTool)}
                  disabled={isRunningSnippet}
                  className="px-3.5 py-1.5 bg-data-green text-primary hover:bg-white transition-colors font-mono text-xs font-bold flex items-center gap-1.5 border border-data-green"
                  data-cursor="EXECUTE"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isRunningSnippet ? "EXECUTING..." : "RUN QUERY / SCRIPT"}</span>
                </button>
              </div>

              <div className="bg-[#0D0D0D] border border-neutral-800 p-4 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed max-h-[300px]">
                <pre className="text-data-green-dark">
                  <code>{selectedTool.codeSnippet}</code>
                </pre>
              </div>

              <div className="mt-4 border-t border-neutral-800 pt-4">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 mb-2">
                  <span>TERMINAL OUTPUT // CONSOLE</span>
                  <span className="text-data-green">STATUS: 200 OK</span>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 p-3 font-mono text-xs text-neutral-200 min-h-[70px] flex items-center">
                  {isRunningSnippet ? (
                    <div className="flex items-center gap-2 text-data-green animate-pulse">
                      <Cpu className="w-4 h-4" />
                      <span>Parsing AST and executing analytical pipeline...</span>
                    </div>
                  ) : executedOutput ? (
                    <div className="text-data-green whitespace-pre-wrap">{executedOutput}</div>
                  ) : (
                    <div className="text-neutral-500 whitespace-pre-wrap">
                      {selectedTool.sampleOutput || "Ready to execute. Click [RUN QUERY / SCRIPT] above to inspect output stream."}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between font-mono text-[10px] text-neutral-400 border-t border-neutral-800 pt-3">
                <span>USAGE LEVEL: {selectedTool.proficiency}</span>
                <span>ENGINE: POSTGRESQL / PYTHON 3.11 / DAX ENGINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

