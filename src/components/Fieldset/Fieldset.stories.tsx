import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from '../Field/Field'
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
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot>
          <FieldsetLegend>
            {t({ en: 'Billing details', he: 'פרטי חיוב' })}
          </FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Company', he: 'חברה' })}</FieldLabel>
            <FieldControl
              placeholder={t({ en: 'Enter company name', he: 'הכנס שם חברה' })}
            />
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Tax ID', he: 'מספר עוסק' })}</FieldLabel>
            <FieldControl
              placeholder={t({
                en: 'Enter fiscal number',
                he: 'הכנס מספר עוסק',
              })}
            />
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot>
          <FieldsetLegend>{t({ en: 'Account', he: 'חשבון' })}</FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Full name', he: 'שם מלא' })}</FieldLabel>
            <FieldControl
              placeholder={t({ en: 'Jane Smith', he: 'ישראל ישראלי' })}
            />
            <FieldDescription>
              {t({
                en: 'Shown on your public profile.',
                he: 'מוצג בפרופיל הציבורי שלך.',
              })}
            </FieldDescription>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Email', he: 'אימייל' })}</FieldLabel>
            <FieldControl
              type='email'
              placeholder={t({
                en: 'jane@example.com',
                he: 'jane@example.com',
              })}
            />
            <FieldDescription>
              {t({
                en: 'Used for login and notifications.',
                he: 'משמש להתחברות ולהתראות.',
              })}
            </FieldDescription>
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: function WithValidation() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot>
          <FieldsetLegend>
            {t({ en: 'Create account', he: 'יצירת חשבון' })}
          </FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Username', he: 'שם משתמש' })}</FieldLabel>
            <FieldControl
              required
              placeholder={t({ en: 'Required', he: 'שדה חובה' })}
            />
            <FieldError match='valueMissing'>
              {t({
                en: 'Username is required.',
                he: 'שם המשתמש הוא שדה חובה.',
              })}
            </FieldError>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Password', he: 'סיסמה' })}</FieldLabel>
            <FieldControl
              required
              type='password'
              placeholder={t({ en: 'Required', he: 'שדה חובה' })}
            />
            <FieldError match='valueMissing'>
              {t({ en: 'Password is required.', he: 'הסיסמה היא שדה חובה.' })}
            </FieldError>
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <FieldsetRoot disabled>
          <FieldsetLegend>
            {t({ en: 'Shipping address', he: 'כתובת משלוח' })}
          </FieldsetLegend>

          <FieldRoot>
            <FieldLabel>{t({ en: 'Street', he: 'רחוב' })}</FieldLabel>
            <FieldControl defaultValue='123 Main St' />
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>{t({ en: 'City', he: 'עיר' })}</FieldLabel>
            <FieldControl defaultValue='Springfield' />
          </FieldRoot>
        </FieldsetRoot>
      </div>
    )
  },
}
