"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function AmbientGlow() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Floating subtle ambient field 1 */}
      <div 
        className="absolute -top-[20%] left-[15%] h-[650px] w-[650px] rounded-full opacity-40 blur-[130px] animate-float"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(245, 245, 241, 0) 70%)"
        }}
      />

      {/* Floating subtle ambient field 2 */}
      <div 
        className="absolute top-[45%] -right-[10%] h-[700px] w-[700px] rounded-full opacity-35 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(217, 230, 255, 0.4) 0%, rgba(250, 250, 247, 0) 70%)"
        }}
      />

      {/* Subtle mouse-reactive ambient light */}
      <motion.div
        className="pointer-events-none fixed -top-[200px] -left-[200px] h-[400px] w-[400px] rounded-full opacity-45 blur-[80px]"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, rgba(255, 255, 255, 0) 75%)",
        }}
      />
    </div>
  );
}
