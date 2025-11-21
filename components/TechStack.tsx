'use client'

export function TechStack() {
  const technologies = {
    "Cloud Platforms": ["AWS", "Azure", "GCP", "DigitalOcean", "Linode"],
    "Orchestration": ["Kubernetes", "Docker", "OpenShift", "EKS", "AKS", "GKE"],
    "IaC": ["Terraform", "Pulumi", "Crossplane", "CloudFormation", "ARM Templates"],
    "CI/CD": ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Flux", "Azure DevOps"],
    "Monitoring": ["Prometheus", "Grafana", "DataDog", "New Relic", "ELK Stack"],
    "Languages": ["Python", "Go", "Bash", "TypeScript", "YAML", "HCL"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "DynamoDB"],
    "Messaging": ["Kafka", "RabbitMQ", "SQS", "EventBridge", "Service Bus"]
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Technical Expertise
      </h2>
      <div className="space-y-4">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}