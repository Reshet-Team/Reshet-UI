import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  AnimatedTooltipProvider,
} from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: TooltipRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TooltipRoot>

type Story = StoryObj<typeof TooltipRoot>

export const Default: Story = {
  render: () => (
    <TooltipRoot>
      <TooltipTrigger
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
      </TooltipTrigger>
      <TooltipContent>Settings</TooltipContent>
    </TooltipRoot>
  ),
}

export const Placement: Story = {
  render: () => (
    <TooltipProvider>
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          padding: 40,
          justifyContent: 'center',
        }}
      >
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <TooltipRoot key={side}>
            <TooltipTrigger
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
            </TooltipTrigger>
            <TooltipContent side={side}>Appears on {side}</TooltipContent>
          </TooltipRoot>
        ))}
      </div>
    </TooltipProvider>
  ),
}

export const NoArrow: Story = {
  render: () => (
    <TooltipRoot>
      <TooltipTrigger
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
      </TooltipTrigger>
      <TooltipContent arrow={false}>
        This action cannot be undone
      </TooltipContent>
    </TooltipRoot>
  ),
}

export const MultipleTooltips: Story = {
  render: () => (
    <TooltipProvider>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        {['Bold', 'Italic', 'Underline'].map((label) => (
          <TooltipRoot key={label}>
            <TooltipTrigger
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
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </TooltipRoot>
        ))}
      </div>
    </TooltipProvider>
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
    <AnimatedTooltipProvider>
      <div style={{ display: 'flex', gap: 'var(--space-1)', paddingBlock: 48 }}>
        {toolbarItems.map((item) => (
          <TooltipTrigger
            key={item.label}
            style={triggerStyle}
            payload={item.label}
            aria-label={item.label}
          >
            {item.icon}
          </TooltipTrigger>
        ))}
      </div>
    </AnimatedTooltipProvider>
  ),
}
