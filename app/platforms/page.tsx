import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Server, Database, Brain, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform Capabilities | Jude - Senior Platform Engineer',
  description: 'AI-ready platform capabilities across Core (Kubernetes, IaC, GitOps), Data (Lakehouse, Streaming), ML (Pipelines, Serving), and AI Infrastructure (GPU clusters, LLM serving).',
  openGraph: {
    title: 'Platform Capabilities | Jude',
    description: 'Building AI-ready platforms as stacked capabilities: Core, Data, ML, and AI Infrastructure layers.',
    url: '/platforms',
  },
}

export default function Platforms() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Platform Capabilities</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          I build AI-ready platforms as stacked capabilities: each layer builds on the one below,
          creating a foundation that serves both analytics and ML teams.
        </p>

        {/* Platform Stack Visualization */}
        <div className="mb-10 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
              <Cpu className="text-orange-600" size={24} />
              <span className="font-semibold text-gray-900 dark:text-white">AI Infrastructure</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-auto hidden sm:block">GPU clusters, inference, training</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
              <Brain className="text-purple-600" size={24} />
              <span className="font-semibold text-gray-900 dark:text-white">ML Platform</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-auto hidden sm:block">Pipelines, registries, serving</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <Database className="text-green-600" size={24} />
              <span className="font-semibold text-gray-900 dark:text-white">Data Platform</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-auto hidden sm:block">Lakehouse, streaming, governance</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
              <Server className="text-blue-600" size={24} />
              <span className="font-semibold text-gray-900 dark:text-white">Core Platform</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-auto hidden sm:block">Kubernetes, IaC, observability</span>
            </div>
          </div>
        </div>

        {/* Core Platform */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Server className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Core Platform</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            The foundation: Kubernetes clusters, infrastructure as code, GitOps workflows, observability,
            security baselines, and golden paths that enable teams to ship with confidence.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Container Orchestration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">EKS, AKS, GKE clusters with auto-scaling, security policies, and multi-tenancy</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Infrastructure as Code</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Terraform, Pulumi, Crossplane for declarative, version-controlled infrastructure</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitOps & CI/CD</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">ArgoCD, Flux, GitHub Actions for automated, auditable deployments</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Observability</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Prometheus, Grafana, OpenSearch for metrics, logs, traces, and alerting</p>
            </div>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
            View Core Platform case studies <ArrowRight size={16} />
          </Link>
        </section>

        {/* Data Platform */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Database className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Platform</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            Data foundations on cloud and Kubernetes: lakehouse/warehouse architecture, streaming pipelines,
            data quality, governance, and cost-efficient storage/compute for analytics and ML.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lakehouse Architecture</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Databricks, Delta Lake, medallion architecture for unified analytics</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Search & Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">OpenSearch, Elasticsearch clusters with optimized indexing and query performance</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Streaming & ETL</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kafka, Spark Streaming, real-time data ingestion and transformation</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Governance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Unity Catalog, access controls, lineage tracking, compliance</p>
            </div>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
            View Data Platform case studies <ArrowRight size={16} />
          </Link>
        </section>

        {/* ML Platform */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Brain className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ML Platform</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            Infrastructure for the ML lifecycle: feature pipelines, training workflows, experiment tracking,
            model registry, and production deployment with monitoring and safe rollouts.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ML Pipelines</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kubeflow, Argo Workflows for reproducible training and feature engineering</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experiment Tracking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MLflow, model versioning, hyperparameter tracking, artifact management</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Model Serving</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Seldon Core, KServe for A/B testing, canary deployments, autoscaling</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ML Observability</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Model performance monitoring, drift detection, SLO-driven operations</p>
            </div>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
            View ML Platform projects <ArrowRight size={16} />
          </Link>
        </section>

        {/* AI Infrastructure */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Cpu className="text-orange-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI Infrastructure</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            Hardware-aware cloud platforms for AI: GPU clusters, job schedulers, inference/training stacks,
            and aggressive optimization for performance and cost at scale.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GPU Clusters</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">NVIDIA GPU Operator, node pools, scheduling for training and inference</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">LLM Infrastructure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">vLLM, Ollama, multi-model serving with intelligent routing</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cost Optimization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Spot instances, autoscaling, GPU utilization monitoring, right-sizing</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Observability</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Inference latency, queue depth, GPU metrics, training job monitoring</p>
            </div>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
            View AI Infrastructure projects <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
