import type { BlogPost } from '@/data/posts'

const SITE_URL = 'https://judaire.io'

const person = {
  '@type': 'Person',
  name: 'Jude Oyovbaire',
  url: SITE_URL,
  jobTitle: 'Platform Engineer, AI Infrastructure',
  address: { '@type': 'PostalAddress', addressLocality: 'Amsterdam', addressCountry: 'NL' },
  sameAs: ['https://github.com/judeoyovbaire', 'https://www.linkedin.com/in/judeoyovbaire/'],
}

// JSON.stringify output is embedded in a <script> tag: escape "<" so no
// string value can close the tag early.
function serialize(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize({ '@context': 'https://schema.org', ...person }) }}
    />
  )
}

export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: person,
    keywords: post.technologies?.join(', '),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}
