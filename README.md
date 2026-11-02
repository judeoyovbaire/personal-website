# judaire.io

Source for [judaire.io](https://judaire.io), the portfolio of Jude Oyovbaire: a platform
engineer for AI infrastructure. I lead an infrastructure team in a regulated healthcare
environment, own its production LLM gateway, and am building a spot-GPU inference lab on
AWS EKS ([mlops-platform](https://github.com/judeoyovbaire/mlops-platform)).

Content rule for this repo: every claim on the site is something I can evidence. Design
targets are labelled as targets, and side projects carry their real status.

## Pages

| Route | What it shows |
|---|---|
| `/` | Positioning, three proof points, impact figures, latest writing |
| `/work` | Production case studies: context, decisions with alternatives and trade-offs, measured impact |
| `/lab` | The GPU inference lab, plus earlier learning projects with their real status |
| `/blog` | Writing, newest first; one page per post under `/blog/<slug>`; RSS at `/feed.xml` |
| `/about` | Current focus, background, toolbox, certifications |

`/projects`, `/platforms` and `/opensource` redirect permanently to `/work` or `/lab`.

## Stack

Next.js 16 (App Router, statically rendered), React 19, TypeScript, Tailwind CSS 4,
Lucide icons, deployed on Vercel with Vercel Analytics. Animations are CSS only and
respect `prefers-reduced-motion`; content is in the HTML and visible without JavaScript.

Content lives in `data/*.ts` (posts, case studies, projects, certifications). Blog posts
use a small markdown subset rendered by `app/blog/[slug]/page.tsx`; text is HTML-escaped
before formatting.

## Develop

Requires Node.js 24 (see `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

## Quality and security

- CI (`.github/workflows/ci.yaml`) runs lint, type-check, build and a production
  dependency audit on every pull request and on `main`.
- Renovate (`renovate.json`) proposes dependency updates weekly and security fixes at any
  time; Next.js and React updates are grouped.
- Open Graph and Twitter images are generated at build time (`opengraph-image.tsx`), with
  JSON-LD (Person, BlogPosting), canonical URLs and a sitemap with real dates.
- `next.config.ts` sets a Content Security Policy, `X-Frame-Options: DENY`,
  `nosniff`, a strict Referrer-Policy and a restrictive Permissions-Policy.

## Deployment

Vercel deploys every push to `main` to production and every pull request to a preview URL.

## License

Copyright Jude Oyovbaire. All rights reserved. The code is public for reference; the
written content (posts, case studies, CV) may not be reused without permission.
