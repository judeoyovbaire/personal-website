import { Check, Github } from 'lucide-react'
import type { SideProject } from '@/data/projects'
import { statusConfig } from '@/components/projectStatus'

export function SideProjectCard({ project }: { project: SideProject }) {
  const status = statusConfig[project.status]
  const StatusIcon = status.icon
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
      <span className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${status.color}`}>
        <StatusIcon size={12} aria-hidden="true" />
        {status.label}
      </span>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

      {project.milestones && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Progress</h4>
          <ul className="flex flex-wrap gap-1.5">
            {project.milestones.map((milestone) => (
              <li
                key={milestone.name}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs ${milestone.completed
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}
              >
                {milestone.completed ? <Check size={10} aria-label="done" /> : <span className="sr-only">not done:</span>}
                {milestone.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <Github size={14} aria-hidden="true" />
          Source on GitHub
        </a>
      )}
    </article>
  )
}
