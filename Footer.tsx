"use client";

import Link from "next/link";
import NirnayaLogo from "@/components/NirnayaLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#FAFAF7] py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Brand & Taglines */}
        <div className="space-y-2">
          <NirnayaLogo size={28} showText={true} />

          <p className="text-sm font-medium text-primary">
            Answers less. Decides more.
          </p>
          <p className="text-xs text-secondary">
            Understand. Decide. Act.
          </p>

          <div className="pt-2 text-xs text-secondary/90">
            <span className="font-semibold text-primary">Built by Qenovra AI</span>
            <span className="mx-2 text-secondary/40">•</span>
            <span className="font-medium text-accent">India ka AI. Bharat ka Stack.</span>
          </div>
        </div>

        {/* Links & Direct Contact */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-secondary">
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Terms of Use
          </Link>
          <a
            href="mailto:hello.qenovra@gmail.com"
            className="hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Contact: <span className="font-mono text-primary font-medium">hello.qenovra@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary/70">
        <p>© {currentYear} Qenovra AI. All rights reserved.</p>
        <p className="font-mono text-[11px]">Designed for high-stakes clarity.</p>
      </div>
    </footer>
  );
}
