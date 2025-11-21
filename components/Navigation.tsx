'use client'

import Link from 'next/link'
import { Home, User, Briefcase, Mail, Github, Linkedin, FileText } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
              Jude
            </Link>
            <div className="hidden sm:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <Home size={16} /> Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <User size={16} /> About
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <Briefcase size={16} /> Projects
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/judeoyovbaire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/judeoyovbaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/JudeOyovbaire-DevOps-CV.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
              download
            >
              <FileText size={16} />
              <span className="hidden sm:inline">Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}