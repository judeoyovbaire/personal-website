import { Server, Database, Brain, Cpu, Github } from 'lucide-react'
import { pillarLabels, type CaseStudy } from '@/data/casestudies'

const pillarIcons = { core: Server, data: Database, ml: Brain, ai: Cpu } as const

const pillarColorClasses = {
  core: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  data: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  ml: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  ai: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
} as const

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const PillarIcon = pillarIcons[study.pillar]
  return (
    <article
      id={study.id}
      className="scroll-mt-24 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${pillarColorClasses[study.pillar]}`}>
          <PillarIcon size={12} aria-hidden="true" />
          {pillarLabels[study.pillar]}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {study.company} · {study.period}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{study.title}</h2>

      <section className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Context</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{study.context.description}</p>
      </section>

      <section className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Problem</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{study.problem}</p>
      </section>

      <section className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Approach</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{study.approach.description}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {study.approach.decisions.map((decision) => (
            <div key={decision.area} className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
              <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">{decision.area}</div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">{decision.detail}</div>
              <div className="text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <span className="font-medium">Over:</span> {decision.alternative}
                <br />
                <span className="font-medium">Why:</span> {decision.tradeoff}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">My role</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{study.implementation.myRole}</p>
      </section>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {study.impact.map((item) => (
          <div key={item.metric} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg text-center">
            <dt className="text-xs text-gray-600 dark:text-gray-400 mb-1">{item.metric}</dt>
            <dd className="font-semibold text-gray-900 dark:text-white text-sm">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap items-center gap-2">
        {study.implementation.technologies.map((tech) => (
          <span key={tech} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
            {tech}
          </span>
        ))}
        {study.link && (
          <a
            href={study.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm text-blue-700 dark:text-blue-400 hover:underline"
          >
            <Github size={14} aria-hidden="true" />
            {study.link.label}
          </a>
        )}
      </div>
    </article>
  )
}
