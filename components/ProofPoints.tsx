import Link from 'next/link'
import { ArrowRight, Bug, Network, Cpu } from 'lucide-react'

const proofPoints = [
  {
    icon: Network,
    title: 'Production LLM gateway in healthcare',
    body: 'I own the LLM gateway our production AI services run through: EU-resident model endpoints, a cross-provider fallback, and scoped per-service keys and budgets.',
    href: '/work#matching-api-healthcare',
    cta: 'See the work',
  },
  {
    icon: Bug,
    title: 'Debugging GPU scheduling',
    body: 'The LimitRange that requested a GPU for every pod: the root cause, why GitOps could not see it, and a two-minute repro on kind.',
    href: '/blog/kubernetes-limitrange-gpu-injection',
    cta: 'Read the post',
  },
  {
    icon: Cpu,
    title: 'GPU inference lab on EKS',
    body: 'Spot A10G nodes, vLLM on KServe and a signed supply chain, rebuilt from empty state each session. The first GPU benchmark is still to come; I publish measurements, not targets.',
    href: '/lab',
    cta: 'Visit the lab',
  },
] as const

export function ProofPoints() {
  return (
    <section aria-labelledby="proof-points" className="mb-12">
      <h2 id="proof-points" className="sr-only">
        What I am working on
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {proofPoints.map((point, index) => {
          const Icon = point.icon
          return (
            <Link
              key={point.title}
              href={point.href}
              className="fade-in-up group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              style={{ animationDelay: `${0.25 + index * 0.05}s` }}
            >
              <Icon className="text-blue-700 dark:text-blue-400 mb-3" size={24} aria-hidden="true" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{point.body}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 dark:text-blue-400">
                {point.cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
