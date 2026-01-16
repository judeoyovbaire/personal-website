'use client'

import { certifications, certificationColors, type Certification } from '@/data/certifications'
import { motion } from 'framer-motion'

export function Certifications() {
  const getColorClasses = (color: Certification['color']) => {
    return certificationColors[color] || certificationColors.blue
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <motion.section
      className="my-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 variants={item} className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Certifications & Expertise
      </motion.h2>
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <motion.span
            key={cert.name}
            variants={item}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-help border ${getColorClasses(cert.color)}`}
            title={`${cert.fullName} - ${cert.issuer}`}
          >
            {cert.name}
          </motion.span>
        ))}
      </div>
      <motion.p variants={item} className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        {certifications.length} professional certifications across AWS, Azure, and Kubernetes ecosystems
      </motion.p>
    </motion.section>
  )
}