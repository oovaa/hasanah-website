import { Download, Star } from 'lucide-react'
import type { GitHubRepoData } from '../types'

interface HeroProps {
  githubData: GitHubRepoData
}

export default function Hero({ githubData }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-emerald-900/10 dark:to-gray-900 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-800">
              v{githubData.version}
            </span>
            {githubData.stars > 0 && (
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold flex items-center gap-1 border border-amber-200 dark:border-amber-800">
                <Star size={14} className="fill-current" /> {githubData.stars}
              </span>
            )}
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
              MIT License
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-800">
              VS Code Extension
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Keep Qur'an & Hadith<br />
            <span className="text-emerald-600 dark:text-emerald-400">Close While You Code</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Hasanah brings the beauty of the Qur'an, authentic Hadith, and Islamic reminders directly into your VS Code editor — helping you stay spiritually connected while you build.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              <Download size={20} /> Install Extension
            </a>
            <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              <Star size={20} /> Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
