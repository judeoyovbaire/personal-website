import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://judaire.io'),
  title: 'Jude - Senior Platform & DevOps Engineer | AI-Ready Cloud Platforms',
  description: 'Senior Platform & DevOps Engineer building AI-ready cloud platforms across Core, Data, ML, and GPU infrastructure. 10+ years architecting systems with 99.99% reliability.',
  keywords: 'Platform Engineer, DevOps Engineer, MLOps, AI Infrastructure, Kubernetes, AWS, Azure, GCP, Databricks, GPU, Amsterdam',
  authors: [{ name: 'Jude' }],
  openGraph: {
    title: 'Jude - Senior Platform & DevOps Engineer',
    description: 'Building AI-ready cloud platforms across Core, Data, ML, and GPU infrastructure.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jude Portfolio',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jude - Senior Platform & DevOps Engineer',
    description: 'Building AI-ready cloud platforms across Core, Data, ML, and GPU infrastructure.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}