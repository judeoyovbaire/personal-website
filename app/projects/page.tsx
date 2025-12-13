import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Github, ExternalLink, Clock, Rocket, CheckCircle, Server, Database, Brain, Cpu, Star, Check } from 'lucide-react'
import Link from 'next/link'
import { sideProjects, type SideProject } from '@/data/projects'
import { caseStudies, pillarLabels } from '@/data/casestudies'

const statusConfig: Record<SideProject['status'], { label: string; icon: typeof Clock; color: string }> = {
  in_progress: { label: 'In Progress', icon: Rocket, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  planned: { label: 'Planned', icon: Clock, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  completed: { label: 'Completed', icon: CheckCircle, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
}

const pillarIcons = {
  core: Server,
  data: Database,
  ml: Brain,
  ai: Cpu,
} as const

const pillarColorClasses = {
  core: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  data: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  ml: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  ai: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
} as const

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Projects & Impact
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          A showcase of professional work and personal projects exploring platform engineering, MLOps, and cloud-native technologies.
        </p>

        {/* Featured Case Studies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Case Studies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            In-depth looks at platform challenges, approaches, and outcomes.
          </p>
          <div className="space-y-6">
            {caseStudies.map((study) => {
              const PillarIcon = pillarIcons[study.pillar]
              return (
                <div
                  key={study.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
                >
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${pillarColorClasses[study.pillar]}`}>
                      <PillarIcon size={12} />
                      {pillarLabels[study.pillar]}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {study.company} • {study.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {study.title}
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Context</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {study.context.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {study.problem}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Approach</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {study.approach.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {study.approach.decisions.map((decision) => (
                        <div key={decision.area} className="text-xs bg-gray-50 dark:bg-gray-900 p-2 rounded">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{decision.area}:</span>{' '}
                          <span className="text-gray-600 dark:text-gray-400">{decision.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-4 gap-3 mb-4">
                    {study.impact.map((item) => (
                      <div key={item.metric} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg text-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.metric}</div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.implementation.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Side Projects */}
        <section id="side-projects">
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
                  className={`bg-white dark:bg-gray-800 rounded-xl border p-6 flex flex-col ${
                    project.featured
                      ? 'border-purple-300 dark:border-purple-700 ring-1 ring-purple-200 dark:ring-purple-800'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                      <StatusIcon size={12} />
                      {status.label}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        <Star size={10} />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Milestone Chips */}
                  {project.milestones && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                        Progress
                      </h4>
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
                    {project.demo && project.demo !== '#demo-coming-soon' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    ) : project.demo === '#demo-coming-soon' ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
                        <ExternalLink size={14} />
                        Demo Soon
                      </span>
                    ) : null}
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