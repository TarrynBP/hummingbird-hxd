import type { Meta, StoryObj } from '@storybook/react-vite';

import { Progress } from './progress';
import { Separator } from './separator';

/**
 * `Progress` is a determinate progress bar. Pass the completion as `value`
 * (0–100).
 */
const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  args: { value: 60 },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = { args: { value: 0 } };

export const Complete: Story = { args: { value: 100 } };

export const WithSeparator: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Progress {...args} />
      <Separator />
      <Progress {...args} value={30} />
    </div>
  ),
};
