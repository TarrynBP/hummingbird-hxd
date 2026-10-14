import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './badge';

/**
 * `Badge` is a small status/label pill. Use it to communicate category, state or
 * counts inline with content.
 */
const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  args: { children: 'Badge', variant: 'default' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge {...args} variant="default">Default</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
      <Badge {...args} variant="destructive">Destructive</Badge>
      <Badge {...args} variant="outline">Outline</Badge>
    </div>
  ),
};

export const LongText: Story = {
  args: { children: 'Awaiting payment confirmation' },
};
