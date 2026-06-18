# Hasanah Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the hasanah-website to accurately reflect v10.0.2 features with a clean component architecture and improved visual design.

**Architecture:** Break the monolithic App.tsx into separate components per section, update all content to match extension v10.0.2, add missing feature sections (Prayer Times, 99 Names, Changelog, GitHub stats), remove fake testimonials.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS 3, Lucide React icons.

---

### Task 1: Create component directory structure

**Files:**
- Modify: `src/App.tsx` (rewrite to compose components)

- [ ] **Create component files and directory**

```bash
mkdir -p src/components
touch src/components/Header.tsx
touch src/components/Hero.tsx
touch src/components/StatsBar.tsx
touch src/components/About.tsx
touch src/components/Features.tsx
touch src/components/PrayerTimesSection.tsx
touch src/components/NamesOfAllahSection.tsx
touch src/components/WhatsNew.tsx
touch src/components/Installation.tsx
touch src/components/GitHubStats.tsx
touch src/components/FAQ.tsx
touch src/components/CTA.tsx
touch src/components/Footer.tsx
touch src/components/FeatureCard.tsx
```

### Task 2: Write Header component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Write Header component**

```tsx
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
        <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">Hasanah</div>

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

import { useState } from 'react'
```

### Task 3: Write FeatureCard reusable component

**Files:**
- Create: `src/components/FeatureCard.tsx`

- [ ] **Write FeatureCard**

```tsx
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
```

### Task 4: Write Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Write Hero component**

```tsx
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
```

### Task 5: Write StatsBar component

**Files:**
- Create: `src/components/StatsBar.tsx`

- [ ] **Write StatsBar**

```tsx
import { Star, Download, Package, Clock } from 'lucide-react'
import type { GitHubRepoData } from '../types'

interface StatsBarProps {
  githubData: GitHubRepoData
}

function formatDate(dateString: string): string {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function StatsBar({ githubData }: StatsBarProps) {
  const stats = [
    { icon: <Star size={20} />, value: githubData.stars.toString(), label: 'GitHub Stars', color: 'text-amber-500' },
    { icon: <Download size={20} />, value: '4.2K+', label: 'VS Code Installs', color: 'text-emerald-500' },
    { icon: <Package size={20} />, value: `v${githubData.version}`, label: 'Latest Version', color: 'text-blue-500' },
    { icon: <Clock size={20} />, value: formatDate(githubData.lastUpdated), label: 'Last Updated', color: 'text-purple-500' },
  ]

  return (
    <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className={`flex justify-center mb-2 ${s.color}`}>{s.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Task 6: Write About component

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Write About component**

```tsx
export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Hasanah</h2>
          <div className="prose prose-emerald dark:prose-invert max-w-none lg:prose-lg mx-auto">
            <p>
              Hasanah is more than just a VS Code extension — it's your spiritual companion while coding. Born from the desire to keep Islamic teachings close during development work, Hasanah seamlessly integrates Qur'anic verses, authentic Hadith, Duas, and more into your editor.
            </p>
            <p>
              Whether you're debugging a complex issue or building new features, Hasanah provides timely reminders and inspiration from Islamic teachings, helping maintain a connection with your faith throughout your workday.
            </p>
            <p>
              Now featuring the <strong>Unified Ummah API</strong>, a single powerful API that delivers Quran, Hadith, Duas, Tafsir, Prayer Times, Hijri Date, and the 99 Names of Allah — all with intelligent caching for a smooth experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Task 7: Write Features component

**Files:**
- Create: `src/components/Features.tsx`

- [ ] **Write Features component**

```tsx
import { Heart, BookOpen, MessageCircle, Search, Clock, Globe, Moon, Star, Coffee, Bell, Wifi, Database, Bookmark, Layers } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function Features() {
  const features = [
    { icon: <Layers className="text-emerald-600 dark:text-emerald-400" size={24} />, title: '3-State Alternation', description: 'Automatically cycles between Hadith 💚, Ayah ❤️, and Duaa 🤲 at configurable intervals throughout your coding session.' },
    { icon: <BookOpen className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Random Qur\'anic Verses', description: 'Displays random Ayahs from the Noble Quran with Arabic text and English translation.' },
    { icon: <MessageCircle className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Random Hadiths', description: 'Shows authentic Hadiths from 7 major collections (Bukhari, Muslim, Tirmidhi, Abu Dawud, Ibn Majah, Nasai, Ahmad).' },
    { icon: <Search className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Ayah & Tafsir Lookup', description: 'Fetch any verse by surah/ayah number. Get detailed Tafsir from 4 sources: Ibn Kathir (AR/EN), Ma\'arif al-Qur\'an, and Tafsir Muyassar.' },
    { icon: <Clock className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Prayer Times', description: 'Auto-detects your location via IP. Displays all prayer times with current time indicator and next prayer countdown. Get notified 10 minutes before each prayer.' },
    { icon: <Heart className="text-emerald-600 dark:text-emerald-400" size={24} />, title: '126 Authentic Duas', description: 'A comprehensive collection of 126 authentic Duas from Quran and Sunnah across 27 categories, respecting your language preference.' },
    { icon: <Globe className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Hijri Date', description: 'Current Islamic date displayed directly from the Ummah API.' },
    { icon: <Star className="text-emerald-600 dark:text-emerald-400" size={24} />, title: '99 Names of Allah', description: 'Complete Asma ul Husna with Arabic script, transliteration, and English meanings.' },
    { icon: <Bookmark className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Dual Language Support', description: 'Full support for Arabic and English across all content types — Quran, Hadith, Duas, and interface.' },
    { icon: <Coffee className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Customizable Intervals', description: 'Set how often you see new content via the hasanah.delay setting. Auto-dismiss after a configurable portion of the interval.' },
    { icon: <Bell className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Prayer Notifications', description: 'Get reminded 10 minutes before each prayer and when it\'s exactly time to pray — so you never miss a salah.' },
    { icon: <Wifi className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Offline Fallback', description: 'Displays a default Duaa when no internet connection is available. Enhanced 24-hour caching for non-random content.' },
  ]

  return (
    <section id="features" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-700/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Key Features</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Everything you need to stay spiritually connected while you code
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Task 8: Write Prayer Times spotlight section

**Files:**
- Create: `src/components/PrayerTimesSection.tsx`

- [ ] **Write PrayerTimesSection**

```tsx
import { Clock, Sunrise, Sun, Sunset, Moon as MoonIcon, MapPin } from 'lucide-react'

