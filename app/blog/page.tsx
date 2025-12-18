import { Navigation } from '@/components/Navigation'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { posts, categories } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Blog | Jude - Senior Platform Engineer',
  description: 'Technical blog on platform engineering, MLOps, and SRE practices for AI systems. Deep dives into Kubernetes, data platforms, and ML infrastructure.',
  openGraph: {
    title: 'Blog | Jude',
    description: 'Thoughts on platform engineering, MLOps, and building reliable systems at scale.',
    url: '/blog',
  },
}

export default function Blog() {
  const publishedPosts = posts.filter((post) => post.published)
  const plannedPosts = posts.filter((post) => !post.published)

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
          Thoughts on platform engineering, MLOps, and building reliable systems at scale.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Published Posts */}
        {publishedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Latest Posts</h2>
            <div className="space-y-6">
              {publishedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                >
                  <article>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600">
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
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Content Themes */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Content Themes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Platform Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Architecture decisions, trade-offs, and patterns for AI-ready platforms
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">MLOps in Practice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-world ML platform implementation, not theoretical ideals
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SRE for Data/ML</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reliability engineering for data pipelines and ML inference
              </p>
            </div>
          </div>
        </section>

        {/* Planned Posts */}
        {plannedPosts.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Coming Soon</h2>
            <div className="space-y-4">
              {plannedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-5 opacity-75"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {post.title.replace('Coming Soon: ', '')}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}