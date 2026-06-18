import { Github, GitFork, Star, AlertCircle, Users } from 'lucide-react'
import type { GitHubRepoData } from '../types'

interface GitHubStatsProps {
  githubData: GitHubRepoData
}

export default function GitHubStats({ githubData }: GitHubStatsProps) {
  const stats = [
    { icon: <Star size={20} />, value: githubData.stars.toString(), label: 'Stars' },
    { icon: <GitFork size={20} />, value: '4', label: 'Forks' },
    { icon: <AlertCircle size={20} />, value: '1', label: 'Open Issues' },
    { icon: <Users size={20} />, value: '1', label: 'Contributors' },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Source Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">Built with love by the Muslim developer community. Contributions welcome!</p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-2 text-emerald-600 dark:text-emerald-400">{s.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
          <Github size={20} /> View on GitHub
        </a>
      </div>
    </section>
  )
}
