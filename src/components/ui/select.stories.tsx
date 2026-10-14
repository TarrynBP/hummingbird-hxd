import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

/**
 * `Select` is a Radix listbox for choosing one option from a menu. It is fully
 * keyboard navigable and, unlike a native `<select>`, renders in a portal.
 */
const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select defaultValue="poster">
      <SelectTrigger aria-label="Product type">
        <SelectValue placeholder="Select a product" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="poster">Poster</SelectItem>
        <SelectItem value="banner">Banner</SelectItem>
        <SelectItem value="flyer">Flyer</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <Select>
      <SelectTrigger aria-label="Product type">
        <SelectValue placeholder="Select a product" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="poster">Poster</SelectItem>
        <SelectItem value="banner">Banner</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger aria-label="Product type">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="poster">Poster</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SelectInteraction: Story = {
  name: 'Interaction: choosing an option',
  render: () => (
    <Select>
      <SelectTrigger aria-label="Product type">
        <SelectValue placeholder="Select a product" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="poster">Poster</SelectItem>
        <SelectItem value="banner">Banner</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('combobox'));
    const option = await within(document.body).findByRole('option', { name: /banner/i });
    await userEvent.click(option);
    await expect(canvas.getByRole('combobox')).toHaveTextContent(/banner/i);
  },
};
