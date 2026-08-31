"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "ABOUT", href: "#raw-about" },
    { label: "SKILLS", href: "#clean-skills" },
    { label: "PROJECTS", href: "#analyze-projects" },
    { label: "PLAYGROUND", href: "#visualize" },
    { label: "PROCESS", href: "#insight-process" },
    { label: "CONTACT", href: "#connect-contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["raw-about", "clean-skills", "analyze-projects", "visualize", "insight-process", "connect-contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group font-mono text-sm font-bold tracking-tight text-primary"
          >
            <span className="w-2.5 h-2.5 bg-primary group-hover:bg-data-green transition-colors" />
            <span>SIAM AZAD</span>
            <span className="text-muted font-normal hidden sm:inline">/ DATA ANALYST</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 transition-all duration-200 border relative ${
                    isActive
                      ? "border-primary bg-primary text-background font-semibold"
                      : "border-transparent text-secondary hover:text-primary hover:border-border hover:bg-surface"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-surface border border-border">
              <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
              <span className="text-secondary text-[11px] font-semibold">AVAILABLE FOR WORK</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-surface border border-border text-primary"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-background border-b border-border p-6 shadow-xl md:hidden font-mono"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 bg-surface border border-border text-primary font-bold text-sm hover:border-primary flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-data-green-dark">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-border flex items-center gap-2 text-xs text-secondary">
                <span className="w-2 h-2 rounded-full bg-data-green" />
                <span>AVAILABLE FOR FULL-TIME & CONTRACTS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

