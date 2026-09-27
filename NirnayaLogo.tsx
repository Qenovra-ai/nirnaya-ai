import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function NirnayaLogo({
  className = "",
  size = 28,
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* The Convergence Glyph */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="Nirnaya AI Emblem"
      >
        {/* Converging Information Strands (Left to Center-Right) */}
        <path
          d="M8 8 L28 36"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M8 15 L28 36"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M8 22 L28 36"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M8 29 L28 36"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M8 36 L28 36"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M8 43 L28 36"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Diagonal Decision Vector linking left to right */}
        <path
          d="M10 8 L32 38"
          stroke="#2563EB"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* The Monolithic Decision Pillar (Certainty) */}
        <rect
          x="32"
          y="8"
          width="7"
          height="32"
          rx="2"
          fill="#111827"
        />

        {/* Highlighting Decision Vertex */}
        <circle cx="32" cy="38" r="2.8" fill="#2563EB" />
      </svg>

      {showText && (
        <span className="font-semibold tracking-tight text-lg text-primary select-none">
          Nirnaya AI
        </span>
      )}
    </div>
  );
}
