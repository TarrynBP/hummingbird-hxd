import type { Meta, StoryObj } from '@storybook/react-vite';
import ServiceHero from './ServiceHero';

const meta = {
  title: 'Sections/ServiceHero',
  component: ServiceHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
