"use client";

import React, { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Copy, Check, Linkedin, Github, Sparkles } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Time Role",
    message: "",
  });

  const email = "siamazad.analytics@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="connect-contact" className="py-24 md:py-32 border-b border-border bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <SectionBadge number="06" label="CONNECT / START A CONVERSATION" />
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span>[STAGE 06 OF 06]</span>
            <span>•</span>
            <span className="text-data-green-dark font-bold">● ACCEPTING INQUIRIES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[0.98]">
              LET&apos;S FIND <br />
              THE NEXT <br />
              <span className="text-data-green-dark">INSIGHT.</span>
            </h2>

            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
              Have a complex dataset that needs clarity? Or looking for a Data Analyst to join your analytics, product, or BI team? Let&apos;s build something impactful together.
            </p>

            <div className="p-4 bg-background border border-border space-y-2">
              <div className="font-mono text-[10px] text-muted uppercase">DIRECT EMAIL DISPATCH</div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs sm:text-sm font-bold text-primary truncate">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-surface border border-border hover:border-primary font-mono text-xs text-primary transition-colors flex items-center gap-1.5 shrink-0"
                  data-cursor="COPY"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-data-green-dark" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="text-muted text-[10px] uppercase">CHANNELS & REPOSITORIES</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-background border border-border hover:border-primary flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span className="font-bold">LINKEDIN</span>
                  </div>
                  <span className="text-data-green-dark group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-background border border-border hover:border-primary flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-primary" />
                    <span className="font-bold">GITHUB</span>
                  </div>
                  <span className="text-data-green-dark group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="p-4 bg-background border border-border font-mono text-xs flex items-center gap-3">
              <div className="w-6 h-6 border border-primary bg-data-green/30 flex items-center justify-center font-bold text-[10px]">
                ■
              </div>
              <div className="text-secondary text-[11px]">
                <strong className="text-primary font-bold">STATE: CLARITY ACHIEVED</strong>
                <br />
                System ready for new telemetry, queries, and business challenges.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-background border border-border p-6 sm:p-8 shadow-sm">
              <div className="border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary">
                  <span className="w-2.5 h-2.5 bg-data-green" />
                  <span>START A CONVERSATION</span>
                </div>
                <p className="font-mono text-xs text-muted mt-1">
                  Send a direct analytical brief or role inquiry
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-surface border border-data-green-dark text-center space-y-4 font-mono">
                  <Sparkles className="w-8 h-8 text-data-green-dark mx-auto" />
                  <h4 className="text-lg font-bold text-primary">MESSAGE RECEIVED</h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    Thank you for reaching out! Your dispatch has been indexed. I typically respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-primary text-background text-xs font-bold mt-4"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-secondary text-[11px] uppercase mb-1">
                      YOUR NAME / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan / Growth Lead"
                      className="w-full p-3 bg-surface border border-border text-primary focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-secondary text-[11px] uppercase mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full p-3 bg-surface border border-border text-primary focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-secondary text-[11px] uppercase mb-1">
                      OPPORTUNITY TYPE
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full p-3 bg-surface border border-border text-primary focus:border-primary focus:outline-none"
                    >
                      <option value="Full-Time Role">Full-Time Data Analyst Role</option>
                      <option value="Contract / BI Project">Contract BI / Analytics Project</option>
                      <option value="Consulting">Consulting & Data Audit</option>
                      <option value="Networking">General Inquiries / Coffee Chat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-secondary text-[11px] uppercase mb-1">
                      PROJECT BRIEF / INQUIRY DETAILS *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe the business problem, dataset scope, or role specifications..."
                      className="w-full p-3 bg-surface border border-border text-primary focus:border-primary focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-background font-bold text-xs uppercase tracking-widest border border-primary hover:bg-surface hover:text-primary transition-colors flex items-center justify-center gap-2 mt-4"
                    data-cursor="SUBMIT"
                  >
                    <span>START A CONVERSATION →</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

