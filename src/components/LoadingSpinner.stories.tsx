import type { Meta, StoryObj } from '@storybook/react-vite';
import LoadingSpinner from './LoadingSpinner';

const meta = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    text: 'Loading...',
    fullScreen: false,
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    fullScreen: { control: 'boolean' },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: 'sm', text: 'Loading' } };

export const Large: Story = { args: { size: 'lg', text: 'Fetching data' } };

export const WithoutText: Story = { args: { text: '' } };

export const FullScreen: Story = {
  args: { fullScreen: true },
  parameters: { layout: 'fullscreen' },
};
