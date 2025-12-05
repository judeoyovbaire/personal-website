import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const templateRepos = [
  {
    name: 'AI-Ready EKS Baseline',
    description: 'Terraform modules for GPU-enabled EKS clusters with observability, policies, and ML workload support.',
    status: 'Planned',
  },
  {
    name: 'Minimal ML Platform on K8s',
    description: 'Lightweight ML platform template with Argo Workflows, MLflow, and model serving.',
    status: 'Planned',
  },
  {
    name: 'Data Platform Modules',
    description: 'Reusable Terraform/Pulumi modules for Databricks workspaces, OpenSearch clusters, and GPU nodegroups.',
    status: 'Planned',
  },
]

const plannedUtilities = [
  {
    name: 'SLO Generator for ML Systems',
    description: 'Scripts for defining SLOs and error budgets for ML pipelines, inference latency, and data freshness.',
  },
  {
    name: 'GPU Cost Dashboard',
    description: 'Grafana dashboards and Prometheus rules for monitoring GPU utilization and cost attribution.',
  },
]

export default function OpenSource() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Open Source</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
          Platform patterns, templates, and tools for building AI-ready infrastructure.
          Curated, well-documented resources for platform engineers.
        </p>

        {/* Coming Soon Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Github className="text-blue-600 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Building in Public</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                I&apos;m working on open-source templates and tools for AI-ready platform engineering.
                Check out my active side projects for what&apos;s currently in development.
              </p>
              <Link
                href="/projects#side-projects"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View Side Projects <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Template Repositories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Template Repositories</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Reusable infrastructure patterns and starter templates for platform teams.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {templateRepos.map((repo) => (
              <div
                key={repo.name}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{repo.name}</h3>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs">
                    {repo.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {repo.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Utilities & Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Utilities & Tools</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Smaller tools and scripts for ML/AI platform operations.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {plannedUtilities.map((util) => (
              <div
                key={util.name}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{util.name}</h3>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs">
                    Planned
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {util.description}
                </p>
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