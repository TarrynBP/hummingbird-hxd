import type { Meta, StoryObj } from '@storybook/react-vite';
import Values from './Values';

const meta = {
  title: 'Sections/Values',
  component: Values,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Values>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
