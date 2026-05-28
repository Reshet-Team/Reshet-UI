import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Calendar from './Calendar'
import type { DateRange } from 'react-day-picker'

export default {
  title: 'Inputs/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>

type Story = StoryObj<typeof Calendar>

export const Single: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>()
    return <Calendar mode='single' selected={selected} onSelect={setSelected} />
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()
    return <Calendar mode='range' selected={range} onSelect={setRange} />
  },
}

export const WithDefaultValue: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date())
    return <Calendar mode='single' selected={selected} onSelect={setSelected} />
  },
}

export const Disabled: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>()
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    return (
      <Calendar
        mode='single'
        selected={selected}
        onSelect={setSelected}
        disabled={{ before: today }}
      />
    )
  },
}
