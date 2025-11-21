import { Navigation } from '@/components/Navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1>About Me</h1>

          <p className="lead">
            I'm Jude, a Senior DevOps Engineer originally from Nigeria 🇳🇬, now building the future
            of cloud infrastructure from Amsterdam 🇳🇱.
          </p>

          <h2>The Journey</h2>
          <p>
            Growing up in Nigeria, frequent power outages weren't just inconveniences—they were
            lessons in resilience and reliability. This early experience shaped my obsession with
            building systems that never go down. Today, I architect platforms that achieve 99.99%
            uptime, turning infrastructure from a cost center into a competitive advantage.
          </p>

          <h2>The Evolution</h2>
          <p>
            My career mirrors the industry's transformation. Starting as a SAP BASIS administrator
            at the Nigerian National Petroleum Corporation, I've evolved alongside technology—from
            managing on-premise servers to orchestrating cloud-native architectures processing
            terabytes of data across multiple continents.
          </p>

          <h2>The Impact</h2>
          <p>
            Over 10 years, I've saved companies over €2.5 million through intelligent automation
            and right-sizing. But numbers only tell part of the story. I've mentored 20+ engineers,
            watching them grow from writing their first Terraform module to architecting entire platforms.
            Their success is my greatest achievement.
          </p>

          <h2>Beyond the Terminal</h2>
          <p>
            When I'm not architecting systems or exploring AI/ML infrastructure, I write poetry for
            the love of my life—we're getting married soon! 💕 This creative outlet surprisingly enhances
            my technical work; the clarity required for a perfect verse often illuminates elegant
            solutions to complex problems.
          </p>

          <h2>What's Next</h2>
          <p>
            I'm actively seeking Engineering Manager or Staff+ positions where I can combine my
            technical depth with my passion for growing teams. My ideal role involves building
            platforms that scale, mentoring engineers who'll surpass me, and solving problems
            that matter.
          </p>
        </article>
      </main>
    </>
  )
}