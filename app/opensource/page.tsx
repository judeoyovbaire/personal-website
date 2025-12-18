import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Github, ExternalLink, Star, Rocket, Clock, Check, GitPullRequest } from 'lucide-react'
import Link from 'next/link'
import { sideProjects } from '@/data/projects'
import type { Metadata } from 'next'

// Contributions to external projects - update this when you have PRs/issues to showcase
const contributions: Array<{
  project: string
  type: 'pr' | 'issue' | 'docs'
  title: string
  url: string
  status: 'merged' | 'open' | 'closed'
}> = [
  // Example format - uncomment and add your contributions:
  // {
  //   project: 'kserve/kserve',
  //   type: 'docs',
  //   title: 'Fix installation docs for GPU support',
  //   url: 'https://github.com/kserve/kserve/pull/123',
  //   status: 'merged',
  // },
]

export const metadata: Metadata = {
  title: 'Open Source | Jude - Senior Platform Engineer',
  description: 'Open source AI infrastructure tools: Kubernetes operators for LLM inference, GPU cost optimization with FinOps, and MLOps reference architectures.',
  openGraph: {
    title: 'Open Source Projects | Jude',
    description: 'Building AI infrastructure tools in the open, designed for CNCF contribution.',
    url: '/opensource',
  },
}

export default function OpenSource() {
  const featuredProjects = sideProjects.filter(p => p.featured)
  const otherProjects = sideProjects.filter(p => !p.featured)

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Open Source</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Building AI infrastructure tools in the open. These projects aim to solve real problems
          in the ML/AI platform space and are designed for potential CNCF contribution.
        </p>

        {/* Featured Projects - CNCF Candidates */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-purple-600" size={20} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl border border-purple-200 dark:border-purple-800 ring-1 ring-purple-100 dark:ring-purple-900 p-6"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    project.status === 'in_progress'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status === 'in_progress' ? <Rocket size={12} /> : <Clock size={12} />}
                    {project.status === 'in_progress' ? 'In Progress' : 'Planned'}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    <Star size={10} />
                    Featured
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Milestones */}
                {project.milestones && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Progress</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.milestones.map((milestone) => (
                        <span
                          key={milestone.name}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs ${
                            milestone.completed
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                          }`}
                        >
                          {milestone.completed && <Check size={10} />}
                          {milestone.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-gray-500 text-xs">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contributions Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GitPullRequest className="text-green-600" size={20} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contributions</h2>
          </div>

          {contributions.length > 0 ? (
            <div className="space-y-3">
              {contributions.map((contribution, index) => (
                <a
                  key={index}
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-colors"
                >
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    contribution.status === 'merged'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                      : contribution.status === 'open'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {contribution.status}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {contribution.project}
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white flex-1">
                    {contribution.title}
                  </span>
                  <ExternalLink size={14} className="text-gray-400" />
                </a>
              ))}
            </div>
          ) : (
            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Contributions to CNCF and other open source projects coming soon.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs">
                Currently focused on building these projects to production-ready status before contributing upstream.
              </p>
            </div>
          )}
        </section>

        {/* Reference Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reference Architecture</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Complete MLOps platform showing how all the pieces fit together.
          </p>
          <div className="grid gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded text-xs">
                        In Progress
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-colors"
                    >
                      <Github size={14} />
                      View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Profile Link */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                View All Repositories
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Check out my GitHub profile for more projects and contributions.
              </p>
            </div>
            <a
              href="https://github.com/judeoyovbaire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github size={18} />
              GitHub Profile
              <ExternalLink size={14} />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}