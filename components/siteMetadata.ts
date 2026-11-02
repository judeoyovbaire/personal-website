import type { Metadata } from 'next'

// Page-level openGraph/twitter objects replace the layout's rather than
// merging with it, so every page spreads these shared fields in.
export const SITE_NAME = 'Jude Oyovbaire'

export const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Jude Oyovbaire: Platform Engineer for AI Infrastructure',
}

export const baseOpenGraph: NonNullable<Metadata['openGraph']> = {
  siteName: SITE_NAME,
  locale: 'en_US',
  type: 'website',
}

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, title, description, url: path, images: [DEFAULT_OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_OG_IMAGE.url] },
  }
}
