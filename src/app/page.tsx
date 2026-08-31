"use client";

import React, { useState } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { RawDataSection } from "@/components/sections/RawDataSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { VisualizationSection } from "@/components/sections/VisualizationSection";
import { InsightProcess } from "@/components/sections/InsightProcess";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background text-primary selection:bg-data-green selection:text-primary relative cursor-custom-area">
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navigation />
      <Hero />
      <RawDataSection />
      <SkillsSection />
      <ProjectsSection />
      <VisualizationSection />
      <InsightProcess />
      <ContactSection />
      <Footer />
    </main>
  );
}

