import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '../Tooltip/Tooltip'
import { Kbd, KbdGroup, KbdShortcut } from './Kbd'

export default {
  title: 'Display/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Kbd>

type Story = StoryObj<typeof Kbd>

export const Single: Story = {
  args: {
    children: '⌘',
  },
}

export const WithText: Story = {
  args: {
    children: 'Enter',
  },
}

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const Shortcuts: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-fg-subtle)',
            marginBottom: 'var(--space-1)',
          }}
        >
          macOS
        </p>
        <KbdShortcut keys={['cmd', 'K']} platform='mac' />
        <KbdShortcut keys={['cmd', 'shift', 'P']} platform='mac' />
        <KbdShortcut keys={['option', 'backspace']} platform='mac' />
        <KbdShortcut keys={['ctrl', 'tab']} platform='mac' />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-fg-subtle)',
            marginBottom: 'var(--space-1)',
          }}
        >
          Windows
        </p>
        <KbdShortcut keys={['ctrl', 'K']} platform='windows' />
        <KbdShortcut keys={['ctrl', 'shift', 'P']} platform='windows' />
        <KbdShortcut keys={['alt', 'backspace']} platform='windows' />
        <KbdShortcut keys={['ctrl', 'tab']} platform='windows' />
      </div>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Button variant='secondary'>
        Submit <Kbd>↵</Kbd>
      </Button>
      <Button variant='ghost'>
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  ),
}

export const InInput: Story = {
  render: () => (
    <Input
      placeholder='Search…'
      endSlot={
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      }
      style={{ width: 260 }}
    />
  ),
}

export const InTooltip: Story = {
  render: () => (
    <TooltipProvider>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <TooltipRoot>
          <TooltipTrigger render={<Button variant='ghost'>Save</Button>} />
          <TooltipContent style={{ display: 'flex', gap: 'var(--space-2)' }}>
            Save changes
            <KbdShortcut keys={['cmd', 'S']} />
          </TooltipContent>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger render={<Button variant='ghost'>Print</Button>} />
          <TooltipContent>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </TooltipContent>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger
            render={<Button variant='ghost'>Command palette</Button>}
          />
          <TooltipContent>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </TooltipContent>
        </TooltipRoot>
      </div>
    </TooltipProvider>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
      }}
    >
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌥</Kbd>
        <Kbd>⌫</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Escape</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
      </KbdGroup>
    </div>
  ),
}
