export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="text-2xl font-bold text-white">
            Claude<span className="text-purple-400">Vercel</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition">
            Features
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition">
            About
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fadeInUp">
              Welcome to the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                AI-Powered Development
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Experience the perfect combination of Claude AI and Vercel's powerful deployment platform.
              Build, deploy, and scale your applications with unprecedented ease.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <a
                href="#features"
                className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-float"></div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-400">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to build modern applications
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Powered by cutting-edge AI and deployed on the world's fastest edge network.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition transform hover:scale-105">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <svg className="h-5 w-5 flex-none text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                  AI-Powered Intelligence
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Leverage Claude's advanced language understanding to create intelligent, context-aware applications.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition transform hover:scale-105">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <svg className="h-5 w-5 flex-none text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                  </svg>
                  Instant Deployment
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Deploy to Vercel's global edge network in seconds. Zero configuration, maximum performance.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition transform hover:scale-105">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <svg className="h-5 w-5 flex-none text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                  </svg>
                  Continuous Innovation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Stay ahead with automatic updates and the latest features from both Claude and Vercel platforms.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join thousands of developers building the future with AI-powered tools.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-purple-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition transform hover:scale-105"
            >
              Start Building
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition">
              View Documentation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; 2024 ClaudeVercel. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>
    </main>
  )
}
