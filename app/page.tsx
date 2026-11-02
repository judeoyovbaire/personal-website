import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ProofPoints } from '@/components/ProofPoints'
import { ImpactStats } from '@/components/ImpactStats'
import { LatestPosts } from '@/components/LatestPosts'
import { PersonJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Navigation />
      <main id="content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <ProofPoints />
        <ImpactStats />
        <LatestPosts />
      </main>
    </>
  )
}
