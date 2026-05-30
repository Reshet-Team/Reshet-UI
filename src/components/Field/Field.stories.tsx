import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot>
          <FieldLabel>
            {t({ en: 'Email address', he: 'כתובת אימייל' })}
          </FieldLabel>
          <FieldControl
            type='email'
            placeholder={t({ en: 'you@example.com', he: 'you@example.com' })}
          />
          <FieldDescription>
            {t({
              en: "We'll never share your email.",
              he: 'לעולם לא נשתף את האימייל שלך.',
            })}
          </FieldDescription>
        </FieldRoot>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: function WithValidation() {
    const t = useT()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot>
          <FieldLabel>{t({ en: 'Username', he: 'שם משתמש' })}</FieldLabel>
          <FieldControl
            required
            placeholder={t({ en: 'Required', he: 'שדה חובה' })}
          />
          <FieldDescription>
            {t({ en: 'Choose a unique username.', he: 'בחר שם משתמש ייחודי.' })}
          </FieldDescription>
          <FieldError match='valueMissing'>
            {t({ en: 'Username is required.', he: 'שם המשתמש הוא שדה חובה.' })}
          </FieldError>
        </FieldRoot>
      </div>
    )
  },
}

export const Invalid: Story = {
  render: function Invalid() {
    const t = useT()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot invalid>
          <FieldLabel>{t({ en: 'Password', he: 'סיסמה' })}</FieldLabel>
          <FieldControl type='password' defaultValue='short' />
          <FieldError match>
            {t({
              en: 'Must be at least 8 characters.',
              he: 'חייב להכיל לפחות 8 תווים.',
            })}
          </FieldError>
        </FieldRoot>
      </div>
    )
  },
}

export const Indicators: Story = {
  render: function Indicators() {
    const t = useT()
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
          <FieldLabel indicator='required'>
            {t({ en: 'Full name', he: 'שם מלא' })}
          </FieldLabel>
          <FieldControl
            required
            placeholder={t({ en: 'Jane Smith', he: 'ישראל ישראלי' })}
          />
        </FieldRoot>
        <FieldRoot>
          <FieldLabel indicator='optional'>
            {t({ en: 'Nickname', he: 'כינוי' })}
          </FieldLabel>
          <FieldControl
            placeholder={t({ en: 'e.g. Jay', he: 'לדוגמה: יוסי' })}
          />
          <FieldDescription>
            {t({
              en: 'Shown instead of your full name.',
              he: 'יוצג במקום שמך המלא.',
            })}
          </FieldDescription>
        </FieldRoot>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <div style={{ width: 280 }}>
        <FieldRoot disabled>
          <FieldLabel>{t({ en: 'Account ID', he: 'מזהה חשבון' })}</FieldLabel>
          <FieldControl defaultValue='acc_1234567890' />
          <FieldDescription>
            {t({
              en: 'Your account ID cannot be changed.',
              he: 'לא ניתן לשנות את מזהה החשבון.',
            })}
          </FieldDescription>
        </FieldRoot>
      </div>
    )
  },
}
