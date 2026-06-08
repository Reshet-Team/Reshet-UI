import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { Textarea } from './Textarea'

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea>

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <Textarea placeholder={t('textarea.enterText')} />
      </div>
    )
  },
}

export const WithRows: Story = {
  render: function WithRows() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <Textarea rows={6} placeholder={t('textarea.tallTextarea')} />
      </div>
    )
  },
}

export const Resizable: Story = {
  render: function Resizable() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <Textarea resize='vertical' placeholder={t('textarea.resizable')} />
      </div>
    )
  },
}

export const Invalid: Story = {
  render: function Invalid() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <Textarea invalid defaultValue={t('field.invalid')} />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <Textarea disabled placeholder={t('field.notEditable')} />
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
          width: 320,
        }}
      >
        <Textarea placeholder={t('common.default')} />
        <Textarea resize='vertical' placeholder={t('textarea.resizable')} />
        <Textarea invalid defaultValue={t('field.invalid')} />
        <Textarea disabled placeholder={t('common.disabled')} />
      </div>
    )
  },
}
