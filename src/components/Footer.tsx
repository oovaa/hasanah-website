import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="mb-4">
            Made with <span className="text-red-500">❤️</span> by the Muslim developer community
          </p>
          <p className="text-sm mb-6 italic text-gray-400">
            &ldquo;So whoever does an atom's weight of good will see it.&rdquo; — Qur'an 99:7
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hasanah Project. MIT Licensed. &mdash; صدقة جارية عن جميع المسلمين
          </p>
        </div>
      </div>
    </footer>
  )
}
