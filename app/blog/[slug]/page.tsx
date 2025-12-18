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

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug && p.published)

  if (!post) {
    notFound()
  }

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

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline">
            {post.content.split('\n').map((line, index) => {
              // Handle code blocks
              if (line.startsWith('```')) {
                return null // We'll handle this differently
              }

              // Handle headings
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                    {line.replace('## ', '')}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
                    {line.replace('### ', '')}
                  </h3>
                )
              }

              // Handle bold text and inline code
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-gray-900 dark:text-white mt-4">
                    {line.replace(/\*\*/g, '')}
                  </p>
                )
              }

              // Handle list items
              if (line.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-700 dark:text-gray-300 ml-4">
                    {line.replace('- ', '')}
                  </li>
                )
              }

              // Handle numbered lists
              if (/^\d+\.\s/.test(line)) {
                return (
                  <li key={index} className="text-gray-700 dark:text-gray-300 ml-4 list-decimal">
                    {line.replace(/^\d+\.\s/, '')}
                  </li>
                )
              }

              // Handle empty lines
              if (line.trim() === '') {
                return <div key={index} className="h-4" />
              }

              // Handle horizontal rules
              if (line.trim() === '---') {
                return <hr key={index} className="my-8 border-gray-200 dark:border-gray-700" />
              }

              // Handle italic text (for notes/emphasis)
              if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
                return (
                  <p key={index} className="italic text-gray-600 dark:text-gray-400 mt-4">
                    {line.replace(/^\*|\*$/g, '')}
                  </p>
                )
              }

              // Regular paragraphs - handle inline formatting
              const formattedLine = line
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">$1</code>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')

              return (
                <p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
                  dangerouslySetInnerHTML={{ __html: formattedLine }}
                />
              )
            })}

            {/* Render code blocks separately */}
            {post.content.includes('```') && (
              <>
                {post.content.split('```').map((block, index) => {
                  if (index % 2 === 1) {
                    // This is a code block
                    const lines = block.split('\n')
                    const language = lines[0] || ''
                    const code = lines.slice(1).join('\n')
                    return (
                      <pre
                        key={`code-${index}`}
                        className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm border border-gray-700"
                      >
                        <code>{code}</code>
                      </pre>
                    )
                  }
                  return null
                })}
              </>
            )}
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