import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import BrowserTitle from "./components/BrowserTitle";
import CountdownTimer from "./components/CountdownTimer";
import dynamic from 'next/dynamic';

const WorldAnimation = dynamic(() => import('./components/WorldAnimation'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <BrowserTitle />
      <WorldAnimation />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Hyle Labs Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Hyle Labs
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Limited Time Offer</span>
                <CountdownTimer />
              </div>
              <Link href="#about" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2">About</Link>
              <Link href="#products" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2">Products</Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Join 10,000+ Businesses Growing with Us
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="inline-block">
                Transforming Ideas into
              </span>
              <span className="inline-block mt-4">
                <AnimatedText />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Don't miss out on the AI revolution. Join the elite group of businesses that are scaling their operations with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-center flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Start Growing Today
                </span>
              </Link>
              <Link href="#products" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border border-primary-200 text-center flex items-center justify-center group">
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  See How It Works
                </span>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">3x</div>
                <div className="text-sm text-gray-600">Average Revenue Growth</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Higher Conversion Rates</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Platform Uptime</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-4">TRUSTED BY LEADING COMPANIES</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
                <Image src="/images/company1.svg" alt="Company 1" width={120} height={40} className="h-8 w-auto" />
                <Image src="/images/company2.svg" alt="Company 2" width={120} height={40} className="h-8 w-auto" />
                <Image src="/images/company3.svg" alt="Company 3" width={120} height={40} className="h-8 w-auto" />
                <Image src="/images/company4.svg" alt="Company 4" width={120} height={40} className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Products That Drive Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our suite of products is designed to help businesses scale efficiently and effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-200">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/neosbuy-bg.svg"
                  alt="NeosBuy Background"
                  fill
                  className="object-cover opacity-20"
                  priority
                />
                <h3 className="text-3xl font-bold text-primary-600 relative z-10">NeosBuy</h3>
              </div>
              <h3 className="text-2xl font-semibold mb-4">NeosBuy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your e-commerce business with our AI-powered platform. Experience 3x faster growth with automated optimization and personalized shopping experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI-Powered Recommendations
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automated Inventory Management
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time Analytics Dashboard
                </div>
              </div>
              <Link href="https://neosbuy.app" className="mt-6 inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group">
                Start Growing Your Store
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-200">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/resumecrafter-bg.svg"
                  alt="ResumeCrafter Background"
                  fill
                  className="object-cover opacity-20"
                  priority
                />
                <h3 className="text-3xl font-bold text-primary-600 relative z-10">ResumeCrafter</h3>
              </div>
              <h3 className="text-2xl font-semibold mb-4">ResumeCrafter</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Land your dream job with our AI-powered resume builder. Our users see a 3x increase in interview callbacks and 40% higher salary offers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI-Powered Content Suggestions
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ATS-Optimized Templates
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time Feedback & Analytics
                </div>
              </div>
              <Link href="https://resumecrafter.co" className="mt-6 inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group">
                Create Your Winning Resume
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Why Choose Hyle Labs?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just another tech company. We're growth partners who understand that success comes from combining cutting-edge technology with proven business strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-primary-600 text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">Our clients see 3x growth within 6 months</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-primary-600 text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-gray-600">Always ahead of the curve with AI & ML</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-primary-600 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600">24/7 expert assistance for your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses already growing with Hyle Labs. Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a href="mailto:contact@hylelab.com" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@hylelab.com
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Average response time: 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Hyle Labs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
