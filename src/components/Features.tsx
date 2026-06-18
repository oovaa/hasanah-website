import { Heart, BookOpen, MessageCircle, Search, Clock, Globe, Moon, Star, Coffee, Bell, Wifi, Layers } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function Features() {
  const features = [
    { icon: <Layers className="text-emerald-600 dark:text-emerald-400" size={24} />, title: '3-State Alternation', description: 'Automatically cycles between Hadith 💚, Ayah ❤️, and Duaa 🤲 at configurable intervals throughout your coding session.' },
    { icon: <BookOpen className="text-emerald-600 dark:text-emerald-400" size={24} />, title: "Random Qur'anic Verses", description: 'Displays random Ayahs from the Noble Quran with Arabic text and English translation.' },
    { icon: <MessageCircle className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Random Hadiths', description: 'Shows authentic Hadiths from 7 major collections (Bukhari, Muslim, Tirmidhi, Abu Dawud, Ibn Majah, Nasai, Ahmad).' },
    { icon: <Search className="text-emerald-600 dark:text-emerald-400" size={24} />, title: "Ayah & Tafsir Lookup", description: "Fetch any verse by surah/ayah number. Get detailed Tafsir from 4 sources: Ibn Kathir (AR/EN), Ma'arif al-Qur'an, and Tafsir Muyassar." },
    { icon: <Clock className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Prayer Times', description: 'Auto-detects your location via IP. Displays all prayer times with current time indicator and next prayer countdown. Get notified 10 minutes before each prayer.' },
    { icon: <Heart className="text-emerald-600 dark:text-emerald-400" size={24} />, title: '126 Authentic Duas', description: 'A comprehensive collection of 126 authentic Duas from Quran and Sunnah across 27 categories, respecting your language preference.' },
    { icon: <Globe className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Hijri Date', description: 'Current Islamic date displayed directly from the Ummah API.' },
    { icon: <Moon className="text-emerald-600 dark:text-emerald-400" size={24} />, title: '99 Names of Allah', description: 'Complete Asma ul Husna with Arabic script, transliteration, and English meanings.' },
    { icon: <Star className="text-emerald-600 dark:text-emerald-400" size={24} />, title: 'Dual Language Support', description: 'Full support for Arabic and English across all content types — Quran, Hadith, Duas, and interface.' },
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
