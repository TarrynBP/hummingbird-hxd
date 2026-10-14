import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Input } from './input';
import { Label } from './label';

/**
 * `Card` groups related content into a bordered, elevated surface. Compose it
 * with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` and `CardFooter`.
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Label htmlFor="project-name">Name</Label>
        <Input id="project-name" placeholder="My project" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card>
      <CardContent className="p-6">
        A minimal card using only `CardContent`.
      </CardContent>
    </Card>
  ),
};
