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
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'azure-databricks-platform',
    title: 'Multi-Region Azure Databricks Platform',
    company: 'Datenna B.V.',
    period: 'Jan 2025 - Jan 2026',
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
          detail: 'Prometheus + Grafana for metrics, OpenSearch for logs, distributed tracing with custom dashboards per team',
          alternative: 'Datadog',
          tradeoff: 'Avoids per-host pricing that explodes at 200+ services scale; accepted higher operational overhead for self-managed stack',
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
      technologies: ['AWS', 'EKS', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana', 'OpenSearch', 'Helm', 'Karpenter'],
      myRole: 'Led the platform team through the migration. Designed the target architecture, built the observability stack, created migration runbooks, and mentored teams on Kubernetes adoption. Personally migrated critical checkout services.',
    },
    impact: [
      { metric: 'Annual Savings', value: '€500K+' },
      { metric: 'Deployment Time', value: '2 hours → 15 min (85% faster)' },
      { metric: 'Deployment Frequency', value: 'Weekly → 50+/day' },
      { metric: 'Platform Uptime', value: '99.99%' },
      { metric: 'Self-Service Adoption', value: '85% of teams' },
      { metric: 'Team Onboarding', value: '< 2 days' },
      { metric: 'Golden Path Coverage', value: '90%+ services' },
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
      description: 'Migrated from the ELK stack to AWS Managed OpenSearch with a focus on cost reduction and operational efficiency, implementing automated index lifecycle management and self-service patterns for development teams.',
      decisions: [
        {
          area: 'Platform',
          detail: 'AWS Managed OpenSearch Service with UltraWarm and cold storage tiers for cost-efficient data lifecycle',
          alternative: 'Self-managed OpenSearch on Kubernetes',
          tradeoff: 'Eliminated operational burden of cluster upgrades, patching, and backup management; accepted less granular tiering control and higher per-node cost in exchange for managed reliability',
        },
        {
          area: 'Data Management',
          detail: 'Automated ISM policies, index templates with optimized mappings, snapshot lifecycle management to S3',
          alternative: 'Manual curator scripts',
          tradeoff: 'Consistent lifecycle management across all indices; requires per-index tuning for retention and rollover thresholds',
        },
        {
          area: 'Self-Service',
          detail: 'Terraform modules for teams to provision their own index patterns, dashboards as code with version control',
          alternative: 'Centralized platform team management',
          tradeoff: 'Reduces platform team as bottleneck; mitigated risk of poor mappings with sensible defaults and validation in the modules',
        },
        {
          area: 'Performance',
          detail: 'Query optimization, shard sizing based on data patterns, caching strategies for common queries',
          alternative: 'Vertical scaling with larger instance types',
          tradeoff: '40% query performance improvement without upsizing instances; required deeper investment in understanding per-index access patterns',
        },
      ],
    },
    implementation: {
      technologies: ['AWS OpenSearch', 'Terraform', 'Fluent Bit', 'S3', 'Prometheus', 'Python'],
      myRole: 'Designed and executed the migration strategy from ELK to AWS Managed OpenSearch. Configured tiering policies, implemented ISM automation, and created the self-service Terraform modules. Trained teams on OpenSearch best practices.',
    },
    impact: [
      { metric: 'License Cost Savings', value: '60%+' },
      { metric: 'Query Performance', value: '40% faster' },
      { metric: 'Storage Efficiency', value: '50% reduction' },
      { metric: 'Time to Dashboard', value: 'Days → Hours' },
    ],
  },
  {
    id: 'matching-api-healthcare',
    title: 'Matching API Platform for Healthcare SaaS',
    company: 'myTomorrows',
    period: 'Feb 2026 - Present',
    pillar: 'core',
    context: {
      description: 'Healthcare SaaS needing a secure, EU-compliant platform for an LLM-powered clinical trial matching API. B2B API product processing de-identified medical records through multi-model LLM inference.',
      constraints: [
        'No existing infrastructure for the new Matching API product',
        'Dedicated isolation required for medical data compliance',
        'LLM inference co-located for zero-latency processing',
        'Defence-in-depth security for a regulated healthcare environment',
      ],
    },
    problem: 'No existing infrastructure for the new Matching API product. Needed dedicated isolation for medical data compliance, LLM inference co-located for zero-latency, SQS-driven async processing with autoscaling workers, and defence-in-depth security for a regulated healthcare environment.',
    approach: {
      description: 'Designed and delivered a dedicated EKS cluster with defence-in-depth security, co-located LLM proxy, CloudFront VPC Origins for zero-exposure production APIs, and KEDA-driven autoscaling for async batch LLM processing.',
      decisions: [
        {
          area: 'Cluster Strategy',
          detail: 'Dedicated EKS cluster over shared cluster — full control plane isolation for medical data',
          alternative: 'Shared EKS cluster with namespace isolation',
          tradeoff: 'Full control plane isolation for medical data; accepted ~$200-400/month overhead and duplicated controller stack',
        },
        {
          area: 'LLM Proxy',
          detail: 'LiteLLM co-located in dedicated cluster over external API gateway - preserves zero-latency in-cluster DNS',
          alternative: 'External API gateway or shared LiteLLM instance',
          tradeoff: 'Preserves zero-latency in-cluster DNS; accepted operational coupling between matching-api and LiteLLM lifecycles',
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
      myRole: 'Owned the full infrastructure end-to-end — wrote the architectural ADR, provisioned the dedicated EKS cluster and all AWS resources, deployed 10+ platform controllers, configured CloudFront VPC Origins for production, built the observability stack (Grafana dashboard with 18 panels, 8 alert rules), hardened security posture, ran stress tests, and handed over to the developer team.',
    },
    impact: [
      { metric: 'Infrastructure Delivery', value: '~2 weeks (5 phases)' },
      { metric: 'Stress Test', value: '152 req/s with zero failures' },
      { metric: 'Security', value: '17 NetworkPolicies, WAF with 7 rules' },
      { metric: 'Autoscaling', value: 'KEDA workers scale 1→10 in 30s' },
    ],
  },
  {
    id: 'mlops-platform-kubernetes',
    title: 'Multi-Cloud MLOps Platform on Kubernetes',
    company: 'Personal Project — Reference Architecture',
    period: '2024 - 2025',
    pillar: 'ml',
    context: {
      description: 'Multi-cloud MLOps reference architecture enabling self-service model deployment across AWS EKS, Azure AKS, and GCP GKE with defense-in-depth security and full-stack observability.',
      constraints: [
        'Multi-cloud parity across AWS, Azure, and GCP',
        'Self-service model deployment as the core workflow',
        'GPU cost optimization with spot/preemptible instances',
        'Production-grade security and auditability',
      ],
    },
    problem: 'The problem this architecture addresses: ML teams commonly lose 2-3 days per model deployment to manual processes, ad-hoc security reviews, and invisible GPU spend — with no consistent path from experimentation to production across clouds.',
    approach: {
      description: 'Built a multi-cloud MLOps reference platform with security-first infrastructure, self-service model serving, and per-cloud Terraform modules across three providers.',
      decisions: [
        {
          area: 'Inference Engine',
          detail: 'vLLM for high-throughput LLM serving with OpenAI-compatible API and continuous batching',
          alternative: 'TGI (Text Generation Inference) or Triton Inference Server',
          tradeoff: 'Best-in-class throughput with PagedAttention and continuous batching; accepted narrower model format support compared to Triton',
        },
        {
          area: 'Model Serving',
          detail: 'KServe for production model serving with canary deployments, traffic splitting, and scale-to-zero',
          alternative: 'Seldon Core or BentoML',
          tradeoff: 'Native Kubernetes integration with canary traffic splitting; chose RawDeployment mode over Knative for simpler operations — accepted losing scale-to-zero on the serving path',
        },
        {
          area: 'Security',
          detail: 'Defense-in-depth with Pod Security Admission, Kyverno policies, and Tetragon eBPF runtime security',
          alternative: 'OPA/Gatekeeper as a single policy layer',
          tradeoff: 'Multiple enforcement points catch different threat vectors; accepted higher configuration complexity for stronger security posture',
        },
        {
          area: 'GPU Cost',
          detail: 'SPOT/Preemptible GPU instances with Karpenter for intelligent bin-packing and auto-scaling',
          alternative: 'Reserved GPU instances',
          tradeoff: 'Spot pricing typically runs ~60% below on-demand for GPU instances; accepted the need for checkpointing and graceful preemption handling in training workloads',
        },
      ],
    },
    implementation: {
      technologies: ['Kubernetes', 'KServe', 'vLLM', 'MLflow', 'ArgoCD', 'Karpenter', 'Kyverno', 'Tetragon', 'Terraform', 'Prometheus', 'Grafana'],
      myRole: 'Designed and built the entire platform end-to-end. Created multi-cloud Terraform modules, implemented the model serving pipeline with KServe and vLLM, built the security layer, and documented the architecture for community use.',
    },
    impact: [
      { metric: 'Deployment Path', value: '15-min self-service (design target)' },
      { metric: 'GPU Cost', value: '~60% spot vs on-demand (pricing benchmark)' },
      { metric: 'Cloud Coverage', value: '3 clouds (AWS, Azure, GCP)' },
      { metric: 'Security Layers', value: 'PSA + Kyverno + Tetragon + NetworkPolicies' },
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