import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 }

// Shared layout for the site-wide and per-post Open Graph images.
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #0b1220 0%, #111827 55%, #312e81 100%)',
          color: '#f9fafb',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#93c5fd', letterSpacing: 1 }}>{eyebrow}</div>
        <div style={{ display: 'flex', fontSize: title.length > 70 ? 54 : 64, fontWeight: 700, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#d1d5db' }}>
          <span>Jude Oyovbaire</span>
          <span>{footer}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  )
}
