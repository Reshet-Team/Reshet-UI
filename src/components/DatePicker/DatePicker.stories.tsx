import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import DatePicker, { type DateRangeValue } from './DatePicker'

export default {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>

type Story = StoryObj<typeof DatePicker>

export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(null)
    return <DatePicker mode='single' value={value} onChange={setValue} />
  },
}

export const SingleWithValue: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date())
    return <DatePicker mode='single' value={value} onChange={setValue} />
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<DateRangeValue | null>(null)
    return <DatePicker mode='range' value={value} onChange={setValue} />
  },
}
