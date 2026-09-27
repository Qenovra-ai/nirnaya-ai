"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  RefreshCw,
  Search,
  Check,
  TrendingUp,
} from "lucide-react";

interface Scenario {
  id: string;
  query: string;
  objective: string;
  evidence: string;
  evaluating: string;
  winner: string;
  confidence: number;
  why: string[];
  alternative: string;
  altNote: string;
}

const scenarios: Scenario[] = [
  {
    id: "backend",
    query: "Best backend for AI SaaS?",
    objective: "Optimize for fast time-to-market, async streaming throughput, and direct Python ML library interop.",
    evidence: "Aggregating 42 benchmark comparisons, LangChain/LlamaIndex SDK support, and async I/O benchmarks.",
    evaluating: "Weighing FastAPI vs NestJS vs Go Gin against MVP timeline and AI integration overhead.",
    winner: "FastAPI",
    confidence: 91,
    why: [
      "Fast development cycle with native Pydantic validation",
      "Native Python runtime eliminates IPC overhead for AI libraries",
      "Lower complexity with async ASGI streaming support",
    ],
    alternative: "NestJS",
    altNote: "Recommended only if the entire frontend team is TypeScript-exclusive with strict monorepo rules.",
  },
  {
    id: "hiring",
    query: "Hire Senior Generalist vs Specialist for Seed Stage?",
    objective: "Maximize adaptability under unknown product-market fit with 14-month runway constraint.",
    evidence: "Analyzing 120 early-stage founder retention histories and cross-functional task velocity.",
    evaluating: "Comparing immediate deep specialization against rapid pivot velocity and multi-stack ownership.",
    winner: "Senior Generalist",
    confidence: 88,
    why: [
      "Broad ownership across full product stack accelerates pivots",
      "Lower early management overhead with independent autonomy",
      "Avoids premature optimization of unvalidated architectural niches",
    ],
    alternative: "AI Specialist Contractor",
    altNote: "Use on a 3-month project basis for proprietary fine-tuning rather than full-time equity hire.",
  },
  {
    id: "infra",
    query: "Self-host Open LLMs vs Managed Cloud APIs for v1?",
    objective: "Balance unit economics against operational reliability and launch deadline.",
    evidence: "Evaluating GPU reservation pricing, cold start latency, uptime SLAs, and maintenance costs.",
    evaluating: "Benchmarking vLLM / RunPod overhead versus OpenAI/Anthropic enterprise API tiers.",
    winner: "Managed Cloud APIs",
    confidence: 94,
    why: [
      "Zero infrastructure maintenance allows 100% focus on user workflow",
      "State-of-the-art reasoning quality exceeds small open weights",
      "No idle GPU cluster cost while validating paying customer traction",
    ],
    alternative: "vLLM on Modal / RunPod",
    altNote: "Transition after reaching $25k MRR and stable inference request predictability.",
  },
];

