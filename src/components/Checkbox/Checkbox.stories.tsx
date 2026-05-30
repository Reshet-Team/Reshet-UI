import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return (
      <Checkbox label={t({ en: 'Enable notifications', he: 'הפעל התראות' })} />
    )
  },
}

export const Checked: Story = {
  render: function Checked() {
    const t = useT()
    return (
      <Checkbox
        label={t({ en: 'Checked by default', he: 'מסומן כברירת מחדל' })}
        defaultChecked
      />
    )
  },
}

export const Indeterminate: Story = {
  render: function Indeterminate() {
    const t = useT()
    return (
      <Checkbox label={t({ en: 'Select all', he: 'בחר הכל' })} indeterminate />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return <Checkbox label={t({ en: 'Disabled', he: 'מושבת' })} disabled />
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const t = useT()
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
          label={t({ en: 'Small', he: 'קטן' })}
          defaultChecked
        />
        <Checkbox
          size='md'
          label={t({ en: 'Medium', he: 'בינוני' })}
          defaultChecked
        />
        <Checkbox
          size='lg'
          label={t({ en: 'Large', he: 'גדול' })}
          defaultChecked
        />
      </div>
    )
  },
}

export const WithDescription: Story = {
  render: function WithDescription() {
    const t = useT()
    return (
      <Checkbox
        label={t({ en: 'Marketing emails', he: 'מיילים שיווקיים' })}
        description={t({
          en: 'Receive updates about new products and features.',
          he: 'קבל עדכונים על מוצרים ותכונות חדשות.',
        })}
      />
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
        }}
      >
        <Checkbox label={t({ en: 'Unchecked', he: 'לא מסומן' })} />
        <Checkbox label={t({ en: 'Checked', he: 'מסומן' })} defaultChecked />
        <Checkbox
          label={t({ en: 'Indeterminate', he: 'חלקי' })}
          indeterminate
        />
        <Checkbox label={t({ en: 'Disabled', he: 'מושבת' })} disabled />
        <Checkbox
          label={t({ en: 'Disabled checked', he: 'מושבת ומסומן' })}
          defaultChecked
          disabled
        />
        <Checkbox
          label={t({ en: 'Disabled indeterminate', he: 'מושבת וחלקי' })}
          indeterminate
          disabled
        />
      </div>
    )
  },
}

export const SelectAll: Story = {
  render: function SelectAll() {
    const t = useT()
    const options = [
      t({ en: 'Option A', he: 'אפשרות א' }),
      t({ en: 'Option B', he: 'אפשרות ב' }),
      t({ en: 'Option C', he: 'אפשרות ג' }),
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
          label={t({ en: 'Select all', he: 'בחר הכל' })}
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
