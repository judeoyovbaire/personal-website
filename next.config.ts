import type { NextConfig } from 'next'

// Content Security Policy for a static, first-party site.
// - script-src needs 'unsafe-inline': Next.js inlines its bootstrap and RSC
//   payload scripts, and the pre-paint theme script lives in app/layout.tsx.
//   Nonces would force every page to render dynamically.
// - Vercel Analytics loads from /_vercel/insights on the same origin.
// - vercel.live is the preview-deployment toolbar (comments); it is harmless
//   in production and keeps previews working.
// - 'unsafe-eval' only in `next dev`, which React needs for debugging.
// - upgrade-insecure-requests only in production (it breaks http://localhost
//   in some browsers).
const isDev = process.env.NODE_ENV === 'development'

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://vercel.live`,
  "style-src 'self' 'unsafe-inline' https://vercel.live",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' https://vercel.live https://assets.vercel.com",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://vercel.live",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
