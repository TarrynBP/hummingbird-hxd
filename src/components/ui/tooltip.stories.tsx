import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Info } from 'lucide-react';

import { Button } from './button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

/**
 * `Tooltip` shows a short label on hover/focus. The app already wraps the tree in
 * `TooltipProvider`, so stories only need `Tooltip`, `TooltipTrigger` and
 * `TooltipContent`.
 */
const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  ),
};

export const IconTrigger: Story = {
  render: () => (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="More information">
          <Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent>More information</TooltipContent>
    </Tooltip>
  ),
};

export const HoverInteraction: Story = {
  name: 'Interaction: opens on hover',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: /hover me/i });
    await userEvent.hover(trigger);
    await expect(await within(document.body).findByRole('tooltip')).toBeVisible();
  },
};
