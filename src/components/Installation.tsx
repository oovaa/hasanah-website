import { Command } from 'lucide-react'

export default function Installation() {
  return (
    <section id="installation" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-700/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Getting Started</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Install in seconds, stay inspired forever</p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Installation Steps</h3>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-7 h-7 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold">1</span>
                <span>Open Visual Studio Code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-7 h-7 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold">2</span>
                <span>Go to Extensions view (<kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-xs font-mono">Ctrl+Shift+X</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-xs font-mono">Cmd+Shift+X</kbd>).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-7 h-7 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold">3</span>
                <span>Search for <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-sm font-mono">Hasanah</code>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-7 h-7 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold">4</span>
                <span>Click Install and reload VS Code.</span>
              </li>
            </ol>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
              <Command size={20} className="text-emerald-600 dark:text-emerald-400" /> Commands
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Command</th>
                    <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr><td className="py-2 font-mono text-emerald-600 dark:text-emerald-400">hasanah: get Ayah</td><td className="py-2 text-gray-600 dark:text-gray-300">Fetch a specific verse by surah/ayah number</td></tr>
                  <tr><td className="py-2 font-mono text-emerald-600 dark:text-emerald-400">hasanah: get Tafsir</td><td className="py-2 text-gray-600 dark:text-gray-300">3-step tafsir source → surah → ayah selector</td></tr>
                  <tr><td className="py-2 font-mono text-emerald-600 dark:text-emerald-400">hasanah: get Prayer Times</td><td className="py-2 text-gray-600 dark:text-gray-300">Auto-detect location & show all prayer times</td></tr>
                  <tr><td className="py-2 font-mono text-emerald-600 dark:text-emerald-400">hasanah: get Duaa</td><td className="py-2 text-gray-600 dark:text-gray-300">Display a random authentic Duaa</td></tr>
                  <tr><td className="py-2 font-mono text-emerald-600 dark:text-emerald-400">hasanah: get Hijri Date</td><td className="py-2 text-gray-600 dark:text-gray-300">Show current Hijri date</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
