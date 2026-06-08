import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from './Field'

export default {
  title: 'Forms/Field',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot>
          <FieldLabel>{t('field.emailAddress')}</FieldLabel>
          <FieldControl type='email' placeholder={t('field.enterYourEmail')} />
          <FieldDescription>{t('field.emailNeverShared')}</FieldDescription>
        </FieldRoot>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: function WithValidation() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot>
          <FieldLabel>{t('field.username')}</FieldLabel>
          <FieldControl required placeholder={t('field.required')} />
          <FieldDescription>{t('field.chooseUsername')}</FieldDescription>
          <FieldError match='valueMissing'>
            {t('field.usernameRequired')}
          </FieldError>
        </FieldRoot>
      </div>
    )
  },
}

export const Invalid: Story = {
  render: function Invalid() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot invalid>
          <FieldLabel>{t('field.password')}</FieldLabel>
          <FieldControl type='password' defaultValue='short' />
          <FieldError match>{t('field.minChars')}</FieldError>
        </FieldRoot>
      </div>
    )
  },
}

export const Indicators: Story = {
  render: function Indicators() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
          width: 280,
        }}
      >
        <FieldRoot>
          <FieldLabel indicator='required'>{t('fieldset.fullName')}</FieldLabel>
          <FieldControl required placeholder={t('fieldset.namePlaceholder')} />
        </FieldRoot>
        <FieldRoot>
          <FieldLabel indicator='optional'>{t('fieldset.nickname')}</FieldLabel>
          <FieldControl placeholder={t('fieldset.egJay')} />
          <FieldDescription>{t('field.shownPublicly')}</FieldDescription>
        </FieldRoot>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot disabled>
          <FieldLabel>{t('field.accountId')}</FieldLabel>
          <FieldControl defaultValue='acc_1234567890' />
          <FieldDescription>{t('field.accountIdDesc')}</FieldDescription>
        </FieldRoot>
      </div>
    )
  },
}
