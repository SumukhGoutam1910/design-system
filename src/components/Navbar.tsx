import React, { useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'Tabs', to: 'tabs' },
    { label: 'Badges', to: 'badges' },
    { label: 'Progress', to: 'progress' },
    { label: 'Interactive', to: 'interactive' },
    { label: 'Tokens', to: 'colors' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">Sumukh UI</span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-gray-600 dark:text-white/80 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="!text-primary font-semibold border-b-2 border-primary"
              className="cursor-pointer hover:text-primary dark:hover:text-white transition duration-200 pb-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button 
          className="md:hidden text-gray-600 dark:text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '❌' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 px-4 py-4 space-y-4 border-t border-gray-200 dark:border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="!text-primary font-semibold"
              className="block text-gray-600 dark:text-white/80 hover:text-primary dark:hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};