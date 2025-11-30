# Personal Website

My personal portfolio website showcasing my work as a Senior DevOps Engineer & Platform Architect.

**Live:** [judaire.io](https://judaire.io)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Responsive design with mobile navigation
- Dark/light theme toggle
- Custom favicon
- SEO optimized with metadata
- Loading, error, and 404 pages

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── about/           # About page
│   ├── projects/        # Projects page
│   └── layout.tsx       # Root layout
├── components/          # React components
├── data/                # Static data (projects, certifications, etc.)
└── public/              # Static assets
```

## Deployment

The site is deployed on Vercel with automatic deployments on push to `main`.

```bash
# Manual deploy
vercel --prod
```

## License

MIT