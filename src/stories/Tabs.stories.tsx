import React from 'react';
import { Tabs } from '../components/Tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const commonArgs = {
  tabs: [
    { label: 'Overview', content: <p>This is an overview tab.</p> },
    { label: 'Components', content: <p>This shows your components.</p> },
    { label: 'About You', content: <p>Hi, I'm Sumukh!</p> },
  ],
};

export const Default: Story = {
  args: commonArgs,
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};