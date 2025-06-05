'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const WorldAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    const drawWorld = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35; // Made larger

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw background with less transparency
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
      ctx.fillRect(0, 0, width, height);

      // Save context state
      ctx.save();

      // Translate to center
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      // Draw sphere with more opacity
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      
      if (theme === 'dark') {
        // Moon gradient with more opacity
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(224, 224, 224, 0.8)');
        gradient.addColorStop(1, 'rgba(128, 128, 128, 0.8)');
      } else {
        // Earth gradient with more opacity
        gradient.addColorStop(0, 'rgba(74, 144, 226, 0.8)');
        gradient.addColorStop(0.5, 'rgba(53, 122, 189, 0.8)');
        gradient.addColorStop(1, 'rgba(44, 62, 80, 0.8)');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Add details based on theme with more opacity
      if (theme === 'dark') {
        // Moon craters
        ctx.fillStyle = 'rgba(160, 160, 160, 0.8)';
        ctx.beginPath();
        ctx.arc(-radius * 0.3, -radius * 0.2, radius * 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(radius * 0.2, radius * 0.3, radius * 0.15, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Earth continents
        ctx.fillStyle = 'rgba(46, 204, 113, 0.8)';
        ctx.beginPath();
        ctx.arc(-radius * 0.3, -radius * 0.2, radius * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(radius * 0.2, radius * 0.3, radius * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }

      // Restore context state
      ctx.restore();

      // Update rotation
      rotation += 0.003;

      // Continue animation
      animationFrameId = requestAnimationFrame(drawWorld);
    };

    // Start animation
    drawWorld();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default WorldAnimation; 