import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    return (
      <Meter value={65}>
        <Meter.Header>
          <Meter.Label>{t('meter.storageUsed')}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Success: Story = {
  render: function Success() {
    const { t } = useTranslation()
    return (
      <Meter value={80} color='success'>
        <Meter.Header>
          <Meter.Label>{t('meter.goalReached')}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Warning: Story = {
  render: function Warning() {
    const { t } = useTranslation()
    return (
      <Meter value={78} color='warning'>
        <Meter.Header>
          <Meter.Label>{t('meter.cpuUsage')}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Danger: Story = {
  render: function Danger() {
    const { t } = useTranslation()
    return (
      <Meter value={92} color='danger'>
        <Meter.Header>
          <Meter.Label>{t('meter.diskUsage')}</Meter.Label>
          <Meter.Value />
        </Meter.Header>
        <Meter.Track />
      </Meter>
    )
  },
}

export const Formatted: Story = {
  render: function Formatted() {
    const { t } = useTranslation()
    return (
      <Meter
        value={7.4}
        min={0}
        max={10}
        format={{ style: 'unit', unit: 'gigabyte', maximumFractionDigits: 1 }}
      >
        <Meter.Header>
          <Meter.Label>{t('meter.bandwidth')}</Meter.Label>
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
    const { t } = useTranslation()
    const variants = [
      { label: t('common.default'), value: 50, color: 'default' },
      { label: t('common.success'), value: 80, color: 'success' },
      { label: t('common.warning'), value: 70, color: 'warning' },
      { label: t('common.danger'), value: 90, color: 'danger' },
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
