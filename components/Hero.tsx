import { MapPin, Building, Mail, ExternalLink, FileText } from 'lucide-react'
import { CV_PATH } from '@/components/siteLinks'

export function Hero() {
  return (
    <section className="mb-12">
      <div className="fade-in-up flex items-center gap-2 text-blue-700 dark:text-blue-400 mb-4">
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" aria-hidden="true" />
        <span className="text-sm font-medium">Open to Staff roles in AI infrastructure</span>
      </div>

      <h1
        className="fade-in-up text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        style={{ animationDelay: '0.05s' }}
      >
        Platform Engineer
        <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          for AI Infrastructure
        </span>
      </h1>

      <p
        className="fade-in-up text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl"
        style={{ animationDelay: '0.1s' }}
      >
        I lead the infrastructure team in a regulated healthcare environment, where I own our
        production LLM gateway. On my own time I am building a spot-GPU inference lab on EKS to
        measure what self-hosted LLM serving actually costs.
      </p>

      <div
        className="fade-in-up flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8"
        style={{ animationDelay: '0.15s' }}
      >
        <span className="flex items-center gap-2">
          <MapPin size={16} aria-hidden="true" />
          Amsterdam, Netherlands
        </span>
        <span className="flex items-center gap-2">
          <Building size={16} aria-hidden="true" />
          myTomorrows
        </span>
      </div>

      <div className="fade-in-up flex flex-wrap gap-4" style={{ animationDelay: '0.2s' }}>
        <a
          href="mailto:judeoyovbaire@gmail.com"
          className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2"
        >
          <Mail size={18} aria-hidden="true" />
          Get in touch
        </a>
        <a
          href={CV_PATH}
          download
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <FileText size={18} aria-hidden="true" />
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/judeoyovbaire/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <ExternalLink size={18} aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
