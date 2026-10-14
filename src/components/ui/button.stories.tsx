import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Mail, Plus } from 'lucide-react';

import { Button } from './button';

/**
 * `Button` is the primary interactive control. It wraps a native `<button>` and
 * supports six visual variants and four sizes through `class-variance-authority`.
 *
 * Use it for any action triggered by a click. For navigation, pass `asChild` and
 * render an anchor/`Link` so the correct element semantics are preserved.
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Interactive control with `variant` and `size` props. Renders a native button unless `asChild` is set.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style of the button.',
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Padding / height preset.',
    },
    asChild: {
      control: 'boolean',
      description: 'Merge props onto the single child element (e.g. a router `Link`).',
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
    asChild: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon" aria-label="Add">
        <Plus />
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Mail /> Send email
    </Button>
  ),
};

export const LongText: Story = {
  args: { children: 'Continue to the secure checkout and confirm your order' },
  parameters: { viewport: { defaultViewport: 'mobile' } },
};

export const ClickInteraction: Story = {
  name: 'Interaction: click fires handler',
  args: { children: 'Click me', onClick: fn() },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    await step('Button is reachable by accessible role/name', async () => {
      await expect(button).toBeInTheDocument();
    });

    await step('Clicking invokes onClick', async () => {
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalledTimes(1);
    });
  },
};

export const DisabledInteraction: Story = {
  name: 'Interaction: disabled blocks click',
  args: { children: 'Disabled', disabled: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled/i });
    await expect(button).toBeDisabled();
    await userEvent.click(button, { pointerEventsCheck: 0 });
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
