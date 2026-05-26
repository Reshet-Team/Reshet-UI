import type { Meta, StoryObj } from '@storybook/react'
import {
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsiblePanel,
} from './Collapsible'

export default {
  title: 'Components/Collapsible',
  component: CollapsibleRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CollapsibleRoot>

type Story = StoryObj<typeof CollapsibleRoot>

export const Default: Story = {
  render: () => (
    <CollapsibleRoot style={{ width: 200 }}>
      <CollapsibleTrigger>Recovery keys</CollapsibleTrigger>
      <CollapsiblePanel>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            paddingBlock: 'var(--space-2)',
            paddingInline: 'var(--space-3)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </CollapsibleRoot>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <CollapsibleRoot defaultOpen style={{ width: 200 }}>
      <CollapsibleTrigger>Recovery keys</CollapsibleTrigger>
      <CollapsiblePanel>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            paddingBlock: 'var(--space-2)',
            paddingInline: 'var(--space-3)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </CollapsibleRoot>
  ),
}

export const Disabled: Story = {
  render: () => (
    <CollapsibleRoot style={{ width: 200 }}>
      <CollapsibleTrigger disabled>Recovery keys</CollapsibleTrigger>
      <CollapsiblePanel>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            paddingBlock: 'var(--space-2)',
            paddingInline: 'var(--space-3)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </CollapsibleRoot>
  ),
}
