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
      'Building an end-to-end MLOps platform for model training, versioning, and deployment. Enables data science teams to go from experiment to production with self-service workflows.',
    technologies: ['Kubeflow', 'MLflow', 'Seldon Core', 'ArgoCD', 'Kubernetes', 'Python'],
    goals: [
      'Automated ML pipeline from data ingestion to model serving',
      'Model versioning and experiment tracking with MLflow',
      'A/B testing and canary deployments for ML models',
      'GPU scheduling and resource optimization',
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
  },
  {
    title: 'Self-hosted LLM Infrastructure',
    status: 'planned',
    description:
      'Designing infrastructure for running large language models at scale. Focus on cost optimization, GPU scheduling, and high availability for AI workloads.',
    technologies: ['vLLM', 'Ollama', 'Kubernetes', 'NVIDIA GPU Operator', 'Prometheus', 'Go'],
    goals: [
      'Multi-model serving with intelligent routing',
      'Auto-scaling based on inference queue depth',
      'Cost monitoring and optimization for GPU workloads',
      'RAG pipeline integration with vector databases',
    ],
  },
  {
    title: 'Kubernetes Operator for Database Backups',
    status: 'planned',
    description:
      'Custom Kubernetes operator written in Go that automates database backup workflows. Handles scheduling, retention policies, and disaster recovery across multiple database types.',
    technologies: ['Go', 'Kubebuilder', 'Kubernetes', 'PostgreSQL', 'S3', 'Prometheus'],
    goals: [
      'CRD-based configuration for backup policies',
      'Support for PostgreSQL, MySQL, and MongoDB',
      'Automated restore testing and validation',
      'Alerting integration with PagerDuty/Slack',
    ],
  },
]