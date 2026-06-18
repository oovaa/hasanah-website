import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
      <div className="flex-shrink-0 mb-4 w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 rounded-xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm leading-relaxed">{description}</p>
    </div>
  )
}
