import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import {
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from './Collapsible'

export default {
  title: 'Navigation/Collapsible',
  component: CollapsibleRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CollapsibleRoot>

type Story = StoryObj<typeof CollapsibleRoot>

const recoveryKeys = [
  'alien-bean-pasta',
  'wild-irish-burrito',
  'horse-battery-staple',
]

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <CollapsibleRoot style={{ width: 200 }}>
        <CollapsibleTrigger>
          {t({ en: 'Recovery keys', he: 'מפתחות שחזור' })}
        </CollapsibleTrigger>
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
            {recoveryKeys.map((key) => (
              <div key={key}>{key}</div>
            ))}
          </div>
        </CollapsiblePanel>
      </CollapsibleRoot>
    )
  },
}

export const DefaultOpen: Story = {
  render: function DefaultOpen() {
    const t = useT()
    return (
      <CollapsibleRoot defaultOpen style={{ width: 200 }}>
        <CollapsibleTrigger>
          {t({ en: 'Recovery keys', he: 'מפתחות שחזור' })}
        </CollapsibleTrigger>
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
            {recoveryKeys.map((key) => (
              <div key={key}>{key}</div>
            ))}
          </div>
        </CollapsiblePanel>
      </CollapsibleRoot>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <CollapsibleRoot style={{ width: 200 }}>
        <CollapsibleTrigger disabled>
          {t({ en: 'Recovery keys', he: 'מפתחות שחזור' })}
        </CollapsibleTrigger>
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
            {recoveryKeys.map((key) => (
              <div key={key}>{key}</div>
            ))}
          </div>
        </CollapsiblePanel>
      </CollapsibleRoot>
    )
  },
}
