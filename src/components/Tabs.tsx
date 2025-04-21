import React, { useState } from 'react';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideInAnimation = {
    animation: 'slideIn 300ms ease-out forwards',
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: scaleX(0);
              opacity: 0;
            }
            to {
              transform: scaleX(1);
              opacity: 1;
            }
          }
        `}
      </style>
      
      <div className="flex space-x-4 border-b border-gray-200 dark:border-white/20 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 font-semibold transition-all duration-300 relative
              ${
                index === activeIndex
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white'
              }`}
          >
            {tab.label}
            {index === activeIndex && (
              <span
                className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                style={slideInAnimation}
              ></span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 text-gray-900 dark:text-white bg-gray-100 dark:bg-white/5 rounded-xl shadow-inner backdrop-blur-md transition-all duration-500">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};