import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    label: 'Badge',
    size: 'md',
    color: 'primary',
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: { color: 'secondary' },
};
export const Small: Story = {
  args: { size: 'sm', label: 'Small' },
};
export const Large: Story = {
  args: { size: 'lg', label: 'Large' },
};
