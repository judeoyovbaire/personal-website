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
    status: 'in_progress',
    featured: true,
    description:
      'Kubernetes-native inference gateway for multi-model routing, A/B testing, and fallback chains. Routes requests across LLM providers (OpenAI, Claude, local models) with cost tracking, rate limiting, and intelligent failover. 107 tests, production-ready core.',
    technologies: ['Go', 'Kubebuilder', 'Kubernetes', 'KServe', 'Prometheus', 'Grafana'],
    goals: [
      'Multi-model routing with header/path/model-based rules',
      'A/B testing with consistent hashing for experiment assignment',
      'Fallback chains across providers (GPT-4 → Claude → Mistral)',
      'Cost-per-request tracking with token usage aggregation',
      'Token bucket rate limiting (per-route and per-user)',
    ],
    milestones: [
      { name: 'CRDs', completed: true },
      { name: 'Routing', completed: true },
      { name: 'A/B Testing', completed: true },
      { name: 'Fallbacks', completed: true },
      { name: 'Metrics', completed: true },
      { name: 'Rate Limiting', completed: true },
      { name: 'Cost Tracking', completed: true },
      { name: 'Health Checks', completed: true },
      { name: 'Docs', completed: true },
      { name: 'Helm Chart', completed: false },
      { name: 'E2E Tests', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/inference-gateway',
    demo: '#demo-coming-soon',
  },
  {
    title: 'AI Infrastructure FinOps Platform',
    status: 'completed',
    featured: true,
    description:
      'Production-ready cost optimization platform for AI/ML workloads. Features GPU utilization monitoring, budget forecasting with alerts, ML-based anomaly detection, automated right-sizing recommendations, and multi-cloud billing integration. All 3 phases complete.',
    technologies: ['NVIDIA DCGM', 'OpenCost', 'Prometheus', 'Grafana', 'Python/Flask', 'Thanos', 'Alertmanager'],
    goals: [
      'Real-time GPU utilization monitoring with idle resource alerts',
      'Cost-per-inference tracking with team/project attribution',
      'Budget forecasting with trend analysis and alert system',
      'ML-based anomaly detection (Z-Score, IQR, Isolation Forest)',
      'Automated right-sizing with multi-cloud instance recommendations',
    ],
    milestones: [
      { name: 'MVP', completed: true },
      { name: 'Budget & Alerts', completed: true },
      { name: 'ML Analytics', completed: true },
      { name: 'Chargeback Reports', completed: true },
      { name: 'AWS Billing API', completed: true },
      { name: 'Right-Sizing Engine', completed: true },
    ],
    github: 'https://github.com/judeoyovbaire/ai-finops-platform',
    demo: '#demo-coming-soon',
  },
  {
    title: 'MLOps Platform on Kubernetes',
    status: 'completed',
    featured: true,
    description:
      'Production-ready MLOps platform on AWS EKS with defense-in-depth security. Enables data science teams to deploy models from experimentation to production in 15 minutes with full auditability and drift detection.',
    technologies: [
      'Argo Workflows',
      'MLflow 3.x',
      'KServe',
      'Karpenter',
      'Kyverno',
      'Tetragon',
      'Evidently AI',
      'Terraform',
      'Prometheus',
    ],
    goals: [
      'Self-service model deployment reducing time from 2-3 days to 15 minutes',
      'Model versioning with aliases and GenAI support (MLflow 3.x)',
      'Production serving with canary deployments and autoscaling (KServe)',
      'Dynamic GPU node provisioning with scale-to-zero (Karpenter 1.8.0)',
      'Defense-in-depth security: PSA, Kyverno policies, Tetragon runtime security',
      'Model drift detection with Evidently AI and automated alerting',
    ],
    milestones: [
      { name: 'Core', completed: true },
      { name: 'MLflow', completed: true },
      { name: 'KServe', completed: true },
      { name: 'CI/CD', completed: true },
      { name: 'GPU', completed: true },
      { name: 'Security', completed: true },
      { name: 'Drift Detection', completed: true },
      { name: 'Docs', completed: true },
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
    demo: '#demo-coming-soon',
  },
]