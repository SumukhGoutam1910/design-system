import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { useRef } from 'react';

const meta: Meta<typeof ScrollProgressBar> = {
  title: 'Navigation/ScrollProgressBar',
  component: ScrollProgressBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollProgressBar>;

const LongContent = () => (
  <div className="space-y-4">
    {Array.from({ length: 15 }).map((_, i) => (
      <p key={i} className="text-gray-900 dark:text-white p-4">
        Scrollable content section {i + 1}...
      </p>
    ))}
  </div>
);

export const Default: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    return (
      <div 
        ref={containerRef}
        className="bg-white dark:bg-gray-900 p-8 rounded-lg h-96 overflow-y-auto relative"
      >
        <ScrollProgressBar containerRef={containerRef} color="bg-blue-500" />
        <LongContent />
      </div>
    );
  },
};