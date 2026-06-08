import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { Input } from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

const SearchIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <circle cx='6.5' cy='6.5' r='4' />
    <path d='M10 10l3 3' strokeLinecap='round' />
  </svg>
)

const LockIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <rect x='3' y='7' width='10' height='7' rx='1.5' />
    <path d='M5 7V5a3 3 0 016 0v2' strokeLinecap='round' />
  </svg>
)

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return <Input placeholder={t('input.enterText')} />
  },
}

export const WithStartSlot: Story = {
  render: function WithStartSlot() {
    const { t } = useTranslation()
    return <Input startSlot={<SearchIcon />} placeholder={t('input.search')} />
  },
}

export const WithEndSlot: Story = {
  render: function WithEndSlot() {
    const { t } = useTranslation()
    return (
      <Input
        endSlot={<LockIcon />}
        placeholder={t('input.password')}
        type='password'
      />
    )
  },
}

export const WithBothSlots: Story = {
  render: function WithBothSlots() {
    const { t } = useTranslation()
    return (
      <Input
        startSlot={<SearchIcon />}
        endSlot={<LockIcon />}
        placeholder={t('input.bothSlots')}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return <Input placeholder={t('field.notEditable')} disabled />
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Input
          size='sm'
          startSlot={<SearchIcon />}
          placeholder={t('common.small')}
        />
        <Input
          size='md'
          startSlot={<SearchIcon />}
          placeholder={t('common.medium')}
        />
        <Input
          size='lg'
          startSlot={<SearchIcon />}
          placeholder={t('common.large')}
        />
      </div>
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
          maxWidth: 320,
        }}
      >
        <Input placeholder={t('input.noSlots')} />
        <Input startSlot={<SearchIcon />} placeholder={t('input.startSlot')} />
        <Input endSlot={<LockIcon />} placeholder={t('input.endSlot')} />
        <Input
          startSlot={<SearchIcon />}
          endSlot={<LockIcon />}
          placeholder={t('input.bothSlots')}
        />
        <Input placeholder={t('common.disabled')} disabled />
      </div>
    )
  },
}