export default function PrayerTimesSection() {
  const prayers = [
    { name: 'Fajr', icon: <Sunrise size={20} />, time: '05:12', color: 'text-amber-500' },
    { name: 'Sunrise', icon: <Sun size={20} />, time: '06:32', color: 'text-orange-500' },
    { name: 'Dhuhr', icon: <Sun size={20} />, time: '12:45', color: 'text-yellow-500' },
    { name: 'Asr', icon: <Sunset size={20} />, time: '16:15', color: 'text-orange-600' },
    { name: 'Maghrib', icon: <Sunset size={20} />, time: '18:55', color: 'text-red-500' },
    { name: 'Isha', icon: <MoonIcon size={20} />, time: '20:15', color: 'text-indigo-500' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Prayer Times</h2>
            <p className="text-gray-600 dark:text-gray-400">Auto-detects your location and keeps you informed of prayer timings</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-lg border border-emerald-100 dark:border-emerald-800/30">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-6">
              <MapPin size={18} />
              <span className="text-sm font-medium">Auto-detected location</span>
              <span className="text-xs text-gray-400 ml-auto">Next: Asr in 1h 23m</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {prayers.map((p, i) => (
                <div key={i} className="text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm border border-emerald-100 dark:border-gray-700">
                  <div className={`flex justify-center mb-2 ${p.color}`}>{p.icon}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{p.name}</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{p.time}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">Notifications 10 minutes before each prayer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Task 9: Write 99 Names section

**Files:**
- Create: `src/components/NamesOfAllahSection.tsx`

- [ ] **Write NamesOfAllahSection**

```tsx
export default function NamesOfAllahSection() {
  const names = [
    { arabic: 'الرحمن', en: 'Ar-Rahman', meaning: 'The Most Gracious' },
    { arabic: 'الرحيم', en: 'Ar-Raheem', meaning: 'The Most Merciful' },
    { arabic: 'الملك', en: 'Al-Malik', meaning: 'The King' },
    { arabic: 'القدوس', en: 'Al-Quddus', meaning: 'The Most Holy' },
    { arabic: 'السلام', en: 'As-Salam', meaning: 'The Source of Peace' },
    { arabic: 'المؤمن', en: 'Al-Mu\'min', meaning: 'The Guarantor' },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-700/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">99 Names of Allah</h2>
            <p className="text-gray-600 dark:text-gray-400">Complete Asma ul Husna with Arabic, transliteration, and meanings</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {names.map((n, i) => (
              <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-arabic mb-1 text-emerald-600 dark:text-emerald-400" style={{ fontFamily: 'serif' }}>{n.arabic}</div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{n.en}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{n.meaning}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            All 99 Names available in the extension — open via Command Palette
          </p>
        </div>
      </div>
    </section>
  )
}
```

### Task 10: Write What's New / Changelog

**Files:**
- Create: `src/components/WhatsNew.tsx`

- [ ] **Write WhatsNew component**

```tsx
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
```

### Task 11: Write GitHub Stats (replaces testimonials)

**Files:**
- Create: `src/components/GitHubStats.tsx`

- [ ] **Write GitHubStats component**

```tsx
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
```

### Task 12: Write Installation component

**Files:**
- Create: `src/components/Installation.tsx`

- [ ] **Write Installation component**

```tsx
import { Command, Download, Search } from 'lucide-react'

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
                  <tr><td className="py-2 font-mono text-emerald-600 dark:text-emerald-400">hasanah: get Hijri Date</td><td className="py-2 text-gray-600 dark:text-gray-300">Show current Islamic date</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Task 13: Write FAQ component

**Files:**
- Create: `src/components/FAQ.tsx`

- [ ] **Write FAQ component**

```tsx
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
```

### Task 14: Write CTA and Footer

**Files:**
- Create: `src/components/CTA.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Write CTA component**

```tsx
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
```

- [ ] **Write Footer component**

```tsx
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
            "So whoever does an atom's weight of good will see it." — Qur'an 99:7
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/oovaa/hasanah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hasanah Project. MIT Licensed. — صدقة جارية عن جميع المسلمين
          </p>
        </div>
      </div>
    </footer>
  )
}
```

### Task 15: Rewrite App.tsx to compose all components

**Files:**
- Modify: `src/App.tsx` (full rewrite to compose components)

- [ ] **Rewrite App.tsx**

```tsx
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
```

### Task 16: Verify build succeeds

- [ ] **Run npm install**

```bash
cd /tmp/opencode/hasanah-website && npm install 2>&1
```

- [ ] **Run the build**

```bash
cd /tmp/opencode/hasanah-website && npm run build 2>&1
```

Expected: Build succeeds with no errors, output in `dist/` directory.
