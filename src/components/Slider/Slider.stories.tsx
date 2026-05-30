import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import { Slider } from './Slider'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <Slider label={t({ en: 'Volume', he: 'עוצמת קול' })} defaultValue={25} />
    )
  },
}

export const WithValue: Story = {
  render: function WithValue() {
    const t = useT()
    return (
      <Slider label={t({ en: 'Brightness', he: 'בהירות' })} defaultValue={60} />
    )
  },
}

export const Range: Story = {
  render: function Range() {
    const t = useT()
    return (
      <Slider
        label={t({ en: 'Price range', he: 'טווח מחירים' })}
        defaultValue={[20, 80]}
      />
    )
  },
}

export const NoLabel: Story = {
  args: {
    defaultValue: 40,
    showValue: false,
  },
}

export const Steps: Story = {
  render: function Steps() {
    const t = useT()
    return (
      <Slider
        label={t({ en: 'Rating', he: 'דירוג' })}
        defaultValue={3}
        min={1}
        max={5}
        step={1}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <Slider
        label={t({ en: 'Disabled', he: 'מושבת' })}
        defaultValue={40}
        disabled
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
          gap: 'var(--space-8)',
        }}
      >
        <Slider
          label={t({ en: 'Default', he: 'ברירת מחדל' })}
          defaultValue={30}
        />
        <Slider
          label={t({ en: 'Range', he: 'טווח' })}
          defaultValue={[20, 70]}
        />
        <Slider
          label={t({ en: 'Steps (1–5)', he: 'שלבים (1–5)' })}
          defaultValue={3}
          min={1}
          max={5}
          step={1}
        />
        <Slider
          label={t({ en: 'No value display', he: 'ללא תצוגת ערך' })}
          defaultValue={50}
          showValue={false}
        />
        <Slider
          label={t({ en: 'Disabled', he: 'מושבת' })}
          defaultValue={40}
          disabled
        />
      </div>
    )
  },
}
