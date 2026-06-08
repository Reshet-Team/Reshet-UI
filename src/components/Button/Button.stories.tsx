import { Spinner } from '@/components/Spinner/Spinner'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './Button'

export default {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'clear', 'link'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'radio',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'icon-xs',
        'icon-sm',
        'icon',
        'icon-lg',
      ],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
}

export const Clear: Story = {
  args: {
    variant: 'clear',
    children: 'Clear',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
        }}
      >
        <Button size='xs'>{t('common.extraSmall')}</Button>
        <Button size='sm'>{t('common.small')}</Button>
        <Button size='md'>{t('common.medium')}</Button>
        <Button size='lg'>{t('common.large')}</Button>
      </div>
    )
  },
}

export const IconSizes: Story = {
  render: function IconSizes() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
        }}
      >
        <Button size='icon-xs' aria-label='icon-xs'>
          <svg width='10' height='10' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
          </svg>
        </Button>
        <Button size='icon-sm' aria-label='icon-sm'>
          <svg width='12' height='12' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
          </svg>
        </Button>
        <Button size='icon' aria-label='icon'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
          </svg>
        </Button>
        <Button size='icon-lg' aria-label='icon-lg'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
          </svg>
        </Button>
      </div>
    )
  },
}

export const Loading: Story = {
  render: function Loading() {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)

    function handleClick() {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }

    return (
      <Button disabled={loading} onClick={handleClick}>
        {loading && <Spinner size='sm' color='inline' />}
        {loading ? t('button.saving') : t('button.saveChanges')}
      </Button>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <Button variant='primary'>{t('common.primary')}</Button>
        <Button variant='secondary'>{t('common.secondary')}</Button>
        <Button variant='ghost'>{t('common.ghost')}</Button>
        <Button variant='danger'>{t('button.danger')}</Button>
        <Button variant='clear'>{t('button.clear')}</Button>
        <Button variant='link'>{t('common.link')}</Button>
        <Button variant='primary' disabled>
          {t('common.disabled')}
        </Button>
      </div>
    )
  },
}
