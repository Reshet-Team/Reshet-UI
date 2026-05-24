import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Popover } from './index'

export default {
  title: 'Components/Popover',
  tags: ['autodocs'],
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>Notifications</Popover.Trigger>
      <Popover.Content>
        <Popover.Title>Notifications</Popover.Title>
        <Popover.Description>
          You are all caught up. Good job!
        </Popover.Description>
      </Popover.Content>
    </Popover.Root>
  ),
}

export const WithClose: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>Open popover</Popover.Trigger>
      <Popover.Content>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Popover.Title>Settings</Popover.Title>
          <Popover.Close aria-label='Close'>✕</Popover.Close>
        </div>
        <Popover.Description>
          Manage your notification preferences.
        </Popover.Description>
      </Popover.Content>
    </Popover.Root>
  ),
}

export const TopPlacement: Story = {
  render: () => (
    <div style={{ paddingTop: 80 }}>
      <Popover.Root>
        <Popover.Trigger>Open above</Popover.Trigger>
        <Popover.Content side='top'>
          <Popover.Title>Top popover</Popover.Title>
          <Popover.Description>
            This popover appears above the trigger.
          </Popover.Description>
        </Popover.Content>
      </Popover.Root>
    </div>
  ),
}

export const NoArrow: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>No arrow</Popover.Trigger>
      <Popover.Content arrow={false}>
        <Popover.Title>Clean popover</Popover.Title>
        <Popover.Description>
          This popover has no arrow indicator.
        </Popover.Description>
      </Popover.Content>
    </Popover.Root>
  ),
}

const tools = [
  {
    id: 'font',
    label: 'Font',
    title: 'Font settings',
    description: 'Choose a typeface and size for your document.',
  },
  {
    id: 'color',
    label: 'Color',
    title: 'Color palette',
    description: 'Pick an accent color to apply to headings and links.',
  },
  {
    id: 'layout',
    label: 'Layout',
    title: 'Page layout',
    description: 'Adjust margins, columns, and spacing for this page.',
  },
]

export const MultiplePopovers: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-2)',
        paddingBlock: 80,
        justifyContent: 'center',
      }}
    >
      {tools.map((tool) => (
        <Popover.Root key={tool.id}>
          <Popover.Trigger>{tool.label}</Popover.Trigger>
          <Popover.Content>
            <Popover.Title>{tool.title}</Popover.Title>
            <Popover.Description>{tool.description}</Popover.Description>
          </Popover.Content>
        </Popover.Root>
      ))}
    </div>
  ),
}
