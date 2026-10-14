import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

/**
 * `Tabs` switches between panels of related content. Compose `TabsList`,
 * `TabsTrigger` and `TabsContent` inside the `Tabs` root.
 */
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account settings here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
      </TabsList>
      <TabsContent value="account">The disabled tab cannot be activated.</TabsContent>
    </Tabs>
  ),
};

export const SwitchInteraction: Story = {
  name: 'Interaction: switching tabs',
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account settings here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const password = canvas.getByRole('tab', { name: /password/i });
    await userEvent.click(password);
    await expect(password).toHaveAttribute('data-state', 'active');
    await expect(canvas.getByText(/change your password/i)).toBeVisible();
  },
};
