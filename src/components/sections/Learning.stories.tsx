import type { Meta, StoryObj } from '@storybook/react-vite';
import Learning from './Learning';

const meta = {
  title: 'Sections/Learning',
  component: Learning,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Learning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
