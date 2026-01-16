'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function CurrentFocus() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300 mb-6"
        >
            <Sparkles size={14} className="text-blue-500" />
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-medium">Hacking on:</span>
            <span className="opacity-80">RAG Pipelines with LangChain</span>
        </motion.div>
    )
}
