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
  status: 'in_progress' | 'planned' | 'completed' | 'code_complete' | 'archived'
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
    status: 'archived',
    featured: false,
    description:
      'Learning project (Dec 2025): an LLM API gateway operator in Go (Kubebuilder) that routes OpenAI-compatible requests to hosted providers, with CRD-driven routes, A/B experiments, circuit breakers, retries, rate limiting and cost tracking. Never run against production traffic and not benchmarked. Building it taught me what an LLM gateway has to get right; in practice I run LiteLLM for provider routing, and for in-cluster model routing I would use the Gateway API Inference Extension rather than my own router.',
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
    status: 'code_complete',
    featured: false,
    description:
      'Prototype (Dec 2025 - Jan 2026) that joins OpenCost allocation with NVIDIA DCGM GPU metrics to attribute GPU cost, with budget alerts, anomaly detection and right-sizing on top. Code-complete with tests and CI, but its DCGM queries have not yet run against a real GPU. Next step: run it during the GPU inference lab sessions and publish measured GPU-hour cost and idle time.',
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
      { name: 'Run on a real GPU', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/ai-finops-platform',
  },
  {
    title: 'GPU Inference Platform on AWS EKS',
    status: 'in_progress',
    featured: true,
    description:
      'An LLM inference lab on AWS EKS that I am building to measure what serving costs and how it behaves on spot GPUs: Karpenter-provisioned A10G nodes, vLLM on KServe, GPU and request telemetry, and a signed, policy-enforced supply chain. It runs in short burst sessions on my own AWS account and is torn down the same day. Proven so far: an end-to-end sklearn/MLServer serving loop with metric-gated rollback (July 2026), and a clean build-and-teardown cycle on EKS 1.37 (November 2026). No GPU session has run yet, so there are no benchmark results.',
    technologies: [
      'vLLM',
      'KServe',
      'Karpenter',
      'AWS EKS',
      'Terraform',
      'Kyverno',
      'ArgoCD',
      'Prometheus',
    ],
    goals: [
      'Measure vLLM on spot A10G: bf16 vs AWQ, time to first token, throughput and $ per 1M tokens (pending)',
      'Spot GPU capacity with Karpenter, cost guards and same-day teardown',
      'GPU and inference telemetry: DCGM on the GPU pool, vLLM metrics, one Grafana board',
      'Supply chain: SHA-pinned CI, cosign-signed images, Kyverno admission policies',
      'Burst sessions: one clean cycle in Nov 2026, deploy from empty state in 33 minutes and teardown in 12.5',
    ],
    milestones: [
      { name: 'EKS + Karpenter', completed: true },
      { name: 'sklearn serving loop (July 2026)', completed: true },
      { name: 'Metric-gated rollback', completed: true },
      { name: 'Signed images + admission', completed: true },
      { name: 'Burst-session cycle', completed: true },
      { name: 'GPU telemetry', completed: false },
      { name: 'vLLM benchmark', completed: false },
      { name: 'Inference autoscaling', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
  },
]