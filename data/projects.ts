export interface Milestone {
  name: string
  completed: boolean
}

export interface SideProject {
  title: string
  status: 'in_progress' | 'planned' | 'completed' | 'code_complete' | 'archived'
  description: string
  technologies: string[]
  milestones?: Milestone[]
  github?: string
  demo?: string
}

export const sideProjects: SideProject[] = [
  {
    title: 'Kortex',
    status: 'archived',
    description:
      'Learning project (Dec 2025): an LLM API gateway operator in Go (Kubebuilder) that routes OpenAI-compatible requests to hosted providers, with CRD-driven routes, A/B experiments, circuit breakers, retries, rate limiting and cost tracking. Never run against production traffic and not benchmarked. Building it taught me what an LLM gateway has to get right; in practice I run LiteLLM for provider routing, and for in-cluster model routing I would use the Gateway API Inference Extension rather than my own router.',
    technologies: ['Go', 'Kubebuilder', 'Kubernetes', 'KServe', 'OpenTelemetry', 'Prometheus'],
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
    description:
      'Prototype (Dec 2025 - Jan 2026) that joins OpenCost allocation with NVIDIA DCGM GPU metrics to attribute GPU cost, with budget alerts, anomaly detection and right-sizing on top. Code-complete with tests and CI, but its DCGM queries have not yet run against a real GPU. Next step: run it during the GPU inference lab sessions and publish measured GPU-hour cost and idle time.',
    technologies: ['NVIDIA DCGM', 'OpenCost', 'Prometheus', 'Grafana', 'Python/Flask', 'Thanos', 'Alertmanager'],
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
]