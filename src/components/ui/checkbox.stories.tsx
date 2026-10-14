import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Checkbox } from './checkbox';
import { Label } from './label';

/**
 * `Checkbox` is a Radix-controlled checkbox supporting `checked` / `defaultChecked`
 * and the tri-state `"indeterminate"` value.
 */
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { disabled: false },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Indeterminate: Story = { args: { checked: 'indeterminate' } };

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const ToggleInteraction: Story = {
  name: 'Interaction: toggles on click',
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="toggle-me" />
      <Label htmlFor="toggle-me">Toggle me</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};
