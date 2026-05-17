'use client'

import { MapPin, Building, Mail, ExternalLink, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { CurrentFocus } from './CurrentFocus'

export function Hero() {
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
        <motion.section
            className="mb-16"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={item} className="flex flex-col items-start gap-4 mb-4">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Open to Principal Roles</span>
                </div>
                <CurrentFocus />
            </motion.div>

            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Principal<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Platform Architect
                </span>
            </motion.h1>

            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
                I design the platform decisions behind AI-ready infrastructure: which trade-offs to make,
                which abstractions to build, and how to make GPU clusters, inference gateways, and data
                platforms work as a coherent system.
            </motion.p>

            {/* Brand Proof Points */}
            <motion.div variants={item} className="grid sm:grid-cols-2 gap-3 mb-8 max-w-3xl">
                <div className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Multi-cloud Kubernetes platforms for 50+ teams, 200+ services</span>
                </div>
                <div className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Data platforms (Databricks, OpenSearch) powering ML workloads</span>
                </div>
                <div className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Platform transformations driving 6-figure annual savings</span>
                </div>
                <div className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">AI infrastructure & MLOps: inference gateways, GPU optimization, model serving</span>
                </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Amsterdam, Netherlands 🇳🇱</span>
                </div>
                <div className="flex items-center gap-2">
                    <Building size={16} />
                    <span>myTomorrows</span>
                </div>
            </motion.div>

            <motion.div variants={item} className="flex gap-4">
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
            </motion.div>
        </motion.section>
    )
}
