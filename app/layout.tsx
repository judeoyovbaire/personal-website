import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jude - Senior DevOps Engineer | Platform Architect',
  description: 'Senior DevOps Engineer and Platform Architect with 10+ years experience. €2.5M+ saved through intelligent automation. 10x certified across AWS, Azure, GCP.',
  keywords: 'DevOps Engineer, Platform Achitect, Kubernetes, AWS, Azure, GCP, Amsterdam, Infrastructure',
  authors: [{ name: 'Jude' }],
  openGraph: {
    title: 'Jude - DevOps & Platform Engineering',
    description: 'From SAP Technology to Cloud-Native Architecture: 10+ Years of Cloud Evolution',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}