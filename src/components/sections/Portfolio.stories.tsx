import type { Meta, StoryObj } from '@storybook/react-vite';
import Portfolio from './Portfolio';

const meta = {
  title: 'Sections/Portfolio',
  component: Portfolio,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Portfolio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
