export interface CaseStudy {
  id: string
  title: string
  company: string
  period: string
  pillar: 'core' | 'data' | 'ml' | 'ai'
  context: {
    description: string
    constraints: string[]
  }
  problem: string
  approach: {
    description: string
    decisions: {
      area: string
      detail: string
    }[]
  }
  implementation: {
    technologies: string[]
    myRole: string
  }
  impact: {
    metric: string
    value: string
  }[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'azure-databricks-platform',
    title: 'Multi-Region Azure Databricks Platform',
    company: 'Datenna B.V.',
    period: '2025 - Present',
    pillar: 'data',
    context: {
      description: 'Data-intensive analytics company processing intelligence data across multiple regions, requiring a modern data platform to handle 50TB+ daily data with strict governance requirements.',
      constraints: [
        'Multi-region deployment for data residency compliance',
        'High-volume data processing (50TB+ daily)',
        'Integration with existing Azure infrastructure',
        'Cost optimization critical for compute-heavy workloads',
      ],
    },
    problem: 'The existing data infrastructure couldn\'t scale to meet growing data volumes. Manual cluster management led to inefficient resource utilization, and lack of standardized pipelines created inconsistency across data teams. Cost visibility was poor, making optimization difficult.',
    approach: {
      description: 'Designed a multi-region Databricks platform with Infrastructure as Code at its core, implementing medallion architecture for data organization and self-service capabilities for data teams.',
      decisions: [
        {
          area: 'Infrastructure',
          detail: 'Pulumi + Crossplane for declarative infrastructure, enabling GitOps workflows and environment consistency',
        },
        {
          area: 'Data Architecture',
          detail: 'Medallion architecture (Bronze/Silver/Gold) with Delta Lake for ACID transactions and time travel',
        },
        {
          area: 'Cost Control',
          detail: 'Auto-scaling clusters with spot instances, job clusters for batch workloads, interactive clusters with auto-termination',
        },
        {
          area: 'CI/CD',
          detail: 'Azure DevOps + ArgoCD for infrastructure, Databricks Asset Bundles for notebook/job deployments',
        },
      ],
    },
    implementation: {
      technologies: ['Azure', 'Databricks', 'Pulumi', 'Crossplane', 'Delta Lake', 'Azure DevOps', 'ArgoCD', 'Python'],
      myRole: 'Led platform architecture and implementation. Designed the IaC structure, implemented auto-scaling policies, and built the CI/CD pipelines. Collaborated with data engineering teams to define self-service patterns.',
    },
    impact: [
      { metric: 'Cost Reduction', value: '35% (~€420K/year)' },
      { metric: 'Processing Speed', value: '3x faster' },
      { metric: 'Deployment Automation', value: '100%' },
      { metric: 'Time to New Environment', value: '< 30 minutes' },
    ],
  },
  {
    id: 'kubernetes-platform-modernization',
    title: 'Kubernetes Platform Modernization',
    company: 'PVH Europe',
    period: '2022 - 2024',
    pillar: 'core',
    context: {
      description: 'Global fashion retailer (Calvin Klein, Tommy Hilfiger) running 200+ microservices on legacy VM infrastructure, facing scaling challenges and slow deployment velocity.',
      constraints: [
        'Zero customer impact during migration',
        'Peak traffic during sales events (Black Friday, etc.)',
        'Diverse tech stack across teams',
        'Compliance requirements for retail/e-commerce',
      ],
    },
    problem: 'Weekly deployments were the norm, with each taking 2+ hours. Teams waited days for infrastructure provisioning. Observability was fragmented across tools, making incident response slow. The VM-based infrastructure couldn\'t efficiently handle traffic spikes.',
    approach: {
      description: 'Built a Kubernetes-native platform with self-service capabilities, comprehensive observability, and GitOps-driven deployments. Migrated services incrementally with feature flags to minimize risk.',
      decisions: [
        {
          area: 'Platform',
          detail: 'AWS EKS with managed node groups, Karpenter for intelligent autoscaling based on workload requirements',
        },
        {
          area: 'Deployment',
          detail: 'ArgoCD for GitOps, progressive rollouts with Argo Rollouts, standardized Helm charts as golden paths',
        },
        {
          area: 'Observability',
          detail: 'Prometheus + Grafana for metrics, OpenSearch for logs, distributed tracing with custom dashboards per team',
        },
        {
          area: 'Migration Strategy',
          detail: 'Strangler fig pattern - new services on K8s, gradual migration of existing services with parallel running',
        },
      ],
    },
    implementation: {
      technologies: ['AWS', 'EKS', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana', 'OpenSearch', 'Helm', 'Karpenter'],
      myRole: 'Led the platform team through the migration. Designed the target architecture, built the observability stack, created migration runbooks, and mentored teams on Kubernetes adoption. Personally migrated critical checkout services.',
    },
    impact: [
      { metric: 'Annual Savings', value: '€500K+' },
      { metric: 'Deployment Time', value: '2 hours → 15 min (85% faster)' },
      { metric: 'Deployment Frequency', value: 'Weekly → 50+/day' },
      { metric: 'Platform Uptime', value: '99.99%' },
    ],
  },
  {
    id: 'opensearch-observability',
    title: 'Enterprise OpenSearch Observability Platform',
    company: 'PVH Europe',
    period: '2023 - 2024',
    pillar: 'data',
    context: {
      description: 'Large-scale observability requirements for 200+ services generating terabytes of logs daily, with existing Elasticsearch clusters becoming increasingly expensive and difficult to manage.',
      constraints: [
        'Terabytes of logs per day from 200+ services',
        'Sub-second search latency requirements',
        'Cost optimization without sacrificing capability',
        'Seamless migration from existing Elasticsearch',
      ],
    },
    problem: 'Elasticsearch licensing costs were escalating rapidly. Cluster management was manual and error-prone. Index lifecycle management was inconsistent, leading to storage bloat. Teams lacked self-service capabilities for creating dashboards and alerts.',
    approach: {
      description: 'Migrated to OpenSearch with a focus on operational efficiency, implementing automated index lifecycle management and self-service patterns for development teams.',
      decisions: [
        {
          area: 'Platform',
          detail: 'Self-managed OpenSearch on Kubernetes with dedicated node pools for hot/warm/cold tiers',
        },
        {
          area: 'Data Management',
          detail: 'Automated ILM policies, index templates with optimized mappings, snapshot lifecycle management to S3',
        },
        {
          area: 'Self-Service',
          detail: 'Terraform modules for teams to provision their own index patterns, dashboards as code with version control',
        },
        {
          area: 'Performance',
          detail: 'Query optimization, shard sizing based on data patterns, caching strategies for common queries',
        },
      ],
    },
    implementation: {
      technologies: ['OpenSearch', 'Kubernetes', 'Terraform', 'Fluent Bit', 'S3', 'Prometheus', 'Python'],
      myRole: 'Designed and executed the migration strategy. Built the Kubernetes-based OpenSearch platform, implemented ILM automation, and created the self-service Terraform modules. Trained teams on OpenSearch best practices.',
    },
    impact: [
      { metric: 'License Cost Savings', value: '60%+' },
      { metric: 'Query Performance', value: '40% faster' },
      { metric: 'Storage Efficiency', value: '50% reduction' },
      { metric: 'Time to Dashboard', value: 'Days → Hours' },
    ],
  },
]

export const pillarColors = {
  core: 'blue',
  data: 'green',
  ml: 'purple',
  ai: 'orange',
} as const

export const pillarLabels = {
  core: 'Core Platform',
  data: 'Data Platform',
  ml: 'ML Platform',
  ai: 'AI Infrastructure',
} as const