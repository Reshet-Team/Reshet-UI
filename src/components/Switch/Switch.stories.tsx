import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Switch } from './Switch'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return <Switch label={t('switch.enableNotifications')} />
  },
}

export const Checked: Story = {
  render: function Checked() {
    const { t } = useTranslation()
    return <Switch label={t('switch.enabledByDefault')} defaultChecked />
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch label={t('switch.disabledOff')} disabled />
        <Switch label={t('switch.disabledOn')} defaultChecked disabled />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch size='sm' label={t('common.small')} defaultChecked />
        <Switch size='md' label={t('common.medium')} defaultChecked />
        <Switch size='lg' label={t('common.large')} defaultChecked />
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch label={t('switch.off')} />
        <Switch label={t('switch.on')} defaultChecked />
        <Switch label={t('switch.disabledOff')} disabled />
        <Switch label={t('switch.disabledOn')} defaultChecked disabled />
      </div>
    )
  },
}

export const Controlled: Story = {
  render: function Controlled() {
    const { t } = useTranslation()
    const [checked, setChecked] = React.useState(false)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch
          label={t('switch.darkMode')}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <span
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-subtle)',
          }}
        >
          {checked ? t('switch.darkModeOn') : t('switch.darkModeOff')}
        </span>
      </div>
    )
  },
}
