import { Navigation } from '@/components/Navigation'
import { ArrowLeft, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Projects & Impact
        </h1>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
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
      </main>
    </>
  )
}