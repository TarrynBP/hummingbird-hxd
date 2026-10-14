import type { Meta, StoryObj } from '@storybook/react-vite';
import LoadingScreen from './LoadingScreen';

const meta = {
  title: 'Components/LoadingScreen',
  component: LoadingScreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    progress: 40,
    isVisible: true,
  },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    isVisible: { control: 'boolean' },
  },
} satisfies Meta<typeof LoadingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Connecting: Story = { args: { progress: 10 } };

export const AlmostReady: Story = { args: { progress: 88 } };

export const Complete: Story = { args: { progress: 100 } };

export const Hidden: Story = { args: { isVisible: false } };
