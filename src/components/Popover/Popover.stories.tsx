import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
} from './Popover'

export default {
  title: 'Components/Popover',
  component: PopoverRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PopoverRoot>

type Story = StoryObj<typeof PopoverRoot>

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger>Notifications</PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>Notifications</PopoverTitle>
        <PopoverDescription>
          You are all caught up. Good job!
        </PopoverDescription>
      </PopoverContent>
    </PopoverRoot>
  ),
}

export const WithClose: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger>Open popover</PopoverTrigger>
      <PopoverContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <PopoverTitle>Settings</PopoverTitle>
          <PopoverClose aria-label='Close'>✕</PopoverClose>
        </div>
        <PopoverDescription>
          Manage your notification preferences.
        </PopoverDescription>
      </PopoverContent>
    </PopoverRoot>
  ),
}

export const TopPlacement: Story = {
  render: () => (
    <div style={{ paddingTop: 80 }}>
      <PopoverRoot>
        <PopoverTrigger>Open above</PopoverTrigger>
        <PopoverContent side='top'>
          <PopoverTitle>Top popover</PopoverTitle>
          <PopoverDescription>
            This popover appears above the trigger.
          </PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    </div>
  ),
}

export const NoArrow: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger>No arrow</PopoverTrigger>
      <PopoverContent arrow={false}>
        <PopoverTitle>Clean popover</PopoverTitle>
        <PopoverDescription>
          This popover has no arrow indicator.
        </PopoverDescription>
      </PopoverContent>
    </PopoverRoot>
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
        <PopoverRoot key={tool.id}>
          <PopoverTrigger>{tool.label}</PopoverTrigger>
          <PopoverContent>
            <PopoverTitle>{tool.title}</PopoverTitle>
            <PopoverDescription>{tool.description}</PopoverDescription>
          </PopoverContent>
        </PopoverRoot>
      ))}
    </div>
  ),
}
