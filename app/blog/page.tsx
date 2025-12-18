import { Navigation } from '@/components/Navigation'
import { ArrowLeft, FileText, Calendar } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Jude - Senior Platform Engineer',
  description: 'Technical blog on platform engineering, MLOps, and SRE practices for AI systems. Deep dives into Kubernetes, data platforms, and ML infrastructure.',
  openGraph: {
    title: 'Blog | Jude',
    description: 'Thoughts on platform engineering, MLOps, and building reliable systems at scale.',
    url: '/blog',
  },
}

// Placeholder posts - replace with actual blog data when ready
const posts = [
  {
    title: 'Coming Soon: AI-Ready Platform Design',
    description: 'Exploring architectural patterns for platforms that serve both traditional workloads and AI/ML teams.',
    category: 'Platform Design',
    date: 'Coming Soon',
    slug: '#',
  },
  {
    title: 'Coming Soon: MLOps in Real Companies',
    description: 'Lessons from implementing ML platforms in production environments, not just labs.',
    category: 'MLOps',
    date: 'Coming Soon',
    slug: '#',
  },
  {
    title: 'Coming Soon: SRE for Data and ML Systems',
    description: 'Applying SRE principles to data pipelines and ML inference workloads.',
    category: 'SRE',
    date: 'Coming Soon',
    slug: '#',
  },
]

const categories = ['All', 'Platform Design', 'MLOps', 'SRE', 'Kubernetes', 'Data Platforms']

export default function Blog() {
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

        {/* Coming Soon Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <FileText className="text-blue-600 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Content Coming Soon</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I&apos;m working on detailed posts about AI-ready platform design, MLOps implementation,
                and SRE practices for data systems. Subscribe to get notified when new content is published.
              </p>
            </div>
          </div>
        </div>

        {/* Planned Posts */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Planned Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 opacity-75"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Content Themes */}
        <section className="mt-12">
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
      </main>
    </>
  )
}
