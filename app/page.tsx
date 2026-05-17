import { Navigation } from '@/components/Navigation'
import { ImpactStats } from '@/components/ImpactStats'
import { Certifications } from '@/components/Certifications'
import { TechStack } from '@/components/TechStack'
import { Hero } from '@/components/Hero'
import { ProjectThesis } from '@/components/ProjectThesis'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        {/* Impact Stats */}
        <ImpactStats />

        {/* Project Thesis */}
        <ProjectThesis />

        {/* Tech Stack */}
        <TechStack />

        {/* Certifications */}
        <Certifications />
      </main>
    </>
  )
}
