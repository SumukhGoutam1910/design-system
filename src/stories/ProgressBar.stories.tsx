import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../components/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
  args: {
    value: 50,
    showLabel: true,
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    value: 55,
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    value: 80,
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    value: 30,
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    value: 10,
    color: 'error',
  },
};

export const NoLabel: Story = {
  args: {
    value: 60,
    color: 'primary',
    showLabel: false,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    color: 'success',
  },
};

export const AutomaticColor: Story = {
  args: {
    value: 45, // Will automatically choose warning
    showLabel: true,
  },
  render: (args) => <ProgressBar {...args} color={undefined} />,
};