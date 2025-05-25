'use client';

import { useEffect } from 'react';
import Head from 'next/head';

interface BrowserTitleProps {
  title?: string;
  isAnimated?: boolean;
}

export default function BrowserTitle({ title = "Hyle Labs", isAnimated = true }: BrowserTitleProps) {
  useEffect(() => {
    if (isAnimated) {
      let currentIndex = 0;
      const titles = [
        "Hyle Labs - Limited Time Offer: 48 Hours Left!",
        "Hyle Labs - Join 10,000+ Growing Businesses",
        "Hyle Labs - Don't Miss the AI Revolution",
        "Hyle Labs - Exclusive Early Access",
        "Hyle Labs - Special Launch Pricing",
        "Hyle Labs - Transform Your Business Today",
        "Hyle Labs - Limited Spots Available",
        "Hyle Labs - Early Bird Offer Ending Soon"
      ];

      const interval = setInterval(() => {
        document.title = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
      }, 3000);

      // Add visibility change handler
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // When tab is not visible, show attention-grabbing messages
          const attentionMessages = [
            "⏰ Limited Time Offer - 48 Hours Left!",
            "🔥 Don't Miss Out on Growth!",
            "🚀 Early Bird Pricing Ending Soon!",
            "💎 Exclusive Access Available Now!",
            "🎯 Join 10,000+ Successful Businesses!",
            "⚡ Special Launch Offer - Act Fast!",
            "🌟 Limited Spots - Don't Wait!",
            "💫 Transform Your Business Today!"
          ];
          document.title = attentionMessages[Math.floor(Math.random() * attentionMessages.length)];
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        clearInterval(interval);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } else {
      document.title = title;
    }
  }, [title, isAnimated]);

  return (
    <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="theme-color" content="#4F46E5" />
    </Head>
  );
} 