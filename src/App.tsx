import { Analytics } from '@vercel/analytics/react'
import { useState, useEffect } from 'react'
import { fetchGitHubRepoData } from './utils/github'
import type { GitHubRepoData } from './types'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Features from './components/Features'
import PrayerTimesSection from './components/PrayerTimesSection'
import NamesOfAllahSection from './components/NamesOfAllahSection'
import WhatsNew from './components/WhatsNew'
import Installation from './components/Installation'
import GitHubStats from './components/GitHubStats'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function getInitialDarkMode() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [activeSection, setActiveSection] = useState('home')
  const [githubData, setGithubData] = useState<GitHubRepoData>({ stars: 0, lastUpdated: '', version: '10.0.2' })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  useEffect(() => {
    fetchGitHubRepoData().then(setGithubData).catch(() => {})
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'features', 'installation']
      const scrollPos = window.scrollY + 120
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top - 80 && scrollPos < top + height - 80) {
            current = id
            break
          }
        }
      }
      if (current !== activeSection) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero githubData={githubData} />
      <StatsBar githubData={githubData} />
      <About />
      <Features />
      <PrayerTimesSection />
      <NamesOfAllahSection />
      <WhatsNew />
      <Installation />
      <GitHubStats githubData={githubData} />
      <FAQ />
      <CTA />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
