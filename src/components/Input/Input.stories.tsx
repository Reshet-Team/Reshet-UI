import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return <Input placeholder={t({ en: 'Enter text…', he: 'הכנס טקסט…' })} />
  },
}

export const WithStartSlot: Story = {
  render: function WithStartSlot() {
    const t = useT()
    return (
      <Input
        startSlot={<SearchIcon />}
        placeholder={t({ en: 'Search…', he: 'חיפוש…' })}
      />
    )
  },
}

export const WithEndSlot: Story = {
  render: function WithEndSlot() {
    const t = useT()
    return (
      <Input
        endSlot={<LockIcon />}
        placeholder={t({ en: 'Password', he: 'סיסמה' })}
        type='password'
      />
    )
  },
}

export const WithBothSlots: Story = {
  render: function WithBothSlots() {
    const t = useT()
    return (
      <Input
        startSlot={<SearchIcon />}
        endSlot={<LockIcon />}
        placeholder={t({ en: 'Both slots', he: 'שני חריצים' })}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <Input
        placeholder={t({ en: 'Not editable', he: 'לא ניתן לעריכה' })}
        disabled
      />
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const t = useT()
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
          placeholder={t({ en: 'Small', he: 'קטן' })}
        />
        <Input
          size='md'
          startSlot={<SearchIcon />}
          placeholder={t({ en: 'Medium', he: 'בינוני' })}
        />
        <Input
          size='lg'
          startSlot={<SearchIcon />}
          placeholder={t({ en: 'Large', he: 'גדול' })}
        />
      </div>
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
          gap: 'var(--space-3)',
          maxWidth: 320,
        }}
      >
        <Input placeholder={t({ en: 'No slots', he: 'ללא חריצים' })} />
        <Input
          startSlot={<SearchIcon />}
          placeholder={t({ en: 'Start slot', he: 'חריץ התחלה' })}
        />
        <Input
          endSlot={<LockIcon />}
          placeholder={t({ en: 'End slot', he: 'חריץ סוף' })}
        />
        <Input
          startSlot={<SearchIcon />}
          endSlot={<LockIcon />}
          placeholder={t({ en: 'Both slots', he: 'שני חריצים' })}
        />
        <Input placeholder={t({ en: 'Disabled', he: 'מושבת' })} disabled />
      </div>
    )
  },
}
