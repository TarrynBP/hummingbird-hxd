import type { Meta, StoryObj } from '@storybook/react-vite';
import SolutionVisual from './SolutionVisual';

const meta = {
  title: 'Sections/SolutionVisual',
  component: SolutionVisual,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    demoButtonText: 'Explore Demo',
  },
  argTypes: {
    demoButtonText: { control: 'text' },
    figmaEmbedUrl: { control: 'text' },
  },
} satisfies Meta<typeof SolutionVisual>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDemoLink: Story = {
  args: {
    figmaEmbedUrl: 'https://www.figma.com/embed?embed_host=share&url=https://example.com',
    demoButtonText: 'View prototype',
  },
};
