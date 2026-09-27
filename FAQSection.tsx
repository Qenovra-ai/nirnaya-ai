"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Nirnaya AI?",
    answer:
      "Nirnaya AI is a decision intelligence platform that helps people make better decisions using objective understanding, evidence, and reasoning.",
  },
  {
    question: "How is Nirnaya different from ChatGPT?",
    answer:
      "Most AI tools focus on generating answers. Nirnaya focuses on helping users reach clear decisions backed by confidence and evidence.",
  },
  {
    question: "When will Nirnaya launch?",
    answer:
      "We're currently building the first version and inviting early users to join the waitlist.",
  },
  {
    question: "Will Nirnaya be free?",
    answer:
      "Yes. Early users will receive free access during the initial beta phase.",
  },
  {
    question: "Who is building Nirnaya?",
    answer:
      "Nirnaya is being developed by Qenovra AI, a technology company focused on building AI products and advanced technologies from India.",
  },
  {
    question: "Why should I join the waitlist?",
    answer:
      "You'll get early access, product updates, and the opportunity to help shape the future of Nirnaya.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 px-6 sm:px-8 max-w-5xl mx-auto border-t border-border">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-section border border-border text-xs font-mono uppercase text-secondary mb-4">
          [Answers & Clarity]
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight-title text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary text-sm sm:text-base mt-3">
          Everything you need to know about the product, vision, and early beta.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-accent/30 shadow-card"
                  : "bg-white/70 hover:bg-white border-border shadow-subtle"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-primary tracking-tight">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-primary text-white border-primary rotate-180"
                      : "bg-section text-secondary border-border"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-secondary leading-relaxed font-normal border-t border-border/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
