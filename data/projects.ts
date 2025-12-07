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

export interface SideProject {
  title: string
  status: 'in_progress' | 'planned' | 'completed'
  description: string
  technologies: string[]
  goals: string[]
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
    title: 'MLOps Platform on Kubernetes',
    status: 'in_progress',
    description:
      'End-to-end MLOps platform for model training, versioning, and deployment on AWS EKS. Enables data science teams to go from experiment to production with self-service workflows, including LLM inference on GPU nodes.',
    technologies: ['Kubeflow', 'MLflow 3.x', 'KServe', 'ArgoCD', 'vLLM', 'Terraform', 'Prometheus'],
    goals: [
      'Automated ML pipelines with experiment tracking and caching',
      'Model versioning with aliases and lineage (MLflow 3.x)',
      'Production serving with canary deployments and autoscaling (KServe)',
      'LLM inference with vLLM on GPU nodes (Mistral-7B, CodeLlama)',
      'Multi-cloud ready (AWS EKS production, GCP GKE and Azure AKS planned)',
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
  },
  {
    title: 'AI Infrastructure FinOps Platform',
    status: 'planned',
    description:
      'Cost optimization platform for AI/ML workloads providing visibility into GPU utilization, inference costs per model, and actionable recommendations for reducing cloud spend on training and serving infrastructure.',
    technologies: ['Prometheus', 'Grafana', 'NVIDIA DCGM', 'OpenCost', 'Python', 'Kubernetes'],
    goals: [
      'Real-time GPU utilization monitoring with idle resource detection',
      'Cost-per-inference tracking and attribution by model and team',
      'Spot instance optimization with automated fallback strategies',
      'Chargeback dashboards for team and project cost allocation',
      'Right-sizing recommendations based on actual workload patterns',
    ],
  },
  {
    title: 'Kubernetes Model Lifecycle Operator',
    status: 'planned',
    description:
      'Custom Kubernetes operator written in Go that automates ML model lifecycle management—from training completion through deployment, A/B testing, and retirement—using declarative CRDs.',
    technologies: ['Go', 'Kubebuilder', 'Kubernetes', 'KServe', 'MLflow', 'Prometheus'],
    goals: [
      'CRD-based model promotion workflows (dev → staging → production)',
      'Automated canary rollouts with metric-based progression',
      'Model deprecation policies with graceful traffic shifting',
      'Integration with MLflow model registry for version tracking',
      'Rollback automation based on latency and error rate thresholds',
    ],
  },
]