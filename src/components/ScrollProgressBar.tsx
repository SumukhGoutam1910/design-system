import React, { useEffect, useState, useRef, RefObject } from 'react';

type ScrollProgressBarProps = {
  containerRef?: RefObject<HTMLElement | null>;
  color?: string;
};

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ 
  containerRef,
  color = 'bg-primary'
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const container = containerRef?.current || document.documentElement;
    const scrollTop = container === document.documentElement 
      ? window.scrollY 
      : (container as HTMLElement).scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    const scrollContainer = containerRef?.current || window;
    scrollContainer.addEventListener('scroll', updateScrollProgress);
    return () => scrollContainer.removeEventListener('scroll', updateScrollProgress);
  }, [containerRef]);

  return (
    <div
      className={`fixed top-0 left-0 h-1 ${color} z-[60] transition-all duration-300 ease-out`}
      style={{ width: `${scrollProgress}%` }}
    />
  );
};