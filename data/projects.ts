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
    title: 'Kortex',
    status: 'in_progress',
    featured: true,
    description:
      'Kubernetes-native AI inference gateway for multi-model routing, A/B testing, and intelligent failover. Features circuit breakers with exponential backoff, OpenTelemetry tracing, smart routing (cost/latency/context-length), and configuration hot-reload. CNCF Sandbox candidate.',
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
      'Production-ready multi-cloud MLOps platform on AWS EKS, Azure AKS, and GCP GKE with defense-in-depth security. Enables data science teams to deploy ML models and LLMs from experimentation to production in 15 minutes with full auditability, drift detection, and GitOps-driven infrastructure.',
    technologies: [
      'Argo Workflows',
      'MLflow 3.x',
      'KServe',
      'vLLM',
      'ArgoCD',
      'Karpenter',
      'KEDA',
      'Kyverno',
      'Tetragon',
      'Evidently AI',
      'DVC',
      'Terraform',
      'Prometheus',
      'Grafana',
      'cert-manager',
    ],
    goals: [
      'Self-service model deployment reducing time from 2-3 days to 15 minutes',
      'Multi-cloud deployment: AWS EKS with Karpenter, Azure AKS with KEDA, GCP GKE with Node Auto-provisioning',
      'LLM inference with vLLM (Mistral, CodeLlama, Llama-2, Mixtral) and OpenAI-compatible API',
      'GitOps-driven infrastructure and application delivery with ArgoCD',
      'Model versioning with aliases and GenAI support (MLflow 3.x)',
      'Production serving with canary deployments, traffic splitting, and scale-to-zero (KServe)',
      'Defense-in-depth security: PSA, Kyverno policies, Tetragon eBPF runtime security',
      'Cost optimization: 60% GPU savings with SPOT/Preemptible instances and intelligent autoscaling',
    ],
    milestones: [
      { name: 'Core', completed: true },
      { name: 'MLflow', completed: true },
      { name: 'KServe', completed: true },
      { name: 'CI/CD', completed: true },
      { name: 'GPU', completed: true },
      { name: 'Security', completed: true },
      { name: 'Drift Detection', completed: true },
      { name: 'Azure Support', completed: true },
      { name: 'GCP Support', completed: true },
      { name: 'LLM Inference', completed: true },
      { name: 'GitOps', completed: true },
      { name: 'Docs', completed: true },
    ],
    github: 'https://github.com/judeoyovbaire/mlops-platform',
    demo: '#demo-coming-soon',
  },
  {
    title: 'SpotTensor',
    status: 'planned',
    featured: true,
    description:
      'GPU compute price aggregator — "Trivago for ML training". Arbitrages spot pricing across AWS, RunPod, and Lambda Labs to find the cheapest GPU instances for batch training jobs.',
    technologies: ['Go', 'AWS Price List API', 'REST APIs', 'CLI', 'PostgreSQL'],
    goals: [
      'Unified pricing API across cloud GPU providers (AWS Spot, RunPod, Lambda Labs)',
      'Normalization of inconsistent GPU naming conventions to standard schema',
      'Cost-optimal provider recommendation based on GPU type, duration, and availability',
      'CLI tool for instant price comparison: spottensor price --gpu a100 --hours 4',
    ],
    milestones: [
      { name: 'AWS Spot Connector', completed: false },
      { name: 'RunPod Integration', completed: false },
      { name: 'Lambda Labs Integration', completed: false },
      { name: 'GPU Normalization Schema', completed: false },
      { name: 'Price Comparison CLI', completed: false },
      { name: 'Recommendation Engine', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/spottensor',
  },
  {
    title: 'AgentFile',
    status: 'planned',
    featured: true,
    description:
      'Docker Compose for AI Agents — Declarative spec that deploys AI agent stacks to Kubernetes. GitOps-native with Kortex integration for inference governance. Transparent abstraction: generates readable K8s manifests you own.',
    technologies: ['Go', 'Kubernetes', 'Kustomize', 'Helm', 'KServe', 'Qdrant', 'Ollama'],
    goals: [
      'Simple YAML spec (agentfile.yaml) that abstracts complex K8s deployment',
      'Pre-built stacks for common patterns: RAG, Vision, Code, Multi-Agent',
      'GitOps-native: generates ArgoCD/Flux-compatible manifests',
      'Kortex integration for automatic inference routing and cost governance',
    ],
    milestones: [
      { name: 'Schema Parser', completed: false },
      { name: 'CLI Scaffold', completed: false },
      { name: 'RAG Stack', completed: false },
      { name: 'Manifest Generator', completed: false },
      { name: 'Kind Support', completed: false },
      { name: 'Kortex Integration', completed: false },
    ],
    github: 'https://github.com/judeoyovbaire/agentfile',
  },
]