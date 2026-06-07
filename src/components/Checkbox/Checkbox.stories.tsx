import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Checkbox } from './Checkbox'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <Checkbox label={t('checkbox.enableNotifications')} />
    )
  },
}

export const Checked: Story = {
  render: function Checked() {
    const { t } = useTranslation()
    return (
      <Checkbox
        label={t('checkbox.checkedByDefault')}
        defaultChecked
      />
    )
  },
}

export const Indeterminate: Story = {
  render: function Indeterminate() {
    const { t } = useTranslation()
    return (
      <Checkbox label={t('checkbox.selectAll')} indeterminate />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return <Checkbox label={t('common.disabled')} disabled />
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
        <Checkbox
          size='sm'
          label={t('common.small')}
          defaultChecked
        />
        <Checkbox
          size='md'
          label={t('common.medium')}
          defaultChecked
        />
        <Checkbox
          size='lg'
          label={t('common.large')}
          defaultChecked
        />
      </div>
    )
  },
}

export const WithDescription: Story = {
  render: function WithDescription() {
    const { t } = useTranslation()
    return (
      <Checkbox
        label={t('checkbox.marketingEmails')}
        description={t('checkbox.marketingEmailsDesc')}
      />
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
        <Checkbox label={t('checkbox.unchecked')} />
        <Checkbox label={t('checkbox.checked')} defaultChecked />
        <Checkbox
          label={t('checkbox.disabledIndeterminate')}
          indeterminate
        />
        <Checkbox label={t('common.disabled')} disabled />
        <Checkbox
          label={t('checkbox.disabledChecked')}
          defaultChecked
          disabled
        />
        <Checkbox
          label={t('checkbox.disabledIndeterminate')}
          indeterminate
          disabled
        />
      </div>
    )
  },
}

export const SelectAll: Story = {
  render: function SelectAll() {
    const { t } = useTranslation()
    const options = [
      t('menu.optionA'),
      t('menu.optionB'),
      t('menu.optionC'),
    ]
    const [checked, setChecked] = React.useState([false, false, false])
    const allChecked = checked.every(Boolean)
    const someChecked = checked.some(Boolean)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
        }}
      >
        <Checkbox
          label={t('checkbox.selectAll')}
          checked={allChecked}
          indeterminate={someChecked && !allChecked}
          onCheckedChange={(val) => setChecked(checked.map(() => val))}
        />
        {options.map((option, i) => (
          <Checkbox
            key={i}
            label={option}
            checked={checked[i]}
            onCheckedChange={(val) => {
              const next = [...checked]
              next[i] = val
              setChecked(next)
            }}
            wrapperProps={{ style: { paddingInlineStart: 'var(--space-6)' } }}
          />
        ))}
      </div>
    )
  },
}
