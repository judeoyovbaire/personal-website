import Link from 'next/link'

const stats = [
  { label: 'Annual savings across two platform programmes', value: '€900K+', href: '/work' },
  { label: 'Microservices on the platform I led (PVH)', value: '200+', href: '/work#kubernetes-platform-modernization' },
  { label: 'Engineers mentored', value: '20+' },
  { label: 'Clouds run in production (AWS, Azure, GCP)', value: '3' },
] as const

export function ImpactStats() {
  return (
    <section aria-labelledby="impact" className="mb-12">
      <h2 id="impact" className="sr-only">
        Impact
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const content = (
            <>
              <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="block text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</span>
            </>
          )
          const className =
            'block text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/10 dark:bg-gray-900/20 h-full'
          return (
            <li key={stat.label}>
              {'href' in stat ? (
                <Link href={stat.href} className={`${className} hover:border-blue-400 dark:hover:border-blue-500 transition-colors`}>
                  {content}
                </Link>
              ) : (
                <div className={className}>{content}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
