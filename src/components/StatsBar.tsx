import { Star, Download, Package, Clock } from 'lucide-react'
import type { GitHubRepoData } from '../types'

interface StatsBarProps {
  githubData: GitHubRepoData
}

function formatDate(dateString: string): string {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function StatsBar({ githubData }: StatsBarProps) {
  const stats = [
    { icon: <Star size={20} />, value: githubData.stars.toString(), label: 'GitHub Stars', color: 'text-amber-500' },
    { icon: <Download size={20} />, value: '4.2K+', label: 'VS Code Installs', color: 'text-emerald-500' },
    { icon: <Package size={20} />, value: `v${githubData.version}`, label: 'Latest Version', color: 'text-blue-500' },
    { icon: <Clock size={20} />, value: formatDate(githubData.lastUpdated), label: 'Last Updated', color: 'text-purple-500' },
  ]

  return (
    <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className={`flex justify-center mb-2 ${s.color}`}>{s.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
