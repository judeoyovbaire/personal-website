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
  title: 'Jude Oyovbaire - Platform Engineer, AI Infrastructure',
  description: 'Platform engineer leading an infrastructure team: a production LLM gateway in a regulated healthcare environment, Kubernetes platforms, and a spot-GPU inference lab on EKS. 10+ years of platform engineering.',
  keywords: 'Platform Engineer, AI Infrastructure, MLOps, DevOps Engineer, Kubernetes, AWS, Azure, GCP, Databricks, GPU, Amsterdam, FinOps, vLLM, KServe, LLM serving',
  authors: [{ name: 'Jude' }],
  openGraph: {
    title: 'Jude Oyovbaire - Platform Engineer, AI Infrastructure',
    description: 'Platform engineer for AI infrastructure: a production LLM gateway in healthcare, Kubernetes platforms, and a spot-GPU inference lab on EKS.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jude Portfolio',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jude Oyovbaire - Platform Engineer, AI Infrastructure',
    description: 'Platform engineer for AI infrastructure: a production LLM gateway in healthcare, Kubernetes platforms, and a spot-GPU inference lab on EKS.',
  },
}

// Dark by default; a stored choice wins. Runs before paint to avoid a flash.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.add(t==='light'?'light':'dark')}catch(e){document.documentElement.classList.add('dark')}})()`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // The theme class is applied by THEME_SCRIPT before first paint, so the
    // server-rendered class can differ from the client's: hence
    // suppressHydrationWarning on <html> only.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
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