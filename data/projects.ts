export interface Project {
  title: string
  company: string
  period: string
  impact: {
    cost?: string
    performance?: string
    automation?: string
    reliability?: string
  }
  description: string
  technologies: string[]
  highlights: string[]
}

export interface Milestone {
  name: string
  completed: boolean
}

export interface SideProject {
  title: string
  status: 'in_progress' | 'planned' | 'completed'
  description: string
  technologies: string[]
  goals: string[]
  milestones?: Milestone[]
  featured?: boolean
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Multi-Region Azure Databricks Platform',
    company: 'Datenna B.V.',
    period: '2025 - Present',
    impact: {
      cost: '35% reduction (€420K/year)',
      performance: '3x faster processing',
      automation: '100% automated',
    },
    description:
      'Architected multi-region Azure Databricks platform processing 50TB+ daily data. Implemented Pulumi and Crossplane for infrastructure automation.',
    technologies: ['Azure', 'Kubernetes', 'Databricks', 'Pulumi', 'Crossplane', 'Python'],
    highlights: [
      'Designed auto-scaling clusters reducing compute costs by 35%',
      'Implemented medallion architecture for data lake',
      'Built CI/CD pipelines with Azure DevOps and ArgoCD',
    ],
  },
  {
    title: 'Kubernetes Platform Modernization',
    company: 'PVH Europe',
    period: '2022 - 2024',
    impact: {
      cost: '€500K saved annually',
      performance: '85% faster deployments',
      reliability: '99.99% uptime',
    },
    description:
      'Led migration of 200+ microservices from VMs to Kubernetes, transforming deployment frequency from weekly to 50+ times daily.',
    technologies: ['AWS', 'Kubernetes', 'Ansible', 'Terraform', 'ELK', 'OpenSearch', 'Python'],
    highlights: [
      'Migrated 200+ services with zero customer impact',
      'Reduced deployment time from 2 hours to 15 minutes',
      'Built comprehensive observability with Prometheus stack',
    ],
  },
]

export const sideProjects: SideProject[] = [
  {
    title: 'AI Inference Gateway',
    status: 'planned',
    featured: true,
    description:
      'Kubernetes-native inference gateway for multi-model routing, A/B testing, and fallback chains. Routes requests across LLM providers (OpenAI, Claude, local models) with cost tracking and intelligent failover.',
    technologies: ['Go', 'Kubebuilder', 'Gateway API', 'KServe', 'Prometheus', 'OpenTelemetry'],
    goals: [
      'Multi-model routing with header/prompt-based rules',
      'A/B testing with statistical significance analysis',
      'Fallback chains across providers (GPT-4 → Claude → Mistral)',
      'Cost-per-request tracking and rate limiting',
      'Semantic caching for repeated queries',
    ],
    milestones: [
      { name: 'CRDs', completed: false },
      { name: 'Routing', completed: false },
      { name: 'A/B Testing', completed: false },
      { name: 'Fallbacks', completed: false },
      { name: 'Metrics', completed: false },
      { name: 'Docs', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/inference-gateway',
    demo: '#demo-coming-soon',
  },
  {
    title: 'AI Infrastructure FinOps Platform',
    status: 'in_progress',
    featured: true,
    description:
      'Cost optimization platform for AI/ML workloads with GPU utilization monitoring, cost-per-inference tracking, and actionable recommendations. MVP complete with Phase 2 budget forecasting in development.',
    technologies: ['NVIDIA DCGM', 'OpenCost', 'Prometheus', 'Grafana', 'Python/Flask', 'Thanos'],
    goals: [
      'Real-time GPU utilization monitoring with idle resource alerts',
      'Cost-per-inference tracking with team/project attribution',
      'Budget forecasting with trend analysis and alert system',
      'Multi-cluster cost aggregation with Thanos',
      'ML-based anomaly detection and right-sizing recommendations',
    ],
    milestones: [
      { name: 'GPU Metrics', completed: true },
      { name: 'OpenCost', completed: true },
      { name: 'Dashboards', completed: true },
      { name: 'API', completed: true },
      { name: 'Alerts', completed: true },
      { name: 'Forecasting', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/ai-finops-platform',
    demo: '#demo-coming-soon',
  },
  {
    title: 'MLOps Platform on Kubernetes',
    status: 'in_progress',
    description:
      'Reference architecture for production MLOps showing how AI Inference Gateway, FinOps, and model serving integrate. Enables data science teams to deploy models from experimentation to production in 15 minutes.',
    technologies: ['Argo Workflows', 'MLflow 3.x', 'KServe', 'ArgoCD 3.x', 'Karpenter', 'Terraform', 'Prometheus'],
    goals: [
      'Self-service model deployment reducing time from 2-3 days to 15 minutes',
      'Model versioning with aliases and GenAI support (MLflow 3.x)',
      'Production serving with canary deployments and autoscaling (KServe)',
      'Dynamic GPU node provisioning with scale-to-zero (Karpenter 1.8.0)',
      'GitOps-based deployment automation with security scanning',
    ],
    milestones: [
      { name: 'Core', completed: true },
      { name: 'MLflow', completed: true },
      { name: 'KServe', completed: true },
      { name: 'CI/CD', completed: true },
      { name: 'GPU', completed: false },
      { name: 'Docs', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
    demo: '#demo-coming-soon',
  },
]