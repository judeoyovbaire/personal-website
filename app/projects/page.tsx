import { Navigation } from '@/components/Navigation'
import { ArrowLeft, TrendingUp, Github, ExternalLink, Clock, Rocket, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { projects, sideProjects, type SideProject } from '@/data/projects'

const statusConfig: Record<SideProject['status'], { label: string; icon: typeof Clock; color: string }> = {
  in_progress: { label: 'In Progress', icon: Rocket, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  planned: { label: 'Planned', icon: Clock, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  completed: { label: 'Completed', icon: CheckCircle, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
}

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects & Impact
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          A showcase of professional work and personal projects exploring platform engineering, MLOps, and cloud-native technologies.
        </p>

        {/* Work Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Work
          </h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.company} • {project.period}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp size={16} className="text-green-600" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {key}
                        </span>
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Side Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Side Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Personal projects exploring MLOps, AI infrastructure, and advanced Kubernetes patterns.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideProjects.map((project) => {
              const status = statusConfig[project.status]
              const StatusIcon = status.icon
              return (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                      <StatusIcon size={12} />
                      {status.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                      Goals
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.goals.slice(0, 3).map((goal, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-gray-500 dark:text-gray-500 text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-600">
                        <Github size={14} />
                        Coming Soon
                      </span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}