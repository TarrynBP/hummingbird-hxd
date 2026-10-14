import type { Meta, StoryObj } from '@storybook/react-vite';
import CTA from './CTA';

const meta = {
  title: 'Sections/CTA',
  component: CTA,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
