import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Cloud, Container, Code, Database, Brain, GitBranch, BarChart3, Wrench } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

const techStack = {
  primary: [
    { name: 'Kubernetes', category: 'Orchestration', icon: Container },
    { name: 'Go', category: 'Languages', icon: Code },
    { name: 'Terraform', category: 'IaC', icon: Wrench },
    { name: 'AWS', category: 'Cloud', icon: Cloud },
    { name: 'ArgoCD', category: 'GitOps', icon: GitBranch },
    { name: 'Prometheus', category: 'Observability', icon: BarChart3 },
  ],
  categories: [
    {
      name: 'Cloud & Infrastructure',
      color: 'blue',
      items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'EKS', 'AKS'],
    },
    {
      name: 'Infrastructure as Code',
      color: 'purple',
      items: ['Terraform', 'Pulumi', 'Crossplane', 'Helm'],
    },
    {
      name: 'GitOps & CI/CD',
      color: 'green',
      items: ['ArgoCD', 'GitHub Actions', 'Flux', 'Azure DevOps'],
    },
    {
      name: 'Data & ML Platforms',
      color: 'orange',
      items: ['Databricks', 'MLflow', 'KServe', 'Kafka', 'Delta Lake'],
    },
    {
      name: 'Observability',
      color: 'cyan',
      items: ['Prometheus', 'Grafana', 'OpenSearch', 'OpenTelemetry'],
    },
    {
      name: 'Languages',
      color: 'pink',
      items: ['Go', 'Python', 'TypeScript', 'Bash', 'HCL'],
    },
  ],
}

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800',
}

export const metadata: Metadata = {
  title: 'About | Jude - Senior Platform Engineer',
  description: 'Senior Platform & DevOps Engineer from Nigeria, based in Amsterdam. 10+ years building AI-ready cloud platforms with 99.99% uptime and €2.5M+ in cost savings.',
  openGraph: {
    title: 'About Jude | Platform Engineer',
    description: 'The journey from Nigeria to Amsterdam, building resilient platforms that transform infrastructure into competitive advantage.',
    url: '/about',
  },
}

export default function About() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            I&apos;m Jude, a Senior Platform &amp; DevOps Engineer originally from Nigeria 🇳🇬, now building
            AI-ready cloud platforms from Amsterdam 🇳🇱.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Growing up in Nigeria, frequent power outages weren&apos;t just inconveniences - they were
              lessons in resilience and reliability. This early experience shaped my obsession with
              building systems that never go down. Today, I architect platforms that achieve 99.99%
              uptime, turning infrastructure from a cost center into a competitive advantage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My career mirrors the industry&apos;s transformation. Starting as a SAP Technical Administrator
              at the Nigerian National Petroleum Corporation, I&apos;ve evolved alongside technology - from
              managing on-premise servers to orchestrating cloud-native architectures processing
              terabytes of data across multiple continents.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Over 10 years, I&apos;ve saved companies over €2.5 million through intelligent automation
              and right-sizing. But numbers only tell part of the story. I&apos;ve mentored 20+ engineers,
              watching them grow from writing their first Terraform module to architecting entire platforms.
              Their success is my greatest achievement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Beyond the Terminal</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I&apos;m not architecting systems or exploring AI/ML infrastructure, I play chess,
              and this surprisingly enhances my technical work;
              the clarity, observation and patience for a piece move often illuminates elegant
              solutions to complex problems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s Next</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m deepening my expertise in ML platforms and AI infrastructure - building GPU-ready
              clusters, ML pipelines, and applying SRE practices to model serving. My ideal role
              combines this technical depth with my passion for mentoring engineers and driving
              platform transformations that unlock business value.
            </p>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The tools I reach for most often when building platforms.
            </p>

            {/* Primary Tools - Weapons of Choice */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Weapons of Choice
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {techStack.primary.map((tool) => {
                  const IconComponent = tool.icon
                  return (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    >
                      <IconComponent className="text-blue-600 dark:text-blue-400 mb-2" size={28} />
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">{tool.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{tool.category}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* All Technologies by Category */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Full Toolkit
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {techStack.categories.map((category) => (
                  <div
                    key={category.name}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className={`px-2 py-1 rounded text-xs font-medium border ${colorClasses[category.color]}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Philosophy</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Platform as Product</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Internal platforms should be treated like products with real users. Developer experience matters.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitOps Over ClickOps</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Everything in Git, everything auditable. If it&apos;s not in version control, it doesn&apos;t exist.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Measure What Matters</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  SLOs, not vanity metrics. Cost attribution, not just total spend. Impact over activity.
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Automate the Toil</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  If you do it twice, automate it. Engineers should solve problems, not repeat tasks.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}