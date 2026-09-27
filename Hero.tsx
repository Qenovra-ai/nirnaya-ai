"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

const exampleQuestions = [
  "Should I learn Rust or Go?",
  "Supabase or Firebase?",
  "Should I hire a specialist?",
  "Self-host LLMs or use APIs?",
  "Best backend for AI SaaS?",
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubmitted(true);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("nirnaya_waitlist_email", email);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.75 },
          colors: ["#2563EB", "#111827", "#059669"],
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 sm:px-8 pt-28 pb-16 overflow-hidden">
      {/* Editorial Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-subtle"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-medium text-secondary tracking-wide uppercase">
          Introducing Decision Intelligence
        </span>
      </motion.div>

      {/* Massive Apple-Level Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight-title text-primary leading-[1.08]">
          The Internet Gives Information.
          <br />
          <span className="text-primary font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text">
            Nirnaya Gives Decisions.
          </span>
        </h1>
      </motion.div>

      {/* Supporting Text */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto text-center mt-7"
      >
        <p className="text-lg sm:text-xl text-secondary tracking-relaxed-body font-normal leading-relaxed">
          Most AI tools help you search. Most AI tools help you read.
          <br className="hidden sm:inline" />
          <span className="text-primary font-medium"> Nirnaya helps you decide.</span>
        </p>
        <p className="text-sm sm:text-base text-secondary/80 mt-2 tracking-normal max-w-xl mx-auto leading-relaxed">
          A decision-first intelligence platform that understands your objective,
          evaluates evidence, and recommends the best course of action.
        </p>
      </motion.div>

      {/* Conversion Form */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md mx-auto mt-10"
      >
        {submitted ? (
          <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-card text-left space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
              <span>Welcome to the founding cohort.</span>
            </div>
            <p className="text-sm text-primary font-medium">
              You’re officially on the Nirnaya waitlist.
            </p>
            <p className="text-xs text-secondary leading-relaxed">
              We’ll share product updates and early access opportunities as we build.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your email"
                className="w-full h-12 px-4 rounded-xl sm:rounded-full bg-white border border-border text-primary placeholder:text-secondary/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-subtle"
                aria-label="Email address"
              />
              {error && (
                <span className="absolute -bottom-6 left-3 text-xs text-rose-600 font-medium">
                  {error}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="h-12 px-6 rounded-xl sm:rounded-full bg-primary hover:bg-black text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 shrink-0 group"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </form>
        )}

        {/* Below CTA Proof / Counter */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-secondary">
          <div className="flex -space-x-1.5 overflow-hidden">
            <span className="inline-block h-5 w-5 rounded-full ring-2 ring-[#FAFAF7] bg-stone-300 text-[9px] font-semibold flex items-center justify-center text-stone-700">AK</span>
            <span className="inline-block h-5 w-5 rounded-full ring-2 ring-[#FAFAF7] bg-slate-300 text-[9px] font-semibold flex items-center justify-center text-slate-700">SR</span>
            <span className="inline-block h-5 w-5 rounded-full ring-2 ring-[#FAFAF7] bg-zinc-300 text-[9px] font-semibold flex items-center justify-center text-zinc-700">EL</span>
          </div>
          <span className="font-medium text-primary">Join the first 500 early users.</span>
          <span className="text-secondary/50">•</span>
          <span className="text-secondary/80">No spam. Ever.</span>
        </div>
      </motion.div>

      {/* CHANGE 1: Example Questions Below Hero Waitlist Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto mt-10 text-center"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-secondary/70 block mb-3">
          Questions Nirnaya is built to answer:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {exampleQuestions.map((question, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-border text-xs text-secondary font-medium shadow-subtle hover:text-primary hover:border-secondary/40 transition-colors"
            >
              {question}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-14 flex flex-col items-center gap-2 text-secondary/60 hover:text-secondary transition-colors"
      >
        <span className="text-[11px] uppercase tracking-widest font-mono">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-secondary/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-secondary/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
