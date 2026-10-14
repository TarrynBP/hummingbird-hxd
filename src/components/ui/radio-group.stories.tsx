import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';

/**
 * `RadioGroup` manages a set of `RadioGroupItem`s where exactly one option can be
 * selected. Use it when all options should stay visible.
 */
const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { disabled: false },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
];

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="pro" aria-label="Plan">
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`plan-${o.value}`} />
          <Label htmlFor={`plan-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} disabled defaultValue="starter" aria-label="Plan">
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`disabled-${o.value}`} />
          <Label htmlFor={`disabled-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const SelectInteraction: Story = {
  name: 'Interaction: selecting an option',
  render: (args) => (
    <RadioGroup {...args} defaultValue="starter" aria-label="Plan">
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`pick-${o.value}`} />
          <Label htmlFor={`pick-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pro = canvas.getByLabelText('Pro');
    await userEvent.click(pro);
    await expect(pro).toBeChecked();
  },
};
