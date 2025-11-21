import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jude - Senior DevOps Engineer | Engineering Manager',
  description: 'Engineering Manager and Platform Architect with 10+ years experience. €2.5M+ saved through intelligent automation. 11x certified across AWS, Azure, GCP.',
  keywords: 'DevOps, Engineering Manager, Platform Engineer, Kubernetes, AWS, Azure, GCP, Amsterdam, Infrastructure',
  authors: [{ name: 'Jude' }],
  openGraph: {
    title: 'Jude - DevOps & Platform Engineering',
    description: 'From SAP BASIS to Kubernetes: 10 Years of Cloud Evolution',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jude Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}