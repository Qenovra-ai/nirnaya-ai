"use client";

import { motion } from "framer-motion";
import { Compass, Database, CheckSquare, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    name: "Understand",
    subhead: "Identify the real objective.",
    description:
      "Nirnaya identifies what you're actually trying to achieve before searching for answers.",
    icon: Compass,
    details: ["Goal isolation", "Constraint mapping", "Context framing"],
  },
  {
    step: "02",
    name: "Research",
    subhead: "Collect evidence from multiple sources.",
    description:
      "Nirnaya gathers evidence from multiple sources and removes noise.",
    icon: Database,
    details: ["Empirical data", "Signal-to-noise filter", "Source verification"],
  },
  {
    step: "03",
    name: "Decide",
    subhead: "Evaluate options against the objective.",
    description:
      "Options are evaluated against your objective to find the best path forward.",
    icon: CheckSquare,
    details: ["Objective scoring", "Trade-off analysis", "Optimal pathing"],
  },
  {
    step: "04",
    name: "Explain",
    subhead: "Show confidence, reasoning, and risks.",
    description:
      "Every recommendation includes confidence, reasoning, and risks.",
    icon: Sparkles,
    details: ["Confidence score", "Actionable why", "Risk mitigation"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-section border border-border text-xs font-mono uppercase text-secondary mb-4"
        >
          [The Architecture]
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight-title text-primary"
        >
          Understand Before Answering.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-secondary mt-4 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Traditional AI treats every query like an encyclopedia question. Nirnaya treats every query like a mission-critical decision.
        </motion.p>
      </div>

      {/* Four Column Progressive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-1 rounded bg-blue-50 border border-blue-100">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-section flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary tracking-tight">
                  {item.name}
                </h3>

                <p className="text-sm font-medium text-primary/80 mt-1 mb-3">
                  {item.subhead}
                </p>

                <p className="text-xs text-secondary leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 space-y-1.5">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-secondary">
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