export default function DecisionDemo() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  // stage 0: query ready
  // stage 1: Understanding objective...
  // stage 2: Gathering evidence...
  // stage 3: Evaluating options...
  // stage 4: Result revealed

  const current = scenarios[activeScenarioIdx];

  const runDemoCycle = () => {
    setStage(0);
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1700);
    const t3 = setTimeout(() => setStage(3), 2700);
    const t4 = setTimeout(() => setStage(4 as any), 3700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  };

  useEffect(() => {
    const cleanup = runDemoCycle();
    return cleanup;
  }, [activeScenarioIdx]);

  return (
    <section id="how-it-works-preview" className="relative py-28 px-6 sm:px-8 bg-[#F5F5F1] border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-mono uppercase text-secondary mb-4 shadow-subtle">
            [The Solution]
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight-title text-primary">
            Nirnaya Was Built For The Last Step.
          </h2>
          <p className="text-secondary text-base sm:text-lg mt-3 max-w-xl mx-auto font-normal">
            Watch how Nirnaya digests ambiguity, aggregates multi-domain evidence, and delivers an unequivocal verdict.
          </p>
        </div>

        {/* Interactive Scenario Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-mono text-secondary mr-2 uppercase tracking-wider hidden sm:inline">
            Sample Scenarios:
          </span>
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => {
                if (activeScenarioIdx !== idx) {
                  setActiveScenarioIdx(idx);
                }
              }}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeScenarioIdx === idx
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-secondary hover:text-primary border border-border hover:border-secondary/40 shadow-subtle"
              }`}
            >
              {sc.query}
            </button>
          ))}
        </div>

        {/* The Decision Machine Console */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-white border border-border shadow-card overflow-hidden">
          {/* Console Header Bar */}
          <div className="px-6 py-4 border-b border-border/80 bg-[#FAFAF7]/90 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400/40" />
              <span className="w-3 h-3 rounded-full bg-amber-400/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/40" />
              <span className="ml-3 font-mono text-xs text-secondary/80">
                nirnaya.engine // runtime v1.4
              </span>
            </div>
            <button
              onClick={() => runDemoCycle()}
              className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary font-mono transition-colors"
              title="Re-run calculation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Re-evaluate</span>
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* User Input Section */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-secondary/70">
                User Question
              </span>
              <div className="mt-2 p-4 rounded-xl bg-[#FAFAF7] border border-border flex items-center gap-3">
                <Search className="w-5 h-5 text-accent shrink-0" />
                <span className="text-lg sm:text-xl font-medium text-primary tracking-tight">
                  {current.query}
                </span>
              </div>
            </div>

            {/* Sequential Processing Pipeline */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-secondary/70">
                Sequential Deliberation
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Step 1 */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    stage >= 1
                      ? "bg-blue-50/50 border-accent/40 text-primary"
                      : "bg-[#FAFAF7] border-border text-secondary/60"
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs mb-1">
                    <span className={`w-2 h-2 rounded-full ${stage >= 1 ? "bg-accent animate-pulse" : "bg-secondary/40"}`} />
                    <span>01. Objective</span>
                  </div>
                  <p className="text-xs font-medium">Understanding objective...</p>
                </div>

                {/* Step 2 */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    stage >= 2
                      ? "bg-blue-50/50 border-accent/40 text-primary"
                      : "bg-[#FAFAF7] border-border text-secondary/60"
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs mb-1">
                    <span className={`w-2 h-2 rounded-full ${stage >= 2 ? "bg-accent animate-pulse" : "bg-secondary/40"}`} />
                    <span>02. Evidence</span>
                  </div>
                  <p className="text-xs font-medium">Gathering evidence...</p>
                </div>

                {/* Step 3 */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    stage >= 3
                      ? "bg-blue-50/50 border-accent/40 text-primary"
                      : "bg-[#FAFAF7] border-border text-secondary/60"
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs mb-1">
                    <span className={`w-2 h-2 rounded-full ${stage >= 3 ? "bg-accent animate-pulse" : "bg-secondary/40"}`} />
                    <span>03. Synthesis</span>
                  </div>
                  <p className="text-xs font-medium">Evaluating options...</p>
                </div>
              </div>
            </div>

            {/* Revealed Decision Card */}
            <AnimatePresence mode="wait">
              {stage >= 4 ? (
                <motion.div
                  key={current.id + "-result"}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/20 p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                        Recommended Action
                      </span>
                      <div className="flex items-center gap-2.5 mt-1">
                        <span className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                          ✅ {current.winner}
                        </span>
                      </div>
                    </div>

                    {/* Confidence Meter */}
                    <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-border shadow-subtle">
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-mono text-secondary block">
                          Confidence
                        </span>
                        <span className="text-xl font-bold text-emerald-600">
                          {current.confidence}%
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 flex items-center justify-center relative">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                  </div>

                  {/* Why Rationale */}
                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold mb-3">
                      Why (Core Decision Rationale)
                    </h4>
                    <ul className="space-y-2">
                      {current.why.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-primary">
                          <span className="text-emerald-600 font-bold leading-none mt-1">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternative Considered */}
                  <div className="mt-6 pt-5 border-t border-border/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <span className="font-mono text-secondary uppercase mr-2">Alternative:</span>
                      <span className="font-medium text-primary">{current.alternative}</span>
                    </div>
                    <span className="text-secondary/80 italic">{current.altNote}</span>
                  </div>
                </motion.div>
              ) : (
                <div className="h-44 rounded-2xl border border-dashed border-border bg-[#FAFAF7] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mb-3" />
                  <span className="text-xs font-mono text-secondary">
                    Nirnaya engine formulating verified path...
                  </span>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Below Demo Punchline */}
        <div className="mt-14 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xl sm:text-2xl font-serif text-primary">
            <span>No essays.</span>
            <span className="hidden sm:inline text-secondary/30">•</span>
            <span>No information overload.</span>
            <span className="hidden sm:inline text-secondary/30">•</span>
            <span className="text-accent font-semibold italic">Just clarity.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
