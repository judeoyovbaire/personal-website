import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { PersonJsonLd } from '@/components/JsonLd'
import { certifications } from '@/data/certifications'

export const metadata: Metadata = {
  title: 'About | Jude Oyovbaire',
  description:
    'Platform engineer from Nigeria, based in Amsterdam. I lead an infrastructure team, own a production LLM gateway in healthcare, and have 10+ years of platform engineering behind me.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Jude Oyovbaire | Platform Engineer, AI Infrastructure',
    description:
      'Leading an infrastructure team, owning a production LLM gateway in healthcare, and building a spot-GPU inference lab.',
    url: '/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Jude Oyovbaire: Platform Engineer for AI Infrastructure' }],
  },
}

const toolbox = [
  { area: 'Cloud and orchestration', items: 'AWS (EKS), GCP, Azure (AKS), Kubernetes, Karpenter, KEDA' },
  { area: 'AI infrastructure', items: 'LiteLLM, vLLM, KServe, Vertex AI, Amazon Bedrock' },
  { area: 'Infrastructure as code and GitOps', items: 'Terraform, Terragrunt, Pulumi, Crossplane, Helm, ArgoCD, GitHub Actions' },
  { area: 'Observability', items: 'Prometheus, Grafana, Loki, Tempo, OpenTelemetry, OpenSearch' },
  { area: 'Security and policy', items: 'Kyverno, cosign, IRSA and workload identity, External Secrets' },
  { area: 'Languages', items: 'Go, Python, TypeScript, Bash, HCL' },
] as const

const principles = [
  { title: 'Platform as product', body: 'Internal platforms have users. Developer experience is a requirement, not a nice-to-have.' },
  { title: 'Everything in Git', body: 'If it is not in version control, it does not exist. Changes go through review and the pipeline.' },
  { title: 'Measure, then claim', body: 'SLOs over vanity metrics, attributed cost over total spend, and measured results over design targets.' },
  { title: 'Change your mind on evidence', body: 'Write the decision down with its alternatives, and reverse it when the facts change.' },
] as const

export default function About() {
  return (
    <>
      <PersonJsonLd />
      <Navigation />
      <main id="content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          I&apos;m Jude, a platform engineer originally from Nigeria, now leading an infrastructure
          team from Amsterdam.
        </p>

        <section className="mb-10" aria-labelledby="now">
          <h2 id="now" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What I do now</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I lead the infrastructure team in a regulated healthcare environment and own our
            production LLM gateway: EU-resident model endpoints with a cross-provider fallback, and
            scoped per-service keys and budgets. Outside work, I am building a GPU inference lab on
            AWS EKS, run in short burst sessions, to measure what self-hosted LLM serving actually
            costs on spot A10Gs; the first GPU session is still to come. Earlier side projects
            (Kortex, an LLM API gateway operator, and an AI FinOps prototype) taught me where to
            build and where to adopt: today I would use the Gateway API Inference Extension for
            in-cluster model routing rather than my own router. The thread connecting all of it:
            making AI infrastructure observable, governable, and cost-transparent as a platform
            concern.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="journey">
          <h2 id="journey" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How I got here</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Growing up in Nigeria, frequent power outages weren&apos;t just inconveniences - they were
            lessons in resilience. That shaped how I build: platforms designed for failure, with
            redundancy, fast recovery, and alerts that point at causes.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I started as an SAP technical administrator at the Nigerian National Petroleum
            Corporation, then moved through on-premise infrastructure, fintech on GCP, eCommerce at
            scale on AWS, defence-intelligence data platforms on Azure, and now healthcare. Across
            two platform programmes I delivered €900K+ in annual savings (see Work), and I have
            mentored 20+ engineers from their first Terraform module to owning platforms of their own.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="toolbox">
          <h2 id="toolbox" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Toolbox</h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {toolbox.map((group) => (
              <div key={group.area}>
                <dt className="font-semibold text-gray-900 dark:text-white">{group.area}</dt>
                <dd className="text-gray-700 dark:text-gray-300">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-10" aria-labelledby="principles">
          <h2 id="principles" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How I work</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <li key={principle.title} className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{principle.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{principle.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10" aria-labelledby="certifications">
          <h2 id="certifications" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-gray-700 dark:text-gray-300">
            {certifications.map((cert) => (
              <li key={cert.name}>
                {cert.fullName} <span className="text-gray-600 dark:text-gray-400">({cert.issuer})</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="beyond">
          <h2 id="beyond" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Beyond the terminal</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I play chess, and it sharpens my technical work more than you&apos;d expect: the patience
            to study a position before committing to a move is the same discipline that finds simple
            answers to messy systems problems.
          </p>
        </section>
      </main>
    </>
  )
}
