import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Github, Star, GitFork, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: 'mlops-platform',
    description: 'End-to-end MLOps platform on Kubernetes for model training, versioning, and deployment with self-service workflows.',
    topics: ['Kubeflow', 'MLflow', 'Seldon Core', 'ArgoCD', 'Kubernetes'],
    status: 'In Progress',
    github: 'https://github.com/judeoyovbaire/mlops-platform',
    highlights: [
      'Automated ML pipeline from data ingestion to model serving',
      'Model versioning and experiment tracking',
      'A/B testing and canary deployments for ML models',
    ],
  },
  {
    name: 'llm-infrastructure',
    description: 'Infrastructure patterns for running large language models at scale with cost optimization and high availability.',
    topics: ['vLLM', 'Kubernetes', 'NVIDIA GPU Operator', 'Prometheus'],
    status: 'Planned',
    github: null,
    highlights: [
      'Multi-model serving with intelligent routing',
      'Auto-scaling based on inference queue depth',
      'GPU utilization monitoring and optimization',
    ],
  },
  {
    name: 'k8s-backup-operator',
    description: 'Custom Kubernetes operator for automated database backup workflows with scheduling and disaster recovery.',
    topics: ['Go', 'Kubebuilder', 'Kubernetes', 'PostgreSQL'],
    status: 'Planned',
    github: null,
    highlights: [
      'CRD-based configuration for backup policies',
      'Support for PostgreSQL, MySQL, and MongoDB',
      'Automated restore testing and validation',
    ],
  },
]

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

        {/* Main Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        project.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-sm">
                      <Github size={16} />
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-blue-600 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Template Repositories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Template Repositories</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Reusable infrastructure patterns and starter templates.
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
