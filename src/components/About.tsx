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
