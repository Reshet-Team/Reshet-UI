import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { FieldControl, FieldDescription, FieldError, FieldLabel, FieldRoot } from '../Field/Field'
import { FieldsetLegend, FieldsetRoot } from './Fieldset'

export default {
  title: 'Forms/Fieldset',
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
      <div style={{ width: 320 }}>
        <FieldsetRoot>
          <FieldsetLegend>{t('fieldset.billingDetails')}</FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t('fieldset.company')}</FieldLabel>
            <FieldControl placeholder={t('fieldset.enterCompanyName')} />
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t('fieldset.taxId')}</FieldLabel>
            <FieldControl placeholder={t('fieldset.enterTaxId')} />
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot>
          <FieldsetLegend>{t('fieldset.account')}</FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t('fieldset.fullName')}</FieldLabel>
            <FieldControl placeholder={t('fieldset.namePlaceholder')} />
            <FieldDescription>{t('fieldset.shownPublicProfile')}</FieldDescription>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t('common.email')}</FieldLabel>
            <FieldControl type='email' placeholder={t('field.enterYourEmail')} />
            <FieldDescription>{t('fieldset.loginNotifications')}</FieldDescription>
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: function WithValidation() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot>
          <FieldsetLegend>{t('empty.createAccount')}</FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t('field.username')}</FieldLabel>
            <FieldControl required placeholder={t('field.required')} />
            <FieldError match='valueMissing'>{t('field.usernameRequired')}</FieldError>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t('field.password')}</FieldLabel>
            <FieldControl required type='password' placeholder={t('field.required')} />
            <FieldError match='valueMissing'>{t('field.passwordRequired')}</FieldError>
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot disabled>
          <FieldsetLegend>{t('fieldset.shippingAddress')}</FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t('fieldset.street')}</FieldLabel>
            <FieldControl defaultValue='123 Main St' />
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t('fieldset.city')}</FieldLabel>
            <FieldControl defaultValue='Springfield' />
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}
