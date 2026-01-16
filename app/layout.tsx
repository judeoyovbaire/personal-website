import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

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
    // suppressHydrationWarning is required for the ThemeToggle to work correctly
    // as it modifies the HTML class on the client side
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen bg-white dark:bg-gray-900 flex flex-col selection:bg-blue-100 dark:selection:bg-blue-900`}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20"></div>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}