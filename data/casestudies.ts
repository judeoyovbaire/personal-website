export interface CaseStudy {
  id: string
  title: string
  company: string
  period: string
  pillar: 'core' | 'data' | 'ml' | 'ai'
  // 'work' = production work for an employer (/work); 'lab' = personal project (/lab)
  kind: 'work' | 'lab'
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
      alternative: string
      tradeoff: string
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
  link?: { href: string; label: string }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'azure-databricks-platform',
    title: 'Multi-Region Azure Databricks Platform',
    company: 'Datenna B.V.',
    period: 'Jan 2025 - Jan 2026',
    pillar: 'data',
    kind: 'work',
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
          alternative: 'Terraform + OpenTofu',
          tradeoff: 'Programming language expressiveness for complex multi-region logic; accepted smaller module ecosystem and steeper onboarding curve',
        },
        {
          area: 'Data Architecture',
          detail: 'Medallion architecture (Bronze/Silver/Gold) with Delta Lake for ACID transactions and time travel',
          alternative: 'Snowflake as a standalone warehouse',
          tradeoff: 'ACID transactions and time travel without a separate vendor; accepted tighter coupling to the Databricks ecosystem',
        },
        {
          area: 'Cost Control',
          detail: 'Auto-scaling clusters with spot instances, job clusters for batch workloads, interactive clusters with auto-termination',
          alternative: 'Reserved instances with fixed capacity',
          tradeoff: '60-70% compute savings on batch workloads; accepted cold start latency and occasional spot evictions requiring retry logic',
        },
        {
          area: 'CI/CD',
          detail: 'Azure DevOps + ArgoCD for infrastructure, Databricks Asset Bundles for notebook/job deployments',
          alternative: 'GitHub Actions + Terraform Cloud',
          tradeoff: 'Enterprise constraint mandated Azure DevOps; ArgoCD adds drift detection and self-healing that Terraform Cloud lacks natively',
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
    title: 'Kubernetes Platform Modernization and Observability Migration',
    company: 'PVH Europe',
    period: '2022 - 2024',
    pillar: 'core',
    kind: 'work',
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
          alternative: 'Self-managed Kubernetes or ECS Fargate',
          tradeoff: 'Managed control plane reduces operational burden; Karpenter provides pod-level resource bin-packing that Fargate and Cluster Autoscaler cannot match',
        },
        {
          area: 'Deployment',
          detail: 'ArgoCD for GitOps, progressive rollouts with Argo Rollouts, standardized Helm charts as golden paths',
          alternative: 'Spinnaker',
          tradeoff: 'Git-native declarative model with lower operational overhead; accepted less mature multi-cloud support compared to Spinnaker',
        },
        {
          area: 'Observability',
          detail: 'Prometheus + Grafana for metrics; logs migrated from a self-managed ELK stack to AWS Managed OpenSearch with UltraWarm and cold tiers, automated index lifecycle policies, and Terraform modules so teams provision their own index patterns and dashboards',
          alternative: 'Datadog, or self-managed OpenSearch on Kubernetes',
          tradeoff: 'Avoids per-host pricing at 200+ services and the upgrade and patching burden of self-managed search; accepted less granular tiering control and a higher per-node cost',
        },
        {
          area: 'Migration Strategy',
          detail: 'Strangler fig pattern - new services on K8s, gradual migration of existing services with parallel running',
          alternative: 'Big-bang cutover',
          tradeoff: 'Near-zero risk for revenue-critical e-commerce services; accepted a longer migration timeline and cost of running parallel environments',
        },
      ],
    },
    implementation: {
      technologies: ['AWS', 'EKS', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana', 'AWS OpenSearch', 'Fluent Bit', 'Helm', 'Karpenter'],
      myRole: 'Led the platform team through the migration. Designed the target architecture, built the observability stack and led the ELK to OpenSearch migration, created migration runbooks, and mentored teams on Kubernetes adoption. Personally migrated critical checkout services.',
    },
    impact: [
      { metric: 'Annual Savings', value: '€500K+' },
      { metric: 'Deployment Time', value: '2 hours → 15 min (85% faster)' },
      { metric: 'Deployment Frequency', value: 'Weekly → 50+/day' },
      { metric: 'Self-Service Adoption', value: '85% of teams' },
      { metric: 'Log Licence Costs', value: '60%+ lower (ELK → OpenSearch)' },
      { metric: 'Golden Path Coverage', value: '90%+ services' },
    ],
  },
  {
    id: 'matching-api-healthcare',
    title: 'Matching API Platform for Healthcare SaaS',
    company: 'myTomorrows',
    period: 'Feb 2026 - Present',
    pillar: 'ai',
    kind: 'work',
    context: {
      description: 'Healthcare SaaS needing a secure, EU-compliant platform for an LLM-powered clinical trial matching API. B2B API product processing de-identified medical records through multi-model LLM inference.',
      constraints: [
        'No existing infrastructure for the new Matching API product',
        'Isolation appropriate for processing de-identified medical data',
        'LLM calls routed to EU-resident model endpoints',
        'Security controls appropriate for a regulated healthcare environment',
      ],
    },
    problem: 'No existing infrastructure for the new Matching API product. Needed isolation appropriate for medical data, LLM calls to EU-resident model endpoints, SQS-driven async processing with autoscaling workers, and security controls appropriate for a regulated healthcare environment.',
    approach: {
      description: 'Delivered the product on the shared EKS cluster with its own namespace, a dedicated Karpenter node pool and per-service IAM, LLM calls through a shared LLM gateway, CloudFront VPC Origins for zero-exposure production APIs, and KEDA-driven autoscaling for async batch LLM processing.',
      decisions: [
        {
          area: 'Cluster Strategy',
          detail: 'Shared EKS cluster over a dedicated cluster. My first ADR chose a dedicated cluster; I reversed it before production. My reading of GDPR Article 32 is that it is risk-based and does not demand cluster-level separation, while a dedicated cluster meant about two weeks of setup and seven duplicated add-ons to run',
          alternative: 'Dedicated EKS cluster per product',
          tradeoff: 'Faster delivery and one platform to operate; accepted a shared control plane, mitigated with a dedicated node pool, its own namespace and per-service IAM',
        },
        {
          area: 'LLM Access',
          detail: 'Model calls through a shared LLM gateway rather than direct provider SDK calls',
          alternative: 'Direct calls to the model provider APIs',
          tradeoff: 'One place for EU data residency and provider fallback; accepted a shared dependency whose timeouts had to be tuned for long LLM calls',
        },
        {
          area: 'Production Ingress',
          detail: 'CloudFront + VPC Origins + internal ALB over internet-facing ALB or API Gateway - ALB has no public IP, Shield Standard DDoS, EU geo-restriction at edge',
          alternative: 'Internet-facing ALB or API Gateway',
          tradeoff: 'ALB has no public IP, Shield Standard DDoS, EU geo-restriction at edge; accepted debugging complexity across CloudFront + ALB logs',
        },
        {
          area: 'Worker Scaling',
          detail: 'KEDA with SQS triggers over HPA with CPU metrics - queue-depth-driven scaling matches async batch workload',
          alternative: 'HPA with CPU-based metrics',
          tradeoff: 'Queue-depth-driven scaling matches async batch workload; custom scaleOnInFlight=false and 7200s cooldown for long-running LLM tasks',
        },
      ],
    },
    implementation: {
      technologies: ['AWS EKS', 'Terraform', 'Terragrunt', 'KEDA', 'Karpenter', 'CloudFront', 'WAFv2', 'LiteLLM', 'SQS', 'RDS PostgreSQL', 'Grafana', 'Prometheus'],
      myRole: 'Owned the infrastructure end to end: wrote the architecture ADR (and the later decision to move to the shared cluster), provisioned the AWS resources, configured CloudFront VPC Origins for production, built the observability stack (Grafana dashboard with 18 panels, 8 alert rules), ran the ingress load tests, and handed over to the product team.',
    },
    impact: [
      { metric: 'Production Handover', value: 'March 2026' },
      { metric: 'Edge Security', value: 'No public ALB; CloudFront + WAF (6 rules)' },
      { metric: 'Autoscaling', value: 'Queue-driven workers scale 1→3 in 30s (KEDA)' },
    ],
  },
  {
    id: 'gpu-inference-platform-eks',
    title: 'GPU Inference Platform on AWS EKS',
    company: 'Personal Project: GPU Inference Lab',
    period: 'Nov 2025 - Present',
    pillar: 'ai',
    kind: 'lab',
    context: {
      description: 'An LLM inference lab on AWS EKS that I am building to measure what self-hosted serving costs and how it behaves on spot GPUs. The first GPU session is still to come. It runs in short burst sessions on my own AWS account and is torn down the same day. It started as a multi-cloud MLOps platform; I cut it back to AWS and LLM inference when the multi-cloud surface turned out to be unverified (ADR-017).',
      constraints: [
        'One AWS account and a small monthly budget: every session is torn down the same day',
        'Spot GPU capacity only (A10G), with hard Karpenter limits',
        'Claims only from measured results; design targets are labelled as such',
        'CI deploys with OIDC and no static keys',
      ],
    },
    problem: 'Teams adopting self-hosted LLMs rarely know what serving actually costs per token on the hardware they can get, or how it behaves when spot capacity disappears. I wanted measured answers, not vendor numbers.',
    approach: {
      description: 'A small, reproducible platform: Karpenter-provisioned spot A10G nodes, vLLM on KServe, GPU and request telemetry, and a signed, policy-enforced supply chain, rebuilt from empty state for each session.',
      decisions: [
        {
          area: 'Inference Engine',
          detail: 'vLLM with an OpenAI-compatible API and continuous batching; bf16 and AWQ 4-bit variants of the same 7B model to measure what quantisation buys on an A10G',
          alternative: 'TGI or Triton Inference Server',
          tradeoff: 'OpenAI-compatible API and continuous batching out of the box; the bf16 vs AWQ comparison is the measurement, not an assumption',
        },
        {
          area: 'Model Serving',
          detail: 'KServe in RawDeployment mode, with post-deploy verification and metric-gated rollback',
          alternative: 'Knative serverless mode for canary traffic splitting and scale-to-zero',
          tradeoff: 'Simpler operations; I proved live that canaryTrafficPercent is ignored in RawDeployment (ADR-016), so rollback is driven by an error-rate analysis instead of a traffic split',
        },
        {
          area: 'GPU Cost',
          detail: 'Spot A10G only, with Karpenter limits, consolidation and a 4-hour expiry; budgets and a daily idle guard on the account',
          alternative: 'On-demand or reserved GPU instances',
          tradeoff: 'Lowest cost per GPU-hour for short sessions; accepted spot interruptions, which are part of what is being measured',
        },
        {
          area: 'Supply Chain',
          detail: 'SHA-pinned CI, cosign-signed images verified at admission by Kyverno, hashed lockfiles with drift checks',
          alternative: 'Trusting registry tags and unpinned dependencies',
          tradeoff: 'More moving parts in CI; every first-party image that runs is traceable to a reviewed commit',
        },
      ],
    },
    implementation: {
      technologies: ['AWS EKS', 'Karpenter', 'vLLM', 'KServe', 'Terraform', 'Kyverno', 'ArgoCD', 'Prometheus', 'Grafana'],
      myRole: 'Designed and built it end to end: Terraform for EKS and the GPU pool, the serving path, CI/CD with OIDC, the admission policies, the teardown tooling, and the runbooks. The July 2026 deployment and its green rebuild surfaced 38 defects (34, then 4 more), all fixed through the pipeline and written up as a retrospective.',
    },
    impact: [
      { metric: 'Serving Loop', value: 'sklearn/MLServer loop end to end on EKS, July 2026 (38 defects fixed)' },
      { metric: 'Rollback', value: 'Metric-gated, demonstrated live' },
      { metric: 'Burst Session', value: 'One clean cycle, Nov 2026: deploy 33 min, teardown 12.5 min' },
      { metric: 'GPU Benchmarks', value: 'Not published yet' },
    ],
    link: { href: 'https://github.com/judeoyovbaire/mlops-platform', label: 'Source and runbooks' },
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