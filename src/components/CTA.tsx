import { Download, Github } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Enhance Your Coding Experience?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Install Hasanah today and bring spiritual inspiration to your development workflow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            <Download size={20} /> Install Extension
          </a>
          <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            <Github size={20} /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
