export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  published: boolean
  technologies: string[]
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'building-kubernetes-native-inference-gateway',
    title: 'Building Kortex: A Kubernetes-Native AI Inference Gateway',
    description: 'A technical deep dive into designing Kortex, a multi-provider inference gateway with intelligent routing, circuit breakers, OpenTelemetry tracing, and cost tracking.',
    category: 'Platform Design',
    date: '2024-12-18',
    readTime: '8 min read',
    published: true,
    technologies: ['Go', 'Kubernetes', 'Kubebuilder', 'KServe', 'OpenTelemetry'],
    content: `
## The Problem

As organizations scale their AI/ML deployments, they encounter a common set of infrastructure challenges:

**Vendor Lock-in**: Teams commit to a single LLM provider (OpenAI, Anthropic, etc.) and find it difficult to switch when pricing changes or better models emerge.

**No Intelligent Failover**: When a provider experiences an outage or rate limits kick in, requests fail rather than gracefully falling back to alternatives.

**Uncontrolled Experimentation**: A/B testing different models requires custom application code, making it hard to iterate quickly on model selection.

**Cost Blindness**: Per-request costs are invisible, making it impossible to attribute AI spending to teams, features, or users.

**Routing Complexity**: Different request types (simple queries vs. complex reasoning) should route to different models, but this logic gets scattered across applications.

I built **Kortex** to solve these problems with a Kubernetes-native approach.

## The Solution: A Unified Control Plane

The gateway acts as a control plane for inference traffic, sitting between your applications and inference backends. It intercepts requests and intelligently routes them based on configurable rules.

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                         Kortex Gateway                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Routing   │  │  A/B Test   │  │   Cost Tracking     │  │
│  │   Engine    │  │  Assignment │  │   & Rate Limiting   │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
│         │                │                     │            │
│         └────────────────┼─────────────────────┘            │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Failover Orchestrator                  │    │
│  │         (Priority-based backend selection)          │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
    ┌─────────┐      ┌──────────┐     ┌──────────┐
    │ KServe  │      │  OpenAI  │     │  Claude  │
    │ Models  │      │   API    │     │   API    │
    └─────────┘      └──────────┘     └──────────┘
\`\`\`

## Architecture: Control Plane + Data Plane

The gateway follows a classic Kubernetes operator pattern with two distinct components:

### Control Plane (Kubernetes Controller)

The control plane manages Custom Resource Definitions (CRDs) that define routing rules, backends, and experiments:

\`\`\`yaml
apiVersion: gateway.kortex.io/v1alpha1
kind: InferenceRoute
metadata:
  name: production-router
spec:
  backends:
    - name: gpt-4
      provider: openai
      model: gpt-4-turbo
      weight: 80
      priority: 1
    - name: claude-3
      provider: anthropic
      model: claude-3-opus
      weight: 20
      priority: 2
    - name: local-mistral
      type: kserve
      inferenceService: mistral-7b
      priority: 3  # Fallback only

  failover:
    enabled: true
    maxRetries: 2

  costTracking:
    enabled: true
    attribution:
      - header: X-Team-ID
      - header: X-Feature-ID
\`\`\`

The controller watches these resources and reconciles the gateway's routing tables. This is built with Kubebuilder, following the same patterns used by production operators like ArgoCD and Istio.

### Data Plane (Gateway Proxy)

The data plane handles actual request routing with sub-millisecond overhead:

1. **Request Interception**: Receives inference requests via a unified API
2. **Route Resolution**: Matches requests to configured routes
3. **A/B Assignment**: Assigns users to experiment variants (sticky sessions)
4. **Backend Selection**: Chooses backend based on weights and availability
5. **Failover Execution**: Retries with fallback backends on failure
6. **Cost Calculation**: Tracks tokens and calculates per-request costs
7. **Metrics Emission**: Publishes latency, cost, and error metrics

## Key Features

### Multi-Backend Routing

Route requests to any combination of backends:

- **KServe InferenceServices**: Self-hosted models on Kubernetes
- **External APIs**: OpenAI, Anthropic, Cohere, or custom endpoints
- **Kubernetes Services**: vLLM, Ollama, or any inference server

\`\`\`yaml
backends:
  - name: fast-cheap
    provider: openai
    model: gpt-3.5-turbo
    matchHeaders:
      X-Priority: low

  - name: powerful
    provider: anthropic
    model: claude-3-opus
    matchHeaders:
      X-Priority: high
\`\`\`

### Intelligent Failover

Define fallback chains that activate automatically:

\`\`\`yaml
failover:
  chain:
    - gpt-4          # Primary
    - claude-3       # First fallback
    - local-mistral  # Emergency fallback (self-hosted)
  triggers:
    - status: 429    # Rate limited
    - status: 503    # Service unavailable
    - timeout: 30s
\`\`\`

When GPT-4 hits rate limits, requests automatically route to Claude. If Claude is also unavailable, traffic fails over to your self-hosted Mistral—all transparent to the application.

### A/B Testing with Statistical Rigor

Run experiments without changing application code:

\`\`\`yaml
apiVersion: gateway.kortex.io/v1alpha1
kind: InferenceExperiment
metadata:
  name: model-comparison
spec:
  variants:
    - name: control
      backend: gpt-4
      weight: 50
    - name: treatment
      backend: claude-3
      weight: 50

  metrics:
    - latencyP99
    - costPerRequest
    - userSatisfaction  # Custom metric from your app

  duration: 7d
  minimumSampleSize: 1000
\`\`\`

The gateway handles sticky session assignment (users see consistent variants) and exports metrics for statistical analysis.

### Per-Request Cost Tracking

Every request is tagged with cost metadata:

\`\`\`json
{
  "requestId": "req_abc123",
  "backend": "gpt-4",
  "inputTokens": 150,
  "outputTokens": 89,
  "cost": 0.0043,
  "attribution": {
    "team": "search",
    "feature": "autocomplete"
  }
}
\`\`\`

This enables:
- Team-level chargeback
- Feature-level cost analysis
- Budget alerts and quotas

## Why Kubernetes-Native?

Building this as a Kubernetes operator (rather than a standalone service) provides several advantages:

1. **GitOps Compatibility**: Routes and experiments are declarative YAML, version-controlled and deployed via ArgoCD
2. **Native Integration**: Direct access to KServe InferenceServices and Kubernetes Services
3. **Operational Familiarity**: SREs manage it like any other Kubernetes workload
4. **Scalability**: Leverages Kubernetes HPA and runs as a highly-available deployment

## Current Status & Roadmap

Kortex has completed three major phases and is targeting CNCF Sandbox submission:

**Phase 1 (Complete)**: Core routing, CRD design, basic failover, Prometheus metrics
**Phase 2 (Complete)**: A/B testing, per-user rate limiting, cost tracking, health checks
**Phase 3 (Complete)**: OpenTelemetry tracing, smart routing, circuit breakers with exponential backoff, configuration hot-reload
**Phase 4 (In Progress)**: Multi-tenancy, semantic caching, multi-cluster federation, CNCF Sandbox submission

## Get Involved

Kortex is open source and designed for CNCF contribution. If you're dealing with multi-model inference challenges, I'd love to hear your use cases.

**GitHub**: [github.com/judeoyovbaire/kortex](https://github.com/judeoyovbaire/kortex)

---

*This post is part of my series on building production AI infrastructure. Next up: merging OpenCost and NVIDIA DCGM for GPU cost optimization.*
    `,
  },
]

export const categories = ['All', 'Platform Design', 'MLOps', 'SRE', 'Kubernetes', 'Data Platforms']