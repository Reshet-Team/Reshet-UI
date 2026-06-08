import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import {
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from './Popover'

export default {
  title: 'Overlays/Popover',
  component: PopoverRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PopoverRoot>

type Story = StoryObj<typeof PopoverRoot>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <PopoverRoot>
        <PopoverTrigger>{t('popover.notifications')}</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>{t('popover.notifications')}</PopoverTitle>
          <PopoverDescription>
            {t('popover.notificationsDesc')}
          </PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const WithClose: Story = {
  render: function WithClose() {
    const { t } = useTranslation()
    return (
      <PopoverRoot>
        <PopoverTrigger>{t('popover.openPopover')}</PopoverTrigger>
        <PopoverContent>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <PopoverTitle>{t('common.settings')}</PopoverTitle>
            <PopoverClose aria-label={t('common.close')}>✕</PopoverClose>
          </div>
          <PopoverDescription>
            {t('popover.manageNotifPrefs')}
          </PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const TopPlacement: Story = {
  render: function TopPlacement() {
    const { t } = useTranslation()
    return (
      <div style={{ paddingTop: 80 }}>
        <PopoverRoot>
          <PopoverTrigger>{t('drawer.openAbove')}</PopoverTrigger>
          <PopoverContent side='top'>
            <PopoverTitle>{t('popover.topPopover')}</PopoverTitle>
            <PopoverDescription>{t('popover.appearsAbove')}</PopoverDescription>
          </PopoverContent>
        </PopoverRoot>
      </div>
    )
  },
}

export const NoArrow: Story = {
  render: function NoArrow() {
    const { t } = useTranslation()
    return (
      <PopoverRoot>
        <PopoverTrigger>{t('popover.noArrow')}</PopoverTrigger>
        <PopoverContent arrow={false}>
          <PopoverTitle>{t('popover.cleanPopover')}</PopoverTitle>
          <PopoverDescription>{t('popover.noArrowDesc')}</PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const MultiplePopovers: Story = {
  render: function MultiplePopovers() {
    const { t } = useTranslation()
    const tools = [
      {
        id: 'font',
        label: t('menu.fontMenu'),
        title: t('popover.fontSettings'),
        description: t('popover.fontDesc'),
      },
      {
        id: 'color',
        label: t('popover.color'),
        title: t('popover.colorPalette'),
        description: t('popover.colorDesc'),
      },
      {
        id: 'layout',
        label: t('menu.layout'),
        title: t('menu.pageLayout'),
        description: t('popover.layoutDesc'),
      },
    ]
    return (
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
    )
  },
}
