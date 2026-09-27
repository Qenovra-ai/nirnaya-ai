"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CinematicInterlude() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const finaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const wordsContainer = wordsRef.current;
    const finaleContainer = finaleRef.current;

    if (!container || !wordsContainer || !finaleContainer) return;

    const words = wordsContainer.querySelectorAll(".interlude-word");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Initial state
      gsap.set(words, { opacity: 0.15, filter: "blur(6px)", y: 20 });
      gsap.set(finaleContainer, { opacity: 0, filter: "blur(12px)", scale: 0.96, y: 30 });

      // Stagger through each word: Search. -> Read. -> Compare. -> Repeat.
      words.forEach((word, index) => {
        tl.to(
          word,
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          index * 0.9
        );

        if (index > 0) {
          // Dim the previous word slightly to guide attention
          tl.to(
            words[index - 1],
            {
              opacity: 0.35,
              filter: "blur(1px)",
              duration: 0.6,
            },
            index * 0.9
          );
        }
      });

      // Pause briefly on all words
      tl.to({}, { duration: 0.8 });

      // Fade out words container
      tl.to(wordsContainer, {
        opacity: 0,
        y: -40,
        filter: "blur(10px)",
        duration: 1,
        ease: "power2.in",
      });

      // Reveal finale: "The internet was never designed for decisions."
      tl.to(
        finaleContainer,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "+=0.3"
      );

      // Hold finale
      tl.to({}, { duration: 1.4 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="philosophy"
      ref={containerRef}
      className="relative w-full h-screen bg-[#F5F5F1] flex items-center justify-center overflow-hidden border-y border-border select-none"
    >
      {/* Background subtle noise and coordinates watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-40 paper-pattern" />
      <div className="absolute top-8 left-8 text-[11px] font-mono text-secondary/40 uppercase tracking-widest">
        [Section 02 // Premise]
      </div>
      <div className="absolute bottom-8 right-8 text-[11px] font-mono text-secondary/40 uppercase tracking-widest hidden sm:block">
        State 01: Information Saturation
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center">
        {/* Step 1: Words Sequence */}
        <div
          ref={wordsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12"
        >
          {["Search.", "Read.", "Compare.", "Repeat."].map((word) => (
            <span
              key={word}
              className="interlude-word text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight-title text-primary"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Step 2: Finale Revelation */}
        <div
          ref={finaleRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4">
            The Fundamental Flaw
          </span>
          <p className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight-title text-primary max-w-3xl leading-[1.15]">
            The internet was never designed for decisions.
          </p>
          <p className="text-base sm:text-xl text-secondary mt-5 max-w-xl font-normal leading-relaxed">
            The internet helps you find information.<br />
            It doesn’t help you make the final choice.<br />
            <span className="text-primary font-medium">That burden still falls on you.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
