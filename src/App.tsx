import {
  Github,
  Heart,
  Code2,
  Settings2,
  Command,
  Download,
  Star,
  Coffee,
  BookOpen,
  Clock,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Plus,
  Minus,
} from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { useState, useEffect } from 'react'

// Helper to get initial dark mode preference
function getInitialDarkMode() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false // Default to false if window is not defined (SSR)
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Persist and apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  useEffect(() => {
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'installation']
      const scrollPosition = window.scrollY + 100

      let currentSection = 'home'
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop - 80 &&
            scrollPosition < offsetTop + offsetHeight - 80
          ) {
            currentSection = sectionId
            break
          }
        }
      }
      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300`}
    >
      {/* Header Section */}
      <header
        id='home'
        className='bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/80 dark:to-teal-900/80 transition-colors duration-300 sticky top-0 z-50 backdrop-blur-sm shadow-sm'
      >
        <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
          <div className='text-2xl font-bold text-emerald-700 dark:text-emerald-400'>
            Hasanah
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6 lg:gap-8'>
            <button
              onClick={() => scrollToSection('about')}
              className={`px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-emerald-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                activeSection === 'about'
                  ? 'text-emerald-600 dark:text-emerald-400 font-medium after:w-full after:left-0'
                  : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={`px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-emerald-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                activeSection === 'features'
                  ? 'text-emerald-600 dark:text-emerald-400 font-medium after:w-full after:left-0'
                  : ''
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('installation')}
              className={`px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-emerald-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                activeSection === 'installation'
                  ? 'text-emerald-600 dark:text-emerald-400 font-medium after:w-full after:left-0'
                  : ''
              }`}
            >
              Installation
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200'
              aria-label='Toggle dark mode'
            >
              {darkMode ? (
                <Sun className='text-yellow-400' size={20} />
              ) : (
                <Moon className='text-gray-600' size={20} />
              )}
            </button>

            <a
              href='https://github.com/oovaa/hasanah'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200'
              aria-label='View source on GitHub'
            >
              <Github size={20} />
            </a>

            <a
              href='https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
            >
              Install Now
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className='md:hidden flex items-center gap-2'>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200'
              aria-label='Toggle dark mode'
            >
              {darkMode ? (
                <Sun className='text-yellow-400' size={20} />
              ) : (
                <Moon className='text-gray-600' size={20} />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200'
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className='md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-4 my-2 py-4 absolute top-full left-0 right-0 z-40 transition-opacity duration-300 ease-in-out'>
            <div className='flex flex-col gap-4 px-6'>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-left py-2 ${
                  activeSection === 'about'
                    ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`text-left py-2 ${
                  activeSection === 'features'
                    ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('installation')}
                className={`text-left py-2 ${
                  activeSection === 'installation'
                    ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Installation
              </button>
              <a
                href='https://github.com/oovaa/hasanah'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 py-2 text-gray-600 dark:text-gray-300'
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href='https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors'
              >
                <Download size={20} />
                <span>Install Now</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {/* Hero Content */}
        <section
          id='hero-content'
          className='bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-300'
        >
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <div className='flex flex-wrap justify-center gap-2 mb-4'>
                <span className='px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-semibold'>
                  Version 9.3.0
                </span>
                <span className='px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-semibold'>
                  MIT License
                </span>
              </div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
                Keep Qur'an & Hadith Close While You Code{' '}
                <span className='text-emerald-600 dark:text-emerald-400'>
                  🕌
                </span>
              </h1>
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8'>
                Hasanah is a VS Code extension that brings the beauty of the
                Qur'an and Hadith directly into your coding environment, helping
                you stay spiritually connected while you work.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <a
                  href='https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                >
                  <Download size={20} />
                  Install Extension
                </a>
                <a
                  href='https://github.com/oovaa/hasanah'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                >
                  <Star size={20} />
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          id='about'
          className='py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 scroll-mt-20'
        >
          <div className='container mx-auto px-6'>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 md:mb-16'>
                <div className='text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-colors duration-300'>
                  <div className='w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Clock
                      className='text-emerald-600 dark:text-emerald-400'
                      size={24}
                    />
                  </div>
                  <h3 className='font-semibold mb-1 text-gray-800 dark:text-white'>
                    Latest Release
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    February 4, 2025
                  </p>
                </div>
                <div className='text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-colors duration-300'>
                  <div className='w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <BookOpen
                      className='text-emerald-600 dark:text-emerald-400'
                      size={24}
                    />
                  </div>
                  <h3 className='font-semibold mb-1 text-gray-800 dark:text-white'>
                    VS Code Version
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    1.93.0+
                  </p>
                </div>
                <div className='text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-colors duration-300'>
                  <div className='w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Globe
                      className='text-emerald-600 dark:text-emerald-400'
                      size={24}
                    />
                  </div>
                  <h3 className='font-semibold mb-1 text-gray-800 dark:text-white'>
                    Languages
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    Arabic & English
                  </p>
                </div>
              </div>

              <div className='prose prose-emerald dark:prose-invert max-w-none lg:prose-lg'>
                <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white !mb-8'>
                  About Hasanah
                </h2>
                <p>
                  Hasanah is more than just an extension - it's your spiritual
                  companion while coding. Born from the desire to keep Islamic
                  teachings close during development work, Hasanah seamlessly
                  integrates Qur'anic verses and Hadiths into your VS Code
                  environment.
                </p>
                <p>
                  Whether you're debugging a complex issue or building new
                  features, Hasanah provides timely reminders and inspiration
                  from Islamic teachings, helping maintain a connection with
                  your faith throughout your workday.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id='features'
          className='py-16 md:py-20 bg-gray-50 dark:bg-gray-700/30 transition-colors duration-300 scroll-mt-20'
        >
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16'>
              Key Features
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <FeatureCard
                icon={
                  <Heart
                    className='text-emerald-600 dark:text-emerald-400'
                    size={24}
                  />
                }
                title='Daily Inspiration'
                description="Receive random Qur'anic verses and Hadiths at customizable intervals throughout your coding session."
              />
              <FeatureCard
                icon={
                  <Code2
                    className='text-emerald-600 dark:text-emerald-400'
                    size={24}
                  />
                }
                title='Dual Language Support'
                description="Choose between Arabic and English translations for both Qur'anic verses and Hadiths."
              />
              <FeatureCard
                icon={
                  <Settings2
                    className='text-emerald-600 dark:text-emerald-400'
                    size={24}
                  />
                }
                title='Customizable Settings'
                description='Adjust notification intervals and language preferences to match your workflow.'
              />
              <FeatureCard
                icon={
                  <Command
                    className='text-emerald-600 dark:text-emerald-400'
                    size={24}
                  />
                }
                title='Command Palette Integration'
                description="Quick access to specific verses and the current Hijri date through VS Code's command palette."
              />
              <FeatureCard
                icon={
                  <Coffee
                    className='text-emerald-600 dark:text-emerald-400'
                    size={24}
                  />
                }
                title='Lightweight'
                description="Minimal impact on VS Code's performance while providing meaningful spiritual reminders."
              />
              <FeatureCard
                icon={
                  <Star
                    className='text-emerald-600 dark:text-emerald-400'
                    size={24}
                  />
                }
                title='Open Source'
                description='Free and open-source software, welcoming contributions from the community.'
              />
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section
          id='installation'
          className='py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 scroll-mt-20'
        >
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16'>
              Getting Started
            </h2>
            <div className='max-w-3xl mx-auto'>
              <div className='bg-gray-50 dark:bg-gray-700/50 rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-300'>
                <h3 className='text-xl font-semibold mb-6 text-gray-800 dark:text-white'>
                  Installation Steps
                </h3>
                <ol className='space-y-4 text-gray-700 dark:text-gray-300'>
                  <li className='flex items-start gap-3'>
                    <span className='flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold'>
                      1
                    </span>
                    <span>Open Visual Studio Code.</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold'>
                      2
                    </span>
                    <span>
                      Go to the Extensions view by clicking the Extensions icon
                      in the Activity Bar on the side of the window or press{' '}
                      <kbd className='px-1.5 py-0.5 mx-0.5 rounded bg-gray-200 dark:bg-gray-600 text-xs font-mono'>
                        Ctrl+Shift+X
                      </kbd>{' '}
                      (Windows/Linux) or{' '}
                      <kbd className='px-1.5 py-0.5 mx-0.5 rounded bg-gray-200 dark:bg-gray-600 text-xs font-mono'>
                        Cmd+Shift+X
                      </kbd>{' '}
                      (macOS).
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold'>
                      3
                    </span>
                    <span>
                      Search for{' '}
                      <code className='px-1.5 py-0.5 mx-0.5 rounded bg-gray-200 dark:bg-gray-600 text-sm font-mono'>
                        Hasanah
                      </code>{' '}
                      or{' '}
                      <code className='px-1.5 py-0.5 mx-0.5 rounded bg-gray-200 dark:bg-gray-600 text-sm font-mono'>
                        omarabdo.hasanah
                      </code>
                      .
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold'>
                      4
                    </span>
                    <span>Click the 'Install' button.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-16 md:py-20 bg-emerald-50 dark:bg-emerald-900/20 transition-colors duration-300'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16'>
              What Developers Say
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <TestimonialCard
                quote='Hasanah has transformed my coding routine. The reminders keep me grounded throughout the day.'
                author='Ahmed R.'
                role='Senior Developer'
              />
              <TestimonialCard
                quote='As a Muslim developer, this extension helps me maintain my spiritual connection while working.'
                author='Fatima K.'
                role='Frontend Engineer'
              />
              <TestimonialCard
                quote='The perfect balance between productivity and spirituality. Highly recommended!'
                author='Yusuf M.'
                role='CTO'
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300'>
          <div className='container mx-auto px-6 max-w-4xl'>
            <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-4'>
              <FAQItem
                question='Is Hasanah free to use?'
                answer='Yes, Hasanah is completely free and open-source under the MIT license. You can use it, modify it, and contribute to its development.'
              />
              <FAQItem
                question='Does it work with VS Code Insiders?'
                answer='Yes, Hasanah is compatible with both VS Code Stable and VS Code Insiders editions.'
              />
              <FAQItem
                question='Can I suggest new features or report bugs?'
                answer='Absolutely! We welcome feature requests, bug reports, and contributions on our GitHub repository. Please open an issue or pull request.'
              />
              <FAQItem
                question='How often are new verses/hadiths shown?'
                answer='By default, new reminders appear every 60 minutes, but you can easily customize this interval in the VS Code settings under Hasanah configuration.'
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 transition-colors duration-300'>
          <div className='container mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
              Ready to Enhance Your Coding Experience?
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
              Install Hasanah today and bring spiritual inspiration to your
              development workflow.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <a
                href='https://marketplace.visualstudio.com/items?itemName=omarabdo.hasanah'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
              >
                <Download size={20} />
                Install Extension
              </a>
              <a
                href='https://github.com/oovaa/hasanah'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 py-12 transition-colors duration-300'>
        <div className='container mx-auto px-6'>
          <div className='text-center'>
            <p className='mb-4'>
              Made with <span className='text-red-500 animate-pulse'>❤️</span>{' '}
              by the Muslim developer community
            </p>
            <p className='text-sm mb-6 italic text-gray-400'>
              "And whoever does an atom's weight of good will see it." (Qur'an
              99:7)
            </p>
            <div className='flex justify-center gap-6 mb-6'>
              <a
                href='https://github.com/oovaa/hasanah'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-emerald-400 transition-colors'
                aria-label='GitHub Repository'
              >
                <Github size={24} />
              </a>
            </div>
            <p className='text-xs text-gray-500'>
              © {new Date().getFullYear()} Hasanah Project. MIT Licensed.
            </p>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  )
}

// --- Reusable Components ---

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
      <div className='flex-shrink-0 mb-4 w-10 h-10 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 rounded-full'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
        {title}
      </h3>
      <p className='text-gray-600 dark:text-gray-300 flex-grow'>
        {description}
      </p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col'>
      <div className='mb-4 text-yellow-400 dark:text-yellow-500 flex-shrink-0'>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className='inline fill-current mr-0.5' />
        ))}
      </div>
      <blockquote className='text-gray-600 dark:text-gray-300 mb-4 italic flex-grow'>
        “{quote}”
      </blockquote>
      <div className='mt-auto flex-shrink-0'>
        <div className='font-medium text-gray-900 dark:text-white'>
          {author}
        </div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>{role}</div>
      </div>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors duration-300'>
      <button
        className='w-full px-4 py-3 text-left font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors duration-300 flex justify-between items-center'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
      >
        <span>{question}</span>
        <span
          className={`text-emerald-600 dark:text-emerald-400 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700'>
          {answer}
        </div>
      </div>
    </div>
  )
}

export default App
