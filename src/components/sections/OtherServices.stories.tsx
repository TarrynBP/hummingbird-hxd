import type { Meta, StoryObj } from '@storybook/react-vite';
import OtherServices from './OtherServices';

const meta = {
  title: 'Sections/OtherServices',
  component: OtherServices,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OtherServices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
