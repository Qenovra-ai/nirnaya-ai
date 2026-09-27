"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Copy, CheckCheck } from "lucide-react";
import confetti from "canvas-confetti";

const benefits = [
  "Priority beta access",
  "Direct access to product updates",
  "Influence the roadmap",
  "Early feature testing",
  "Founding user status",
];

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEmail = localStorage.getItem("nirnaya_waitlist_email");
      if (savedEmail) {
        setEmail(savedEmail);
        setSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid corporate or personal email address");
      return;
    }
    setError("");
    setSubmitted(true);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("nirnaya_waitlist_email", email);
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#059669", "#111827"],
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const copyReferral = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`https://nirnaya.ai?ref=${encodeURIComponent(email || "early-access")}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="waitlist" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="relative max-w-4xl mx-auto rounded-3xl bg-white border border-border shadow-card overflow-hidden">
        {/* Decorative soft glow */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, rgba(255,255,255,0) 70%)"
          }}
        />

        <div className="p-8 sm:p-14 md:p-16 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-section border border-border text-xs font-mono uppercase text-secondary mb-6">
              [Founding Cohort Access]
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight-title text-primary leading-tight">
              Build Nirnaya With Us.
            </h2>

            <div className="mt-4 space-y-3 text-base sm:text-lg text-secondary leading-relaxed font-normal">
              <p>
                We&apos;re inviting our first 500 founding users.
              </p>
              <p className="text-sm sm:text-base">
                These early members will help shape Nirnaya&apos;s decision engine, research workflows, and product direction.
              </p>
              <p className="text-sm sm:text-base text-primary/90 font-medium">
                If you&apos;re tired of information overload and want better decisions, we&apos;d love your feedback.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-primary">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Conversion Form or Success Card */}
          <div className="mt-12 pt-8 border-t border-border">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#FAFAF7] border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Welcome to the founding cohort.</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">
                    You’re officially on the Nirnaya waitlist.
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed max-w-lg">
                    We’ll share product updates and early access opportunities as we build. Registered as <span className="font-mono text-primary font-medium">{email}</span>.
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    onClick={copyReferral}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white border border-border text-xs font-medium text-primary hover:bg-section transition-colors shadow-subtle"
                  >
                    {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-secondary" />}
                    <span>{copied ? "Link Copied" : "Share Referral Link"}</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Enter your email"
                      className="w-full h-13 px-4 py-3 rounded-full bg-white border border-border text-primary placeholder:text-secondary/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-subtle"
                      aria-label="Waitlist email"
                    />
                    {error && (
                      <span className="absolute -bottom-6 left-3 text-xs text-rose-600 font-medium">
                        {error}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="h-13 px-8 py-3 rounded-full bg-primary hover:bg-black text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 shrink-0 group"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-secondary">
                  <ShieldCheck className="w-4 h-4 text-secondary/70" />
                  <span>No marketing junk. Strict data privacy. Unsubscribe anytime.</span>
                </div>
              </form>
            )}

            {/* CHANGE 13: Trust Statement */}
            <div className="mt-8 pt-6 border-t border-border/60 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-secondary">
              <div>
                <span className="font-semibold text-primary block">Built in India.</span>
                <span className="text-secondary/80">Designed for global decision makers.</span>
              </div>
              <div className="text-xs font-mono text-accent">
                Qenovra AI • Bharat ka Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
