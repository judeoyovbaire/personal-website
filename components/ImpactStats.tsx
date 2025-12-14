'use client'

import { useEffect, useState } from 'react'

export function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { label: "Cost Saved", value: "€2.5M+" },
    { label: "Platform Reliability", value: "99.99%" },
    { label: "Engineers Mentored", value: "20+" },
    { label: "Certifications", value: "11" }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl transition-all duration-700 transform hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}