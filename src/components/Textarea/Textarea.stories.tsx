import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <Textarea placeholder={t({ en: 'Enter text…', he: 'הכנס טקסט…' })} />
      </div>
    )
  },
}

export const WithRows: Story = {
  render: function WithRows() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <Textarea
          rows={6}
          placeholder={t({ en: 'Tall textarea…', he: 'שדה טקסט גבוה…' })}
        />
      </div>
    )
  },
}

export const Resizable: Story = {
  render: function Resizable() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <Textarea
          resize='vertical'
          placeholder={t({ en: 'Resizable', he: 'ניתן לשינוי גודל' })}
        />
      </div>
    )
  },
}

export const Invalid: Story = {
  render: function Invalid() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <Textarea
          invalid
          defaultValue={t({ en: 'Invalid value', he: 'ערך שגוי' })}
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <div style={{ width: 320 }}>
        <Textarea
          disabled
          placeholder={t({ en: 'Not editable', he: 'לא ניתן לעריכה' })}
        />
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          width: 320,
        }}
      >
        <Textarea placeholder={t({ en: 'Default', he: 'ברירת מחדל' })} />
        <Textarea
          resize='vertical'
          placeholder={t({ en: 'Resizable', he: 'ניתן לשינוי גודל' })}
        />
        <Textarea invalid defaultValue={t({ en: 'Invalid', he: 'שגוי' })} />
        <Textarea disabled placeholder={t({ en: 'Disabled', he: 'מושבת' })} />
      </div>
    )
  },
}
