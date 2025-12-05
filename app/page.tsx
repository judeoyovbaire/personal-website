import { Navigation } from '@/components/Navigation'
import { ImpactStats } from '@/components/ImpactStats'
import { Certifications } from '@/components/Certifications'
import { TechStack } from '@/components/TechStack'
import { MapPin, Building, Mail, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Open to collaboration</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Senior Platform &<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevOps Engineer
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            Building AI-ready cloud platforms across Core, Data, ML, and GPU infrastructure.
            10+ years architecting systems that save millions while achieving 99.99% reliability.
          </p>

          {/* Brand Proof Points */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-3xl">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Multi-cloud Kubernetes platforms for 50+ teams, 200+ services</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Data platforms (Databricks, OpenSearch) powering ML workloads</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Platform transformations driving 6-figure annual savings</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">ML platforms & AI infrastructure: GPU clusters, pipelines, SRE</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Amsterdam, Netherlands 🇳🇱</span>
            </div>
            <div className="flex items-center gap-2">
              <Building size={16} />
              <span>Datenna B.V. | Ratio Labs</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:judeoyovbaire@gmail.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/judeoyovbaire/"
              target="_blank"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} />
              LinkedIn Profile
            </a>
          </div>
        </section>

        {/* Impact Stats */}
        <ImpactStats />

        {/* Certifications */}
        <Certifications />

        {/* Tech Stack */}
        <TechStack />
      </main>
    </>
  )
}