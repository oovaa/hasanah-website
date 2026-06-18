import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex justify-between items-center">
        <span>{question}</span>
        <span className={`text-emerald-600 dark:text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">{answer}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-700/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">FAQs</h2>
        <div className="space-y-4">
          <FAQItem question="Is Hasanah free?" answer="Yes! Completely free and open-source under the MIT license." />
          <FAQItem question="How do Prayer Times work?" answer="Hasanah auto-detects your location via IP geolocation and calculates prayer times for your area. Notifications appear 10 minutes before each prayer and at prayer time." />
          <FAQItem question="What is the Unified Ummah API?" answer="The Ummah API is a single unified API that powers all of Hasanah's content — Quran, Hadith, Duas, Tafsir, Prayer Times, Hijri Date, and the 99 Names. It includes intelligent 24-hour caching." />
          <FAQItem question="Can I use it offline?" answer="Hasanah primarily fetches content online. If you're offline, it displays a default Duaa. Non-random content is cached for 24 hours." />
          <FAQItem question="Does it work with VS Code Insiders?" answer="Yes, compatible with both VS Code Stable and Insiders editions." />
          <FAQItem question="How do I contribute?" answer="Open an issue or pull request on our GitHub repository. All contributions are welcome!" />
        </div>
      </div>
    </section>
  )
}
