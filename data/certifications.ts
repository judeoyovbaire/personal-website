export interface Certification {
  name: string
  fullName: string
  issuer: string
}

export const certifications: Certification[] = [
  {
    name: 'CKA',
    fullName: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
  },
  {
    name: 'CKAD',
    fullName: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF',
  },
  {
    name: 'KCNA',
    fullName: 'Kubernetes & Cloud Native Associate',
    issuer: 'CNCF',
  },
  {
    name: 'KCSA',
    fullName: 'Kubernetes & Cloud Native Security Associate',
    issuer: 'CNCF',
  },
  {
    name: 'AWS SA',
    fullName: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon',
  },
  {
    name: 'AWS CCP',
    fullName: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon',
  },
  {
    name: 'Azure AZ-900',
    fullName: 'Microsoft Certified Azure Fundamentals',
    issuer: 'Microsoft',
  },
  {
    name: 'Terraform',
    fullName: 'HashiCorp Certified Terraform Associate',
    issuer: 'HashiCorp',
  },
  {
    name: 'GitOps',
    fullName: 'Codefresh GitOps Certified Fundamentals',
    issuer: 'Codefresh',
  },
  {
    name: 'GitOps Scale',
    fullName: 'Codefresh GitOps Certified Scale',
    issuer: 'Codefresh',
  },
  {
    name: 'Aviatrix ACE',
    fullName: 'Aviatrix Certified Engineer - Multi-Cloud Network Associate',
    issuer: 'Aviatrix',
  },
]
