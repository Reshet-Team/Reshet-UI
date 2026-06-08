import type { CalendarDate } from '@internationalized/date'
import { getLocalTimeZone, today } from '@internationalized/date'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    const [value, setValue] = useState<CalendarDate | null>(null)
    return (
      <DateInput
        value={value}
        onChange={setValue}
        label={t('dateInput.date')}
      />
    )
  },
}

export const SingleWithValue: Story = {
  render: function SingleWithValue() {
    const { t } = useTranslation()
    const [value, setValue] = useState<CalendarDate | null>(
      today(getLocalTimeZone()),
    )
    return (
      <DateInput
        value={value}
        onChange={setValue}
        label={t('dateInput.date')}
      />
    )
  },
}

export const Range: Story = {
  render: function Range() {
    const { t } = useTranslation()
    const [value, setValue] = useState<{
      start: CalendarDate
      end: CalendarDate
    } | null>(null)
    return (
      <DateInput
        mode='range'
        value={value}
        onChange={(v) => setValue(v as typeof value)}
        label={t('dateInput.dateRange')}
      />
    )
  },
}

export const RangeInline: Story = {
  render: function RangeInline() {
    const { t } = useTranslation()
    const [value, setValue] = useState<{
      start: CalendarDate
      end: CalendarDate
    } | null>(null)
    return (
      <DateInput
        mode='range-inline'
        value={value}
        onChange={(v) => setValue(v as typeof value)}
        label={t('dateInput.dateRange')}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <DateInput
        value={today(getLocalTimeZone())}
        onChange={() => {}}
        label={t('dateInput.date')}
        isDisabled
      />
    )
  },
}
