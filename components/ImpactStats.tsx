'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ImpactStats() {
  const stats = [
    { label: "Annual Savings Delivered", value: "€900K+", href: "/projects" },
    { label: "Platform Reliability", value: "99.99%" },
    { label: "Engineers Mentored", value: "20+" },
    { label: "Clouds in Production", value: "3" }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {stats.map((stat) => {
        const card = (
          <motion.div
            key={stat.label}
            variants={item}
            className="text-center p-6 rounded-xl transition-all duration-700 transform hover:scale-105 border border-gray-200 dark:border-gray-800 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md h-full"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {stat.label}
            </div>
          </motion.div>
        )
        return stat.href ? (
          <Link key={stat.label} href={stat.href} aria-label={`${stat.label} - see case studies`}>
            {card}
          </Link>
        ) : (
          card
        )
      })}
    </motion.div>
  )
}