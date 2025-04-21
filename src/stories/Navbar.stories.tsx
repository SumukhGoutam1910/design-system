import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

// Helper component to show scrollable content
const ScrollContent = () => (
  <div className="h-[200vh] pt-20">
    <div id="home" className="h-screen">Home Section</div>
    <div id="tabs" className="h-screen">Tabs Section</div>
    <div id="badges" className="h-screen">Badges Section</div>
    <div id="progress" className="h-screen">Progress Section</div>
    <div id="interactive" className="h-screen">Interactive Section</div>
    <div id="colors" className="h-screen">Colors Section</div>
  </div>
);

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-0 max-h-screen">
        <Story />
        <ScrollContent />
      </div>
    ),
  ],
};