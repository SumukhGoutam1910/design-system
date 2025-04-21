import type { Meta, StoryObj } from '@storybook/react';
import { ColorTokens } from '../components/ColorTokens';

const meta: Meta<typeof ColorTokens> = {
  title: 'Design System/ColorTokens',
  component: ColorTokens,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorTokens>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};