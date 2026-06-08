import type { Meta, StoryObj } from '@storybook/react'
import { Flame } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AlertDescription, AlertRoot, AlertTitle } from './Alert'

export default {
  title: 'Feedback/Alert',
  component: AlertRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AlertRoot>

type Story = StoryObj<typeof AlertRoot>

export const Info: Story = {
  render: function Info() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='info'>
        <AlertTitle>{t('alert.newFeaturesTitle')}</AlertTitle>
        <AlertDescription>{t('alert.newFeaturesDesc')}</AlertDescription>
      </AlertRoot>
    )
  },
}

export const Warning: Story = {
  render: function Warning() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='warning'>
        <AlertTitle>{t('alert.storageFullTitle')}</AlertTitle>
        <AlertDescription>{t('alert.storageFullDesc')}</AlertDescription>
      </AlertRoot>
    )
  },
}

export const Danger: Story = {
  render: function Danger() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='danger'>
        <AlertTitle>{t('alert.sessionExpiredTitle')}</AlertTitle>
        <AlertDescription>{t('alert.sessionExpiredDesc')}</AlertDescription>
      </AlertRoot>
    )
  },
}

export const Success: Story = {
  render: function Success() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='success'>
        <AlertTitle>{t('alert.changesSavedTitle')}</AlertTitle>
        <AlertDescription>{t('alert.changesSavedDesc')}</AlertDescription>
      </AlertRoot>
    )
  },
}

export const Neutral: Story = {
  render: function Neutral() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='neutral'>
        <AlertTitle>{t('alert.headsUpTitle')}</AlertTitle>
        <AlertDescription>{t('alert.headsUpDesc')}</AlertDescription>
      </AlertRoot>
    )
  },
}

export const CustomIcon: Story = {
  render: function CustomIcon() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='warning' icon={<Flame size={16} aria-hidden />}>
        <AlertTitle>{t('alert.highCpuTitle')}</AlertTitle>
        <AlertDescription>{t('alert.highCpuDesc')}</AlertDescription>
      </AlertRoot>
    )
  },
}

export const TitleOnly: Story = {
  render: function TitleOnly() {
    const { t } = useTranslation()
    return (
      <AlertRoot variant='info'>
        <AlertTitle>{t('alert.pendingVerification')}</AlertTitle>
      </AlertRoot>
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
          gap: 'var(--space-3)',
          maxWidth: '28rem',
        }}
      >
        <AlertRoot variant='info'>
          <AlertTitle>{t('alert.informationalTitle')}</AlertTitle>
          <AlertDescription>{t('alert.informationalDesc')}</AlertDescription>
        </AlertRoot>
        <AlertRoot variant='warning'>
          <AlertTitle>{t('alert.warningTitle')}</AlertTitle>
          <AlertDescription>{t('alert.warningDesc')}</AlertDescription>
        </AlertRoot>
        <AlertRoot variant='danger'>
          <AlertTitle>{t('alert.errorTitle')}</AlertTitle>
          <AlertDescription>{t('alert.errorDesc')}</AlertDescription>
        </AlertRoot>
        <AlertRoot variant='success'>
          <AlertTitle>{t('alert.successTitle')}</AlertTitle>
          <AlertDescription>{t('alert.successDesc')}</AlertDescription>
        </AlertRoot>
        <AlertRoot variant='neutral'>
          <AlertTitle>{t('alert.noteTitle')}</AlertTitle>
          <AlertDescription>{t('alert.noteDesc')}</AlertDescription>
        </AlertRoot>
      </div>
    )
  },
}
