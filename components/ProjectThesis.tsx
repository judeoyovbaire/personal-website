'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from './ui/Section'

const projects = [
  {
    name: 'Kortex',
    role: 'Inference governance',
    description: 'Multi-provider routing, failover, and per-request cost tracking as a Kubernetes operator.',
    color: 'border-blue-500/30 bg-blue-500/5',
  },
  {
    name: 'AI FinOps Platform',
    role: 'Cost visibility',
    description: 'GPU utilization monitoring, budget forecasting, and ML-based anomaly detection for AI spend.',
    color: 'border-green-500/30 bg-green-500/5',
  },
  {
    name: 'MLOps Platform',
    role: 'Full-stack reference',
    description: 'Multi-cloud model deployment with defense-in-depth security and self-service workflows.',
    color: 'border-purple-500/30 bg-purple-500/5',
  },
]

export function ProjectThesis() {
  return (
    <Section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Building an Opinionated Stack for AI-Ready Platforms
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
        My side projects are not disconnected experiments. Kortex governs inference routing
        and tracks costs per request. The AI FinOps Platform turns that cost data into
        actionable budgets and anomaly alerts. The MLOps Platform provides the full-stack
        reference for how model serving, security, and observability fit together across
        clouds. Together, they form a coherent vision for what AI-ready platform engineering
        looks like.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className={`p-4 rounded-xl border ${project.color} backdrop-blur-sm`}
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                {project.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {project.role}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
      >
        View all projects & case studies <ArrowRight size={16} />
      </Link>
    </Section>
  )
}
