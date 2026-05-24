import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tooltip } from './index'

export default {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-bg)',
          cursor: 'pointer',
        }}
        aria-label='Settings'
      >
        ⚙
      </Tooltip.Trigger>
      <Tooltip.Content>Settings</Tooltip.Content>
    </Tooltip.Root>
  ),
}

export const Placement: Story = {
  render: () => (
    <Tooltip.Provider>
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          padding: 40,
          justifyContent: 'center',
        }}
      >
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <Tooltip.Root key={side}>
            <Tooltip.Trigger
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 32,
                padding: '0 var(--space-3)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)',
              }}
              aria-label={side}
            >
              {side}
            </Tooltip.Trigger>
            <Tooltip.Content side={side}>Appears on {side}</Tooltip.Content>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  ),
}

export const NoArrow: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
          padding: '0 var(--space-3)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-bg)',
          cursor: 'pointer',
          fontSize: 'var(--font-size-sm)',
        }}
        aria-label='Delete item'
      >
        Delete
      </Tooltip.Trigger>
      <Tooltip.Content arrow={false}>
        This action cannot be undone
      </Tooltip.Content>
    </Tooltip.Root>
  ),
}

export const MultipleTooltips: Story = {
  render: () => (
    <Tooltip.Provider>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        {['Bold', 'Italic', 'Underline'].map((label) => (
          <Tooltip.Root key={label}>
            <Tooltip.Trigger
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
              }}
              aria-label={label}
            >
              {label[0]}
            </Tooltip.Trigger>
            <Tooltip.Content>{label}</Tooltip.Content>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  ),
}

const toolbarItems = [
  { label: 'Listen to audio preview', icon: '🎧' },
  { label: 'Set a timer', icon: '⏱' },
  { label: 'Delete: cannot be undone', icon: '🗑' },
]

const triggerStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  background: 'var(--color-bg)',
  cursor: 'pointer',
  fontSize: 16,
}

export const AnimatedContent: Story = {
  render: () => (
    <Tooltip.Provider animated>
      <div style={{ display: 'flex', gap: 'var(--space-1)', paddingBlock: 48 }}>
        {toolbarItems.map((item) => (
          <Tooltip.Trigger
            key={item.label}
            style={triggerStyle}
            payload={item.label}
            aria-label={item.label}
          >
            {item.icon}
          </Tooltip.Trigger>
        ))}
      </div>
    </Tooltip.Provider>
  ),
}
