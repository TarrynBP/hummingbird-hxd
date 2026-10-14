import type { Meta, StoryObj } from '@storybook/react-vite';
import { Italic } from 'lucide-react';

import { Toggle } from './toggle';

/**
 * `Toggle` is a two-state button. Use it for formatting controls or simple
 * on/off filters that don't need a form value.
 */
const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
  },
  args: { variant: 'default', size: 'default', disabled: false },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <Toggle {...args} variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  args: { children: 'Bookmark' },
};

export const Disabled: Story = {
  render: (args) => (
    <Toggle {...args} disabled aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
};
