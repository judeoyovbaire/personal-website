import { posts } from '@/data/posts'
import { OG_SIZE, renderOgImage } from '@/components/ogImage'
import { formatDate } from '@/components/formatDate'

export const alt = 'Blog post by Jude Oyovbaire'
export const size = OG_SIZE
export const contentType = 'image/png'

export function generateStaticParams() {
  return posts.filter((post) => post.published).map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug && p.published)
  return renderOgImage({
    eyebrow: post ? post.category : 'judaire.io',
    title: post ? post.title : 'Writing',
    footer: post ? formatDate(post.date) : 'judaire.io/blog',
  })
}
