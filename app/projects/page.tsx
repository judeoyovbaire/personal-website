import { Navigation } from '@/components/Navigation'
import { ArrowLeft, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Multi-Region Azure Databricks Platform",
      company: "Datenna B.V.",
      period: "2023 - Present",
      impact: {
        cost: "35% reduction (€420K/year)",
        performance: "3x faster processing",
        automation: "100% automated"
      },
      description: "Architected multi-region Azure Databricks platform processing 50TB+ daily data. Implemented Pulumi and Crossplane for infrastructure automation.",
      technologies: ["Azure", "Databricks", "Pulumi", "Crossplane", "Python"],
      highlights: [
        "Designed auto-scaling clusters reducing compute costs by 35%",
        "Implemented medallion architecture for data lake",
        "Built CI/CD pipelines with Azure DevOps and ArgoCD"
      ]
    },
    {
      title: "Kubernetes Platform Modernization",
      company: "PVH Europe",
      period: "2021 - 2023",
      impact: {
        cost: "€500K saved annually",
        performance: "85% faster deployments",
        reliability: "99.99% uptime"
      },
      description: "Led migration of 200+ microservices from VMs to Kubernetes, transforming deployment frequency from weekly to 50+ times daily.",
      technologies: ["Kubernetes", "EKS", "Terraform", "ArgoCD", "Prometheus"],
      highlights: [
        "Migrated 200+ services with zero customer impact",
        "Reduced deployment time from 2 hours to 15 minutes",
        "Built comprehensive observability with Prometheus stack"
      ]
    }
  ]

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