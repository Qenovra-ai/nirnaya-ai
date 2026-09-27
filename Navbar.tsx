"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import NirnayaLogo from "@/components/NirnayaLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF7]/85 backdrop-blur-md border-b border-[#E5E7EB]/80 shadow-subtle py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo & Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-primary hover:opacity-90 transition-opacity"
        >
          <NirnayaLogo size={32} showText={true} />
          <span className="hidden sm:inline-flex items-center text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E5E7EB]/60 text-secondary font-medium">
            Intelligence
          </span>
        </Link>

        {/* Center: Editorial Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("philosophy")}
            className="text-sm text-secondary hover:text-primary transition-colors tracking-relaxed-body font-medium"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-sm text-secondary hover:text-primary transition-colors tracking-relaxed-body font-medium"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("vision")}
            className="text-sm text-secondary hover:text-primary transition-colors tracking-relaxed-body font-medium"
          >
            Vision
          </button>
        </nav>

        {/* Right: Join Waitlist CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("waitlist")}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-primary text-white hover:bg-black transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Join Waitlist</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-primary hover:text-secondary focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF7] border-b border-border px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollTo("philosophy")}
              className="text-left py-2 text-base text-secondary hover:text-primary font-medium"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-left py-2 text-base text-secondary hover:text-primary font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("vision")}
              className="text-left py-2 text-base text-secondary hover:text-primary font-medium"
            >
              Vision
            </button>
            <button
              onClick={() => scrollTo("waitlist")}
              className="mt-2 w-full text-center py-2.5 px-4 rounded-full bg-primary text-white text-sm font-medium"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
