import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Label } from './label';
import { Textarea } from './textarea';

/**
 * `Textarea` is a styled multi-line input for longer free-form content.
 */
const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { disabled: { control: 'boolean' } },
  args: { placeholder: 'Write your message…', disabled: false },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea {...args} id="message" />
    </div>
  ),
};

export const Disabled: Story = { args: { disabled: true, value: 'Read-only content' } };

export const TypingInteraction: Story = {
  name: 'Interaction: typing works',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(/write your message/i);
    await userEvent.type(textarea, 'Multi\nline');
    await expect(textarea).toHaveValue('Multi\nline');
  },
};
