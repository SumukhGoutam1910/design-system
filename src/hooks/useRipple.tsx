import { useRef } from 'react';

export const useRipple = (rippleColor = 'rgba(255,255,255,0.4)') => {
  const rippleRef = useRef<HTMLSpanElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    ripple.style.background = rippleColor;
    ripple.className = 'ripple';

    const container = rippleRef.current;
    if (container) {
      container.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    // 👇 Play sound
    const clickSound = new Audio('/sounds/click.mp3');
    clickSound.volume = 0.4;
    clickSound.play();
  };

  return { rippleRef, createRipple };
};
