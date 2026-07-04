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
    period: 'Jan 2025 - Jan 2026',
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
    title: 'Kortex',
    status: 'in_progress',
    featured: false,
    description:
      'Kubernetes-native AI inference gateway built from scratch to explore the multi-model routing problem space: A/B testing, intelligent failover, circuit breakers with exponential backoff, OpenTelemetry tracing, and cost/latency/context-length-aware routing. The ecosystem has since standardized this layer (Gateway API Inference Extension, llm-d) — the learnings from building it independently now feed my upstream contributions there.',
    technologies: ['Go', 'Kubebuilder', 'Kubernetes', 'KServe', 'OpenTelemetry', 'Prometheus'],
    goals: [
      'Multi-model routing with header/path/model-based rules',
      'A/B testing with consistent hashing for experiment assignment',
      'Circuit breakers with exponential backoff and jitter',
      'Smart routing based on token count, cost, and latency',
      'OpenTelemetry (OTLP) distributed tracing',
    ],
    milestones: [
      { name: 'CRDs', completed: true },
      { name: 'Routing', completed: true },
      { name: 'A/B Testing', completed: true },
      { name: 'Fallbacks', completed: true },
      { name: 'Metrics', completed: true },
      { name: 'Rate Limiting', completed: true },
      { name: 'Cost Tracking', completed: true },
      { name: 'OpenTelemetry', completed: true },
      { name: 'Smart Routing', completed: true },
      { name: 'Circuit Breakers', completed: true },
      { name: 'E2E Tests', completed: true },
      { name: 'Helm Chart', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/kortex',
  },
  {
    title: 'AI Infrastructure FinOps Platform',
    status: 'completed',
    featured: false,
    description:
      'Reference implementation of a cost-optimization platform for AI/ML workloads: GPU utilization monitoring, budget forecasting with alerts, ML-based anomaly detection, automated right-sizing recommendations, and multi-cloud billing integration. Code-complete across all 3 phases; validation against live GPU clusters is the next milestone.',
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
  },
  {
    title: 'MLOps Platform on Kubernetes',
    status: 'in_progress',
    featured: true,
    description:
      'Multi-cloud MLOps reference platform on AWS EKS, Azure AKS, and GCP GKE with defense-in-depth security and full-stack observability. Designed around a 15-minute self-service path from experiment to production; end-to-end verification, LLM-serving benchmarks on real GPUs, and GitOps rollout are the current focus.',
    technologies: [
      'Terraform',
      'KServe',
      'MLflow',
      'Argo Workflows',
      'ArgoCD',
      'Karpenter',
      'vLLM',
      'Kyverno',
      'Prometheus',
    ],
    goals: [
      'Self-service model deployment: git push to serving in 15 minutes (design target)',
      'Multi-cloud parity: AWS EKS with Karpenter, Azure AKS with KEDA, GCP GKE with Node Auto-provisioning',
      'Production serving with KServe: canary deployments and traffic splitting in RawDeployment mode',
      'HuggingFace pretrained model pipeline with automated validation and MLflow registration',
      'Defense-in-depth security: PSA, Kyverno policies, Tetragon eBPF runtime security, namespace-level NetworkPolicies',
      'GPU cost optimization: spot/preemptible instances with Karpenter consolidation (~60% vs on-demand pricing)',
      'Full-stack observability: Prometheus, Grafana, Loki, Tempo, and OpenTelemetry instrumentation',
      'Supply-chain security: SHA-pinned CI, cosign signing, SBOM generation, SLSA provenance',
    ],
    milestones: [
      { name: 'Core', completed: true },
      { name: 'MLflow', completed: true },
      { name: 'KServe', completed: true },
      { name: 'CI/CD', completed: true },
      { name: 'GPU', completed: true },
      { name: 'Security', completed: true },
      { name: 'Azure Support', completed: true },
      { name: 'GCP Support', completed: true },
      { name: 'HuggingFace', completed: true },
      { name: 'Observability', completed: true },
      { name: 'Backup & DR', completed: true },
      { name: 'Chaos Testing', completed: true },
      { name: 'Docs', completed: true },
      { name: 'GitOps', completed: false },
      { name: 'Drift Detection', completed: false },
      { name: 'LLM Inference (GPU-verified)', completed: false },
      { name: 'E2E Verification', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
  },
]