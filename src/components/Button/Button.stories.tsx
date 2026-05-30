import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
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
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
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

export const Sizes: Story = {
  render: function Sizes() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
        }}
      >
        <Button size='sm'>{t({ en: 'Small', he: 'קטן' })}</Button>
        <Button size='md'>{t({ en: 'Medium', he: 'בינוני' })}</Button>
        <Button size='lg'>{t({ en: 'Large', he: 'גדול' })}</Button>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <Button variant='primary'>{t({ en: 'Primary', he: 'ראשי' })}</Button>
        <Button variant='secondary'>
          {t({ en: 'Secondary', he: 'משני' })}
        </Button>
        <Button variant='ghost'>{t({ en: 'Ghost', he: 'שקוף' })}</Button>
        <Button variant='danger'>{t({ en: 'Danger', he: 'מסוכן' })}</Button>
        <Button variant='primary' disabled>
          {t({ en: 'Disabled', he: 'מושבת' })}
        </Button>
      </div>
    )
  },
}
