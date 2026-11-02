# Personal Portfolio Website

A portfolio website for my work as a **platform engineer for AI infrastructure**: I lead an infrastructure team, run a production LLM gateway in a regulated healthcare environment, and run a spot-GPU inference lab on AWS EKS.

**Live:** [judaire.io](https://judaire.io)

## Overview

10+ years of platform engineering across core, data and AI infrastructure, including €900K+ in annual savings across two platform programmes (detailed in the case studies).

### Key Sections

- **Home** — Professional summary, impact stats, certifications, and technical expertise
- **Platforms** — Interactive visualization of the platform stack (Core → Data → ML → AI)
- **Projects** — Featured case studies and side projects with milestone tracking
- **Open Source** — Side projects with their real status (GPU inference lab, Kortex, AI FinOps prototype)
- **Blog** — Posts on platform decisions, GPU scheduling, and LLM infrastructure

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/judeoyovbaire/personal-website.git
cd personal-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
personal-website/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── projects/page.tsx         # Projects & case studies
│   ├── platforms/page.tsx        # Platform capabilities
│   ├── about/page.tsx            # Personal background
│   ├── blog/page.tsx             # Blog index
│   ├── opensource/page.tsx       # Open source projects
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles & theme
│   ├── error.tsx                 # Error boundary
│   ├── loading.tsx               # Loading state
│   └── not-found.tsx             # 404 page
│
├── components/                   # React components
│   ├── Navigation.tsx            # Header with mobile menu
│   ├── Footer.tsx                # Site footer
│   ├── ThemeToggle.tsx           # Dark/light mode toggle
│   ├── ImpactStats.tsx           # Animated statistics
│   ├── TechStack.tsx             # Technology grid
│   └── Certifications.tsx        # Certification badges
│
├── data/                         # Static content data
│   ├── projects.ts               # Professional & side projects
│   ├── casestudies.ts            # Detailed case studies
│   ├── techstack.ts              # Technology categories
│   └── certifications.ts         # Professional certifications
│
├── public/                       # Static assets
│   └── JudeOyovbaire-Platform-CV.pdf
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Features

### User Experience
- Responsive design with mobile-first approach
- Dark/light theme toggle with system preference detection
- Smooth animations with Framer Motion
- SEO optimized with Open Graph metadata

### Technical
- Server components for optimal performance
- Client components only where interactivity is required
- TypeScript interfaces for type safety
- Path aliases (`@/`) for clean imports

### Content
- 3 detailed case studies with impact metrics
- 3 featured side projects with milestone tracking
- 11 professional certifications displayed
- Categorized tech stack (Cloud, K8s, IaC, GitOps, Observability, Data, ML/AI)

## Deployment

The site is deployed on Vercel with automatic deployments on push to `main`.

```bash
# Manual deploy (requires Vercel CLI)
vercel --prod
```

### Environment Variables

No environment variables are required for basic deployment.

## License

MIT
