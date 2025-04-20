import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const BasicTabs: Story = {
  args: {
    tabs: [
      { label: 'Overview', content: <div>Overview content</div> },
      { label: 'Components', content: <div>Component info</div> },
      { label: 'About', content: <div>About you</div> },
    ],
  },
};
