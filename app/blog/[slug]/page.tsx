import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Calendar, Clock, Github } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/data/posts'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug && p.published)

  if (!post) {
    return {
      title: 'Post Not Found | Jude',
    }
  }

  return {
    title: `${post.title} | Jude`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }))
}

// Simple markdown parser that handles our content format
function parseMarkdown(content: string): React.ReactNode[] {
  const elements: React.ReactNode[] = []
  const lines = content.split('\n')
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Handle code blocks
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre
          key={key++}
          className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm border border-gray-700"
        >
          <code className="font-mono">{codeLines.join('\n')}</code>
        </pre>
      )
      i++
      continue
    }

    // Handle headings
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
          {line.slice(4)}
        </h3>
      )
      i++
      continue
    }

    // Handle horizontal rules
    if (line.trim() === '---') {
      elements.push(
        <hr key={key++} className="my-8 border-gray-200 dark:border-gray-700" />
      )
      i++
      continue
    }

    // Handle unordered lists
    if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
          {listItems.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      )
      continue
    }

    // Handle numbered lists
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
          {listItems.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      )
      continue
    }

    // Handle empty lines
    if (line.trim() === '') {
      i++
      continue
    }

    // Handle italic text (standalone lines starting and ending with single *)
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      elements.push(
        <p key={key++} className="italic text-gray-600 dark:text-gray-400 my-4">
          {line.slice(1, -1)}
        </p>
      )
      i++
      continue
    }

    // Regular paragraphs
    elements.push(
      <p
        key={key++}
        className="text-gray-700 dark:text-gray-300 leading-relaxed my-4"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    )
    i++
  }

  return elements
}

// Format inline elements (bold, code, links)
function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug && p.published)

  if (!post) {
    notFound()
  }

  const contentElements = parseMarkdown(post.content.trim())

  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              {post.description}
            </p>

            {post.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose-content">
            {contentElements}
          </div>
        </article>

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Written by Jude
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Senior Platform & DevOps Engineer
              </p>
            </div>
            <a
              href="https://github.com/judeoyovbaire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={16} />
              Follow on GitHub
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
