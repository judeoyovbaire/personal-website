'use client'

import { useSyncExternalStore } from 'react'
import { Sun, Moon } from 'lucide-react'

type Theme = 'light' | 'dark'

// The theme class is set on <html> before first paint by the inline script in
// app/layout.tsx, so this component only reads it (no state set in an effect,
// no flash of the wrong theme).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains('light') ? 'light' : 'dark'

const getServerSnapshot = (): Theme | null => null

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this page.
    }
  }

  if (theme === null) {
    return (
      <button
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        aria-label="Toggle theme"
      >
        <Moon size={20} />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
