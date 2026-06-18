export default function NamesOfAllahSection() {
  const names = [
    { arabic: 'الرحمن', en: 'Ar-Rahman', meaning: 'The Most Gracious' },
    { arabic: 'الرحيم', en: 'Ar-Raheem', meaning: 'The Most Merciful' },
    { arabic: 'الملك', en: 'Al-Malik', meaning: 'The King' },
    { arabic: 'القدوس', en: 'Al-Quddus', meaning: 'The Most Holy' },
    { arabic: 'السلام', en: 'As-Salam', meaning: 'The Source of Peace' },
    { arabic: 'المؤمن', en: "Al-Mu'min", meaning: 'The Guarantor' },
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
                <div className="text-2xl mb-1 text-emerald-600 dark:text-emerald-400" style={{ fontFamily: 'serif' }}>{n.arabic}</div>
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
