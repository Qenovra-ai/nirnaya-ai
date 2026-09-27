"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, BrainCircuit, Activity } from "lucide-react";

const audiences = [
  {
    role: "Founders",
    description: "Make faster product, hiring, and strategic decisions.",
    icon: Rocket,
    tag: "Strategy & Execution",
  },
  {
    role: "Developers",
    description: "Choose technologies, tools, and architectures with confidence.",
    icon: Code2,
    tag: "Architecture & Stack",
  },
  {
    role: "Researchers",
    description: "Turn information into conclusions instead of reports.",
    icon: BrainCircuit,
    tag: "Synthesis & Judgment",
  },
  {
    role: "Operators",
    description: "Reduce decision fatigue and move faster.",
    icon: Activity,
    tag: "Velocity & Focus",
  },
];

export default function TargetAudience() {
  return (
    <section className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-section border border-border text-xs font-mono uppercase text-secondary mb-4"
        >
          [Built For You]
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight-title text-primary"
        >
          Who Is Nirnaya For?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-secondary mt-3 font-normal"
        >
          Built for people who make important decisions.
        </motion.p>
      </div>

      {/* 4 Premium Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-section flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-secondary/60 uppercase">
                    Role {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary tracking-tight">
                  {item.role}
                </h3>

                <p className="text-sm text-secondary leading-relaxed mt-2.5 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-secondary">
                <span>Focus</span>
                <span className="font-medium text-accent">{item.tag}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
