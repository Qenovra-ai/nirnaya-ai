import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AmbientGlow from "@/components/AmbientGlow";

export const metadata: Metadata = {
  title: "Nirnaya AI — Decision Intelligence Platform",
  description:
    "The Internet Gives Information. Nirnaya Gives Decisions. A decision-first intelligence platform that understands your objective, evaluates evidence, and recommends the best course of action.",
  keywords: [
    "Decision Intelligence",
    "Nirnaya AI",
    "AI Decision Making",
    "Answers Less Decides More",
    "Executive Intelligence",
  ],
  authors: [{ name: "Nirnaya Intelligence" }],
  openGraph: {
    title: "Nirnaya AI — Decision Intelligence Platform",
    description: "The Internet Gives Information. Nirnaya Gives Decisions.",
    type: "website",
    url: "https://nirnaya.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFAF7] text-primary relative selection:bg-accent selection:text-white">
        <SmoothScroll>
          <AmbientGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
