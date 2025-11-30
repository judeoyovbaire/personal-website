export const technologies: Record<string, string[]> = {
  'Cloud Platforms': ['AWS', 'Azure', 'GCP', 'DigitalOcean', 'Linode'],
  Orchestration: ['Kubernetes', 'Docker', 'OpenShift', 'EKS', 'AKS', 'GKE'],
  IaC: ['Terraform', 'Pulumi', 'Crossplane', 'CloudFormation', 'ARM Templates'],
  'CI/CD': [
    'Jenkins',
    'GitLab CI',
    'GitHub Actions',
    'ArgoCD',
    'Flux',
    'Azure DevOps',
  ],
  Monitoring: ['Prometheus', 'Grafana', 'DataDog', 'New Relic', 'ELK Stack'],
  Languages: ['Python', 'Go', 'Bash', 'TypeScript', 'YAML', 'HCL'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'DynamoDB'],
  Messaging: ['Kafka', 'RabbitMQ', 'SQS', 'EventBridge', 'Service Bus'],
}
