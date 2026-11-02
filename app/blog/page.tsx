import { Navigation } from '@/components/Navigation'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { pageMetadata } from '@/components/siteMetadata'
import { posts } from '@/data/posts'
import { formatDate } from '@/components/formatDate'

export const metadata: Metadata = pageMetadata(
  '/blog',
  'Writing | Jude Oyovbaire',
  'Posts on platform decisions, GPU scheduling and LLM infrastructure, written from work I have done.',
)

export default function Blog() {
  // Newest first; data/posts.ts order is not chronological.
  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))

  return (
    <>
      <Navigation />
      <main id="content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Writing</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
          Posts on platform decisions, GPU scheduling and LLM infrastructure, written from work I
          have done. Also available as an <a href="/feed.xml" className="text-blue-700 dark:text-blue-400 underline underline-offset-2">RSS feed</a>.
        </p>

        {/* Published Posts */}
        {publishedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="sr-only">All posts, newest first</h2>
            <div className="space-y-6">
              {publishedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                >
                  <article>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {post.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 text-sm font-medium">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
    </>
  )
}