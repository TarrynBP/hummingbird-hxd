import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './slider';

/**
 * `Slider` is a Radix range input. Pass `defaultValue` for a single or multi-thumb
 * range, and `min`/`max`/`step` to constrain the values.
 */
const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-80 py-4">
        <Story />
      </div>
    ),
  ],
  args: { defaultValue: [50], max: 100, step: 1, disabled: false },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Range: Story = { args: { defaultValue: [25, 75] } };

export const Disabled: Story = { args: { disabled: true } };
