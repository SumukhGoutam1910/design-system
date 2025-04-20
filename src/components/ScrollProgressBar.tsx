import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-300 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};