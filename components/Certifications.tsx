'use client'

import { certifications, certificationColors, type Certification } from '@/data/certifications'

export function Certifications() {
  const getColorClasses = (color: Certification['color']) => {
    return certificationColors[color] || certificationColors.blue
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Certifications & Expertise
      </h2>
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <span
            key={cert.name}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-help border ${getColorClasses(cert.color)}`}
            title={`${cert.fullName} - ${cert.issuer}`}
          >
            {cert.name}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        {certifications.length} professional certifications across AWS, Azure, and Kubernetes ecosystems
      </p>
    </section>
  )
}