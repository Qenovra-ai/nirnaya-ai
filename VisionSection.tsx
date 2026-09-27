"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const h1 = headline1Ref.current;
    const h2 = headline2Ref.current;
    const body = bodyRef.current;

    if (!container || !h1 || !h2 || !body) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.8,
        },
      });

      // Initially h1 is visible, h2 is hidden
      gsap.set(h1, { opacity: 1, y: 0, filter: "blur(0px)" });
      gsap.set(h2, { opacity: 0, y: 30, filter: "blur(10px)" });
      gsap.set(body, { opacity: 0.2, y: 20 });

      // Transform: fade out h1 and reveal h2 ("It's Better Decisions.")
      tl.to(h1, {
        opacity: 0.1,
        y: -30,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(
        h2,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        body,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F5F5F1] flex items-center justify-center border-t border-border overflow-hidden select-none"
    >
      {/* Immersive ambient gradient light field */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-40 blur-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(245, 245, 241, 0) 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-mono uppercase text-secondary mb-8 shadow-subtle">
          [Vision Manifesto]
        </div>

        {/* Dynamic Typography Transition */}
        <div className="relative min-h-[140px] sm:min-h-[180px] flex items-center justify-center">
          <h2
            ref={headline1Ref}
            className="absolute text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight-title text-primary leading-tight max-w-4xl"
          >
            The Future Isn’t Better Answers.
          </h2>
          <h2
            ref={headline2Ref}
            className="absolute text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight-title text-accent leading-tight max-w-4xl"
          >
            It’s Better Decisions.
          </h2>
        </div>

        {/* Manifesto Body Copy */}
        <div
          ref={bodyRef}
          className="max-w-2xl mx-auto mt-12 space-y-6 text-base sm:text-xl text-primary font-normal leading-relaxed tracking-relaxed-body"
        >
          <p className="text-secondary">
            Today the internet is optimized for information retrieval.
            <br />
            <span className="text-primary font-medium">Tomorrow it will be optimized for judgment.</span>
          </p>
          <p className="text-secondary text-sm sm:text-base">
            We believe intelligence should help people choose what matters.
            Nirnaya is our first step toward that future.
          </p>

          <div className="pt-8 border-t border-border/60 max-w-xl mx-auto space-y-2">
            <p className="text-sm sm:text-base text-primary font-medium">
              Nirnaya is the first product from <span className="font-semibold text-primary">Qenovra AI</span>.
            </p>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              A future-focused technology company building AI products, agents, infrastructure, and advanced technologies from India.
            </p>
            <div className="pt-3">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent font-semibold px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-subtle">
                India ka AI. Bharat ka Stack.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
