import type { Meta, StoryObj } from '@storybook/react-vite';
import PageTransition from './PageTransition';

const meta = {
  title: 'Components/PageTransition',
  component: PageTransition,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageTransition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
        Page content that fades and slides into view.
      </div>
    ),
  },
};
