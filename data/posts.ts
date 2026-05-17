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
  {
    slug: 'migrating-elk-to-aws-opensearch-lessons',
    title: 'Migrating from ELK to AWS Managed OpenSearch: What I Learned at PVH',
    description: 'An opinionated take on migrating a TB-scale observability platform from the ELK stack to AWS Managed OpenSearch for 200+ microservices at PVH Europe, and when managed beats self-managed.',
    category: 'Data Platforms',
    date: '2025-03-15',
    readTime: '12 min read',
    published: true,
    technologies: ['OpenSearch', 'AWS', 'Terraform', 'Fluent Bit', 'Prometheus'],
    content: `
## The Decision That Shaped Two Years of My Work

In 2023, I faced a decision that would define the next two years of platform work at PVH Europe: should we migrate our ELK stack to self-managed OpenSearch on Kubernetes, or go with AWS Managed OpenSearch?

We chose managed. It was the right call for us. It might be the wrong call for you. This post explains how I think about that decision.

## Context: What We Were Dealing With

PVH Europe runs Calvin Klein and Tommy Hilfiger's e-commerce platforms. That means 200+ microservices generating terabytes of logs per day, with sub-second search latency requirements for incident response during peak events like Black Friday.

Our existing Elasticsearch clusters were expensive and getting more so with licensing changes. We needed to move, and the question was where.

## The Decision Matrix

Here is how I evaluated the two options across the dimensions that actually mattered:

**Operational overhead**: This is where managed services win, and win hard. Self-managed means you own upgrades, security patches, backup verification, and cluster health monitoring. Our platform team was already stretched across Kubernetes, CI/CD, and observability. Adding another stateful system to operate would have been a serious drag on velocity.

**Cost at scale**: AWS Managed OpenSearch pricing is per-instance-hour, and at TB-scale the per-node cost is higher than running equivalent EC2 instances yourself. But the total cost of ownership includes engineering time for upgrades, patching, and incident response. When we modeled the full TCO including operational labor, managed came out ahead.

**Tiering control**: We needed hot/warm/cold data tiering with ISM (Index State Management) policies that moved indices based on age and access patterns. AWS Managed OpenSearch supports UltraWarm and cold storage natively. The tiering granularity is less flexible than what you can do with dedicated Kubernetes node pools, but it was sufficient for our retention requirements.

**Reliability during peak events**: Black Friday and seasonal sales are non-negotiable. AWS manages the underlying infrastructure availability, patching, and automated backups. For a revenue-critical e-commerce platform, offloading that responsibility was worth the cost premium.

## What We Gained by Going Managed

**Zero-downtime upgrades**: AWS handles rolling upgrades across the cluster. With self-managed, every minor version upgrade would have required testing in staging, coordinating rolling restarts, and checking plugin compatibility. Major versions would need a dedicated sprint. We got that time back.

**Automated backups and recovery**: Automated snapshots to S3 with configurable retention, managed by AWS. No need to build restore drill pipelines or verify backup integrity manually. The managed service handles this transparently.

**Reduced on-call burden**: OpenSearch is not part of our on-call rotation for infrastructure incidents. AWS handles shard allocation failures, JVM pressure, and node health. Our team monitors application-level OpenSearch dashboards, not cluster internals.

**Faster time to value**: We were productive within weeks rather than spending months building out a self-managed deployment pipeline, monitoring stack, and runbooks.

## What We Built on Top

Going managed did not mean going passive. We still had significant platform work to do.

**Terraform modules for self-service**: We built Terraform modules that let application teams provision their own index patterns with sensible defaults (optimized mappings, appropriate shard counts, ISM policies attached automatically). This reduced the platform team from a bottleneck to a guardrail.

**Index lifecycle automation**: Automated ISM policies moved indices from hot to UltraWarm to cold to deleted based on configurable retention. Combined with index templates that enforced mapping best practices, this kept storage growth predictable.

**Cost visibility**: We tagged OpenSearch domains and correlated costs with team ownership through AWS Cost Explorer and custom dashboards. This drove behavioral change: teams that could see their log volume started being more thoughtful about what they logged.

**Performance tuning**: Query optimization and shard right-sizing delivered a 40% performance improvement without upsizing instances. This required understanding per-index access patterns, but the work is the same whether you run managed or self-managed.

## What I Would Do Differently

**Invest in index mapping governance earlier**: Self-service is great, but we underestimated how many teams would create indices with dynamic mappings that exploded field counts. Our Terraform modules now enforce explicit mappings with a maximum field count.

**Right-size instance types from day one**: We initially over-provisioned to be safe during migration. It took three months of load analysis before we right-sized. Starting with a structured capacity test during migration would have saved cost from the start.

**Define ISM policies before migration, not after**: We migrated data first and applied lifecycle policies later. This meant a period of storage bloat while we tuned retention. Defining the target ISM policies as part of the migration plan would have been cleaner.

## My Position

AWS Managed OpenSearch wins when these conditions are met:

1. **Your platform team is already stretched**: If your team is operating Kubernetes, CI/CD, and other infrastructure, adding a complex stateful system to self-manage is a serious operational tax. Managed lets you focus on the platform work that differentiates your organization.

2. **You value reliability during peak events**: For revenue-critical workloads where observability downtime during Black Friday is not an option, offloading infrastructure reliability to AWS reduces risk.

3. **TCO includes engineering time**: The per-node cost of managed is higher, but if you factor in the engineering hours for upgrades, patching, incident response, and backup verification, managed often wins on total cost.

Self-managed OpenSearch on Kubernetes wins when you have a dedicated platform team with deep distributed systems expertise, you operate at massive scale where the per-node cost delta compounds significantly, and you need integration depth with a Kubernetes-native observability stack that would make a managed service an operational island.

The worst outcome is choosing self-managed for cost reasons alone, without the team maturity to operate it. You will spend more on engineering time than you save on infrastructure.

## The Results

For PVH, managed was the right call:

- **60%+ reduction in licensing costs** compared to the ELK stack
- **40% faster query performance** through shard optimization and caching
- **50% storage reduction** via ISM automation and mapping optimization
- **Self-service adoption by 85% of teams** within six months

These results came from the platform engineering work we built on top of the managed service, not from the managed service itself. The decision to go managed freed up the engineering capacity to focus on self-service tooling, performance tuning, and cost visibility rather than cluster operations.

---

*If you are evaluating this decision for your organization, I would start by honestly assessing your team's operational bandwidth. The technology choice is secondary to the team's ability to sustain it alongside everything else they are responsible for.*
    `,
  },
  {
    slug: 'cost-attribution-ai-agents-finops',
    title: 'Cost Attribution for AI Agents: Why Tool-Call-Level FinOps Is the Missing Layer',
    description: 'A thought leadership piece on why AI cost attribution needs to happen at the protocol level, not as an afterthought. References MCP, Kagenti, and the emerging need for agent-aware FinOps.',
    category: 'AI Infrastructure',
    date: '2025-04-22',
    readTime: '10 min read',
    published: true,
    technologies: ['FinOps', 'OpenCost', 'Prometheus', 'MCP', 'Kubernetes'],
    content: `
## The Cost Visibility Gap in AI Infrastructure

Cloud FinOps solved the cost attribution problem for traditional infrastructure. Tools like OpenCost can tell you exactly how much a Kubernetes namespace costs per hour. AWS Cost Explorer breaks down spending by service, tag, and account. We have mature frameworks for attributing compute, storage, and network costs to teams and products.

AI agents break all of this.

When an AI agent makes a tool call through MCP (Model Context Protocol) that triggers a chain of LLM inference, vector database queries, and API calls across multiple services, the cost of that single user interaction is invisible. It is spread across inference endpoints, embedding services, retrieval systems, and orchestration layers with no unified attribution.

This is not a theoretical problem. Organizations deploying AI agents today are discovering that their AI infrastructure costs are growing faster than their ability to understand them.

## Why Existing FinOps Tools Fall Short

Traditional FinOps operates at the infrastructure layer: how much compute does this pod use, how much storage does this PVC consume, how many API calls does this service make. This works when the relationship between infrastructure usage and business value is relatively direct.

AI agents introduce a new abstraction layer that breaks this relationship:

**Multi-hop cost chains**: A single agent action might involve an LLM call ($0.03), a vector search ($0.001), a web search API call ($0.005), another LLM call to synthesize results ($0.02), and a tool execution. The total cost of that action is the sum of all hops, but no existing tool tracks it end-to-end.

**Non-deterministic resource usage**: The same prompt can generate wildly different costs depending on output token count, tool call decisions, and retry behavior. Traditional capacity planning assumes relatively predictable resource consumption patterns.

**Nested agent delegation**: With frameworks like Kagenti and multi-agent systems, one agent can delegate work to sub-agents, each consuming their own inference and tool-call budgets. The cost tree can be arbitrarily deep.

**Protocol-level routing decisions**: When an inference gateway like Kortex routes a request from GPT-4 to Claude based on cost optimization rules, the actual cost depends on runtime routing decisions that are invisible to infrastructure-level monitoring.

## What Tool-Call-Level Attribution Looks Like

The right answer is attribution at the protocol level, not the infrastructure level. Every tool call, every LLM invocation, every retrieval query should carry cost metadata that propagates through the call chain.

Here is what this looks like concretely:

**Request-scoped cost tracking**: When an agent receives a user request, it creates a cost context that follows every downstream call. Each LLM invocation, tool call, and sub-agent delegation appends its cost to this context. When the request completes, the total cost is the sum of the entire tree.

**MCP-aware cost headers**: The Model Context Protocol defines how agents interact with tools. Cost attribution should be a first-class concept in this protocol. Every tool call response should include a cost field, and every MCP server should report the cost of fulfilling a request.

**Team and feature attribution**: Cost contexts should carry attribution metadata (team ID, feature ID, user segment) that enables chargeback at the business level. This is the same pattern that works for traditional cloud costs, extended to the agent layer.

**Budget enforcement at the agent level**: Rather than setting infrastructure-level quotas (which are too coarse), budgets should be enforced per agent, per user, or per conversation. An agent that has exhausted its budget should gracefully degrade rather than silently running up costs.

## The Architecture I Am Building Toward

My work on Kortex (inference gateway) and the AI FinOps Platform converges on this problem. Here is how the pieces fit together:

**Kortex** sits at the inference layer, tracking per-request costs with team and feature attribution. It knows the cost of every LLM call because it mediates between applications and inference backends. This is the data plane for cost tracking.

**The AI FinOps Platform** aggregates cost data from Kortex, OpenCost (for infrastructure-level costs), and NVIDIA DCGM (for GPU utilization). It provides the analytics layer: cost-per-inference, cost-per-team, anomaly detection, and budget forecasting.

**The missing piece** is the agent orchestration layer. When an agent framework like Kagenti or LangGraph orchestrates a multi-step workflow, it needs to propagate cost context through every step and report the total cost of the workflow back to the FinOps platform.

This is not a single tool problem. It is an ecosystem problem that requires cost awareness at every layer of the stack.

## Why This Should Be Protocol-Level

Some will argue that cost tracking can be added as an observability concern, bolted on via OpenTelemetry spans or custom middleware. I disagree, for three reasons:

**Accuracy requires provider participation**: The cost of an LLM call depends on input tokens, output tokens, and model-specific pricing. Only the provider (or a gateway that intercepts the response) can calculate this accurately. Estimating costs from the outside based on request size is unreliable.

**Budget enforcement requires synchronous awareness**: If cost tracking is asynchronous (collect data, analyze later), you cannot enforce budgets in real-time. An agent needs to know its remaining budget before deciding whether to make another expensive tool call.

**Multi-agent systems need cost propagation**: When Agent A delegates to Agent B, which delegates to Agent C, the cost of B and C should roll up to A's budget. This requires a cost context that is part of the agent communication protocol, not a sidecar concern.

## Practical Steps for Today

While the ecosystem matures, here is what you can do now:

1. **Instrument your inference gateway**: If you are running an inference proxy (Kortex, LiteLLM, or custom), add per-request cost tracking with attribution headers. This gives you the data plane.

2. **Add cost metadata to your agent framework**: Whatever agent framework you use, add a cost accumulator to the agent's execution context. Log the total cost of each agent invocation alongside the result.

3. **Build cost dashboards that show agent-level spending**: Not just infrastructure costs, but cost-per-agent-action, cost-per-user-session, and cost-per-feature. This is what drives optimization decisions.

4. **Set budget alerts, not just spending alerts**: An alert that fires when total AI spend exceeds $10K/month is too late. Alert when a single agent conversation exceeds $5, or when a team's daily agent spend is trending 2x above baseline.

## The Bet

I am betting that cost attribution will become a first-class concern in AI agent protocols within the next 18 months. The MCP specification will likely add cost reporting. Agent frameworks will add budget-aware execution. Inference gateways will standardize cost headers.

The organizations that instrument their AI infrastructure for cost visibility now will have a significant advantage when this happens. They will have the data, the dashboards, and the organizational muscle to optimize AI spending as it scales.

The organizations that treat AI costs as an undifferentiated cloud bill will find themselves in the same position that many companies were in 2015 with cloud spending: growing fast, with no visibility into what is driving the growth.

---

*This post reflects my work building Kortex and the AI FinOps Platform. If you are tackling similar problems, I would like to compare notes on approaches to agent-level cost tracking.*
    `,
  },
]

export const categories = ['All', 'Platform Design', 'MLOps', 'SRE', 'Kubernetes', 'Data Platforms', 'AI Infrastructure']