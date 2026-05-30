import type { CalendarDate } from '@internationalized/date'
import { getLocalTimeZone, today } from '@internationalized/date'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { useT } from '../../../.storybook/locale'
import DateInput from './DateInput'

export default {
  title: 'Inputs/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateInput>

type Story = StoryObj<typeof DateInput>

export const Single: Story = {
  render: function Single() {
    const t = useT()
    const [value, setValue] = useState<CalendarDate | null>(null)
    return (
      <DateInput
        value={value}
        onChange={setValue}
        label={t({ en: 'Date', he: 'תאריך' })}
      />
    )
  },
}

export const SingleWithValue: Story = {
  render: function SingleWithValue() {
    const t = useT()
    const [value, setValue] = useState<CalendarDate | null>(
      today(getLocalTimeZone()),
    )
    return (
      <DateInput
        value={value}
        onChange={setValue}
        label={t({ en: 'Date', he: 'תאריך' })}
      />
    )
  },
}

export const Range: Story = {
  render: function Range() {
    const t = useT()
    const [value, setValue] = useState<{
      start: CalendarDate
      end: CalendarDate
    } | null>(null)
    return (
      <DateInput
        mode='range'
        value={value}
        onChange={(v) => setValue(v as typeof value)}
        label={t({ en: 'Date range', he: 'טווח תאריכים' })}
      />
    )
  },
}

export const RangeInline: Story = {
  render: function RangeInline() {
    const t = useT()
    const [value, setValue] = useState<{
      start: CalendarDate
      end: CalendarDate
    } | null>(null)
    return (
      <DateInput
        mode='range-inline'
        value={value}
        onChange={(v) => setValue(v as typeof value)}
        label={t({ en: 'Date range', he: 'טווח תאריכים' })}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <DateInput
        value={today(getLocalTimeZone())}
        onChange={() => {}}
        label={t({ en: 'Date', he: 'תאריך' })}
        isDisabled
      />
    )
  },
}
