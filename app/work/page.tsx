import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { caseStudies } from '@/data/casestudies'

export const metadata: Metadata = {
  title: 'Work | Jude Oyovbaire',
  description:
    'Production platform work: the context, the decisions with their alternatives and trade-offs, and measured impact.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | Jude Oyovbaire',
    description: 'Production platform work: decisions, trade-offs and measured impact.',
    url: '/work',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Jude Oyovbaire: Platform Engineer for AI Infrastructure' }],
  },
}

export default function Work() {
  const work = caseStudies.filter((study) => study.kind === 'work')
  return (
    <>
      <Navigation />
      <main id="content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Work</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
          Production platform work for employers. Each case study gives the context, the decisions I
          made with the alternatives I turned down, and what was measured afterwards.
        </p>
        <div className="space-y-8">
          {work.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </main>
    </>
  )
}
