import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './label';

/**
 * `Label` is an accessible form label built on Radix's `Label` primitive. It
 * automatically wires the `disabled`/`peer` styling states of its control.
 */
const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { children: 'Field label' },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { children: 'Email address *' },
};

export const DisabledPeer: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <input id="peer-input" className="peer h-10 rounded-md border px-3 disabled:opacity-50" disabled />
      <Label {...args} htmlFor="peer-input">Disabled control label</Label>
    </div>
  ),
};
