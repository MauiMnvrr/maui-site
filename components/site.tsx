"use client";

import { MotionConfig } from "motion/react";
import { LangProvider } from "@/lib/i18n";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Boumrank } from "@/components/boumrank";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Method } from "@/components/method";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <LangProvider>
        <Nav />
        <main>
          <Hero />
          <Boumrank />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Method />
          <Contact />
        </main>
        <Footer />
      </LangProvider>
    </MotionConfig>
  );
}
