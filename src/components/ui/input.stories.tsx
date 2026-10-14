import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Input } from './input';
import { Label } from './label';

/**
 * `Input` is a styled native `<input>`. Pair it with a `Label` (via `htmlFor`)
 * to provide an accessible name.
 */
const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
  args: { placeholder: 'Enter text…', type: 'text', disabled: false, onChange: fn() },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="email-field">Email</Label>
      <Input {...args} id="email-field" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Disabled: Story = { args: { disabled: true, value: 'Locked value' } };

export const Invalid: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="invalid-field" className="text-destructive">Email</Label>
      <Input {...args} id="invalid-field" aria-invalid aria-describedby="invalid-help" />
      <p id="invalid-help" className="text-sm text-destructive">Please enter a valid email address.</p>
    </div>
  ),
};

export const TypingInteraction: Story = {
  name: 'Interaction: typing updates value',
  args: { onChange: fn(), placeholder: 'Type here' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/type here/i);
    await userEvent.type(input, 'hello');
    await expect(input).toHaveValue('hello');
  },
};
