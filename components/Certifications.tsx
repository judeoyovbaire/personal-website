'use client'

export function Certifications() {
  const certifications = [
    { name: "CKA", fullName: "Certified Kubernetes Administrator", issuer: "CNCF", color: "blue" },
    { name: "CKAD", fullName: "Certified Kubernetes Application Developer", issuer: "CNCF", color: "blue" },
    { name: "AWS SA Pro", fullName: "AWS Solutions Architect Professional", issuer: "Amazon", color: "orange" },
    { name: "Azure Expert", fullName: "Azure Solutions Architect Expert", issuer: "Microsoft", color: "blue" },
    { name: "GCP PCA", fullName: "Professional Cloud Architect", issuer: "Google", color: "red" },
    { name: "Terraform", fullName: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", color: "purple" },
    { name: "AWS DevOps Pro", fullName: "AWS DevOps Engineer Professional", issuer: "Amazon", color: "orange" },
    { name: "Azure DevOps", fullName: "Azure DevOps Engineer Expert", issuer: "Microsoft", color: "blue" },
    { name: "Docker DCA", fullName: "Docker Certified Associate", issuer: "Docker", color: "cyan" },
    { name: "Prometheus", fullName: "Prometheus Certified Associate", issuer: "Linux Foundation", color: "red" },
    { name: "GitOps", fullName: "GitOps Fundamentals", issuer: "Codefresh", color: "green" }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300",
      red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300",
      green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300"
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Certifications & Expertise
      </h2>
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <span
            key={cert.name}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-help border ${getColorClasses(cert.color)}`}
            title={`${cert.fullName} - ${cert.issuer}`}
          >
            {cert.name}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        11 professional certifications across AWS, Azure, GCP, and Kubernetes ecosystems
      </p>
    </section>
  )
}