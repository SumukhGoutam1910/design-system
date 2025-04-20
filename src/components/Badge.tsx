import React from 'react';
import { useRipple } from '../hooks/useRipple';

type BadgeProps = {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
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
  primary: 'rgba(99,102,241,0.4)',     // indigo
  secondary: 'rgba(234,179,8,0.4)',    // amber
  success: 'rgba(16,185,129,0.4)',     // emerald
  error: 'rgba(244,63,94,0.4)',        // rose
  warning: 'rgba(249,115,22,0.4)',     // orange
  info: 'rgba(14,165,233,0.4)',        // sky
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'primary',
  size = 'md',
}) => {
  const { rippleRef, createRipple } = useRipple(rippleColors[color]);

  return (
    <span
      onClick={createRipple}
      ref={rippleRef}
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
