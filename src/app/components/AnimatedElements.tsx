'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const AnimatedLogo = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);

export const AnimatedHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h1 
    className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.h1>
);

export const AnimatedOfferBanner = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl animate-pulse flex items-center space-x-3"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);

export const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 px-3 py-2 relative group"
  >
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

export const AnimatedStatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    className="text-center relative group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-400/20 dark:from-primary-600/10 dark:to-primary-400/10 rounded-xl backdrop-blur-sm group-hover:from-primary-600/30 group-hover:to-primary-400/30 dark:group-hover:from-primary-600/20 dark:group-hover:to-primary-400/20 transition-all duration-300 shadow-lg group-hover:shadow-xl"></div>
    <div className="relative z-10 p-6">
      <motion.div 
        className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-700 dark:text-gray-300">{label}</div>
    </div>
  </motion.div>
);

export const AnimatedCompanyLogo = ({ num }: { num: number }) => (
  <motion.div 
    className="relative group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/15 to-primary-400/15 dark:from-primary-600/10 dark:to-primary-400/10 rounded-xl backdrop-blur-sm group-hover:from-primary-600/25 group-hover:to-primary-400/25 dark:group-hover:from-primary-600/15 dark:group-hover:to-primary-400/15 transition-all duration-300 shadow-md group-hover:shadow-lg"></div>
    <div className="relative z-10 p-4">
      <Image 
        src={`/images/company${num}.svg`} 
        alt={`Company ${num}`} 
        width={120} 
        height={40} 
        className="h-8 w-auto dark:invert" 
      />
    </div>
  </motion.div>
);

export const AnimatedProductCard = ({ product }: { 
  product: {
    name: string;
    image: string;
    description: string;
    features: string[];
    link: string;
    linkText: string;
  }
}) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 group"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
      <Image
        src={product.image}
        alt={`${product.name} Background`}
        fill
        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-400/90 mix-blend-multiply"></div>
      <motion.h3 
        className="text-3xl font-bold text-white relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {product.name}
      </motion.h3>
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{product.name}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
    <div className="space-y-4">
      {product.features.map((feature, idx) => (
        <motion.div 
          key={idx}
          className="flex items-center text-gray-600 dark:text-gray-300 group/item"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 transform group-hover/item:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{feature}</span>
        </motion.div>
      ))}
    </div>
    <Link href={product.link} className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group">
      {product.linkText}
      <motion.svg 
        className="w-5 h-5 ml-2"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </motion.svg>
    </Link>
  </motion.div>
);

export const AnimatedFeatureCard = ({ icon, title, description }: { 
  icon: string;
  title: string;
  description: string;
}) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <motion.div 
      className="text-primary-600 dark:text-primary-400 text-4xl mb-4"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export const AnimatedContactButton = () => (
  <motion.a 
    href="mailto:contact@hylelab.com"
    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <motion.svg 
      className="w-5 h-5 mr-2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </motion.svg>
    contact@hylelab.com
  </motion.a>
); 