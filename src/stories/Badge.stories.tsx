import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    label: 'Badge',
    size: 'md',
    color: 'primary',
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { color: 'secondary' },
};

export const Success: Story = {
  args: { color: 'success' },
};

export const Error: Story = {
  args: { color: 'error' },
};

export const Warning: Story = {
  args: { color: 'warning' },
};

export const Info: Story = {
  args: { color: 'info' },
};

export const Small: Story = {
  args: { size: 'sm', label: 'Small' },
};

export const Medium: Story = {
  args: { size: 'md', label: 'Medium' },
};

export const Large: Story = {
  args: { size: 'lg', label: 'Large' },
};

export const Clickable: Story = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Badge clicked!'),
  },
};

export const AllVariants = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        (['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map((color) => (
          <Badge 
            key={`${size}-${color}`}
            label={`${color} ${size}`}
            size={size}
            color={color}
          />
        ))
      ))}
    </div>
  ),
};