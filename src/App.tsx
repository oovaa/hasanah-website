import { Github, Heart, Code2, Settings2, Command, Download, Star, Coffee, BookOpen, Clock, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-50 to-teal-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-700">Hasanah</div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/oovaa/hasanah" className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Install Now
            </a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">Version 9.3.0</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">MIT License</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Keep Qur'an & Hadith Close While You Code 🕌
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hasanah is a VS Code extension that brings the beauty of the Qur'an and Hadith directly into your coding environment, helping you stay spiritually connected while you work.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah" 
                 className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <Download size={20} />
                Install Extension
              </a>
              <a href="https://github.com/oovaa/hasanah" 
                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                <Star size={20} />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-emerald-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Latest Release</h3>
                <p className="text-gray-600">February 4, 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-emerald-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">VS Code Version</h3>
                <p className="text-gray-600">1.93.0 or higher</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-emerald-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-gray-600">Arabic & English</p>
              </div>
            </div>
            <div className="prose prose-emerald max-w-none">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Hasanah</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">What's New in Version 9.2.1</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Added offline default duaa support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Auto-dismissing notifications after two-thirds of delay time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Improved caching for Hijri Date command</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Enhanced developer experience improvements</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Hasanah is more than just an extension - it's your spiritual companion while coding. Born from the desire to keep Islamic teachings close during development work, Hasanah seamlessly integrates Qur'anic verses and Hadiths into your VS Code environment.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're debugging a complex issue or building new features, Hasanah provides timely reminders and inspiration from Islamic teachings, helping maintain a connection with your faith throughout your workday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="text-emerald-600" size={24} />}
              title="Daily Inspiration"
              description="Receive random Qur'anic verses and Hadiths at customizable intervals throughout your coding session."
            />
            <FeatureCard
              icon={<Code2 className="text-emerald-600" size={24} />}
              title="Dual Language Support"
              description="Choose between Arabic and English translations for both Qur'anic verses and Hadiths."
            />
            <FeatureCard
              icon={<Settings2 className="text-emerald-600" size={24} />}
              title="Customizable Settings"
              description="Adjust notification intervals and language preferences to match your workflow."
            />
            <FeatureCard
              icon={<Command className="text-emerald-600" size={24} />}
              title="Command Palette Integration"
              description="Quick access to specific verses and the current Hijri date through VS Code's command palette."
            />
            <FeatureCard
              icon={<Coffee className="text-emerald-600" size={24} />}
              title="Lightweight"
              description="Minimal impact on VS Code's performance while providing meaningful spiritual reminders."
            />
            <FeatureCard
              icon={<Star className="text-emerald-600" size={24} />}
              title="Open Source"
              description="Free and open-source software, welcoming contributions from the community."
            />
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Getting Started</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">1</span>
                  <span>Open VS Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">2</span>
                  <span>Press <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl+P</kbd> (or <kbd className="px-2 py-1 bg-gray-100 rounded">Cmd+P</kbd> on Mac)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">3</span>
                  <span>Type <code className="px-2 py-1 bg-gray-100 rounded">ext install omarabdo.hasanah</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">4</span>
                  <span>Press <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> and enjoy!</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="mb-4">Made with ❤️ by the Muslim developer community</p>
            <p className="text-sm">
              "And whoever does an atom's weight of good will see it." (Quran 99:7)
            </p>
            <div className="mt-6 flex justify-center gap-6">
              <a href="https://github.com/oovaa/hasanah" className="hover:text-emerald-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;