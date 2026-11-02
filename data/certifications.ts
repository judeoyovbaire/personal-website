export interface Certification {
  name: string
  fullName: string
  issuer: string
  color: 'blue' | 'orange' | 'red' | 'purple' | 'cyan' | 'green'
}

export const certifications: Certification[] = [
  {
    name: 'CKA',
    fullName: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    color: 'blue',
  },
  {
    name: 'CKAD',
    fullName: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF',
    color: 'blue',
  },
  {
    name: 'KCNA',
    fullName: 'Kubernetes & Cloud Native Associate',
    issuer: 'CNCF',
    color: 'blue',
  },
  {
    name: 'KCSA',
    fullName: 'Kubernetes & Cloud Native Security Associate',
    issuer: 'CNCF',
    color: 'blue',
  },
  {
    name: 'AWS SA',
    fullName: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon',
    color: 'orange',
  },
  {
    name: 'AWS CCP',
    fullName: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon',
    color: 'orange',
  },
  {
    name: 'Azure AZ-900',
    fullName: 'Microsoft Certified Azure Fundamentals',
    issuer: 'Microsoft',
    color: 'cyan',
  },
  {
    name: 'Terraform',
    fullName: 'HashiCorp Certified Terraform Associate',
    issuer: 'HashiCorp',
    color: 'purple',
  },
  {
    name: 'GitOps',
    fullName: 'Codefresh GitOps Certified Fundamentals',
    issuer: 'Codefresh',
    color: 'green',
  },
  {
    name: 'GitOps Scale',
    fullName: 'Codefresh GitOps Certified Scale',
    issuer: 'Codefresh',
    color: 'green',
  },
  {
    name: 'Aviatrix ACE',
    fullName: 'Aviatrix Certified Engineer - Multi-Cloud Network Associate',
    issuer: 'Aviatrix',
    color: 'red',
  },
]
