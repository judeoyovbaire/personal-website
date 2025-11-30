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

export const certificationColors: Record<Certification['color'], string> = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300',
  orange:
    'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300',
  red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300',
  purple:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300',
  green:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300',
}
