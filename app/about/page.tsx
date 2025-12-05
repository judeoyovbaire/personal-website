import { Navigation } from '@/components/Navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <article className="max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>

          <p className="text-xl text-gray-700 dark:text-gray-200 mb-10 leading-relaxed">
            I&apos;m Jude, a Senior Platform &amp; DevOps Engineer originally from Nigeria 🇳🇬, now building
            AI-ready cloud platforms from Amsterdam 🇳🇱.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Growing up in Nigeria, frequent power outages weren&apos;t just inconveniences - they were
              lessons in resilience and reliability. This early experience shaped my obsession with
              building systems that never go down. Today, I architect platforms that achieve 99.99%
              uptime, turning infrastructure from a cost center into a competitive advantage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              My career mirrors the industry&apos;s transformation. Starting as a SAP Technical Administrator
              at the Nigerian National Petroleum Corporation, I&apos;ve evolved alongside technology - from
              managing on-premise servers to orchestrating cloud-native architectures processing
              terabytes of data across multiple continents.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Impact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Over 10 years, I&apos;ve saved companies over €2.5 million through intelligent automation
              and right-sizing. But numbers only tell part of the story. I&apos;ve mentored 20+ engineers,
              watching them grow from writing their first Terraform module to architecting entire platforms.
              Their success is my greatest achievement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Beyond the Terminal</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              When I&apos;m not architecting systems or exploring AI/ML infrastructure, I play chess,
              and this surprisingly enhances my technical work;
              the clarity, observation and patience for a piece move often illuminates elegant
              solutions to complex problems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s Next</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              I&apos;m deepening my expertise in ML platforms and AI infrastructure—building GPU-ready
              clusters, ML pipelines, and applying SRE practices to model serving. My ideal role
              combines this technical depth with my passion for mentoring engineers and driving
              platform transformations that unlock business value.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}