'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { siteLinks, CV_PATH } from './siteLinks'

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Escape closes the mobile menu and returns focus to its button; opening it
  // moves focus to the first link.
  useEffect(() => {
    if (!isMenuOpen) return
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const linkClass = (href: string) =>
    isActive(pathname, href)
      ? 'text-gray-900 dark:text-white font-medium'
      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'

  return (
    <nav aria-label="Main" className="glass sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Jude Oyovbaire
            </Link>
            <ul className="hidden md:flex space-x-6">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                    className={`transition-colors ${linkClass(link.href)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
              href={CV_PATH}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium flex items-center gap-2"
              download
              aria-label="Download CV"
            >
              <FileText size={16} aria-hidden="true" />
              <span className="hidden sm:inline">CV</span>
            </a>
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!isMenuOpen}
        className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      >
          <ul className="px-4 py-3 space-y-1">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  className={`block py-2 transition-colors ${linkClass(link.href)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  )
}
