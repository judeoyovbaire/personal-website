import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { SideProjectCard } from '@/components/SideProjectCard'
import { caseStudies } from '@/data/casestudies'
import { sideProjects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Lab | Jude Oyovbaire',
  description:
    'Personal AI-infrastructure work: a spot-GPU LLM inference lab on AWS EKS, plus earlier learning projects with their real status.',
  alternates: { canonical: '/lab' },
  openGraph: {
    title: 'Lab | Jude Oyovbaire',
    description: 'A spot-GPU LLM inference lab on AWS EKS, and earlier learning projects.',
    url: '/lab',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Jude Oyovbaire: Platform Engineer for AI Infrastructure' }],
  },
}

export default function Lab() {
  const lab = caseStudies.filter((study) => study.kind === 'lab')
  const earlier = sideProjects.filter((project) => !project.featured)
  return (
    <>
      <Navigation />
      <main id="content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Lab</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
          What I build on my own time and my own AWS account. Every project carries its real status:
          what has run, what is code-complete, and what was a learning exercise.
        </p>

        <div className="space-y-8 mb-14">
          {lab.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        <section aria-labelledby="earlier-projects">
          <h2 id="earlier-projects" className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Earlier projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Learning projects and prototypes, kept for what they taught me.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {earlier.map((project) => (
              <SideProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
