import type { Meta, StoryObj } from '@storybook/react';
import { DesignTokens } from '../components/DesignTokens';

const meta: Meta<typeof DesignTokens> = {
  title: 'Design System/DesignTokens',
  component: DesignTokens,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DesignTokens>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};