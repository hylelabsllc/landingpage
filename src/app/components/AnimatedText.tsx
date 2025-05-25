'use client';

import { useState, useEffect } from 'react';

const phrases = [
  "Digital Reality",
  "Growth Engine",
  "Success Story",
  "Revenue Machine",
  "AI Solutions",
  "ML Innovation",
  "Smart Systems",
  "Future Tech"
];

export default function AnimatedText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];

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
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentPhraseIndex]);

  return (
    <span className="changing-text bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
      {displayText}
    </span>
  );
} 