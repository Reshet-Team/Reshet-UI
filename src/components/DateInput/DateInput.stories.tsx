import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import DateInput from './DateInput'
import type { CalendarDate } from '@internationalized/date'
import { today, getLocalTimeZone } from '@internationalized/date'

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
  render: () => {
    const [value, setValue] = useState<CalendarDate | null>(null)
    return <DateInput value={value} onChange={setValue} label='Date' />
  },
}

export const SingleWithValue: Story = {
  render: () => {
    const [value, setValue] = useState<CalendarDate | null>(
      today(getLocalTimeZone()),
    )
    return <DateInput value={value} onChange={setValue} label='Date' />
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<{
      start: CalendarDate
      end: CalendarDate
    } | null>(null)
    return (
      <DateInput
        mode='range'
        value={value}
        onChange={(v) => setValue(v as typeof value)}
        label='Date range'
      />
    )
  },
}

export const RangeInline: Story = {
  render: () => {
    const [value, setValue] = useState<{
      start: CalendarDate
      end: CalendarDate
    } | null>(null)
    return (
      <DateInput
        mode='range-inline'
        value={value}
        onChange={(v) => setValue(v as typeof value)}
        label='Date range'
      />
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <DateInput
      value={today(getLocalTimeZone())}
      onChange={() => {}}
      label='Date'
      isDisabled
    />
  ),
}
