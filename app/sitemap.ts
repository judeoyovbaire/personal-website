import type { MetadataRoute } from 'next'
import { posts } from '@/data/posts'

const baseUrl = 'https://judaire.io'

// Static pages carry the date their content last changed meaningfully, not
// the build time, so crawlers are not told everything changed on every deploy.
const PAGES_UPDATED = '2026-11-02'

export default function sitemap(): MetadataRoute.Sitemap {
  const published = posts.filter((post) => post.published)
  const latestPost = published.map((post) => post.date).sort().at(-1) ?? PAGES_UPDATED

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/work`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/lab`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: latestPost, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const blogPosts: MetadataRoute.Sitemap = published.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [...pages, ...blogPosts]
}
