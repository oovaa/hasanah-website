import { useState } from 'react'
import { Github, Download, Moon, Sun, Menu, X } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
  activeSection: string
  scrollToSection: (id: string) => void
}

export default function Header({ darkMode, setDarkMode, activeSection, scrollToSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'installation', label: 'Installation' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
          Hasanah
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollToSection(l.id)}
              className={`px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-emerald-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${activeSection === l.id ? 'text-emerald-600 dark:text-emerald-400 font-medium after:w-full after:left-0' : ''}`}>
              {l.label}
            </button>
          ))}

          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200" aria-label="Toggle dark mode">
            {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-600" size={20} />}
          </button>

          <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200" aria-label="View source on GitHub">
            <Github size={20} />
          </a>

          <a href="https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center gap-2">
            <Download size={16} /> Install
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200">
            {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-600" size={20} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-4 my-2 py-4 absolute top-full left-0 right-0 z-40 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4 px-6">
            {links.map(l => (
              <button key={l.id} onClick={() => { scrollToSection(l.id); setMobileOpen(false) }}
                className={`text-left py-2 ${activeSection === l.id ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-gray-600 dark:text-gray-300'}`}>
                {l.label}
              </button>
            ))}
            <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 text-gray-600 dark:text-gray-300"><Github size={20} /> GitHub</a>
            <a href="https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"><Download size={20} /> Install Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
