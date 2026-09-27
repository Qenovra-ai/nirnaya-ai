"use client";

import { motion } from "framer-motion";
import { Link2, MessageSquare, FileText, ArrowRight } from "lucide-react";

const problemCards = [
  {
    step: "01",
    category: "Search Engines",
    action: "Give links.",
    description: "Ten blue links, sponsored listings, SEO-optimized articles, and endless tabs. You spend 45 minutes reading contradictions.",
    outcome: "You synthesize the data.",
    icon: Link2,
  },
  {
    step: "02",
    category: "AI Chatbots",
    action: "Give answers.",
    description: "Multi-paragraph prose summaries that sound convincingly certain, yet hallucinate details and evade decisive commitment.",
    outcome: "You verify the truth.",
    icon: MessageSquare,
  },
  {
    step: "03",
    category: "Research Platforms",
    action: "Give reports.",
    description: "Comprehensive 40-page PDFs, matrices, and benchmark dashboards with zero stake in what choice you actually execute.",
    outcome: "You take the risk.",
    icon: FileText,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-section border border-border text-xs font-mono uppercase text-secondary mb-4"
        >
          [The Paradox of Choice]
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight-title text-primary leading-tight"
        >
          We Have More Information Than Ever.
          <br />
          <span className="text-secondary font-normal">
            Yet Decision Making Is Harder Than Ever.
          </span>
        </motion.h2>
      </div>

      {/* Three Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {problemCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-xl bg-section flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-secondary/60 uppercase">
                    Format {card.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-primary tracking-tight">
                  {card.category}
                </h3>
                
                <p className="text-2xl font-serif italic text-accent font-medium mt-1 mb-4">
                  {card.action}
                </p>

                <p className="text-sm text-secondary leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs text-secondary">
                <span>Bottleneck</span>
                <span className="font-medium text-rose-600/90">{card.outcome}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Below Cards Anchor Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F5F5F1] border border-border shadow-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <p className="text-base sm:text-lg font-medium text-primary tracking-tight">
            The final decision is still yours.
          </p>
          <span className="text-secondary text-sm hidden sm:inline">— until Nirnaya.</span>
        </div>
      </motion.div>
    </section>
  );
}
