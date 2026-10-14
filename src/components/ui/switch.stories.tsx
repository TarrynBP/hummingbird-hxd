import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Label } from './label';
import { Switch } from './switch';

/**
 * `Switch` is a Radix toggle for binary on/off settings. Prefer it over a
 * checkbox when the change takes effect immediately.
 */
const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { disabled: false },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="airplane" />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
};

export const ToggleInteraction: Story = {
  name: 'Interaction: toggles state',
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="toggle-switch" />
      <Label htmlFor="toggle-switch">Enabled</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch');
    await expect(toggle).not.toBeChecked();
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
  },
};
