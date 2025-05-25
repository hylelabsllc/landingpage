'use client';

import { useEffect, useState } from 'react';

const END_TIME_KEY = 'offer_end_time';
const OFFER_DURATION_HOURS = 48;

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
      if (savedEndTime) {
        return parseInt(savedEndTime);
      }
      
      // Set new end time if none exists
      const endTime = Date.now() + (OFFER_DURATION_HOURS * 60 * 60 * 1000);
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
    <span className="countdown-timer font-mono">
      {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
    </span>
  );
} 