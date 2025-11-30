import { Navigation } from '@/components/Navigation'
import { ImpactStats } from '@/components/ImpactStats'
import { Certifications } from '@/components/Certifications'
import { TechStack } from '@/components/TechStack'
import { MapPin, Building, Sparkles, Mail, ExternalLink } from 'lucide-react'

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
            Senior DevOps Engineer &<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Platform Architect
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            I transform infrastructure into competitive advantage. 10+ years architecting
            cloud platforms that save millions while achieving 99.99% reliability.
          </p>

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

        {/* Current Focus */}
        <section className="my-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-600" size={20} />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Current Focus</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Leading</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enabling 50+ teams through platform engineering, mentoring engineers, and driving DevOps transformations
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Building</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Edge computing orchestrator SaaS for simplified distributed systems
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Diving deep into LLMOps and vector databases for AI infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <Certifications />

        {/* Tech Stack */}
        <TechStack />
      </main>
    </>
  )
}