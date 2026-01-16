'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, User, Briefcase, Github, Linkedin, FileText, Menu, X, Layers, BookOpen, Code2 } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
              Jude
            </Link>
            <div className="hidden md:flex space-x-5">
              <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <Home size={16} /> Home
              </Link>
              <Link href="/platforms" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <Layers size={16} /> Platforms
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <Briefcase size={16} /> Projects
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <BookOpen size={16} /> Blog
              </Link>
              <Link href="/opensource" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <Code2 size={16} /> Open Source
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1">
                <User size={16} /> About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/judeoyovbaire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/judeoyovbaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/JudeOyovbaire-Platform-CV.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
              download
              aria-label="Download CV"
            >
              <FileText size={16} />
              <span className="hidden sm:inline">Download CV</span>
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 py-2"
            >
              <Home size={18} /> Home
            </Link>
            <Link
              href="/platforms"
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 py-2"
            >
              <Layers size={18} /> Platforms
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 py-2"
            >
              <Briefcase size={18} /> Projects
            </Link>
            <Link
              href="/blog"
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 py-2"
            >
              <BookOpen size={18} /> Blog
            </Link>
            <Link
              href="/opensource"
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 py-2"
            >
              <Code2 size={18} /> Open Source
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 py-2"
            >
              <User size={18} /> About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}