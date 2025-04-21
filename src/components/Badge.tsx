import React, { useRef, useEffect } from 'react';

type BadgeProps = {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  playSound?: boolean;
};

const colorGlowClasses = {
  primary: 'shadow-[0_0_12px_4px_rgba(99,102,241,0.6)] hover:shadow-[0_0_16px_6px_rgba(99,102,241,0.8)]',
  secondary: 'shadow-[0_0_10px_2px_rgba(234,179,8,0.6)] hover:shadow-[0_0_14px_6px_rgba(234,179,8,0.8)]',
  success: 'shadow-[0_0_10px_2px_rgba(16,185,129,0.6)] hover:shadow-[0_0_14px_6px_rgba(16,185,129,0.8)]',
  error: 'shadow-[0_0_10px_2px_rgba(244,63,94,0.6)] hover:shadow-[0_0_14px_6px_rgba(244,63,94,0.8)]',
  warning: 'shadow-[0_0_10px_2px_rgba(249,115,22,0.6)] hover:shadow-[0_0_14px_6px_rgba(249,115,22,0.8)]',
  info: 'shadow-[0_0_10px_2px_rgba(14,165,233,0.6)] hover:shadow-[0_0_14px_6px_rgba(14,165,233,0.8)]',
};

const sizeClasses = {
  sm: 'text-xs h-5 px-2.5 scale-[0.95]',
  md: 'text-sm h-6 px-3',
  lg: 'text-base h-8 px-4 scale-[1.05]',
};

const colorGradientClasses = {
  primary: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  secondary: 'bg-gradient-to-r from-yellow-400 to-amber-600',
  success: 'bg-gradient-to-r from-emerald-400 to-green-600',
  error: 'bg-gradient-to-r from-rose-500 to-red-700',
  warning: 'bg-gradient-to-r from-orange-400 to-yellow-600',
  info: 'bg-gradient-to-r from-sky-400 to-blue-500',
};

const rippleColors = {
  primary: 'rgba(99,102,241,0.4)',
  secondary: 'rgba(234,179,8,0.4)',
  success: 'rgba(16,185,129,0.4)',
  error: 'rgba(244,63,94,0.4)',
  warning: 'rgba(249,115,22,0.4)',
  info: 'rgba(14,165,233,0.4)',
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'primary',
  size = 'md',
  onClick,
  playSound = true,
}) => {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Add ripple animation style to document once on component mount
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    // Create audio element for click sound
    audioRef.current = new Audio('/sounds/click.mp3');
    audioRef.current.preload = 'auto';
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (onClick) onClick();
    
    // Play click sound if enabled
    if (playSound && audioRef.current) {
      // Reset audio to start position to allow rapid clicks
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.warn('Audio playback failed:', err);
      });
    }
    
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = badgeRef.current?.getBoundingClientRect();
    const size = Math.max(rect?.width || 0, rect?.height || 0);
    const x = e.clientX - (rect?.left || 0) - size / 2;
    const y = e.clientY - (rect?.top || 0) - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.backgroundColor = rippleColors[color];
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.opacity = '0.4';
    ripple.style.animation = 'ripple 600ms linear';
    ripple.style.pointerEvents = 'none';

    badgeRef.current?.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <span
      ref={badgeRef}
      onClick={handleClick}
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center
        rounded-full font-medium text-white cursor-pointer select-none
        ${colorGradientClasses[color]}
        ${colorGlowClasses[color]}
        ${sizeClasses[size]}
        ring-1 ring-white/20
        backdrop-blur-sm
        transition-all duration-300 ease-in-out
        hover:brightness-110 hover:scale-105 active:scale-95
        whitespace-nowrap
        ${size === 'sm' ? 'shadow-sm' : 'shadow-md'}
      `}
    >
      {label}
    </span>
  );
};