import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
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
  render: function Shortcuts() {
    const { t } = useTranslation()
    return (
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
            {t('kbd.macOS')}
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
            {t('kbd.windows')}
          </p>
          <KbdShortcut keys={['ctrl', 'K']} platform='windows' />
          <KbdShortcut keys={['ctrl', 'shift', 'P']} platform='windows' />
          <KbdShortcut keys={['alt', 'backspace']} platform='windows' />
          <KbdShortcut keys={['ctrl', 'tab']} platform='windows' />
        </div>
      </div>
    )
  },
}

export const InButton: Story = {
  render: function InButton() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Button variant='secondary'>
          {t('common.submit')} <Kbd>↵</Kbd>
        </Button>
        <Button variant='ghost'>
          {t('common.cancel')} <Kbd>Esc</Kbd>
        </Button>
      </div>
    )
  },
}

export const InInput: Story = {
  render: function InInput() {
    const { t } = useTranslation()
    return (
      <Input
        placeholder={t('input.search')}
        endSlot={
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        }
        style={{ width: 260 }}
      />
    )
  },
}

export const InTooltip: Story = {
  render: function InTooltip() {
    const { t } = useTranslation()
    return (
      <TooltipProvider>
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          <TooltipRoot>
            <TooltipTrigger
              render={<Button variant='ghost'>{t('kbd.save')}</Button>}
            />
            <TooltipContent style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {t('common.saveChanges')}
              <KbdShortcut keys={['cmd', 'S']} />
            </TooltipContent>
          </TooltipRoot>
          <TooltipRoot>
            <TooltipTrigger
              render={<Button variant='ghost'>{t('kbd.print')}</Button>}
            />
            <TooltipContent>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </TooltipContent>
          </TooltipRoot>
          <TooltipRoot>
            <TooltipTrigger
              render={
                <Button variant='ghost'>{t('kbd.commandPalette')}</Button>
              }
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
    )
  },
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
