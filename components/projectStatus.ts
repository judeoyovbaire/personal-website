import { CheckCircle, Clock, Rocket } from 'lucide-react'
import type { SideProject } from '@/data/projects'

// One label and colour per side-project status, shared by /projects and /opensource.
export const statusConfig: Record<SideProject['status'], { label: string; icon: typeof Clock; color: string }> = {
  in_progress: { label: 'In Progress', icon: Rocket, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  planned: { label: 'Planned', icon: Clock, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  completed: { label: 'Completed', icon: CheckCircle, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  code_complete: { label: 'Code-complete, not yet run on a GPU', icon: Clock, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  archived: { label: 'Archived learning project', icon: Clock, color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' },
}
