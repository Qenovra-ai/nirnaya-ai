# Nirnaya AI — Decision Intelligence Platform

> **"The Internet Gives Information. Nirnaya Gives Decisions."**  
> *Answers less. Decides more. • Understand. Decide. Act.*  
> **Built by Qenovra AI** — *India ka AI. Bharat ka Stack.*

---

## 🌟 Overview

**Nirnaya AI** is a new category: **Decision Intelligence Platform**.

While search engines give links, chatbots generate verbose summaries, and research platforms produce 40-page reports, the final decision has always remained an unsolved cognitive burden. Nirnaya is built to solve the last step: transforming ambiguous objectives into verified, mathematically weighed, and confident verdicts.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server-Side Rendering & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke typography tokens
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) (physics-based inertial scroll)
- **Motion Orchestration**: [GSAP](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/) + [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Vector SVG brand marks
- **Celebration Feedback**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🎨 Visual Design Language

- **Light Mode Exclusivity**: Calm, editorial off-white (`#FAFAF7`) foundation with elevated cards (`#FFFFFF`) and hairline borders (`#E5E7EB`).
- **Precision Accents**: Royal Blue (`#2563EB`) and Emerald Verification (`#059669`).
- **Aesthetic Benchmark**: Apple × Linear × Stripe — generous whitespace, Apple-grade headline typography, no generic AI-glow or neon clichés.

---

## 🚀 Deployment (Netlify)

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/Qenovra-ai/nirnaya-ai.git
   git branch -M main
   git push -u origin main
   ```
2. Import the project into [Netlify](https://www.netlify.com/).
3. Build Settings are pre-configured in `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
   - **Plugin**: `@netlify/plugin-nextjs`
4. Click **Deploy Site**. Netlify will build and host your site live with global CDN edge caching.

---

## 💻 Local Development

### 1. Prerequisites
- Node.js `v18.17.0` or later
- npm or pnpm or yarn

### 2. Installation
```bash
git clone https://github.com/<your-username>/nirnaya-ai.git
cd nirnaya-ai
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Static Validation
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
nirnaya-ai/
├── netlify.toml                # Netlify deployment configuration
├── vercel.json                 # Vercel security headers and framework configuration
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # Strict TypeScript configuration
├── tailwind.config.ts          # Editorial color system and typography tokens
├── public/
│   └── landing.html            # Standalone single-file HTML mirror
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata and smooth scroll
│   │   ├── page.tsx            # Main landing page orchestrating all sections
│   │   ├── globals.css         # Global CSS, noise textures, and scroll styling
│   │   ├── icon.svg            # Nirnaya convergence mark SVG favicon
│   │   ├── robots.ts           # Dynamic robots.txt generator
│   │   ├── sitemap.ts          # Dynamic sitemap.xml generator
│   │   ├── privacy/page.tsx    # Complete 14-section Privacy Policy (Qenovra AI)
│   │   └── terms/page.tsx      # Complete 12-section Terms of Use (Qenovra AI)
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphic navigation
│   │   ├── Hero.tsx            # Hero with question pills and early-cohort form
│   │   ├── CinematicInterlude.tsx # Pinned GSAP ScrollTrigger timeline
│   │   ├── ProblemSection.tsx  # Paradox of Choice breakdown
│   │   ├── DecisionDemo.tsx    # Live interactive decision engine console
│   │   ├── HowItWorks.tsx      # 4-stage pipeline architecture
│   │   ├── TargetAudience.tsx  # Who Is Nirnaya For? (4 audience cards)
│   │   ├── VisionSection.tsx   # Qenovra AI vision and manifesto
│   │   ├── WaitlistSection.tsx # Founding cohort waitlist & India trust badge
│   │   ├── FAQSection.tsx      # Interactive FAQ accordion
│   │   ├── Footer.tsx          # Minimalist footer with legal & contact links
│   │   ├── NirnayaLogo.tsx     # Custom SVG convergence brand mark
│   │   ├── SmoothScroll.tsx    # Lenis + GSAP synchronization
│   │   └── AmbientGlow.tsx     # Mouse-reactive ambient light field
│   └── lib/
│       └── utils.ts            # Tailwind class merging utility
```

---

## 📄 License & Rights

© 2026 Qenovra AI. All rights reserved.  
Contact: [hello.qenovra@gmail.com](mailto:hello.qenovra@gmail.com)
