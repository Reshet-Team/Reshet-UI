import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import { Progress } from './Progress'

export default {
  title: 'Feedback/Progress',
  component: Progress,
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
} satisfies Meta<typeof Progress>

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <Progress value={40}>
        <Progress.Header>
          <Progress.Label>
            {t({ en: 'Uploading…', he: 'מעלה…' })}
          </Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>
    )
  },
}

export const Complete: Story = {
  render: function Complete() {
    const t = useT()
    return (
      <Progress value={100}>
        <Progress.Header>
          <Progress.Label>
            {t({ en: 'Upload complete', he: 'ההעלאה הושלמה' })}
          </Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>
    )
  },
}

export const Indeterminate: Story = {
  render: function Indeterminate() {
    const t = useT()
    return (
      <Progress value={null}>
        <Progress.Header>
          <Progress.Label>{t({ en: 'Loading…', he: 'טוען…' })}</Progress.Label>
        </Progress.Header>
        <Progress.Track />
      </Progress>
    )
  },
}

export const TrackOnly: Story = {
  render: () => (
    <Progress value={60}>
      <Progress.Track />
    </Progress>
  ),
}

export const Formatted: Story = {
  render: function Formatted() {
    const t = useT()
    return (
      <Progress
        value={3}
        max={12}
        format={{ style: 'unit', unit: 'megabyte', maximumFractionDigits: 0 }}
      >
        <Progress.Header>
          <Progress.Label>
            {t({ en: 'Installing', he: 'מתקין' })}
          </Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>
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
          gap: 'var(--space-6)',
        }}
      >
        <Progress value={40}>
          <Progress.Header>
            <Progress.Label>
              {t({ en: 'Progressing', he: 'מתקדם' })}
            </Progress.Label>
            <Progress.Value />
          </Progress.Header>
          <Progress.Track />
        </Progress>

        <Progress value={100}>
          <Progress.Header>
            <Progress.Label>
              {t({ en: 'Complete', he: 'הושלם' })}
            </Progress.Label>
            <Progress.Value />
          </Progress.Header>
          <Progress.Track />
        </Progress>

        <Progress value={null}>
          <Progress.Header>
            <Progress.Label>
              {t({ en: 'Indeterminate', he: 'בלתי מוגדר' })}
            </Progress.Label>
          </Progress.Header>
          <Progress.Track />
        </Progress>

        <Progress value={65}>
          <Progress.Track />
        </Progress>
      </div>
    )
  },
}
