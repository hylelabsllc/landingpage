'use client';

import { useState, useEffect } from 'react';

interface FunnelTextProps {
  section: 'about' | 'products' | 'contact';
}

const funnelTexts = {
  about: [
    "Discover Our Story",
    "Meet Our Team",
    "Our Mission",
    "Why Choose Us"
  ],
  products: [
    "Explore Our Solutions",
    "See How It Works",
    "Success Stories",
    "Get Started Today"
  ],
  contact: [
    "Let's Connect",
    "Start Your Journey",
    "Schedule a Demo",
    "Join Our Community"
  ]
};

export default function FunnelText({ section }: FunnelTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = funnelTexts[section][currentIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % funnelTexts[section].length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, section]);

  return (
    <span className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
      {displayText}
    </span>
  );
} 