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
