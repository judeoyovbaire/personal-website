import { OG_SIZE, renderOgImage } from '@/components/ogImage'

export const alt = 'Jude Oyovbaire: Platform Engineer for AI Infrastructure'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({
    eyebrow: 'judaire.io',
    title: 'Platform Engineer for AI Infrastructure',
    footer: 'LLM gateways · GPU inference · Kubernetes',
  })
}
