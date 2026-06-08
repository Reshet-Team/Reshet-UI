import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    return (
      <Progress value={40}>
        <Progress.Header>
          <Progress.Label>{t('progress.uploading')}</Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>
    )
  },
}

export const Complete: Story = {
  render: function Complete() {
    const { t } = useTranslation()
    return (
      <Progress value={100}>
        <Progress.Header>
          <Progress.Label>{t('progress.uploadComplete')}</Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>
    )
  },
}

export const Indeterminate: Story = {
  render: function Indeterminate() {
    const { t } = useTranslation()
    return (
      <Progress value={null}>
        <Progress.Header>
          <Progress.Label>{t('progress.loading')}</Progress.Label>
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
    const { t } = useTranslation()
    return (
      <Progress
        value={3}
        max={12}
        format={{ style: 'unit', unit: 'megabyte', maximumFractionDigits: 0 }}
      >
        <Progress.Header>
          <Progress.Label>{t('progress.installing')}</Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
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
            <Progress.Label>{t('progress.progressing')}</Progress.Label>
            <Progress.Value />
          </Progress.Header>
          <Progress.Track />
        </Progress>

        <Progress value={100}>
          <Progress.Header>
            <Progress.Label>{t('progress.complete')}</Progress.Label>
            <Progress.Value />
          </Progress.Header>
          <Progress.Track />
        </Progress>

        <Progress value={null}>
          <Progress.Header>
            <Progress.Label>{t('progress.indeterminate')}</Progress.Label>
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
