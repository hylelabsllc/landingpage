'use client';

import { useEffect, useState } from 'react';

const END_TIME_KEY = 'offer_end_time';
const OFFER_DURATION_HOURS = 48;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Initialize or get the end time from localStorage
    const initializeEndTime = () => {
      const savedEndTime = localStorage.getItem(END_TIME_KEY);
      const currentTime = Date.now();
      
      if (savedEndTime) {
        const parsedEndTime = parseInt(savedEndTime);
        // Check if the saved end time is still valid (not expired)
        if (parsedEndTime > currentTime) {
          return parsedEndTime;
        }
      }
      
      // Set new end time if none exists or if expired
      const endTime = currentTime + (OFFER_DURATION_HOURS * 60 * 60 * 1000);
      localStorage.setItem(END_TIME_KEY, endTime.toString());
      return endTime;
    };

    const endTime = initializeEndTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const timeRemaining = endTime - now;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        // Clear the expired end time
        localStorage.removeItem(END_TIME_KEY);
        return;
      }

      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <span className="countdown-timer font-mono bg-red-600/20 px-2 py-1 rounded">
      {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
    </span>
  );
} 