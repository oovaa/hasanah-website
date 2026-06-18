import { Sparkles } from 'lucide-react'

const updates = [
  { version: '10.0.2', date: 'June 2026', changes: ['Unified Ummah API integration', 'Complete 99 Names of Allah', 'Enhanced caching (24-hour)', 'Offline Duaa fallback'] },
  { version: '9.0.0', date: 'March 2026', changes: ['Prayer Times with auto-location', '126 authentic Duas across 27 categories', 'Prayer notifications (10 min before)', 'Next prayer countdown'] },
  { version: '8.0.0', date: 'December 2025', changes: ['3-State Alternation (Hadith/Ayah/Duaa)', 'Tafsir lookup with 4 sources', 'Hijri Date display', 'Configurable auto-dismiss'] },
  { version: '7.0.0', date: 'August 2025', changes: ['Random Hadiths from 7 collections', 'Dual language support (AR/EN)', 'Customizable intervals', 'Command palette integration'] },
]

export default function WhatsNew() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What's New</h2>
        <div className="max-w-2xl mx-auto">
          {updates.map((u, i) => (
            <div key={i} className="relative pl-8 pb-8 last:pb-0">
              {i < updates.length - 1 && <div className="absolute left-3.5 top-3 bottom-0 w-px bg-emerald-200 dark:bg-emerald-800" />}
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">v{u.version}</span>
                  <span className="text-sm text-gray-400">{u.date}</span>
                </div>
                <ul className="space-y-1">
                  {u.changes.map((c, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
