import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import { Meter } from './Meter'

export default {
  title: 'Feedback/Meter',
  component: Meter,
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
} satisfies Meta<typeof Meter>

type Story = StoryObj<typeof Meter>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <Meter value={65}>
        <Meter.Header>
          <Meter.Label>
            {t({ en: 'Storage used', he: 'אחסון בשימוש' })}
          </Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Success: Story = {
  render: function Success() {
    const t = useT()
    return (
      <Meter value={80} color='success'>
        <Meter.Header>
          <Meter.Label>{t({ en: 'Goal reached', he: 'יעד הושג' })}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Warning: Story = {
  render: function Warning() {
    const t = useT()
    return (
      <Meter value={78} color='warning'>
        <Meter.Header>
          <Meter.Label>{t({ en: 'CPU usage', he: 'שימוש ב-CPU' })}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Danger: Story = {
  render: function Danger() {
    const t = useT()
    return (
      <Meter value={92} color='danger'>
        <Meter.Header>
          <Meter.Label>
            {t({ en: 'Disk usage', he: 'שימוש בדיסק' })}
          </Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Formatted: Story = {
  render: function Formatted() {
    const t = useT()
    return (
      <Meter
        value={7.4}
        min={0}
        max={10}
        format={{ style: 'unit', unit: 'gigabyte', maximumFractionDigits: 1 }}
      >
        <Meter.Header>
          <Meter.Label>{t({ en: 'Bandwidth', he: 'רוחב פס' })}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const TrackOnly: Story = {
  render: () => (
    <Meter value={45}>
      <Meter.Track />
    </Meter>
  ),
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    const variants = [
      {
        label: t({ en: 'Default', he: 'ברירת מחדל' }),
        value: 50,
        color: 'default',
      },
      { label: t({ en: 'Success', he: 'הצלחה' }), value: 80, color: 'success' },
      { label: t({ en: 'Warning', he: 'אזהרה' }), value: 70, color: 'warning' },
      { label: t({ en: 'Danger', he: 'סכנה' }), value: 90, color: 'danger' },
    ] as const
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
        }}
      >
        {variants.map(({ label, value, color }) => (
          <Meter key={color} value={value} color={color}>
            <Meter.Header>
              <Meter.Label>{label}</Meter.Label>
              <Meter.Value />
            </Meter.Header>
            <Meter.Track />
          </Meter>
        ))}
      </div>
    )
  },
}
