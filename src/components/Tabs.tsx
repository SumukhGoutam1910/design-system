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

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex space-x-4 border-b border-white/20 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 font-semibold transition-all duration-300 relative
              ${
                index === activeIndex
                  ? 'text-white'
                  : 'text-white/50 hover:text-white'
              }`}
          >
            {tab.label}
            {index === activeIndex && (
              <span
                className="absolute left-0 -bottom-[1px] h-[3px] w-full bg-gradient-to-r from-primary to-secondary rounded-full animate-slide-in"
              ></span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 text-white bg-white/5 rounded-xl shadow-inner backdrop-blur-md transition-all duration-500">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
