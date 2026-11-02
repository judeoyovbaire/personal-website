import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { posts } from '@/data/posts'
import { formatDate } from '@/components/formatDate'

export function LatestPosts() {
  const latest = posts
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
    .slice(0, 3)
  return (
    <section aria-labelledby="latest-writing" className="mb-12">
      <div className="flex items-baseline justify-between mb-4">
        <h2 id="latest-writing" className="text-2xl font-bold text-gray-900 dark:text-white">
          Latest writing
        </h2>
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline">
          All posts <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800">
        {latest.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block py-4">
              <time dateTime={post.date} className="text-sm text-gray-600 dark:text-gray-400">
                {formatDate(post.date)}
              </time>
              <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400">
                {post.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
