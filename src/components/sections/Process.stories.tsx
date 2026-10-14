import type { Meta, StoryObj } from '@storybook/react-vite';
import Process from './Process';

const meta = {
  title: 'Sections/Process',
  component: Process,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Process>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
