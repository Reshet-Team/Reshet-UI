import type { Meta, StoryObj } from '@storybook/react'
import { CollapsibleTrigger, CollapsiblePanel } from './Collapsible'
import { CollapsibleRoot } from './primitives'

export default {
  title: 'Components/Collapsible',
  tags: ['autodocs'],
} satisfies Meta

type Story = StoryObj

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
