import React from 'react';

type ProgressBarProps = {
  value: number;
  color?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
};

const colorClasses: Record<string, string> = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color,
  showLabel = true,
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  const getDynamicColor = () => {
    if (clampedValue >= 75) return 'success';
    if (clampedValue >= 40) return 'warning';
    return 'error';
  };

  const finalColor = color ?? getDynamicColor();

  const isGlowing = clampedValue > 90;
  const isComplete = clampedValue === 100;

  return (
    <div className="space-y-1 w-full text-white relative">
      {showLabel && (
        <div className="text-sm text-white/70 font-medium text-right">
          {clampedValue}%
        </div>
      )}

      <div className="w-full bg-neutral-700 rounded-full h-5 overflow-hidden shadow-inner">
        <div
          className={`
            h-full transition-all duration-500 ease-out 
            ${colorClasses[finalColor]}
            ${isGlowing ? 'animate-pulse shadow-lg shadow-white/40' : ''}
          `}
          style={{ width: `${clampedValue}%` }}
        ></div>
      </div>

      {isComplete && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-8 text-green-400 text-sm font-semibold animate-bounce">
          ✅ Completed!
        </div>
      )}
    </div>
  );
};
