import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import BrowserTitle from "./components/BrowserTitle";
import CountdownTimer from "./components/CountdownTimer";
import dynamic from 'next/dynamic';
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import {
  AnimatedLogo,
  AnimatedHeading,
  AnimatedOfferBanner,
  AnimatedNavLink,
  AnimatedStatCard,
  AnimatedCompanyLogo,
  AnimatedProductCard,
  AnimatedFeatureCard,
  AnimatedContactButton
} from "./components/AnimatedElements";

const WorldAnimation = dynamic(() => import('@/app/components/WorldAnimation'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 opacity-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" />
});

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <BrowserTitle />
        <WorldAnimation />
        
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-900/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <AnimatedLogo>
                    <Image
                      src="/images/logo.svg"
                      alt="Hyle Labs Logo"
                      width={40}
                      height={40}
                      className="mr-2"
                    />
                  </AnimatedLogo>
                  <AnimatedHeading>Hyle Labs</AnimatedHeading>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <AnimatedOfferBanner>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Limited Time Offer</span>
                  <CountdownTimer />
                </AnimatedOfferBanner>
                <div className="flex items-center space-x-8">
                  {['About', 'Products', 'Contact'].map((item) => (
                    <AnimatedNavLink key={item} href={`#${item.toLowerCase()}`}>
                      {item}
                    </AnimatedNavLink>
                  ))}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold text-sm">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Join 10,000+ Businesses Growing with Us
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                <span className="inline-block">Transforming Ideas into</span>
                <span className="inline-block mt-4">
                  <AnimatedText />
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Don't miss out on the AI revolution. Join the elite group of businesses that are scaling their operations with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Start Growing Today
                  </span>
                </Link>
                <Link href="#products" className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary-200 dark:border-primary-800 text-center flex items-center justify-center group">
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
                {[
                  { value: '3x', label: 'Average Revenue Growth' },
                  { value: '40%', label: 'Higher Conversion Rates' },
                  { value: '99.9%', label: 'Platform Uptime' },
                  { value: '24/7', label: 'Expert Support' }
                ].map((stat) => (
                  <AnimatedStatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
              <div className="mt-16">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">TRUSTED BY LEADING COMPANIES</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {[1, 2, 3, 4].map((num) => (
                    <AnimatedCompanyLogo key={num} num={num} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Products That Drive Growth
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our suite of products is designed to help businesses scale efficiently and effectively.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: 'NeosBuy',
                  image: '/images/neosbuy-bg.jpg',
                  description: 'Transform your e-commerce business with our AI-powered platform. Experience 3x faster growth with automated optimization and personalized shopping experiences.',
                  features: [
                    'AI-Powered Recommendations',
                    'Automated Inventory Management',
                    'Real-time Analytics Dashboard'
                  ],
                  link: 'https://neosbuy.app',
                  linkText: 'Start Growing Your Store'
                },
                {
                  name: 'ResumeCrafter',
                  image: '/images/resumecrafter-bg.jpg',
                  description: 'Land your dream job with our AI-powered resume builder. Our users see a 3x increase in interview callbacks and 40% higher salary offers.',
                  features: [
                    'AI-Powered Content Suggestions',
                    'ATS-Optimized Templates',
                    'Real-time Feedback & Analytics'
                  ],
                  link: 'https://resumecrafter.co',
                  linkText: 'Create Your Winning Resume'
                }
              ].map((product) => (
                <AnimatedProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Why Choose Hyle Labs?
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're not just another tech company. We're growth partners who understand that success comes from combining cutting-edge technology with proven business strategies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: '🚀', title: 'Proven Results', description: 'Our clients see 3x growth within 6 months' },
                  { icon: '💡', title: 'Innovation First', description: 'Always ahead of the curve with AI & ML' },
                  { icon: '🤝', title: 'Dedicated Support', description: '24/7 expert assistance for your success' }
                ].map((item) => (
                  <AnimatedFeatureCard 
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already growing with Hyle Labs. Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <AnimatedContactButton />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Average response time: 2 hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Hyle Labs LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
